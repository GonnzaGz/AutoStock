import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { Error404Component } from './components/error404/error404.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ModificarComponent } from './components/modificar/modificar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'tabla/:id', component: DetallesComponent },
  { path: 'modificar/:id', component: ModificarComponent },
  { path: 'error404', component: Error404Component },
  { path: 'formulario', component: FormularioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  {
    path: '**',
    redirectTo: 'error404',
    pathMatch: 'full',
  },
];
