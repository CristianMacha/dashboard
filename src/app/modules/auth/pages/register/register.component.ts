import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    matricula: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  registerUser() {
    console.log(this.signupForm.value);

    this.authService.signup(this.signupForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/login');
      },
      (error) => console.error(error)
    );
  }

  goToHome(): void {
    this.router.navigateByUrl('/inicio');
  }

  goToLogin(): void {
    this.router.navigateByUrl('/login');
  }

  login(): void {
    this.router.navigateByUrl('/backoffice/dashboard');
  }
}
