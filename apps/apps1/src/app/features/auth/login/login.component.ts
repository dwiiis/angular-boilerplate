import { AuthModel } from '@angular-boilerplate/model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@nglibs/auth';
import { environment } from 'apps/apps1/src/environments/environment';
import { ApiUrl } from '../../../shared/enum/api-url';
@Component({
  selector: 'angular-boilerplate-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSubmited: boolean = false;
  errorMsg?: string;
  constructor(private authSv: AuthService) {}

  ngOnInit(): void {}

  login(value: AuthModel) {
    this.isSubmited = true;
    const usr: AuthModel = {
      username: value.username,
      password: value.password,
    };
    this.authSv.login(environment.baseUrl + ApiUrl.auth.login, usr).subscribe(
      async (data) => {
        console.log('data: ', data);
      },
      async (error) => {
        this.isSubmited = false;
        this.errorMsg = error.error.responseMessage;        
      }
    );
  }
}
