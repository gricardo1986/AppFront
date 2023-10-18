import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-details-rol',
  templateUrl: './details-rol.component.html',
  styleUrls: ['./details-rol.component.css']
})
export class DetailsRolComponent {

  private activatedRoute=inject(ActivatedRoute)
  private rolesService=inject(RolesService)

  rols:any=[]

  ngOnInit(){
    this.activatedRoute.params.subscribe(async params=>{
      this.rols=await this.rolesService.getById(params["id"])
      console.log(this.rols)
    })
  }

  router=inject(Router);

  onReturn(){
    this.router.navigate(['/roles']);
  }
}
