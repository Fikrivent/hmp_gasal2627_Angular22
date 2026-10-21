import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false
})
export class SettingsPage implements OnInit {

  imageURL:string = "";
  password:string ="";
  isMoreThan6Chars:boolean = false;
  isIncludeNumber:boolean = false;
  isIncludeSpecialChar:boolean = false;

  // referensi pengecekan apakah mengandung angka atau tidak menggunakan RegExp
  checkNumber = /[\d]/;
  // referensi pengecekan apakah mengandung special character atau tidak menggunakan RegExp
  checkSpecialChar = /[(!@#$%^&*)]/;

  constructor() { }

  validatePassword() {
    if(this.password.length >= 6)
    {
      this.isMoreThan6Chars = true;
    }

    //pengecekan apakah mengandung angka atau tidak
    if(this.checkNumber.test(this.password) == true)
    {
      this.isIncludeNumber = true;
    }

    if(this.checkSpecialChar.test(this.password) == true)
    {
      this.isIncludeSpecialChar = true;
    }
  }

  ngOnInit() {
  }

}
