import {Component, OnInit} from '@angular/core';
import {UsuariosService} from '../../utils/services/usuarios.service';

@Component({
  selector: 'app-usuarios-editar',
  standalone: false,
  templateUrl: './usuarios-editar.component.html',
  styleUrl: './usuarios-editar.component.scss'
})
export class UsuariosEditarComponent implements OnInit {
  constructor(private readonly _usuariosService: UsuariosService) {
  }
  ngOnInit(): void {
    this._usuariosService.getUsuario(1).subscribe({
      next: data => {
        console.log('========= DADOS DA REQUISICAO: ', data);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
