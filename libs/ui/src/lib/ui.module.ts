import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MenuitemComponent } from './layout/menuitem/menuitem.component';
import { ConfigModule } from './layout/config/config.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DatatableComponent } from './datatable/datatable.component';
import { BredcumbComponent } from './bredcumb/bredcumb.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule,
    RouterModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ToggleButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    ToastModule,
  ],
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent,
    MenuitemComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DatatableComponent,
    BredcumbComponent,
    ToastComponent,
  ],
  exports: [LayoutComponent, LoginComponent, RegisterComponent],
})
export class UiModule {}
