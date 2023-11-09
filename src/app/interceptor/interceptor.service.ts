import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    console.log('ínterceptor')
    const requestOptions = {
      headers: new HttpHeaders ({

      }),
      withCredentials:true
    }

    const reqClone = req.clone(requestOptions)
    return next.handle(reqClone)
  }
}
