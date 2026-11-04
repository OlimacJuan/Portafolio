// Datos personales del sitio. Edita este archivo para cambiar tu nombre,
// enlaces o contacto. Un campo vacío ('') simplemente no se muestra.
export const sitio = {
  nombre: 'Juan Camilo',
  titulo: 'Estudiante de Ingeniería Mecánica',
  universidad: 'Universidad de los Andes',
  ciudad: 'Bogotá, Colombia',
  correo: 'jc.cortesv1@uniandes.edu.co',
  linkedin: '', // URL completa
  github: 'https://github.com/OlimacJuan',
  cv: '', // ruta a un PDF dentro de /public, ej. '/cv.pdf'
};

/** Antepone la ruta base del sitio (GitHub Pages publica en /Portafolio/). */
export function url(ruta = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${ruta.startsWith('/') ? ruta : `/${ruta}`}`;
}
