import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

import { FormsModule } from '@angular/forms';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.addNewCharacter(); // This will trigger the generation of a new character ID
    expect(component.character.characterId).toBeGreaterThan(0);
    expect(component.character.characterId).toBeLessThan(1000);
    expect(Number.isInteger(component.character.characterId)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    spyOn(component, 'generateRandomId').and.returnValue(1);
    component.selectedName = 'Devin Ledesma';
    component.selectedGender = 'male';
    component.selectedClass = 'mage';
    component.addNewCharacter();

    const createNewCharacter = component.character.characters[0];
    expect(createNewCharacter.id).toBe(1);
    expect(createNewCharacter.name).toBe('Devin Ledesma');
    expect(createNewCharacter.gender).toBe('male');
    expect(createNewCharacter.class).toBe('mage');
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    component.selectedName = 'French Toast';
    component.selectedGender = 'Female';
    component.selectedClass = 'Rogue';

    component.resetForm();

    expect(component.selectedName).toBe('');
    expect(component.selectedGender).toBe('');
    expect(component.selectedClass).toBe('');
  });
});
