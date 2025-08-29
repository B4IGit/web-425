import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* Chapter 3: unit tests 1 */
  it('should create PlayersComponent', () => {
    expect(component).toBeTruthy();
  });

  /* Chapter 3: unit test 2 */
  it('should correctly display a list of characters', () => {
    const complied = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const playerCharacters = complied.querySelectorAll('.character'); // Get all the player characters
    expect(playerCharacters.length).toEqual(component.players.length);
  });
});
