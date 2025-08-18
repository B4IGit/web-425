import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="hero-section">
      <div class="hero-text">
        <h2>Welcome Adventurer!</h2>
        <h3>Your journey begins here, in The Realm.</h3>
      </div>
      <div class="hero-img">
        <img
          src="/assets/dark-character.png"
          alt="Fictional character created using Adobe Firefly"
        />
      </div>
    </div>
  `,
  styles: [
    `
      .hero-section {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        inset: 0;
        overflow: hidden;
        z-index: 1;
        padding: 20px;
      }

      .hero-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('/assets/fog.jpg');
        background-color: #40c37f;
        background-blend-mode: multiply;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.3; /* Adjust this value as needed */
        z-index: -1;
      }

      .hero-text,
      .hero-img {
        flex: 1;
        max-width: 50%;
      }

      .hero-img img {
        width: 100%;
      }

      h2 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.2rem;
        font-family: 'Lato', sans-serif;
      }
    `,
  ],
})
export class HomeComponent {}
