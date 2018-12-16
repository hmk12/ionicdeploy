import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPage} from '../../pages/register/register';
import { SignupPage} from '../../pages/signup/signup';

/*
  Generated class for the UserstoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserstoreProvider {
  url = "http://localhost:3000/";

  constructor(public http: HttpClient) {
    
  }

  getuser(user)
  {
    return this.http.post(this.url + "app/paper",user);
  }


  pulluser(user1)
  {
    return this.http.get(this.url + "app/paper",user1);
  }

}
