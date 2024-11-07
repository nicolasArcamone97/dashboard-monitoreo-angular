import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private baseUrl = 'http://localhost:8080/plantas'

  constructor(private httpCliente:HttpClient) { }



  public obtenerPlantas():Observable<any[]>{
    return this.httpCliente.get<any[]>(this.baseUrl)
  }

  public eliminarPlanta(plantaId:number):Observable<any>{
    return this.httpCliente.delete(`${this.baseUrl}/${plantaId}`)
  }

  public crearPlanta(nuevaPlanta:any):Observable<any>{
    return this.httpCliente.post(`${this.baseUrl}/crear`,nuevaPlanta)
  }

  public editarPlanta(id:number,plantaEdit:any):Observable<any>{
    return this.httpCliente.put<any>(`${this.baseUrl}/${id}`, plantaEdit)
  }


}
