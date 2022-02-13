import  Home  from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Series from '../components/Series';
import PelisGhibli from '../components/PelisGhibli';
import Especies from '../components/Especies';
import Crypto from '../components/Crypto';
import Ejercicio1 from '../components/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2';
import Ejercicio3 from '../components/Ejercicio3';
export const MenuItems = [

  {
    id: 1,
    path: '/Ejercicio1',
    title: 'ejercicio1',
    component: Ejercicio1,
  },
 
  {
    id: 2,
    path: '/Ejercicio2',
    title: ' ejercicio2 ',
    component: Ejercicio2,
  },
  {
    id: 3,
    path: '/Ejercicio3',
    title: ' ejercicio3 ',
    component: Ejercicio3,
  },
  {
    id: 1,
    path: '/Ejercicio1',
    title: 'ejercicio1',
    component: Ejercicio1,
  },
  {
    id: 5,
    path: '/ghibli',
    title: 'Películas Ghibli',
    component: PelisGhibli,
  },
  {
    id: 6,
    path: '/especies',
    title: 'Especies',
    component: Especies,
  },
  {
    id: 7,
    path: '/crypto',
    title: 'Crypto',
    component: Crypto,
  },
 
];

/*
  path
  id
  title
  component

*/