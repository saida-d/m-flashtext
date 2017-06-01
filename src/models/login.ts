import {Http,Response} from '@angular/http';
 
export class LoginModel{
   
   constructor(public http:Http,public response:Response){}

   login(username,password){
     let data= {username:username,password:password};
     this.http.post('https://flash-text.com/mobile/login/authenticate',JSON.stringify(data))
     .subscribe((response:Response)=>{
        console.log(response);
     })   
   }

}