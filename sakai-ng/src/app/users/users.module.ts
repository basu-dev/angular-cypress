import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxCustomFormErrorModule } from 'ngx-custom-form-error';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

const primengModules = [
  InputTextModule,
  ButtonModule,
  AvatarModule
];

@NgModule({
  declarations: [
    UsersComponent,
    SingleUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxCustomFormErrorModule.rootConfig({
      onTouchedOnly: true,
      addErrorClassToElement: true,
      email: 'Please enter a valid email',
      required: (label: string) => label ? `${label} is required` : `It is required`,
    }),
    primengModules,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
