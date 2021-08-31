import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  personajes: string[]=['Capitan America'];

  personajesChange = new Subject<string[]>();

  constructor() { }



  add(name: string){

    this.personajes.push(name);
    this.personajesChange.next(this.personajes);
  }


  remove(name: string){

    this.personajes = this.personajes.filter(p => {
      return p !== name;
    });
    this.personajesChange.next();
  }

  
}
