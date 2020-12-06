import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private news:HttpClient) { }

  getNews(){
    let url="http://newsapi.org/v2/top-headlines?country=in&apiKey=988d1c9758a646debb1f5eb27a539b4d"
    return this.news.get(url);
  }

  getWeather(weatherData){
    return this.news.get(weatherData);
  }

}
