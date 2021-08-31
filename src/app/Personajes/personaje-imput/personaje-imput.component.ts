import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';


@Component({
  selector: 'app-personaje-imput',
  templateUrl: './personaje-imput.component.html',
  styleUrls: ['./personaje-imput.component.css']
})
export class PersonajeImputComponent implements OnInit {

  @Output() addPersonaje = new EventEmitter<string>();
  nombre: string = '';

  constructor(private servise: PersonajesService) { }

  ngOnInit(): void {
  }
  alta(){
    //this.addPersonaje.emit(this.nombre);
    this.servise.add(this.nombre);
    this.nombre= '';
  }

}
