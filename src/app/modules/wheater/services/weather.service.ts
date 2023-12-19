import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private apiKey = '92882508e4b52129707f9028918c4395';

  constructor(
    private http: HttpClient
  ) { }

  getWeartherData(cityName: string): Observable<any> {
    return this.http.get(`
      https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {}
    )
  }
}
