export interface Characters {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="style">
      <h1>Explore our current Characters</h1>
      <p>
        Venture into a vast and mysterious world teeming with magic, danger, and
        ancient secrets. As you journey through enchanted forests, scorched
        wastelands, icy peaks, and forgotten ruins, you’ll encounter powerful
        characters, each with their own <span>unique abilities</span>,
        <span>backstories</span>, and <span>faction loyalties</span>. <br />
        <br />
        Whether you seek allies or adversaries, every encounter is a chance to
        uncover new lore, unlock rare powers, and shape the fate of the realm.
      </p>
      <ul class="character-container">
        @for (item of players; track item) {
          <li class="character">
            <div class="card">
              <h3>{{ item.name }}</h3>
              <p>{{ item.gender }}</p>
              <p>{{ item.class }}</p>
              <p>{{ item.faction }}</p>
              <p>{{ item.startingLocation }}</p>
              <p>{{ item.funFact }}</p>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .style h1 {
        font-size: 3rem;
        margin-left: 60px;
      }

      .style > p {
        font-size: 1.3rem;
        margin: 0 60px 0 60px;
      }

      .style p span {
        color: #40c37f;
        font-weight: bold;
      }
      .character-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style-type: none;
        padding: 2rem 0;
      }

      .character {
        flex: 0 1 calc(33.33% - 60px);
        margin: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .card {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 10px;
        background-color: rgba(225, 225, 225, 0.05);
        border: 2px solid red;
        box-shadow: 0 0 20px rgb(15, 83, 75);
        backdrop-filter: blur(10px);
        color: #f4f0e6;
      }

      .character .card > p:nth-child(n + 2):nth-child(-n + 5) {
        color: rgba(244, 240, 230, 0.8);
        font-size: 1rem;
        line-height: 1rem;
        top: 10px;
        left: 10px;
        width: 30px;
      }
      .character .card > p:nth-child(5) {
        margin-bottom: 10rem;
      }

      .character .card > h3 {
        font-size: 1.8rem;
        color: #40c37f;
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .character .card > p:nth-child(6) {
        font-size: 1.1rem;
        text-align: center;
      }
    `,
  ],
})
export class PlayersComponent {
  players: Characters[];

  constructor() {
    this.players = [
      {
        name: 'Virel',
        gender: 'Male',
        class: 'Warlock',
        faction: 'Obsidian Pact',
        startingLocation: 'Blackspire Hollow',
        funFact:
          'Virel once trapped a demon in a mirror and uses it as a nightlight.',
      },
      {
        name: 'Lyra',
        gender: 'Female',
        class: 'Rogue',
        faction: 'Shadowveil Syndicate',
        startingLocation: 'Duskmire',
        funFact: 'Lyra can pick any lock in under ten seconds.',
      },
      {
        name: 'Elandor',
        gender: 'Male',
        class: 'Mage',
        faction: 'Arcane Circle',
        startingLocation: 'Mystvale',
        funFact:
          'Elandor once turned an entire lake into steam with a single spell.',
      },
      {
        name: 'Kaelin',
        gender: 'Female',
        class: 'Hunter',
        faction: 'Verdant Wardens',
        startingLocation: 'Greenhollow',
        funFact: 'Kaelin trained a hawk to deliver messages across continents.',
      },
      {
        name: 'Zarek',
        gender: 'Male',
        class: 'Wizard',
        faction: 'Celestial Order',
        startingLocation: 'Starspire',
        funFact:
          'Zarek once summoned a meteor during a duel and won without injury.',
      },
      {
        name: 'Nyx',
        gender: 'Female',
        class: 'Warlock',
        faction: 'Twilight Covenant',
        startingLocation: 'Ebonreach',
        funFact: 'Nyx made a pact with a forgotten god to gain her powers.',
      },
      {
        name: 'Bran',
        gender: 'Male',
        class: 'Hunter',
        faction: 'Stonefang Clan',
        startingLocation: 'Frostcrag',
        funFact: 'Bran once tracked a beast for 40 days without rest.',
      },
      {
        name: 'Selene',
        gender: 'Female',
        class: 'Mage',
        faction: 'Moonlit Enclave',
        startingLocation: 'Lunaris',
        funFact: 'Selene can cast spells using moonlight alone.',
      },
      {
        name: 'Dorian',
        gender: 'Male',
        class: 'Rogue',
        faction: 'Crimson Dagger',
        startingLocation: 'Redhaven',
        funFact:
          'Dorian once stole the crown from a king’s head during a speech.',
      },
      {
        name: 'Isolde',
        gender: 'Female',
        class: 'Wizard',
        faction: 'Silver Flame',
        startingLocation: 'Emberfall',
        funFact: 'Isolde can speak every known magical language.',
      },
    ];
  }
}
