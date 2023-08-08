import { Component, OnInit } from '@angular/core';
import { LiginsignupService } from '../liginsignup.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  user=new User()
  msg='';
   constructor( private service:LiginsignupService, private router : Router){}
   ngOnInit(): void { 
   }
   signup(){
   this.service.signupuserformremote(this.user).subscribe(
     data=>{
       console.log("Response recived"), 
       this.router.navigate(["/navbar"])
     },
       error=>{
         console.log("Exception accoures")
         this.msg=error.error;
       })
   }
 
 }
 