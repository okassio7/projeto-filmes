import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private apiUrl = 'https://api.tvmaze.com/shows';

  constructor(private http: HttpClient) {}

  getFilmes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}