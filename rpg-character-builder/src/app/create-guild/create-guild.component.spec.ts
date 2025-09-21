import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.guildForm.valid).toBeFalsy();
  });

  it('form should be valid when filled correctly', () => {
    component.guildForm.controls['guildName'].setValue('Test Guild');
    component.guildForm.controls['guildDescription'].setValue(
      'Test Description',
    );
    component.guildForm.controls['guildType'].setValue('Competitive');
    component.guildForm.controls['guildAcceptTerms'].setValue(true);
    component.guildForm.controls['guildNotificationPreference'].setValue(
      'Email',
    );

    expect(component.guildForm.valid).toBeTruthy();
  });

  it('should display validFormSubmission when valid form data is submitted ', () => {
    spyOn(component, 'validFormSubmission');

    component.guildForm.controls['guildName'].setValue('Test Guild');
    component.guildForm.controls['guildDescription'].setValue(
      'Test Description',
    );
    component.guildForm.controls['guildType'].setValue('Competitive');
    component.guildForm.controls['guildAcceptTerms'].setValue(true);
    component.guildForm.controls['guildNotificationPreference'].setValue(
      'Email',
    );
    fixture.detectChanges();

    const validForm = fixture.debugElement.query(By.css('form'));
    validForm.triggerEventHandler('ngSubmit', null);

    expect(component.validFormSubmission).toHaveBeenCalled();
  });
});
