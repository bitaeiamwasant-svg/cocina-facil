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
    imagen: 'https://loremflickr.com/800/600/spanish,omelette,food?lock=24',
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
    imagen: 'https://loremflickr.com/800/600/spanish,omelette,food?lock=24',
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
  },
  {
    id: 'pescado-al-horno',
    nombre: 'Pescado al horno con limón',
    tiempo: 30,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/baked,fish,food?lock=11',
    ingredientes: ['pescado', 'limon'],
    basicos: ['aceite', 'sal', 'pimienta'],
    pasos: [
      'Coloca el pescado en una bandeja con rodajas de limón.',
      'Riega con aceite, sal y pimienta.',
      'Hornea a 200°C unos 18-20 minutos.'
    ]
  },
  {
    id: 'pescado-plancha',
    nombre: 'Pescado a la plancha',
    tiempo: 15,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/grilled,fish,food?lock=12',
    ingredientes: ['pescado', 'ajo'],
    basicos: ['aceite', 'sal', 'limon'],
    pasos: [
      'Salpimienta el pescado y dóralo en la sartén con aceite y ajo.',
      'Cocina 3-4 minutos por cada lado.',
      'Sirve con un chorro de limón.'
    ]
  },
  {
    id: 'tacos-pescado',
    nombre: 'Tacos de pescado',
    tiempo: 25,
    dificultad: 'Media',
    imagen: 'https://loremflickr.com/800/600/fish,tacos,food?lock=13',
    ingredientes: ['pescado', 'tortilla', 'cebolla', 'limon'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Corta el pescado en tiras y dóralo en la sartén.',
      'Calienta las tortillas.',
      'Rellena con el pescado, cebolla y un toque de limón.'
    ]
  },
  {
    id: 'ensalada-atun',
    nombre: 'Ensalada de atún',
    tiempo: 10,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/tuna,salad,food?lock=14',
    ingredientes: ['atun', 'lechuga', 'tomate', 'cebolla'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Trocea la lechuga, el tomate y la cebolla.',
      'Añade el atún escurrido.',
      'Aliña con aceite y sal.'
    ]
  },
  {
    id: 'pasta-atun',
    nombre: 'Pasta con atún y tomate',
    tiempo: 20,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/pasta,tuna,food?lock=15',
    ingredientes: ['pasta', 'atun', 'tomate'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Hierve la pasta en agua con sal.',
      'Calienta el tomate triturado con el atún.',
      'Mezcla la salsa con la pasta escurrida.'
    ]
  },
  {
    id: 'chuletas-cerdo',
    nombre: 'Chuletas de cerdo a la plancha',
    tiempo: 15,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/grilled,pork,chop,food?lock=16',
    ingredientes: ['cerdo', 'ajo'],
    basicos: ['aceite', 'sal', 'pimienta'],
    pasos: [
      'Adoba las chuletas con ajo, sal y pimienta.',
      'Calienta bien la sartén con un poco de aceite.',
      'Dora las chuletas 3-4 minutos por cada lado.'
    ]
  },
  {
    id: 'cerdo-agridulce',
    nombre: 'Cerdo agridulce',
    tiempo: 30,
    dificultad: 'Media',
    imagen: 'https://loremflickr.com/800/600/sweet,sour,pork,food?lock=17',
    ingredientes: ['cerdo', 'pimiento', 'cebolla'],
    basicos: ['aceite', 'sal', 'salsa de soja'],
    pasos: [
      'Dora el cerdo en trozos y aparta.',
      'Saltea el pimiento y la cebolla.',
      'Une todo con un poco de salsa de soja y cocina 5 minutos.'
    ]
  },
  {
    id: 'lomo-cerdo-horno',
    nombre: 'Lomo de cerdo al horno con papas',
    tiempo: 50,
    dificultad: 'Media',
    imagen: 'https://loremflickr.com/800/600/roast,pork,potato,food?lock=18',
    ingredientes: ['cerdo', 'patata', 'ajo'],
    basicos: ['aceite', 'sal', 'pimienta'],
    pasos: [
      'Adoba el cerdo con ajo, aceite, sal y pimienta.',
      'Acomoda con las papas en una bandeja.',
      'Hornea a 200°C unos 40 minutos.'
    ]
  },
  {
    id: 'bistec-plancha',
    nombre: 'Bistec a la plancha',
    tiempo: 15,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/grilled,beef,steak,food?lock=19',
    ingredientes: ['carne', 'ajo'],
    basicos: ['aceite', 'sal', 'pimienta'],
    pasos: [
      'Salpimienta la carne.',
      'Calienta bien la sartén con aceite y ajo.',
      'Sella la carne al punto que prefieras.'
    ]
  },
  {
    id: 'bolonesa',
    nombre: 'Pasta boloñesa rápida',
    tiempo: 30,
    dificultad: 'Media',
    imagen: 'https://loremflickr.com/800/600/bolognese,pasta,food?lock=20',
    ingredientes: ['pasta', 'carne', 'tomate', 'cebolla'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Sofríe la cebolla y añade la carne picada.',
      'Incorpora el tomate triturado y cocina 15 minutos.',
      'Sirve sobre la pasta hervida.'
    ]
  },
  {
    id: 'albondigas',
    nombre: 'Albóndigas en salsa de tomate',
    tiempo: 40,
    dificultad: 'Media',
    imagen: 'https://loremflickr.com/800/600/meatballs,tomato,food?lock=21',
    ingredientes: ['carne', 'huevo', 'pan', 'tomate', 'cebolla'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Mezcla la carne con huevo y pan rallado y forma bolitas.',
      'Dóralas en la sartén.',
      'Cocínalas en salsa de tomate con cebolla 15 minutos.'
    ]
  },
  {
    id: 'lentejas',
    nombre: 'Lentejas guisadas',
    tiempo: 40,
    dificultad: 'Media',
    imagen: 'https://loremflickr.com/800/600/lentil,stew,food?lock=22',
    ingredientes: ['lenteja', 'zanahoria', 'cebolla', 'patata'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Sofríe la cebolla, la zanahoria y la patata en trozos.',
      'Añade las lentejas y cubre con agua.',
      'Cocina a fuego medio unos 30 minutos.'
    ]
  },
  {
    id: 'garbanzos-espinaca',
    nombre: 'Garbanzos con espinaca',
    tiempo: 25,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/chickpeas,spinach,food?lock=23',
    ingredientes: ['garbanzo', 'espinaca', 'ajo'],
    basicos: ['aceite', 'sal', 'pimenton'],
    pasos: [
      'Dora el ajo en aceite.',
      'Añade la espinaca hasta que reduzca.',
      'Incorpora los garbanzos cocidos y cocina 5 minutos.'
    ]
  },
  {
    id: 'champinones-ajillo',
    nombre: 'Champiñones al ajillo',
    tiempo: 12,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/garlic,mushrooms,food?lock=25',
    ingredientes: ['hongo', 'ajo'],
    basicos: ['aceite', 'sal', 'perejil'],
    pasos: [
      'Lamina los champiñones y dora el ajo en aceite.',
      'Añade los champiñones y saltea a fuego fuerte 6-7 minutos.',
      'Salpimienta y termina con perejil picado.'
    ]
  },
  {
    id: 'revuelto-hongos',
    nombre: 'Revuelto de huevo y champiñones',
    tiempo: 10,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/mushroom,scrambled,eggs,food?lock=26',
    ingredientes: ['hongo', 'huevo'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Saltea los champiñones laminados con un poco de aceite.',
      'Añade los huevos batidos.',
      'Remueve a fuego suave hasta que cuajen.'
    ]
  },
  {
    id: 'pasta-hongos',
    nombre: 'Pasta con champiñones',
    tiempo: 20,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/mushroom,pasta,food?lock=27',
    ingredientes: ['pasta', 'hongo', 'ajo'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Hierve la pasta en agua con sal.',
      'Dora el ajo y los champiñones en aceite.',
      'Mezcla la pasta con los champiñones salteados.'
    ]
  },
  {
    id: 'pollo-hongos',
    nombre: 'Pollo con champiñones',
    tiempo: 30,
    dificultad: 'Media',
    imagen: 'https://loremflickr.com/800/600/chicken,mushroom,food?lock=28',
    ingredientes: ['pollo', 'hongo', 'cebolla'],
    basicos: ['aceite', 'sal', 'pimienta'],
    pasos: [
      'Dora el pollo en trozos y aparta.',
      'Saltea la cebolla y los champiñones.',
      'Une todo y cocina 10 minutos hasta que el pollo esté hecho.'
    ]
  },
  {
    id: 'macarrones-queso',
    nombre: 'Macarrones con queso',
    tiempo: 25,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/mac,cheese,food?lock=29',
    ingredientes: ['pasta', 'queso', 'leche'],
    basicos: ['mantequilla', 'sal'],
    pasos: [
      'Hierve los macarrones en agua con sal.',
      'Derrite mantequilla, añade la leche y el queso hasta formar una crema.',
      'Mezcla la salsa con la pasta y sirve caliente.'
    ]
  },
  {
    id: 'tortilla-queso',
    nombre: 'Tortilla de queso',
    tiempo: 10,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/cheese,omelette,food?lock=30',
    ingredientes: ['huevo', 'queso'],
    basicos: ['aceite', 'sal'],
    pasos: [
      'Bate los huevos con una pizca de sal.',
      'Cuájalos en la sartén y añade el queso por encima.',
      'Dobla la tortilla cuando el queso empiece a fundirse.'
    ]
  },
  {
    id: 'papas-gratinadas',
    nombre: 'Papas gratinadas con queso',
    tiempo: 40,
    dificultad: 'Media',
    imagen: 'https://loremflickr.com/800/600/cheese,potato,gratin,food?lock=31',
    ingredientes: ['patata', 'queso', 'leche'],
    basicos: ['mantequilla', 'sal', 'pimienta'],
    pasos: [
      'Corta las papas en rodajas finas y colócalas en una fuente.',
      'Cubre con leche, sal, pimienta y abundante queso.',
      'Hornea a 200°C unos 30 minutos hasta gratinar.'
    ]
  },
  {
    id: 'pan-queso-fundido',
    nombre: 'Pan con queso fundido',
    tiempo: 8,
    dificultad: 'Fácil',
    imagen: 'https://loremflickr.com/800/600/melted,cheese,bread,food?lock=32',
    ingredientes: ['pan', 'queso'],
    basicos: ['mantequilla'],
    pasos: [
      'Unta el pan con un poco de mantequilla.',
      'Cubre con queso en lonchas.',
      'Tuesta o gratina hasta que el queso se funda.'
    ]
  }
]
