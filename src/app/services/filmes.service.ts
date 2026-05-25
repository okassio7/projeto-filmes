import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  private apiUrl = 'https://ghibliapi.vercel.app/films';

  constructor(private http: HttpClient) {}

  getFilmes() {
    return this.http.get<any[]>(this.apiUrl);
  }

}