import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit {

  title: string = environment.systemName;
  version: string = environment.version;

  constructor(
    private router: Router,
    // private authService: AuthService,
    // private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  loginNova () {
    this.router.navigate(["/airNova"]);
    Swal.fire({
      title: "Ha Ingresado a la aerolinea AIRNOVA",
      text: "660 | 160 pasajeros",
      imageWidth: 400,
      imageHeight: 200,
      imageUrl: "assets/login/person2.svg"
    });
  }

  loginMax() {
    this.router.navigate(["/airMax"]);
    Swal.fire({
      title: "Ha Ingresado a la aerolinea AIRMAX",
      text: "720 Neo | 155 pasajeros",
      imageWidth: 400,
      imageHeight: 200,
      imageUrl: "assets/login/person.svg"
    });
  }


  
}
