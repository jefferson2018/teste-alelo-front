import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterarComponent } from './vehicle/alterar/alterar.component';
import { CadastroComponent } from './vehicle/cadastro/cadastro.component';
import { ConsultaComponent } from './vehicle/consulta/consulta.component';

const routes: Routes = [
  {path:"cadastro", component : CadastroComponent},
  {path:"consulta", component : ConsultaComponent},
  {path:"alterar/:id", component : AlterarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 