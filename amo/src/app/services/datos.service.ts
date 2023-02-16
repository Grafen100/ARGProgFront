import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import { environment } from 'src/environments/environment';
import{ Skill} from '../models/skill'; 


const httpOptions ={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
  
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  URL = environment.URL;

  //Con esto elijo que seccion usa los metodos 
  metodoUrl:string[] = ['sh&ss']; //0       

  constructor( private http:HttpClient ) { }
   
  
  getDatos(seccion:number):Observable<any>{
    const url = `${this.URL}${this.metodoUrl[seccion]}/list`
    return  this.http.get(url);
  }
  updateDatos(dato:any, seccion:number):Observable<any>{
    const url = `${this.URL}${this.metodoUrl[seccion]}/update`
    return this.http.put<any>(url, dato)
  }
  deleteDatos(dato:any, seccion:number):Observable<any>{
    const url = `${this.URL}${this.metodoUrl[seccion]}/delete/${dato.id}`
    return this.http.delete<any>(url)
  }
  addSDatos(dato:any,seccion:number):Observable<any>{
    const url = `${this.URL}${this.metodoUrl[seccion]}/create`
    return this.http.post<any>(url, dato)
  }

  

}