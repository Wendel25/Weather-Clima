import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/Weather';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})

export class HomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();

  initialCityName = 'Palmital'
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(
    private weatherService: WeatherService
  ){}

  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeartherData(cityName)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) =>{
          response && (this.weatherDatas = response);
        },
        error: (error) =>{
          console.log(error);
        }
      }
    )
  }

  onSubmit(): void{
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
