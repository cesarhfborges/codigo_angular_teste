import {Component, inject, OnInit} from '@angular/core';
import {UsuariosService} from '../../utils/services/usuarios.service';
import {MatTableDataSource} from '@angular/material/table';
import {Usuario} from '../../shared/models/usuarios.interface';
import {MatDialog} from '@angular/material/dialog';
import {ModalConfirmacaoComponent} from './components/modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {

  dialog = inject(MatDialog);

  loading: boolean = false;

  displayedColumns: string[] = ['id', 'name', 'email', 'options'];
  dataSource: MatTableDataSource<Usuario>;

  constructor(
    private readonly _usuariosService: UsuariosService
  ) {
    this.dataSource = new MatTableDataSource<Usuario>();
  }

  ngOnInit(): void {
    this._usuariosService.listarUsuarios().subscribe({
      next: data => {
        console.log('========= DADOS DA REQUISICAO: ', data);
        this.dataSource.data = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  excluirUsuario(value: Usuario): void {
    this.dialog.open(ModalConfirmacaoComponent, {
      data: {
        usuario: value
      },
    });
  }

  deleteUsuario(id: number): void {

  }
}
