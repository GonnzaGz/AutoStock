import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAuto } from '../../models/auto.models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent implements OnInit {
  auto?: IAuto;
  cargando: boolean = true;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.apiService.getAutobyId(Number(params['id'])).subscribe({
          next: (data: IAuto) => {
            this.auto = data;
            this.cargando = false;
          },
          error: (error: any) => {
            console.log(error);
            this.cargando = false;
          },
        });
      },
      error: (error: any) => {
        console.log(error);
        this.cargando = false;
      },
    });
  }
}
