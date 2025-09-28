export interface Guild {
  guildName: string;
  guildDescription: string;
  guildType: string;
  guildNotificationPreference: string | string[];
}

import { Component, Input } from '@angular/core';
import { CreateGuildComponent } from '../create-guild/create-guild.component';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [],
  template: `
    <h1>Guild Creations</h1>
    <div class="guild-container">
      @for (guild of guilds; track guild) {
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
  `,
  styles: `
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
  `,
})
export class GuildListComponent {
  @Input() guilds: Guild[] = [];
  readonly isArray = Array.isArray;
}
