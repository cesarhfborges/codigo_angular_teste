import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuariosEditarComponent} from './usuarios-editar.component';

const routes: Routes = [
  {
    path: '', // 'usuarios/:id',
    component: UsuariosEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosEditarRoutingModule { }
