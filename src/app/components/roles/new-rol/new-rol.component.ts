import { Component, inject } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { RolesService } from 'src/app/services/roles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-rol',
  templateUrl: './new-rol.component.html',
  styleUrls: ['./new-rol.component.css']
})
export class NewRolComponent {

  private rolService=inject(RolesService)
  respuesta:any={}
  
  formulario=new FormGroup({
      'name':new FormControl('',Validators.required)
  })
  
  router=inject(Router);
  
  get name(){
    return this.formulario.get("name") as FormControl
  }

  async onSubmit(){
    this.respuesta=await this.rolService.create(this.formulario.value)
    this.formulario.reset()
    this.router.navigate(["/roles"])
  }
}
