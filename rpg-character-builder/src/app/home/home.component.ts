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
        <p>
          The Realm is a digital sanctuary born from a passion of video games
          and the art of character creation. At its heart lies the
          <b>RPG-Character-Builder</b>. Within the Realm, you have the power to
          <em>craft</em>, <em>customize</em>, and <em>manage</em> your own
          collection of RPG characters.
        </p>
      </div>
      <div class="hero-img">
        <img
          src="/rpg-character-builder/assets/dark-character.png"
          alt="Fictional character created using Adobe Firefly"
        />
      </div>
    </div>

    <div class="characters">
      <h2>Every Creation Begins With A Class...</h2>
      <div class="flex">
        <div class="card">
          <img
            src="/rpg-character-builder/assets/warrior-icon.png"
            alt="warrior RPG class icon"
          />
          <div class="character-text">
            <h3>Warrior</h3>
            <p>
              A master of strength and resilience, the Warrior charges into
              battle with unmatched bravery. Armed with heavy armor and powerful
              melee weapons, they stand as the frontline protector of any party.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="/rpg-character-builder/assets/rogue-icon.png"
            alt="rogue RPG class icon"
          />
          <div class="character-text">
            <h3>Rogue</h3>
            <p>
              Silent, swift, and deadly, the Rogue thrives in the shadows. With
              expert agility and precision, they specialize in stealth attacks,
              traps, and critical strikes that turn the tide before enemies even
              know what hit them.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="/rpg-character-builder/assets/mage-icon.png"
            alt="mage RPG class icon"
          />
          <div class="character-text">
            <h3>Mage</h3>
            <p>
              Wielding the raw forces of arcane magic, the Mage bends reality to
              their will. Though physically fragile, their command of elemental
              spells makes them a devastating force from afar.
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="card">
          <img src="/assets/hunter-icon.png" alt="hunter RPG class icon" />
          <div class="character-text">
            <h3>Hunter</h3>
            <p>
              A keen-eyed tracker and survivalist, the Hunter excels in ranged
              combat and beast mastery. With a loyal companion and a quiver full
              of tricks, they dominate the battlefield from a distance.
            </p>
          </div>
        </div>
        <div class="card">
          <img src="/assets/wizard-icon.png" alt="wizard RPG class icon" />
          <div class="character-text">
            <h3>Wizard</h3>
            <p>
              Scholars of the mystical arts, Wizards harness ancient knowledge
              to cast complex spells. Their versatility and intellect make them
              powerful strategists, capable of manipulating time, space, and
              fate.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="/rpg-character-builder/public/assets/warlock-icon.png"
            alt="warlock RPG class icon"
          />
          <div class="character-text">
            <h3>Warlock</h3>
            <p>
              Bound by dark pacts, the Warlock channels forbidden powers to
              summon minions and curse foes. Their magic is fueled by sacrifice
              and shadow, making them unpredictable and formidable.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Hero Section*/
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

      .hero-text {
        margin-left: 3rem;
      }

      .hero-text h2 {
        font-size: 2.8rem;
      }
      .hero-text h3 {
        color: #40c37f;
        font-size: 1.3rem;
        font-family: 'Lato', sans-serif;
        margin-top: -30px;
      }

      .hero-text p {
        margin-top: 5rem;
        font-size: 1.2rem;
        line-height: 1.6rem;
      }

      .hero-text p b {
        color: #d3630eff;
      }

      .hero-img img {
        width: 100%;
      }
      /* End Hero Section */

      /* Character Section */
      .characters {
        padding: 2rem 5rem;
      }

      .characters h2 {
        text-align: center;
        font-size: 2rem;
      }
      .characters .flex {
        display: flex;
        justify-content: space-evenly;
        padding: 3rem 0;
        gap: 3rem;
      }

      .characters .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        border: 2px solid red;
      }

      .card img {
        width: 40%;
        height: auto;
        margin-top: -20%;
      }

      .card .character-text {
        text-align: center;
        width: 80%;
        font-family: 'Alegreya Sans', arial, helvetica, sans-serif;
      }

      .character-text h3 {
        font-size: 1.5rem;
      }

      .character-text p {
        font-size: 1.1rem;
        line-height: 1.3rem;
      }
      /* End Character Section */
    `,
  ],
})
export class HomeComponent {}
