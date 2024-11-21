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

  // Iyectamo nuestra apiService
  private _apiService = inject(ApiService);

  constructor(private _fb: FormBuilder, _apiService: ApiService) {
    this.miFormulario = this._fb.group({
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
      motor: ['', Validators.required],
      precio: ['', Validators.required],
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
        motor: this.miFormulario.value.motor,
        imagen1: this.miFormulario.value.imagen1,
        imagen2: this.miFormulario.value.imagen2,
        imagen3: this.miFormulario.value.imagen3,
        imagen4: this.miFormulario.value.imagen4,
        imagen5: this.miFormulario.value.imagen5,
        precio: this.miFormulario.value.precio,
      };
    } /* 
      console.log(this.producto) 
 
      const productoPlano = this.convertirProducto(this.producto) 
       
      this._apiService.postproducto(productoPlano).subscribe({ 
        next: (res)=>{ 
          console.log('Producto cargado correctamente',res) 
        },error: (error)=>{ 
          console.error('Error al agregar el producto') 
        } 
         
      }) 
 
    }else{ 
      console.error('Formulario invalido',this.miFormulario.errors) 
    }*/
  }

  /* 
  convertirProducto = (producto:IAuto): any =>{ 
    return{ 
      id: producto.id, 
      marca:producto.marca, 
      modelo: producto.modelo, 
      color: producto.color, 
      condicion: producto.condicion, 
      anio: producto.anio, 
      km: producto.km, 
      tipo: producto.tipo, 
      estado: producto.estado, 
      tipomotor : producto.tipomotor, 
      motor : producto.motor, 
      precio: producto.precio 
      // imagines qeu se ingresan 
      // 
      // 
      // 
      // 
    } 
  }*/
}
