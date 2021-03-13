import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  constructor(private auhtService: AuthService) { }

  ngOnInit(): void {
  }

  closeSession(): void {
    this.auhtService.closeSession();
  }

}
