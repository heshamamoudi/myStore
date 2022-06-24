import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import * as moment from 'moment';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isloggedin$: BehaviorSubject<boolean>= new BehaviorSubject<any>(this.isLoggedIn());;

  constructor(private http: HttpClient, private router: Router) {
    
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:5000/signin', {
      username,
      password,
    });
  }

  public setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    if (authResult.idToken !== undefined) {
      this.isloggedin$.next(true);
      
      sessionStorage.setItem('id_token', authResult.idToken);
      sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
      alert('user logged in');
      this.router.navigateByUrl('/');
    }
  }

  public logout(): void {
    this.isloggedin$.next(false);
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('expires_at');
    this.router.navigateByUrl('/signin');
  }

  public isLoggedIn(): boolean {
    if (
      moment().isBefore(this.getExpiration()) &&
      this.getExpiration() !== null
    ){ return true;}
     

    return false;
  }
  get loginstatus() {
    return this.isloggedin$.asObservable();
  }
  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getExpiration() {
    const expiration: string = sessionStorage.getItem('expires_at') as string;
    const expiresAt: string = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public getUser(): Observable<User> {
    return this.http.get<User>('http://localhost:5000/users/20');
  }
  public signup(user: User): Observable<User> {
    return this.http
      .post<User>('http://localhost:5000/signup', user)
  }
  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `,
  //       error.error
  //     );
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     () => new Error('Something bad happened; please try again later.')
  //   );
  // }
}
