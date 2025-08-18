import {Component, OnInit} from '@angular/core';
import {UsuariosService} from '../../utils/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {

  nome: number[] = Array.from({length: 150}).map((_, i) => i);

  constructor(private readonly _usuariosService: UsuariosService) {
  }

  ngOnInit(): void {
    this._usuariosService.listarUsuarios().subscribe({
      next: data => {
        console.log('========= DADOS DA REQUISICAO: ', data);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
