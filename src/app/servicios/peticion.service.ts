import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  urllocal:string = "http://localhost:3001"

  constructor(private htpp:HttpClient,private router:Router) {}

  post(url:string,data:{}){
    let promise = new Promise((resolve, reject) =>{

      this.htpp.post(url,data)
      .toPromise()
      .then((res:any) =>{
        console.log(res)
        resolve(res)
      })
    })
    return promise
  }
}
