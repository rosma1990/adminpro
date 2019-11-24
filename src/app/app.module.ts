import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// RUTAS
import { APP_ROUTES } from './app.routes';

// modulos
import { pageModule } from './pages/pages.module';

// Termporal
import { FormsModule } from '@angular/forms';

// import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// import { GraficodonaComponent } from './components/graficodona/graficodona.component';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // ,GraficodonaComponent
    // ,
    // IncrementadorComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    pageModule,
    FormsModule
    // ,ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }