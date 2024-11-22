import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IAuto } from '../../models/auto.models';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent implements OnInit {
  listadoAutos: IAuto[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAutos().subscribe((datos: IAuto[]) => {
      this.listadoAutos = datos;
    });
  }

  modificarAuto(auto: IAuto): void {
    this.apiService.putAuto(auto).subscribe(() => {
      this.apiService.getAutos().subscribe((datos: IAuto[]) => {
        this.listadoAutos = datos;
      });
    });
  }

  eliminarAuto(id: number): void {
    this.apiService.deleteAuto(id).subscribe(() => {
      this.apiService.getAutos().subscribe((datos: IAuto[]) => {
        this.listadoAutos = datos;
      });
    });
  }
}
