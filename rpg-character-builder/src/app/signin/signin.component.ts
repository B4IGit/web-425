import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: ` <div class="signin-form-container">
    <form [formGroup]="signinForm" (ngSubmit)="signin()" class="signin-form">
      <h1>Please Complete the form below to sign in.</h1>

      <fieldset>
        <legend>User Sign In</legend>

        <label for="email">Email</label>
        <input formControlName="email" type="email" id="email" name="email" />
        @if (
          signinForm.controls['email'].touched &&
          signinForm.controls['email'].hasError('required')
        ) {
          <small class="error"> Invalid email address. </small>
        }

        <label for="password">Password</label>
        <input formControlName="password" type="password" id="password" />
        @if (
          signinForm.controls['password'].touched &&
          signinForm.controls['password'].hasError('required')
        ) {
          <small class="error"> Password is required. </small>
        }

        @if (
          signinForm.controls['password'].touched &&
          signinForm.controls['password'].hasError('pattern')
        ) {
          <small class="error">
            <strong>
              Password must be at least 8 characters long <br />
              Contain at least one uppercase letter <br />
              Contain at least one number
            </strong>
          </small>
        }
        <input type="submit" [disabled]="!signinForm.valid" value="Sign In" />
      </fieldset>
    </form>
  </div>`,
  styles: `
    .signin-form-container {
      display: flex;
      justify-content: space-between;
      width: 50%;
      margin: 20px auto 40px;
    }

    .signin-form {
      flex: 1;
      margin-right: 20px;
    }

    h1 {
      text-align: center;
    }

    label,
    input {
      display: block;
      margin-bottom: 5px;
    }

    input,
    input[type='submit'] {
      padding: 8px;
      box-sizing: border-box;
    }

    input[type='email'],
    input[type='password'] {
      width: 100%;
    }

    input[type='submit'] {
      margin-top: 10px;
      float: right;
    }

    .error {
      color: red;
    }
  `,
})
export class SigninComponent {
  signinForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [
      null,
      Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
      ]),
    ],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  signin() {
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;

    if (this.authService.signin(email, password)) {
      const returnUrl =
        this.route.snapshot.queryParamMap.get('returnUrl') ||
        '/create-character';
      this.router.navigate([returnUrl]).then(() => {
        // Resets the signin form
        this.signinForm.reset();
      });
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
