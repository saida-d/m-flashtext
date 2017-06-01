import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {LoginModel} from '../../models/login';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[NgForm]
})
export class Login {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public ngForm:NgForm,
  public loginModel:LoginModel) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  
  checkLogin(form:NgForm){
     this.loginModel.login(form.value.username,form.value.password);

  }

}
