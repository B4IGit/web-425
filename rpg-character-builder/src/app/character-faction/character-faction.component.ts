import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (characterFactions && characterFactions.length > 0) {
      <div class="character-faction-container">
        <h1>Featured Factions</h1>
        @for (faction of characterFactions; track faction.name) {
          <div class="character-faction-card">
            <h3>{{ faction.name }}</h3>
            <p>{{ faction.description }}</p>
          </div>
        }
      </div>
    } @else {
      <div class="character-faction-container">
        <h3>{{ noFactionsFoundMsg }}</h3>
      </div>
    }
  `,
  styles: `
    .character-faction-container {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: auto;
      width: 80%;
    }

    .character-faction-card {
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 80%;
    }

    h3 {
      color: #40c37f;
    }
  `,
})
export class CharacterFactionComponent implements OnInit {
  characterFactions: any[] = [];
  noFactionsFoundMsg = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCharacterFactions();
  }

  getCharacterFactions() {
    this.http
      .get<any[]>('http://localhost:3000/api/character-factions')
      .subscribe({
        next: (res) => {
          console.log('Factions received:', res);
          this.characterFactions = res;
        },
        error: (err) => {
          console.error('Error fetching character factions', err);
          this.noFactionsFoundMsg = 'No factions found. Please try again.';
        },
      });
  }
}
