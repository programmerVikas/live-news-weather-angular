import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsApiComponent } from './api-module/news-api/news-api.component';
import { WeatherApiComponent } from './api-module/weather-api/weather-api.component';

const routes: Routes = [
  {
    path: "",
    component: NewsApiComponent
  },
  {
    path:"weather",
    component:WeatherApiComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
