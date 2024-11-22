import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IAuto } from '../../models/auto.models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css',
})
export class ModificarComponent {
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
      tipomotor: ['', Validators.required],
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

  modificar() {
    if (this.miFormulario.valid) {
      this.auto = {
        id: this.miFormulario.value.id,
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

      const vehiculo = this.convertirAuto(this.auto);

      this.apiService.postAuto(vehiculo).subscribe({
        next: (res) => {
          console.log('Vehiculo modificado correctamente', res);
        },
        error: (error) => {
          console.error('Error al modificar el vehiculo', error);
        },
      });
    } else {
      console.error('Formulario invalido', this.miFormulario.errors);
    }
  }

  convertirAuto = (auto: IAuto): any => {
    return {
      id: auto.id,
      marca: auto.marca,
      modelo: auto.modelo,
      color: auto.color,
      condicion: auto.condicion,
      anio: auto.anio,
      km: auto.km,
      tipo: auto.tipo,
      estado: auto.estado,
      tipomotor: auto.tipomotor,
      caja: auto.caja,
      motor: auto.motor,
      precio: auto.precio,
      sede: auto.sede,
      imagen1: auto.imagen1,
      imagen2: auto.imagen2,
      imagen3: auto.imagen3,
      imagen4: auto.imagen4,
      imagen5: auto.imagen5,
    };
  };

  limpiar() {
    this.miFormulario.reset();
  }

  editar() {
    if (this.miFormulario.valid) {
      this.auto = {
        id: this.miFormulario.value.id,
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

      const vehiculo = this.convertirAuto(this.auto);

      this.apiService.putAuto(vehiculo).subscribe({
        next: (res) => {
          console.log('Vehiculo modificado correctamente', res);
        },
        error: (error) => {
          console.error('Error al modificar el vehiculo', error);
        },
      });
    } else {
      console.error('Formulario invalido', this.miFormulario.errors);
    }
  }
}
