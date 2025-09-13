export interface User {
  userId: number;
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[];
  private authState = new BehaviorSubject<boolean>(false);

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) {
    this.users = [
      {
        userId: 1007,
        email: 'devin.ledesma@gmail.com',
        password: 'Devin123',
      },
      {
        userId: 1008,
        email: 'burnt.toast@gmail.com',
        password: 'Burnt123',
      },
      {
        userId: 1009,
        email: 'french.toast@gmail.com',
        password: 'French123',
      },
    ];
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  signin(email: string, password: string) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout() {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => {});
  }
}
