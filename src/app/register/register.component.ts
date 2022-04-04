import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
admin={
  firstname:'',
  lastname:'',
  email:'',
  password:''

}

register(){

  this.auth.register(this.admin).subscribe(
    res=>{
      this.router.navigate(['/login'])
    },
    err=>{
      console.log(err);
    }
  );

}
  constructor(private auth:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

}
