import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from './layout/base/base.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/usuarios'
  },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'usuarios',
        loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosModule),
      },
      {
        path: 'usuarios/:id',
        loadChildren: () => import('./pages/usuarios-editar/usuarios-editar.module').then(m => m.UsuariosEditarModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
