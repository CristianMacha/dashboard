import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signinForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  goToHome(): void {
    this.router.navigateByUrl('/inicio');
  }

  goToRegister(): void {
    this.router.navigateByUrl('/register');
  }

  login(): void {
    this.authService.signin(this.signinForm.value).subscribe(
      (data) => this.router.navigateByUrl('/backoffice/dashboard'),
      (error) => console.error(error)
    );
  }
}
