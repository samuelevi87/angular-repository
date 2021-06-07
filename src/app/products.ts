export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'O Phone XS Max é um dos smartphones mais avançados e completos que existem em circulação. Tem um grande display de 6.5 polegadas com uma resolução de 2688x1242 pixel. As funcionalidades oferecidas pelo Phone XS Max são muitas e inovadoras.'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'O Phone Mini é um smartphone com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização. A tela de 5.4 polegadas coloca esse smartphone no topo de sua categoria. A resolução também é alta: 2340x1080 pixel. As funcionalidades oferecidas pelo Phone Mini são muitas e top de linha.'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'O Phone Standard Edition é um smartphone completo, que não tem muito a invejar aos mais avançados dispositivos. Surpreendente é sua tela Touchscreen de 6.51 polegadas, que coloca-o no topo de sua categoria. A resolução também é alta: 1600x720 pixel. Quanto às funções, no Phone Standard Edition realmente não falta nada.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/