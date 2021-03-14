import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecastData = [];

  constructor(forecastService: ForecastService) {
    forecastService.getCurrentLocation()
      .subscribe(forecastData => {
        // @ts-ignore
        this.forecastData = forecastData;
      });
  }

  ngOnInit(): void {
  }

}
