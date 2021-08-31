import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonajeImputComponent } from "./Personajes/personaje-imput/personaje-imput.component";
import { PersonajesComponent } from "./Personajes/Personajes.component";


const routes: Routes =[
    {path: '', component: PersonajesComponent},
    {path: 'imput', component: PersonajeImputComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}