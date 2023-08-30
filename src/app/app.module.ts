import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header_component';
import {FooterComponent} from './footer/footer.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EquipoclientesComponent } from './components/equipoclientes/equipoclientes.component';
import { ClienteService } from './components/clientes/cliente.service';
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localPa from '@angular/common/locales/es-PA';
import { FormComponent } from './components/clientes/form.component';
import { HomeComponent } from './components/home/home.component';
//import { TabsModule } from 'ngx-bootstrap/tabs';
//import { ImageSrcDirective } from './image-src.directive';
registerLocaleData(localPa,'es-PA');
const routes: Routes=[

  {path:'home',component:HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {path:'',redirectTo:'/clientes',pathMatch:'full'},
  {path:'',redirectTo:'/equipoclientes',pathMatch:'full'},
  {path:'clientes',component:ClientesComponent},
 {path:'clientes/form',component: FormComponent},
{path:'clientes/form/:id',component: FormComponent},
 {path:'equipoclientes',component:EquipoclientesComponent}
  //{path:'equipoclientes/form',component: FormequipoComponent},
  //{path:'equipoclientes/form/:id',component: FormequipoComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    //DirectivaComponent,
    ClientesComponent,
    //EquipoclientesComponent,
   // FormComponent,
    //FormequipoComponent,
    EquipoclientesComponent,
    FormComponent,
    HomeComponent

  ],
  imports: [
    HttpClientModule,
    ///ImageSrcDirective,
    //TabsModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService,{provide: LOCALE_ID, useValue: 'es-PA'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
