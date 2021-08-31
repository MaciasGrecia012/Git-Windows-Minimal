import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonajesService } from '../services/personajes.service';
@Component(
    {
        selector: 'app-Personajes',
        templateUrl: './Personajes.component..html',
        styleUrls: ['./Personajes.component..css']

    }
)
export class PersonajesComponent implements OnInit, OnDestroy{
    personajesSub: Subscription = new Subscription;

    activo: boolean = true;

    //personajes: string[] = ['Iron man', 'Capitan America', 'Batman', 'Superman'];
    //@Input() personajes: string[] = [];
    personajes: string[] = [];

    constructor(private service: PersonajesService){}

    ngOnInit(){
        this.personajes= this.service.personajes;
        this.personajesSub= this.service.personajesChange.subscribe(
            resp =>{
                this.personajes = resp;
            }
        );

    }
    ngOnDestroy(){
        this.personajesSub.unsubscribe();

    }


    onClickActivar(){
        this.activo = !this.activo;

    }

    onRemovePersonaje(name: string){
        this.service.remove(name);
    }

}