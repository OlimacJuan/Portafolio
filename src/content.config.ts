// Esquema del contenido. Aquí se define qué datos lleva cada proyecto,
// fundamento y metodología. Si falta un dato obligatorio, el sitio avisa
// al compilar en vez de publicarse roto.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const areas = [
  'Diseño mecánico',
  'Térmicas y fluidos',
  'Manufactura',
  'Materiales',
  'Dinámica y control',
] as const;

const proyectos = defineCollection({
  loader: glob({ pattern: '*/index.mdx', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      resumen: z.string().max(180),
      area: z.enum(areas),
      fecha: z.coerce.date(),
      contexto: z.string(),
      equipo: z.array(z.object({ nombre: z.string(), rol: z.string() })).default([]),
      miRol: z.string(),
      imagen: image(),
      imagenAlt: z.string(),
      postit: z.enum(['amarillo', 'cian', 'verde', 'blanco']).default('amarillo'),
      destacado: z.boolean().default(false),
      ejemplo: z.boolean().default(false),
      licencia: z.string().default('CC BY-NC-ND 4.0'),
    }),
});

const fundamentos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/fundamentos' }),
  schema: z.object({
    titulo: z.string(),
    estante: z.enum([
      'Mecánica de sólidos',
      'Diseño de máquinas',
      'Termofluidos',
      'Dinámica y vibraciones',
      'Materiales y manufactura',
    ]),
    resumen: z.string().optional(),
    lomo: z.enum(['marino', 'cian', 'amarillo', 'azul', 'verde', 'gris']).default('marino'),
    orden: z.number().default(100),
    borrador: z.boolean().default(false),
    ejemplo: z.boolean().default(false),
  }),
});

const metodologias = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/metodologias' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    lomo: z.enum(['marino', 'cian', 'amarillo', 'azul', 'verde', 'gris']).default('azul'),
    orden: z.number().default(100),
    borrador: z.boolean().default(false),
    ejemplo: z.boolean().default(false),
  }),
});

export const collections = { proyectos, fundamentos, metodologias };
export { areas };
