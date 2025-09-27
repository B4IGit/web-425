import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('guild in the newly created component are displaying correctly', () => {
    component.guilds = [
      {
        guildName: 'test',
        guildDescription: 'test',
        guildType: 'Casual',
        guildNotificationPreference: ['SMS', 'In-App'],
      },
    ];
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const text = compiled.textContent || '';

    expect(text).toContain('test');
    expect(text).toContain('test');
    expect(text).toContain('Casual');
    expect(text).toContain('SMS, In-App');
  });
});
