import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

// module
import { sharedModule } from '../shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    exports: [  //exportar las paginas para que puedan ser usadas desde otros modulos
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        sharedModule,
        PAGES_ROUTES
    ]

})

export class pageModule{}
