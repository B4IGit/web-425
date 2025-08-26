import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

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
            <li><a routerLink="/signin">Sign In</a></li>
          </ul>
        </nav>

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
  styles: [``],
})
export class AppComponent {}
