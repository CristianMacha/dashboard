import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
