import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from '../service/vehicle.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  vehicle:Vehicle = new Vehicle();
  constructor(private vehicleService : VehicleService) { }

  ngOnInit(): void { }

  limparModel(){
    this.vehicle = new Vehicle();
  }
  save(){
    this.vehicleService.save(this.vehicle).subscribe(resp => {
      Swal.fire({
        icon: 'success',
        title: resp,
        showConfirmButton: false,
        timer: 1500
      })
      this.limparModel();
    });
  }


}
