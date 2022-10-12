import { AuthModel } from '@angular-boilerplate/model';
import { LayoutService } from '@angular-boilerplate/services';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'nglibs-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 100%;
        padding: 1rem;
      }

      :host ::ng-deep .pi-eye {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }

      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginComponent {
  @Output() loginEvent = new EventEmitter<any>();
  @Input() isSubmited?: boolean;
  @Input() errorMessage?: string;

  valCheck: string[] = ['remember'];
  username!: string;
  password!: string;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(public layoutService: LayoutService, private fb: FormBuilder, private msgService: MessageService) {}

  signIn(ev: any) {
    ev.preventDefault();
    const formVal: AuthModel = {
      username: this.username,
      password: this.password,
    };
    if (this.username && this.password) {
      this.loginEvent.emit(formVal);
    } else {      
      this.msgService.add({ severity: 'info', summary: 'Info Message', detail: 'Please fill all form !' });
    }
  }
}
