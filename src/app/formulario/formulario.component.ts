import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { IAuto } from '../models/auto.models';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  // creamos el FormGroup
  miFormulario: FormGroup;

  auto?: IAuto;

  constructor(private formulario: FormBuilder, private apiService: ApiService) {
    this.miFormulario = this.formulario.group({
      id: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      color: ['', Validators.required],
      condicion: ['', Validators.required],
      anio: ['', Validators.required],
      km: ['', Validators.required],
      tipo: ['', Validators.required],
      estado: ['', Validators.required],
      tipo_motor: ['', Validators.required],
      caja: ['', Validators.required],
      motor: ['', Validators.required],
      precio: ['', Validators.required],
      sede: ['', Validators.required],
      imagen1: ['', Validators.required],
      imagen2: ['', Validators.required],
      imagen3: ['', Validators.required],
      imagen4: ['', Validators.required],
      imagen5: ['', Validators.required],
    });
  }
  enviar() {
    if (this.miFormulario.valid) {
      this.auto = {
        id: 0,
        marca: this.miFormulario.value.marca,
        modelo: this.miFormulario.value.modelo,
        color: this.miFormulario.value.color,
        condicion: this.miFormulario.value.condicion,
        anio: this.miFormulario.value.anio,
        km: this.miFormulario.value.km,
        tipo: this.miFormulario.value.tipo,
        estado: this.miFormulario.value.estado,
        tipomotor: this.miFormulario.value.tipomotor,
        caja: this.miFormulario.value.caja,
        motor: this.miFormulario.value.motor,
        precio: this.miFormulario.value.precio,
        sede: this.miFormulario.value.sede,
        imagen1: this.miFormulario.value.imagen1,
        imagen2: this.miFormulario.value.imagen2,
        imagen3: this.miFormulario.value.imagen3,
        imagen4: this.miFormulario.value.imagen4,
        imagen5: this.miFormulario.value.imagen5,
      };
      console.log(this.auto);

      const producto = this.convertirAuto(this.auto);

      this.apiService.postAuto(producto).subscribe({
        next: (res) => {
          console.log('Producto cargado correctamente', res);
        },
        error: (error) => {
          console.error('Error al agregar el producto', error);
        },
      });
    } else {
      console.error('Formulario invalido', this.miFormulario.errors);
    }
  }

  convertirAuto = (producto: IAuto): any => {
    return {
      id: producto.id,
      marca: producto.marca,
      modelo: producto.modelo,
      color: producto.color,
      condicion: producto.condicion,
      anio: producto.anio,
      km: producto.km,
      tipo: producto.tipo,
      estado: producto.estado,
      tipomotor: producto.tipomotor,
      caja: producto.caja,
      motor: producto.motor,
      precio: producto.precio,
      sede: producto.sede,
      imagen1: producto.imagen1,
      imagen2: producto.imagen2,
      imagen3: producto.imagen3,
      imagen4: producto.imagen4,
      imagen5: producto.imagen5,
    };
  };
}
