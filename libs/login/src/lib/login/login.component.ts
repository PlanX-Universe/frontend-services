import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '@planx-planning/shared';
import { environment } from 'apps/planx-frontend/src/environments/environment';

@Component({
  selector: 'planx-planning-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  readonly version: string = environment.version;

  constructor(private fb: FormBuilder,
              private router: Router,
              private notificationService: NotificationService) {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid && this.loginForm.dirty) {
      localStorage.setItem('username', this.loginForm.getRawValue().username);

      this.router.navigate(['/home'])
        .then(() => this.notificationService.success('You\'re now logged in!'))
        .catch(() => this.notificationService.error('Ups! Something went wrong.'));
    }
  }
}
