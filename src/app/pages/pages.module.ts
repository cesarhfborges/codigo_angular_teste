import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {UsuariosEditarComponent} from './usuarios-editar/usuarios-editar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosEditarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatGridList,
    MatGridTile
  ]
})
export class PagesModule {
}
