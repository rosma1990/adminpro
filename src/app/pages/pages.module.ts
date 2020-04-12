import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

// module
import { sharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PAGES_ROUTES } from './pages.routes';


// graficas
import { ChartsModule } from 'ng2-charts';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficodonaComponent } from '../components/graficodona/graficodona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GraficodonaComponent,
        AccountSettingsComponent
    ],
    exports: [  //exportar las paginas para que puedan ser usadas desde otros modulos
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
        // ,GraficodonaComponent
    ],
    imports: [
        sharedModule,
        PAGES_ROUTES,
        FormsModule
        , ChartsModule

    ]

})

export class pageModule{}
