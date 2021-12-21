import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import  Swal  from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public formLogin: FormGroup = this.fb.group({
    email: ['test1@gmail.com', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {
    
  }

  public login() {
    console.log('desde login');
    
    // this.authService.validarToken()
    // .subscribe( resp => {
    //   console.log('esta es la respuest', resp);
      
    // });
    const { email, password } = this.formLogin.value;
    this.authService.login(email, password).subscribe((data) => {
      
      if ( data === true ) {
        this.router.navigateByUrl('/dashboard');
      } else {
        // show error message
        Swal.fire('Error', data, 'error')
      }
    });
  }
}
