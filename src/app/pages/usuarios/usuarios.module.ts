import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuariosRoutingModule} from './usuarios-routing.module';
import {UsuariosComponent} from './usuarios.component';
import {ModalConfirmacaoComponent} from './components/modal-confirmacao/modal-confirmacao.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {A11yModule} from '@angular/cdk/a11y';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    UsuariosComponent,
    ModalConfirmacaoComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    A11yModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UsuariosModule {
}
