import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {UsuariosEditarComponent} from './usuarios-editar/usuarios-editar.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'usuarios/:id',
    component: UsuariosEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
