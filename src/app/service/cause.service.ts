import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Cause } from "../model/cause.model";

@Injectable({
  providedIn: "root"
})
export class CauseService {
  constructor(private httpClient: HttpClient) {}

  PHP_API_SERVER = "http://internationalsolidarityafrica";
  causes: Cause[];

  readAllCause(): Observable<Cause[]> {
    return this.httpClient
      .get<Cause[]>(`${this.PHP_API_SERVER}/api/cause/cause.php`)
      .pipe(catchError(this.handleError));
  }
  readCause($id:string): Observable<Cause[]>{
    return this.httpClient
    .get<Cause[]>(`${this.PHP_API_SERVER}/api/cause/cause.php?id=` + $id)
    .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError("Error! something went wrong.");
  }
}

