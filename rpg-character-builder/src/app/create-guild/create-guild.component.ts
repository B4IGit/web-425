import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
        <h1>Guild Creations</h1>
        <div class="guild-container">
          @for (guild of prexistingGuilds; track guild) {
            <div class="guild-card">
              <h2>{{ guild.guildName }}</h2>
              <p>{{ guild.guildDescription }}</p>
              <h3>Guild Type</h3>
              <p>{{ guild.guildType }}</p>
              <h3>Notification Preference</h3>
              <p>
                {{
                  isArray(guild.guildNotificationPreference)
                    ? guild.guildNotificationPreference.join(', ')
                    : guild.guildNotificationPreference
                }}
              </p>
            </div>
          }
        </div>
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

    .guild-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;
    }

    .guild-card {
      flex: 0 0 calc(50% - 20px);
      box-sizing: border-box;
      border: 2px solid red;
      padding: 20px;
      margin: 10px 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  prexistingGuilds: any;

  // Expose Array.isArray for use in the template
  readonly isArray = Array.isArray;

  guildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.compose([Validators.required])],
    guildDescription: [null, Validators.compose([Validators.required])],
    guildType: [null, Validators.compose([Validators.required])],
    guildNotificationPreference: [
      null,
      Validators.compose([Validators.required]),
    ],
    guildAcceptTerms: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) {
    this.prexistingGuilds = [
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
  }

  validFormSubmission() {
    this.guildForm.valid;
    this.prexistingGuilds.push(this.guildForm.value);
    alert('Form submitted successfully!');
  }
}
