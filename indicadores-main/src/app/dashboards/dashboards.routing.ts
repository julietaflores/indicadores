import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { VolumenVentasComponent } from './Indicadores/volumen-ventas/volumen-ventas.component';
import { FullComponent } from '../layouts/full/full.component';
export const DashboardsRoutes: Routes = [
 /* {
    path: '',
    children: [
      {
        path: 'Inicio',
        component: Dashboard1Component,
        data: {
          title: 'Inicio',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Inicio' }
          ]
        }
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard 2',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 2' }
          ]
        }
      }
    ]
 }*/
 {
    path: '',
    component:  Dashboard1Component,
   
  },
  {
    path: 'Inicio',
    component: Dashboard1Component,
    data: {
      title: 'Inicio',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Inicio' }
      ]
    }
  },
  {
    path: 'dashboard2',
    component: Dashboard2Component,
  }
];
