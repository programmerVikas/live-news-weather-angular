import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/news-service.service';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.css']
})
export class NewsApiComponent implements OnInit {

  name;
  constructor(private news:NewsServiceService) { 
    this.news.getNews().subscribe(datas => {
      this.name=datas;
    })
  }

  ngOnInit(): void {
  }

}
