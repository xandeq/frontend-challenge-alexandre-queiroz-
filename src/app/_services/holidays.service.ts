import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, Holiday } from '../_models/holidays';
import { catchError, Observable, tap, throwError } from 'rxjs';

const AUTH_API = 'https://api.m3o.com/v1/holidays/';

const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer MmIwM2I1NzktNjAxNC00NTBiLWI2ZmMtNzIyYzI2ZTc5MTdk' });

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  constructor(private http: HttpClient) { }

  getHolidays(code:any): Observable<Holiday> {
    let params = new HttpParams();
    params = params.set('country_code', 'BR');
    params = params.set('year', 2022);

    return this.http.get(AUTH_API + `List`, { params, headers }).pipe(
      tap((data: any) =>
        console.log('Data: ', JSON.stringify(data))
      ),
      catchError(this.handleError)
    )
  }

  getCountries():Observable<Country> {
    return this.http.get(AUTH_API + 'Countries', { headers }).pipe(
      tap((data: any) =>
        console.log('Data: ', JSON.stringify(data))
      ),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error: ${err.status} . Message :  ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
