import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Article } from "../model/article.model";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  PHP_API_SERVER = "http://internationalsolidarityafrica";
  articles: Article[];

  readAllArticle(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${this.PHP_API_SERVER}/api/article/article.php`)
    .pipe(catchError(this.handleError));
  }

  readArticle($id:string): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${this.PHP_API_SERVER}/api/article/article.php?id=` + $id)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError("Error! something went wrong.");
  }

}
