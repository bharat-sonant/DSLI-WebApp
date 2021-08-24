import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import * as $ from "jquery";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindetails: any[];
  Router: any;
  loginForm: FormGroup;
  constructor(public db: AngularFireDatabase, public router: Router, public fb: FormBuilder) { }

  
  ngOnInit() {
   
    this.getLoginDetails()
    this.submitLogin()
  }
  getLoginDetails() {
    this.logindetails = [];
    let dbpath = "users";
    let instance = this.db.list(dbpath).valueChanges().subscribe(data => {
      instance.unsubscribe();
      for (let i = 0; i < data.length; i++) {
        this.logindetails.push({ userName: data[i]["userName"], password: data[i]["password"] })
      }
    })

  }
  submitLogin() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    
    for (let i = 0; i < this.logindetails.length; i++) {
      
      if ($('#emailinput').val() == this.logindetails[i]["userName"] && $('#passwordinput').val() == this.logindetails[i]["password"]) 
      {
        this.router.navigateByUrl('home-page');
      }
      else {
        window.alert("Enter Correct Details")
      }

    }

    

  }
}

