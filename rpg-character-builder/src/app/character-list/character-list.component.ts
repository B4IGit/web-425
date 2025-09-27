import { Component, Input } from '@angular/core';
import { Character } from '../create-character/create-character.component';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [NgForOf, CommonModule],
  template: `<h1>Created Characters</h1>
    @if (characters.length > 0) {
      <ul>
        <li *ngFor="let char of characters">
          {{ char.name }} ({{ char.gender }}, {{ char.class }})
        </li>
      </ul>
    } @else {
      <p>No characters have been created.</p>
    }`,
  styles: `
    .character-summary ul {
      list-style-type: none;
      padding: 0;
    }

    .character-summary li {
      margin-bottom: 10px;
      padding: 5px;
      background-color: #f9f9f9;
      border-left: 4px solid #4caf50;
    }
  `,
})
export class CharacterListComponent {
  @Input() characters: Character[] = [];
}
