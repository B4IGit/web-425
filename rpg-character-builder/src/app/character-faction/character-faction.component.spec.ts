import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly handle errors when data is not found', () => {
    const expectedMessage = 'No factions found. Please try again.';

    fixture.detectChanges(); // This triggers ngOnInit and the HTTP request

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/character-factions',
    );

    req.flush('Character factions not found', {
      status: 404,
      statusText: 'Not Found',
    });

    expect(component.noFactionsFoundMsg).toBe(expectedMessage);
    expect(component.characterFactions.length).toBe(0);
  });

  it('should correctly fetch a list of character factions', () => {
    const mockFactions = [
      {
        name: 'The Iron Brotherhood',
        description:
          'The Iron Brotherhood is a faction of brave and honorable warriors.',
      },
      {
        name: 'The Arcane Order',
        description: 'The Arcane Order is a faction of powerful mages.',
      },
    ];

    fixture.detectChanges(); // This triggers ngOnInit

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/character-factions',
    );
    req.flush(mockFactions);

    expect(component.characterFactions).toEqual(mockFactions);
    expect(component.characterFactions.length).toBe(2);
  });

  it('should update the characterFactions array when factions are found', () => {
    const mockFactions = [
      {
        name: 'The Iron Brotherhood',
        description:
          'The Iron Brotherhood is a faction of brave and honorable warriors. They value strength, courage, and loyalty above all else. Their members are known for their iron will and unbreakable spirit.',
      },
      {
        name: 'The Arcane Order',
        description:
          'The Arcane Order is a faction of powerful mages. They seek knowledge and wisdom, and their magic is a tool to understand the mysteries of the universe. They are respected and feared for their magical prowess.',
      },
      {
        name: 'The Silent Knives',
        description:
          'The Silent Knives is a faction of skilled rogues. They value stealth, cunning, and precision. Their members are masters of the shadows, using their skills for espionage and assassination.',
      },
      {
        name: "The Nature's Guardians",
        description:
          "The Nature's Guardians is a faction of druids and rangers. They are the protectors of the natural world, using their abilities to maintain the balance between civilization and nature.",
      },
    ];

    fixture.detectChanges(); // This triggers ngOnInit

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/character-factions',
    );
    req.flush(mockFactions);

    expect(component.characterFactions).toEqual(mockFactions);
    expect(component.characterFactions.length).toBe(4);
    expect(component.characterFactions[0].name).toBe('The Iron Brotherhood');
  });
});
