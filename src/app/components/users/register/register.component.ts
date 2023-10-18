import { Component,inject } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private userService=inject(UsersService)

  formulario=new FormGroup({
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)

  })

  get name(){
    return this.formulario.get("name") as FormControl
  }
  get email(){
    return this.formulario.get("email") as FormControl
  }
  get password(){
    return this.formulario.get("password") as FormControl
  }

  async onSubmit(){
    const response= await this.userService.register(this.formulario.value)
    console.log(response)
  }

}
