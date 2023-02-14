import { ListarCadastrosComponent } from './components/cadastros/listar-cadastros/listar-cadastros.component';
import { CriarCadastrosComponent } from './components/cadastros/criar-cadastros/criar-cadastros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    component: CriarCadastrosComponent
  },
  {
    path: 'listar',
    component: ListarCadastrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
