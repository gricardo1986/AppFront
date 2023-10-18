import { Component, inject } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent {

  arrRols:any[]=[]

  private rolesService=inject(RolesService)

  async ngOnInit(){
    this.arrRols=await this.rolesService.getAll()
  }

  async onClickBorrar(id:string){
    const rol=await this.rolesService.deleteById(id)
    console.log(rol)
    
    if(!rol.error){
      this.arrRols=await this.rolesService.getAll()
    }
    else{
      console.log(rol.error)
    }
  }
}
