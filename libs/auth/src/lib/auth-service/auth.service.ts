import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, switchMap, tap } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { StorageUrl } from '@nglibs/enum';
import { HttpClient } from '@angular/common/http';
import { AuthModel, Users } from '@angular-boilerplate/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  token = '';
  users?: BehaviorSubject<Users> = new BehaviorSubject<Users>({});
  intervalNotif?: any = null;
  logOutHandler: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadToken();
   }
  
  
  loadToken() {
    const token = localStorage.getItem(StorageUrl.auth);    
    if (token && JSON.parse(token).accessToken) {
      this.token = JSON.parse(token).accessToken;
      this.isAuthenticated.next(true);
    } else {

      this.isAuthenticated.next(false);
    }
  }
  
  decodeToken(){
    try {
      return jwt_decode(this.token);
    } catch(Error) {
      return null;
    }
  }

  login(route: any, data: AuthModel){
    // const headers = new HttpHeaders().set(
    //   'Content-Type',
    //   'application/json;'
    // );
    return this.http.post<any>(route, data).pipe(
      map((data: any) => data),
      switchMap(dt => {
        this.token = dt?.accessToken;
        return from(this.saveMe(dt));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    );
  }
  async saveMe(data: any){
    return await data;
  }
  async getUser(){
    let user = await localStorage.getItem(StorageUrl.auth);
    if(user){
      return JSON.parse(user);
    }else {
      return null;
    }
  }
  async logout(){
    localStorage.clear();
    this.isAuthenticated.next(false);
    clearInterval(this.intervalNotif);
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }
  getUserDetail(){
    let getUser = localStorage.getItem(StorageUrl.profile);
    if(getUser){
      this.users?.next(JSON.parse(getUser));
    }
  }
}
