import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {

  vehicle:Vehicle = new Vehicle();

  constructor( private route: ActivatedRoute, private vehicleService : VehicleService ) {
    this.route.params.subscribe(params => this.vehicle.id = params['id']);
}

  ngOnInit(): void {
    this.findById();
  }
  findById(){
    this.vehicleService.getById(this.vehicle.id).subscribe(resp =>{
      this.vehicle = resp
    })
  }
  limparModel(){
    this.vehicle.model = '';
    this.vehicle.status = null;
    this.vehicle.manufacturer = '';
    this.vehicle.color = '';
  }
  update(){
    this.vehicleService.update(this.vehicle).subscribe(resp =>{
      console.log(resp);
      this.vehicle = resp

    });
  }

  radioCondition(){
    console.log(this.vehicle.status)
    return this.vehicle.status
  }

}
