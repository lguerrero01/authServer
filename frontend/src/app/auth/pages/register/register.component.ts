import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  public formRegister: FormGroup = this.fb.group({
    email: ['test1@gmail.com', [Validators.required, Validators.email]],
    name: ['1234567', [Validators.required]],
    password: ['1234567', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {}

  public register() {
    const { name, email, password } = this.formRegister.value;
    this.authService.registro(name, email, password).subscribe((data) => {
      if (data === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
        // show error message
        Swal.fire('Error', data, 'error');
      }
    });
  }
}
