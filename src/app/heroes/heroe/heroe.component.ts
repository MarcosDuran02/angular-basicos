import { Component } from '@angular/core';
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{

    nombre: string = 'Ironman';
    Edad: number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenernombre(): string{
            return  `${ this.nombre } - ${ this.Edad } `;

    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';

    }

    cambiarEdad():void{
        this.Edad = 27;

    }

}