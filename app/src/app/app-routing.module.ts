import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Component */
import { FormDoadorComponent } from './form-doador/form-doador.component';
import { HomeComponent } from './home/home.component';
import { ListaDoadorComponent } from './lista-doador/lista-doador.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"cadastrodoador", component: FormDoadorComponent },
  {path:"listadoador", component: ListaDoadorComponent },
  {path:"**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
