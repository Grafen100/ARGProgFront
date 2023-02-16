import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiences } from '../models/experiences';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  URL = environment.URL + 'expjob/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiences[]>{
    return this.httpClient.get<Experiences[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Experiences>{
    return this.httpClient.get<Experiences>(this.URL + `detail/${id}`);
  } 

  public save(experiences: Experiences): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', experiences);
  }

  public update(id: number, experiences: Experiences): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, experiences);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
