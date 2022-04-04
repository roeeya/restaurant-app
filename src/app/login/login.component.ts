import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log={
    email:'',
    password:""
  }
  token:any;
login(){
  this.auth.register(this.log).subscribe(
    res=>{
      this.token=res;
      localStorage.setItem('pizzatoken', this.token.mytoken);
      this.router.navigate(['/admin'])
    },
    err=>{
      console.log(err);
    }
  );
}
  constructor(private auth:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

}
