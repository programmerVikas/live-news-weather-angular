import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsApiComponent } from './news-api/news-api.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewsApiComponent, WeatherApiComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    NewsApiComponent,
    WeatherApiComponent
  ]
})
export class ApiModuleModule { }
