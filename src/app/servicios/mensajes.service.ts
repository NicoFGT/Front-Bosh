import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  datos:any []=[]
  /**
   * funcion que permite crear mensajes y mostrarlos en pantalla
   * @param tipo puede ser de tipo success, danger, warning, primary
   * @param mensaje su mensaje para mostrar
   */
  load(tipo:string,mensaje:string){
    this.datos.push({tipo:tipo,mensaje:mensaje})
    setTimeout(() => {
      this.datos.splice(0,1)
    },6000)
  }
}
