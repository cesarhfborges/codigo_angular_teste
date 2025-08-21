import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosEditarRoutingModule } from './usuarios-editar-routing.module';
import {UsuariosEditarComponent} from './usuarios-editar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    UsuariosEditarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuariosEditarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UsuariosEditarModule { }
