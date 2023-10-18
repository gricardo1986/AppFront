import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-edit-rol',
  templateUrl: './edit-rol.component.html',
  styleUrls: ['./edit-rol.component.css']
})
export class EditRolComponent {

  formulario:FormGroup

  private activatedRoute=inject(ActivatedRoute)
  private rolesService=inject(RolesService)
  id:string=""
  router=inject(Router);

  get name(){
    return this.formulario.get("name") as FormControl
  }

  constructor(){
    this.formulario=new FormGroup({
      'name':new FormControl('',Validators.required)
    })
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(async params=>{
      this.id=params['id']
      const rol:any=await this.rolesService.getById(this.id)
      this.formulario.setValue({"name":rol["name"]})
    })
  }

  async onSubmit(){
    await this.rolesService.update(this.id, this.formulario.value)
    this.router.navigate(["/roles"])
  }

  onReturn(){
    this.router.navigate(["/roles"])
  }
}
