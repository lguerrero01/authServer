import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {

  //Constructor 
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  get user() {
   return this.authService._usuario
  }
  public logout() {
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }
}
