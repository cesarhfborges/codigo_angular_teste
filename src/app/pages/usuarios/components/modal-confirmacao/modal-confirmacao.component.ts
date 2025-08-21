import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UsuariosService} from '../../../../utils/services/usuarios.service';

@Component({
  selector: 'app-modal-confirmacao',
  standalone: false,
  templateUrl: './modal-confirmacao.component.html',
  styleUrl: './modal-confirmacao.component.scss'
})
export class ModalConfirmacaoComponent {

  private readonly _data = inject(MAT_DIALOG_DATA);

  constructor(
    private readonly _dialogRef: MatDialogRef<ModalConfirmacaoComponent>,
    private readonly _usuariosService: UsuariosService
  ) {
  }

  get name(): string {
    if (!!this._data.usuario) {
      return this._data.usuario.name;
    }
    return 'Error';
  }

  get email(): string {
    if (!!this._data.usuario) {
      return this._data.usuario.email;
    }
    return 'Error';
  }

  confirmar(): void {
    this._usuariosService.deleteUsuario(this._data.id).subscribe({
      next: result => {
        this._dialogRef.close();
      },
      error: error => {
        console.log(error);
      }
    });
  }

  cancelar(): void {
    this._dialogRef.close();
  }
}
