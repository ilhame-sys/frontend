import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/model/article.model";
import { ArticleService } from "src/app/service/article.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article-single",
  templateUrl: "./article-single.component.html",
  styleUrls: ["./article-single.component.scss"]
})
export class ArticleSingleComponent implements OnInit {
  articles: Article[];
  error = "";
  success = "";
  id: string;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    const $id = this.route.snapshot.paramMap.get('id');
    this.articleService.readArticle($id).subscribe((articles: Article[]) => {
      this.articles = articles;
      console.log(this.articles);
    });
  }
}
