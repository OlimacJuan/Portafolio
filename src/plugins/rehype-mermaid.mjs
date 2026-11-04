// Convierte los bloques ```mermaid en <pre class="mermaid"> para que
// Mermaid.js los dibuje en el navegador.
function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

function isMermaid(node) {
  if (node.type !== 'element' || node.tagName !== 'pre') return false;
  const p = node.properties || {};
  if (p.dataLanguage === 'mermaid') return true;
  const code = (node.children || []).find((c) => c.type === 'element' && c.tagName === 'code');
  const cls = code?.properties?.className || [];
  return Array.isArray(cls) ? cls.includes('language-mermaid') : String(cls).includes('language-mermaid');
}

export default function rehypeMermaid() {
  return (tree) => {
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        if (isMermaid(child)) {
          return {
            type: 'element',
            tagName: 'pre',
            properties: { className: ['mermaid'] },
            children: [{ type: 'text', value: textOf(child).trim() }],
          };
        }
        walk(child);
        return child;
      });
    };
    walk(tree);
  };
}
