import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Vehicle } from '../models/vehicle';
var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url = "http://localhost:8080/vehicle";
  constructor(private http: HttpClient) { }

  save(vehicle: Vehicle){
    return this.http.post<any>(this.url, vehicle);
  }

  update(vehicle: Vehicle){
    return this.http.put<Vehicle>(this.url, vehicle);
  }

  getAll(request){
    let params
     params = request;

    return this.http.get<any>(this.url + '/all', {params});
  }

  getByPlate(plate: string,request){
    let params
    params = request;
    return this.http.get<any>(this.url + '/plate/'+plate, {params});
  }

  getStatus(status:Boolean, page: Number, size: Number){
    let params = new HttpParams();
    params.append('page',page.toString())
    params.append('size',size.toString())

    return this.http.get<any>(this.url + '/status/' + status, {params: params});
  }

  getById(id: number){
    return this.http.get<Vehicle>(this.url + '/find/' + id, httpOptions);
  }
  deleteById(id: number){
    return this.http.delete<any>(this.url + '/' + id, httpOptions);
  }
}
