import { Component } from '@angular/core';
@Component(
    {
        selector: 'app-Personajes',
        templateUrl: './Personajes.component..html',
        styleUrls: ['./Personajes.component..css']

    }
)
export class PersonajesComponent {

    activo: boolean = true;

    personajes: string[] = ['Ironman', 'Capitan Amwrica', 'Batman', 'Superman'];

    onClickActivar(){
        this.activo = !this.activo;
    }

}