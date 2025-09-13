import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <img
          src="/assets/banner.png"
          alt="Fictional character created with Adobe Firefly"
          class="banner-img"
        />
        <h1 class="title">Welcome to the Realm</h1>
      </header>

      <main class="main-content">
        <nav class="navbar">
          <ul class="nav-links">
            <li><a routerLink="/" class="home-link">Home</a></li>
            <li><a routerLink="/players">Players</a></li>
            <li><a routerLink="/create-character">Create Character</a></li>
            <li><a routerLink="/create-guild">Create Guild</a></li>
            <li><a routerLink="/character-faction">Character Faction</a></li>
            @if (!email) {
              <li>
                <a routerLink="/signin">Sign In</a>
              </li>
            }
          </ul>
        </nav>

        @if (email) {
          <aside class="signin-container">
            <h2>
              <strong>Welcome back, {{ email }}!</strong>
            </h2>
            <button (click)="signout()">Sign Out</button>
          </aside>
        }

        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/">Home</a>
          <a routerLink="/players">Players</a>
          <a routerLink="/create-character">Create Character</a>
          <a routerLink="/create-guild">Create Guild</a>
          <a routerLink="/character-faction">Character Faction</a>
        </nav>
        <p>&copy; 2025 RPG-Character-Builder</p>
      </footer>
    </div>
  `,
  styles: [
    `
      .signin-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 3rem;
      }

      .signin-container h2 {
        color: #bbbbbb;
      }

      aside[_ngcontent-ng-c2609321573] button[_ngcontent-ng-c2609321573] {
        background-color: red;
        color: white;
        border-radius: 3px;
        padding: 5px 30px;
      }
    `,
  ],
})
export class AppComponent {
  email?: string;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
  ) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe((isAuth) => {
      if (isAuth) {
        this.email = this.cookieService.get('session_user') || undefined;
      } else {
        this.email = undefined;
      }
    });
  }

  signout() {
    this.email = undefined;
    this.authService.signout();
  }
}
