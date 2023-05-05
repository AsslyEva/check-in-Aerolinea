import { Routes } from '@angular/router';

export const SYSTEM_ROUTES: Routes = [
    {
        path: 'airNova',
        loadChildren: () => import('../components/system/air-nova/air-nova.module').then(m => m.AirNovaModule)
    },
    {
        path: 'airMax',
        loadChildren: () => import('../components/system/air-max/air-max.module').then(m => m.AirMaxModule)
    },
];

