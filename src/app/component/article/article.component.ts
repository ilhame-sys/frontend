import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: Article[];
  error = '';
  success = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit() { 
    this.getAll();
  }


  getAll(){
    this.articleService.readAllArticle().subscribe((articles: Article[])=>{
      this.articles = articles;
      console.log(this.articles);
    })
  }

}
