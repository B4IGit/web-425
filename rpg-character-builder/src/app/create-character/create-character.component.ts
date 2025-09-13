export interface Character {
  id: number;
  name: string;
  gender?: string;
  class?: string;
}

export interface NewCharacter {
  characters: Character[];
  characterId: number;
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="character-form-container">
      <form
        class="character-form"
        #createNewCharacterForm="ngForm"
        (ngSubmit)="addNewCharacter()"
      >
        <h1>Utilize the form below to create a new character</h1>
        <fieldset>
          <legend>Begin with the Basics</legend>

          <!-- Input for character name -->
          <div class="character-name">
            <label for="name">Character Name:</label><br />
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="selectedName"
              required
            />
          </div>

          <!-- Select input for gender -->
          <div class="select-input">
            <label for="gender">Gender:</label><br />
            <select
              name="gender"
              id="gender"
              [(ngModel)]="selectedGender"
              required
            >
              <option value="" disabled selected>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <!-- Select input for class -->
          <div class="select-input">
            <label for="class">Class:</label><br />
            <select
              name="class"
              id="class"
              [(ngModel)]="selectedClass"
              required
            >
              <option value="" disabled selected>Select class</option>
              <option value="Warrior">Warrior</option>
              <option value="Mage">Mage</option>
              <option value="Rogue">Rogue</option>
            </select>
          </div>

          <!-- Submit and Reset buttons -->
          <div class="form-buttons">
            <input type="submit" value="Add New Character" />
            <input type="reset" value="Reset Form" />
          </div>
        </fieldset>
      </form>

      <!-- Display the created characters -->
      <div class="display-characters">
        <h1>Created Characters</h1>
        <ul>
          <li *ngFor="let char of characters">
            {{ char.name }} ({{ char.gender }}, {{ char.class }})
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: `
    .character-form-container {
      display: flex;
      justify-content: space-between;
      padding: 0 40px;
      gap: 50px;
    }

    .character-form {
      flex: 1;
      margin-right: 20px;
    }

    .display-characters {
      flex: 1;
    }

    .display-characters li {
      list-style-type: none;
    }

    fieldset {
      margin-bottom: 20px;
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 5px;
    }

    label {
      display: block;
      font-weight: bold;
    }

    input[type='text'],
    select {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }

    input[type='submit'],
    input[type='reset'] {
      padding: 8px 16px;
      margin-top: 10px;
      cursor: pointer;
    }

    .form-buttons {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }

    input[type='submit'] {
      flex: 0 0 calc(60% - 10px);
      float: left;
      background-color: #4caf50;
      color: white;
      border: none;
    }

    input[type='reset'] {
      flex: 0 0 calc(40% - 10px);
      float: right;
      background-color: #f44336;
      color: white;
      border: none;
    }

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
export class CreateCharacterComponent {
  selectedName = '';
  selectedGender = '';
  selectedClass = '';

  character: NewCharacter = { characters: [], characterId: 0 };

  addNewCharacter() {
    this.character.characterId = this.generateRandomId();
    this.createCharacter();
  }

  createCharacter() {
    const newId = this.generateRandomId(); // Generates a new id
    const newCharacter: Character = {
      id: newId,
      name: this.selectedName,
      gender: this.selectedGender,
      class: this.selectedClass,
    };

    this.character.characterId = newId;

    this.character.characters.push(newCharacter);

    this.resetForm();
  }

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  resetForm() {
    this.selectedName = '';
    this.selectedGender = '';
    this.selectedClass = '';
  }

  get characters(): Character[] {
    return this.character.characters;
  }
}
