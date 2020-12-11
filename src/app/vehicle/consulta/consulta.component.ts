import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from '../service/vehicle.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  constructor(private vehicleService : VehicleService) { }
  page: number =0;
  size: number =10;
  total: number= 0;
  plate: string = '';
  listVehicle: Array<Vehicle>;
  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    const request = {};
    request['page'] = this.page > 0 ? this.page - 1 : this.page
    request['size'] = this.size
    this.vehicleService.getAll(request).subscribe(resp =>{ 
      this.size = resp.size;
      this.total= resp.totalElements;
       this.listVehicle = resp.content;
    })
  }

  findByPlate(){
    if(this.plate != ''){
      const request = {};
      request['page'] = this.page > 0 ? this.page - 1 : this.page
      request['size'] = this.size
     this.vehicleService.getByPlate(this.plate,request).subscribe(resp =>{
      this.listVehicle = resp.content;
      })
    }
    else {
      this.findAll();
    }
  }


  deleteByid(id: number){
   

    Swal.fire({
      title: 'Deseja Excluir?',
      showCancelButton: true,
      confirmButtonText: `deletar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.vehicleService.deleteById(id).subscribe(resp =>{
          Swal.fire({
            icon: 'success',
            title: resp,
            showConfirmButton: false,
            timer: 1500
          })
          
          this.findAll();
        })
      } 
    })
  }

  getPage($event){
    this.page = $event
    this.findAll();
  }

}
