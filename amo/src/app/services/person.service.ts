import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  URL = environment.URL + 'person/';
  

  constructor(private httpClient: HttpClient) { }

  //******************************************************************** -->
  //****          LOS METODOS DELETE Y SAVE SE COMENTARON           ****    -->
  //****            PORQUE HABRA UNA  SOLA PERSONA                  ****    -->
  //******************************************************************** -->

  public lista(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Person>{
    return this.httpClient.get<Person>(this.URL + `detail/${id}`);
  }

/*  public save(person: Person): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', person);
  }*/

  public update(id: number, person: Person): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, person);
  }

/*  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/
}