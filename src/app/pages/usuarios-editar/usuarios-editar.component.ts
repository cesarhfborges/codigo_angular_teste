import {Component, OnInit} from '@angular/core';
import {UsuariosService} from '../../utils/services/usuarios.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-usuarios-editar',
  standalone: false,
  templateUrl: './usuarios-editar.component.html',
  styleUrl: './usuarios-editar.component.scss'
})
export class UsuariosEditarComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly _usuariosService: UsuariosService,
    private readonly _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      // status: boolean;
      // address: {
      //   street: string;
      //   suite: string;
      //   city: string;
      //   zipcode: string;
      //   geo: {
      //     lat: number;
      //     lng: number;
      //   }
      // },
      // phone: string;
      // website: string;
      // company: {
      //   name: string;
      //   catchPhrase: string;
      //   bs: string;
      // }
    });
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

  oninputUsername($event: any): void {
    console.log(' oninputUsername: ', $event);
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('formulario válido: ', this.form.value);
    } else {
      console.log('formulario inválido: ', this.form.value);
    }
  }

  protected readonly oninput = oninput;
}
