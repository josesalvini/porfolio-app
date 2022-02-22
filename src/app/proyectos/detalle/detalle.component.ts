import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from '../service/proyectos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  parametro: string = '';
  proyectoData: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private proyectosService: ProyectosService) {

    let urlName = '';

    activatedRoute.params.subscribe(({ urlName: nombreProyecto }) => {
      urlName = nombreProyecto;
    });

    this.parametro = decodeURI(urlName);
  }

  ngOnInit(): void {
    this.proyectoData = this.proyectosService.getProyecto(this.parametro);
  }

  goProyectos(){
    this.router.navigate(['proyectos']);
  }

}
