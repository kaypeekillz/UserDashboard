import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  setUsername(e) {
    this.username = e;
  }

  setPassword(e) {
    this.password = e;
  }

  goToDashboard() {
    this.route.navigate(["/dashboard"]);
  }

  showSuccess() {
    console.log("success");
    this.toastr.success('Login Successful');
  }

  showError() {
    this.toastr.error('Login Failed');
  }

  login() {
    if (this.username && this.password) {
      this.goToDashboard();
      this.showSuccess();
    } else {
      this.showError();
    }
  }
  
}
