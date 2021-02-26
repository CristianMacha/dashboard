import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigateByUrl('/inicio');
  }

  goToRegister(): void {
    this.router.navigateByUrl('/register');
  }

  login(): void {
    this.router.navigateByUrl('/backoffice/dashboard');
  }

}
