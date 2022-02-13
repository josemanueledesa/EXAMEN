import  Home  from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';

import Series from '../components/Series';
import PelisGhibli from '../components/PelisGhibli';
import Especies from '../components/Especies';
import Crypto from '../components/Crypto';
import App from '../components/App';

export const MenuItems = [

  {
    id: 1,
    path: '/Login',
    title: 'Login',
    component: App,
  },
 
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  
  {
    id: 4,
    path: '/series',
    title: 'Series',
    component: Series,
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