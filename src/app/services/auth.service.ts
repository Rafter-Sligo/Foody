import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError, mergeMap, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { from } from 'rxjs';

import { IUser } from '../interface/IUsers';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.devurl;
  user = null;
  TOKEN_KEY = 'access_token';

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform,
    private alertController: AlertController,
    private router: Router
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  //check token
  checkToken() {
    this.storage.get(this.TOKEN_KEY).then((token) => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
        } else {
          this.storage.remove(this.TOKEN_KEY);
        }
        console.log(this.TOKEN_KEY);
      }
    });
  }

  // Register
  register(user) {
    return this.http.post(`${this.url}/register`, user).pipe(
      catchError((e) => {
        this.showAlert(e.error.msg);
        console.log(e.error.msg);
        throw new Error(e);
      })
    );
  }

  //login
  login(credentials) {
    return this.http.post(`${this.url}/login`, credentials).pipe(
      tap((res) => {
        this.storage.set(this.TOKEN_KEY, res['token']);
        localStorage.setItem('access_token', res['token']);
        this.user = this.helper.decodeToken(res['token']);
        this.router.navigate(['/menu']);
      }),
      catchError((e) => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  //Send user Email if they forgot password
  SendPassword(userEmail){
    return this.http.post(`${this.url}/forgotpassword`, userEmail).pipe(
      catchError((e) => {
        this.showAlert(e.error.msg);
        console.log(e.error.msg);
        throw new Error(e);
      })
    );
  }

  //To Verify who has answered the email
  VerifyUser(token){
    return this.http.get(`${this.url}/resetpassword/${token}`).pipe(     
      catchError((e) => {
        this.showAlert(e.error.msg);
        console.log(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  //get user
  getUser(token){
    return this,this.http.get(`${this.url}/getEmail/${token}`).pipe(     
      catchError((e) => {
        this.showAlert(e.error.msg);
        console.log(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  //To SavePasswords
  SaveUserPassword(){
    
  }
  
  //log out
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  //Alert system to show problems to users
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK'],
    });
    alert.then((alert) => alert.present());
  }
}
