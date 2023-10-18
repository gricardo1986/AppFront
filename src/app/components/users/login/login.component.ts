import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private userService=inject(UsersService)
  router=inject(Router)

  formulario=new FormGroup({
    'email':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)

  })

  get email(){
    return this.formulario.get("email") as FormControl
  }
  get password(){
    return this.formulario.get("password") as FormControl
  }

  async onSubmit(){
    const response:any= await this.userService.login(this.formulario.value)
    if(!response.error){
      localStorage.setItem("token", response.token)
      this.router.navigate(["/roles"])
    }
  }
}
