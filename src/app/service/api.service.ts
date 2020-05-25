import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { api } from './../app.api';
import { Invocador } from 'src/app/model/invocador';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

    getInvocador(): Observable<HttpResponse<Invocador>> {
      return this._http.get<Invocador>(`${api}/invocador`, {observe: 'response'});
    }

}
