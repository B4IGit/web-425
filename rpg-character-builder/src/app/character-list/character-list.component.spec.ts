import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';
import type { Character } from '../create-character/create-character.component';
import { By } from '@angular/platform-browser';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display message for empty character list', () => {
    component.characters = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'No characters have been created.',
    );
  });

  it('characters in the newly created component are displaying correctly', () => {
    // Provide a new mock (like the order total test switches input)
    const mockCharacters: Character[] = [
      { id: 1, name: 'Devin Ledesma', gender: 'male', class: 'mage' },
      { id: 2, name: 'French Toast', gender: 'Female', class: 'Rogue' },
    ];
    component.characters = mockCharacters;

    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const items = compiled.querySelectorAll('ul li');
    expect(items.length).toBe(2);

    const text = compiled.textContent || '';
    expect(text).toContain('Devin Ledesma');
    expect(text).toContain('French Toast');
    expect(text).toContain('male');
    expect(text).toContain('Female');
    expect(text).toContain('mage');
    expect(text).toContain('Rogue');
  });
});
