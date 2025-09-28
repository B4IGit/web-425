import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { GuildListComponent, Guild } from '../guild-list/guild-list.component';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GuildListComponent],
  template: `
    <div class="guild-form-container">
      <form
        [formGroup]="guildForm"
        class="guild-form"
        (ngSubmit)="validFormSubmission(); guildForm.reset()"
      >
        <h1>Please complete the form below to create a guild.</h1>
        <fieldset class="style-fieldset">
          <legend>Guild Form</legend>

          <label>Choose your guild name.</label>
          <input type="text" formControlName="guildName" />

          <label>Write a quick description.</label>
          <textarea rows="10" formControlName="guildDescription"></textarea>

          <label>Please choose from one of the following.</label>
          <select formControlName="guildType">
            @for (option of typeOptions; track option) {
              <option [value]="option">{{ option }}</option>
            }
          </select>

          <label
            >Please select you desired notification preference (select all that
            apply)</label
          >
          @for (notification of notificationOptions; track notification) {
            <input
              type="radio"
              [value]="notification"
              formControlName="guildNotificationPreference"
            />
            {{ notification }}
          }

          <label>
            <input type="checkbox" formControlName="guildAcceptTerms" />
            I agree to the Terms and Conditions
          </label>

          <input
            type="submit"
            [disabled]="!guildForm.valid"
            value="Submit Form"
          />
        </fieldset>
      </form>

      <div class="guild">
        <app-guild-list [guilds]="guilds"></app-guild-list>
      </div>
    </div>
  `,
  styles: `
    .guild-form-container {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: auto;
    }

    .guild-form {
      width: calc(50% - 20px);
    }

    .guild {
      width: 100%;
      margin-bottom: 20px;
    }

    form > fieldset.style-fieldset {
      font-size: 1.3rem;
    }

    label {
      display: block;
      width: 100%;
      margin-bottom: 5px;
      font-size: 1.2rem;
    }

    input[type='text'] {
      width: calc(100% - 20px);
      padding: 10px;
    }

    label:first-of-type {
      margin-top: 10px;
    }
    label:not(:first-of-type) {
      margin-top: 10px;
    }

    select {
      width: 100%;
      display: block;
      margin-bottom: 10px;
      padding: 10px;
      box-sizing: border-box;
    }

    textarea {
      width: 100%;
      margin-bottom: 5px;
      padding: 10px;
      box-sizing: border-box;
    }

    input[type='submit'] {
      display: block;
      width: 80%;
      padding: 15px;
      margin: 20px auto 10px;
      box-sizing: border-box;
    }

    input[type='checkbox'] {
      margin-top: 50px;
    }

    input[type='radio'] {
      margin-top: 20px;
    }
  `,
})
export class CreateGuildComponent {
  typeOptions = ['Competitive', 'Casual', 'Social', 'Education'];
  notificationOptions = ['Email', 'SMS', 'In-App'];

  guilds: Guild[] = [
    {
      guildName: 'Divine Flame',
      guildDescription: 'A guild dedicated to the protection of the flame',
      guildType: 'Competitive',
      guildNotificationPreference: 'Email',
    },
    {
      guildName: 'Magical Mystery',
      guildDescription: 'A guild dedicated to the mystery of magic',
      guildType: 'Casual',
      guildNotificationPreference: ['SMS', 'In-App'],
    },
    {
      guildName: 'Warriors of Archery',
      guildDescription: 'A guild dedicated to the warriors of the Archery',
      guildType: 'Social',
      guildNotificationPreference: 'Email',
    },
    {
      guildName: 'The Armory',
      guildDescription: 'A guild dedicated to the armory',
      guildType: 'Education',
      guildNotificationPreference: 'In-App',
    },
  ];

  @Output() guildsChange = new EventEmitter<Guild[]>();

  guildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.required],
    guildDescription: [null, Validators.required],
    guildType: [null, Validators.required],
    guildNotificationPreference: [null, Validators.required],
    guildAcceptTerms: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) {}

  validFormSubmission() {
    if (!this.guildForm.valid) return;

    const newGuild = this.guildForm.value as Guild;
    this.guilds.push(newGuild);

    // Emit a copy of the list
    this.guildsChange.emit([...this.guilds]);

    alert('Form submitted successfully!');
  }
}
