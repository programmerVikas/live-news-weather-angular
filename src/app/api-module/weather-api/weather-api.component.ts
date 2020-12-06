import { Component, getDebugNode, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/news-service.service';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})
export class WeatherApiComponent implements OnInit {


  
  weatherData = {};
  constructor(private weather: NewsServiceService) {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=madhubani&appid=5f531e01f48d7e649766b8e4a0ab3159";
    this.weather.getWeather(url).subscribe(data => {
      this.weatherData = data;
    })
  }

 

  color='Rai1n';

  dateObj: number = Date.now();
  ngOnInit(): void {
  }

}
