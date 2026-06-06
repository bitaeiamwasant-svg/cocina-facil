// Base de recetas del MVP. Más adelante esto puede venir de una API/backend.
// `ingredientes` se usan para hacer el match con lo que el usuario tiene.
// `basicos` son cosas que casi todos tienen (sal, aceite...) y no penalizan el match.
// `video`: actualmente NO se usa (el detalle abre una búsqueda en YouTube por nombre).
//   Se conserva por si más adelante se quiere fijar un video concreto verificado.

export const recetas = [
  {
    id: 'salteado-papa-tomate-jamon',
    nombre: 'Salteado de papa, tomate y jamón',
    tiempo: 15,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?auto=format&fit=crop&w=800&q=70',
    video: 'Y_NeKZL30dM',
    ingredientes: ['papa', 'tomate', 'jamon'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Corta la papa en cubos pequeños y dórala en aceite hasta que esté tierna.',
      'Añade el tomate y el jamón en trozos y saltea 3 minutos.',
      'Salpimienta y sirve caliente.'
    ]
  },
  {
    id: 'tortilla-papa-tomate',
    nombre: 'Tortilla de papa y tomate',
    tiempo: 20,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1568158951683-b4d9a3a3f8d0?auto=format&fit=crop&w=800&q=70',
    video: 'lZqLlMq2gv4',
    ingredientes: ['papa', 'tomate', 'huevo'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Fríe la papa en rodajas finas hasta que esté tierna.',
      'Bate los huevos, añade el tomate troceado y mezcla con la papa.',
      'Cuaja la tortilla en la sartén por ambos lados.'
    ]
  },
  {
    id: 'huevos-jamon',
    nombre: 'Huevos con jamón',
    tiempo: 8,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=70',
    video: 'PUP7U5vTMM0',
    ingredientes: ['huevo', 'jamon'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Calienta un poco de aceite en la sartén.',
      'Añade el jamón en trozos y, encima, los huevos.',
      'Cocina hasta que la clara cuaje y sirve.'
    ]
  },
  {
    id: 'pan-tomate-jamon',
    nombre: 'Pan con tomate y jamón',
    tiempo: 7,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=70',
    video: 'Ja1AjVqL8sc',
    ingredientes: ['pan', 'tomate', 'jamon'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Tuesta el pan.',
      'Restriega el tomate maduro sobre el pan y añade un hilo de aceite y sal.',
      'Cubre con el jamón y sirve.'
    ]
  },
  {
    id: 'huevos-revueltos',
    nombre: 'Huevos revueltos cremosos',
    tiempo: 10,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=70',
    video: 'PUP7U5vTMM0',
    ingredientes: ['huevo', 'mantequilla', 'leche'],
    basicos: ['sal', 'pimienta'],
    pasos: [
      'Bate los huevos con un poco de leche, sal y pimienta.',
      'Derrite la mantequilla a fuego bajo.',
      'Vierte los huevos y remueve suave hasta que cuajen pero queden jugosos.'
    ]
  },
  {
    id: 'pasta-ajo-aceite',
    nombre: 'Pasta al ajo y aceite',
    tiempo: 20,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=800&q=70',
    video: 'bJUiWdM__Qw',
    ingredientes: ['pasta', 'ajo'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Hierve la pasta en agua con sal.',
      'Dora el ajo laminado en aceite a fuego bajo.',
      'Mezcla la pasta escurrida con el aceite de ajo.'
    ]
  },
  {
    id: 'arroz-con-pollo',
    nombre: 'Arroz con pollo',
    tiempo: 40,
    dificultad: 'Media',
    imagen: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=70',
    video: 'Hn4iRtb0gN0',
    ingredientes: ['arroz', 'pollo', 'cebolla', 'ajo', 'pimiento'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Sofríe cebolla, ajo y pimiento.',
      'Añade el pollo en trozos y dóralo.',
      'Incorpora el arroz, cubre con caldo y cocina hasta secar.'
    ]
  },
  {
    id: 'ensalada-tomate',
    nombre: 'Ensalada fresca de tomate',
    tiempo: 8,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=70',
    video: 'Ja1AjVqL8sc',
    ingredientes: ['tomate', 'cebolla', 'lechuga'],
    basicos: ['aceite', 'sal', 'vinagre'],
    pasos: [
      'Corta el tomate, la cebolla y la lechuga.',
      'Aliña con aceite, sal y vinagre.',
      'Mezcla y sirve frío.'
    ]
  },
  {
    id: 'tortilla-patata',
    nombre: 'Tortilla de patata',
    tiempo: 35,
    dificultad: 'Media',
    imagen: 'https://images.unsplash.com/photo-1568158951683-b4d9a3a3f8d0?auto=format&fit=crop&w=800&q=70',
    video: 'lZqLlMq2gv4',
    ingredientes: ['patata', 'huevo', 'cebolla'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Fríe la patata y la cebolla en aceite hasta que estén tiernas.',
      'Bate los huevos y mézclalos con la patata.',
      'Cuaja la mezcla en la sartén por ambos lados.'
    ]
  },
  {
    id: 'sopa-verduras',
    nombre: 'Sopa de verduras',
    tiempo: 30,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=70',
    video: 'l5R3E6jdHps',
    ingredientes: ['zanahoria', 'patata', 'cebolla', 'apio'],
    basicos: ['sal', 'aceite'],
    pasos: [
      'Trocea todas las verduras.',
      'Sofríe la cebolla y añade el resto con agua.',
      'Cocina 20 minutos hasta que estén tiernas.'
    ]
  },
  {
    id: 'panqueques',
    nombre: 'Panqueques caseros',
    tiempo: 15,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=70',
    video: 'AQ0xUF2BBOM',
    ingredientes: ['harina', 'huevo', 'leche'],
    basicos: ['sal', 'mantequilla', 'azucar'],
    pasos: [
      'Mezcla la harina, el huevo, la leche y una pizca de sal y azúcar.',
      'Calienta una sartén con un poco de mantequilla.',
      'Vierte un cucharón y voltea cuando salgan burbujas.'
    ]
  },
  {
    id: 'quesadillas',
    nombre: 'Quesadillas de queso',
    tiempo: 12,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=70',
    video: '5x3Qs6bD1qE',
    ingredientes: ['tortilla', 'queso'],
    basicos: ['aceite'],
    pasos: [
      'Coloca queso sobre media tortilla y dóblala.',
      'Calienta en una sartén con unas gotas de aceite.',
      'Dora por ambos lados hasta que el queso se funda.'
    ]
  },
  {
    id: 'pollo-al-horno',
    nombre: 'Pollo al horno con limón',
    tiempo: 50,
    dificultad: 'Media',
    imagen: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=70',
    video: 'argKpeiKFfo',
    ingredientes: ['pollo', 'limon', 'ajo', 'patata'],
    basicos: ['aceite', 'sal', 'pimienta'],
    pasos: [
      'Adoba el pollo con limón, ajo, aceite, sal y pimienta.',
      'Acomoda con las patatas en una bandeja.',
      'Hornea a 200°C unos 40 minutos hasta dorar.'
    ]
  },
  {
    id: 'guacamole',
    nombre: 'Guacamole fácil',
    tiempo: 10,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1601000938259-9e92002320b2?auto=format&fit=crop&w=800&q=70',
    video: 'Y_NeKZL30dM',
    ingredientes: ['aguacate', 'tomate', 'cebolla', 'limon'],
    basicos: ['sal'],
    pasos: [
      'Machaca el aguacate con un tenedor.',
      'Añade tomate y cebolla picados muy finos.',
      'Aliña con limón y sal al gusto.'
    ]
  },
  {
    id: 'crema-calabacin',
    nombre: 'Crema de calabacín',
    tiempo: 30,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=70',
    video: 'eUQfZQbP5oA',
    ingredientes: ['calabacin', 'cebolla', 'patata', 'queso'],
    basicos: ['sal', 'aceite'],
    pasos: [
      'Sofríe la cebolla y añade el calabacín y la patata en trozos.',
      'Cubre con agua y cocina 20 minutos.',
      'Tritura hasta que quede una crema suave y añade queso.'
    ]
  },
  {
    id: 'arroz-frito',
    nombre: 'Arroz frito con verduras',
    tiempo: 20,
    dificultad: 'Media',
    imagen: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=70',
    video: 'qH__o17xHls',
    ingredientes: ['arroz', 'huevo', 'zanahoria', 'cebolla', 'guisante'],
    basicos: ['aceite', 'salsa de soja'],
    pasos: [
      'Usa arroz cocido del día anterior.',
      'Saltea las verduras y aparta; cuaja el huevo.',
      'Mezcla todo con el arroz y un chorro de salsa de soja.'
    ]
  },
  {
    id: 'sandwich-mixto',
    nombre: 'Sándwich mixto caliente',
    tiempo: 8,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=70',
    video: 'mu3qBp9PdW0',
    ingredientes: ['pan', 'queso', 'jamon'],
    basicos: ['mantequilla'],
    pasos: [
      'Unta el pan con un poco de mantequilla por fuera.',
      'Rellena con jamón y queso.',
      'Tuesta en la sartén hasta dorar y fundir el queso.'
    ]
  },
  {
    id: 'avena-platano',
    nombre: 'Avena con plátano',
    tiempo: 10,
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=70',
    video: 'A2pZkb1G_RA',
    ingredientes: ['avena', 'leche', 'platano'],
    basicos: ['canela', 'miel'],
    pasos: [
      'Calienta la leche con la avena removiendo unos 5 minutos.',
      'Añade el plátano en rodajas.',
      'Termina con un poco de canela y miel.'
    ]
  }
]
