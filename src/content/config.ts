import { defineCollection, z } from 'astro:content';

const galerie = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
  }),
});

const poradniki = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    poziom: z.enum(['Początkujący', 'Średniozaawansowany', 'Zaawansowany']),
    czasCzytania: z.string(),
    zrodlo: z.object({ nazwa: z.string(), url: z.string() }).optional(),
  }),
});

const samoloty = defineCollection({
  type: 'content',
  schema: z.object({
    nazwa: z.string(),
    producent: z.string(),
    typ: z.string(),
    tag: z.string(),
    opisKrotki: z.string(),
    zdjecie: z.string().optional(),
    specyfikacja: z.object({
      zaloga: z.string(),
      predkoscPrzelotowa: z.string(),
      zasieg: z.string(),
      silnik: z.string(),
      poziomTrudnosci: z.string(),
    }),
    statusRozwoju: z.enum(['W pełni funkcjonalny', 'Funkcjonalny', 'W rozwoju']).optional(),
    pobierzUrl: z.string(),
    wikiUrl: z.string().optional(),
  }),
});

const addony = defineCollection({
  type: 'content',
  schema: z.object({
    nazwa: z.string(),
    kategoria: z.enum([
      'Narzędzia pilota',
      'VFR i nawigacja',
      'Obsługa naziemna i multiplayer',
      'ATC i immersja',
      'Interfejs i kamery',
    ]),
    opisKrotki: z.string(),
    trudnoscInstalacji: z.enum(['Łatwa', 'Średnia', 'Zaawansowana']),
    kompatybilnosc: z.string(),
    autor: z.string().optional(),
    pobierzUrl: z.string(),
    wikiUrl: z.string().optional(),
  }),
});

const wydarzenia = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    opisKrotki: z.string(),
    typ: z.enum(['Cykliczne', 'Jednorazowe']),
    termin: z.string(),
    serwer: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { galerie, poradniki, samoloty, addony, wydarzenia };
