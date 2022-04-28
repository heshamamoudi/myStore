import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable  } from 'rxjs';
import { tap } from "rxjs/operators";
import { User } from 'src/app/models/user';
import * as moment from 'moment'
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, retry } from 'rxjs/operators';

// import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject: BehaviorSubject<boolean>;
  
  constructor(private http:HttpClient) {
    this.tokenSubject= new BehaviorSubject<any>(false)
  

   }
  
  login(username:string,password:string):Observable<User>{
 return this.http.post<User>("http://localhost:5000/signin",{username,password}).pipe(tap(res => this.setSession(res))) 
     
  }

  private setSession(authResult:any) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
    this.tokenSubject.next(true)
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    
}  

  logout():void {
    this.tokenSubject.next(false)
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");

}

public  isLoggedIn():boolean {
     return moment().isBefore(this.getExpiration()) !== undefined
  
 
}
public logged(){
  return this.tokenSubject.asObservable()
}

public isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration:string|null = localStorage.getItem("expires_at");
  const expiresAt:string= JSON.parse((expiration as unknown) as string);
  return moment(expiresAt);
}  

public getUser():Observable<User>{
  // const token: string| null =localStorage.getItem("id_token")
  // const decode=jwt.verify(token as string,public_key,{ algorithms: ['RS256'] });
  return this.http.get<User>('http://localhost:5000/users/20')
}
signup(user:User):Observable<User>{
    
  return this.http.post<User>("http://localhost:5000/signup",user).pipe(
    retry(2),
    catchError(this.handleError)
  )
 

}
private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
}
