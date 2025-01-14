import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroment';
import { Planta } from '../interfaces/planta.interface';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private baseUrl = environment.baseUrl

  listPlantas?: Planta[]

  constructor(private httpCliente:HttpClient) { 

    this.listPlantas = [
      {
        id: 1,
        nombre: 'Planta Solar A',
        pais: 'España',
        bandera: '🇪🇸',
        cantLecturas: 1200,
        cantSensores: 50,
        cantAlertasMedias: 10,
        cantAlertasAltas: 5
      },
      {
        id: 2,
        nombre: 'Planta Eólica B',
        pais: 'México',
        bandera: '🇲🇽',
        cantLecturas: 1500,
        cantSensores: 60,
        cantAlertasMedias: 12,
        cantAlertasAltas: 7
      },
      {
        id: 3,
        nombre: 'Planta Hidroeléctrica C',
        pais: 'Brasil',
        bandera: '🇧🇷',
        cantLecturas: 2000,
        cantSensores: 80,
        cantAlertasMedias: 8,
        cantAlertasAltas: 4
      },
      {
        id: 4,
        nombre: 'Planta Nuclear D',
        pais: 'Francia',
        bandera: '🇫🇷',
        cantLecturas: 1800,
        cantSensores: 40,
        cantAlertasMedias: 15,
        cantAlertasAltas: 3
      },
      {
        id: 5,
        nombre: 'Planta Geotérmica E',
        pais: 'Islandia',
        bandera: '🇮🇸',
        cantLecturas: 900,
        cantSensores: 30,
        cantAlertasMedias: 5,
        cantAlertasAltas: 2
      }
    ]


  }

  public obtenerPlantas(): Planta[] | undefined{
    return this.listPlantas
  }

  // public obtenerPlantas():Observable<any[]>{
  //   return this.httpCliente.get<any[]>(`${this.baseUrl}planta`)
  // }

  public eliminarPlanta(plantaId:number):Observable<any>{
    return this.httpCliente.delete(`${this.baseUrl}planta/${plantaId}`)
  }

  public crearPlanta(nuevaPlanta:any):Observable<any>{
    return this.httpCliente.post(`${this.baseUrl}planta`,nuevaPlanta)
  }

  public editarPlanta(id:number,plantaEdit:any):Observable<any>{
    return this.httpCliente.put<any>(`${this.baseUrl}planta/${id}`, plantaEdit)
  }


}
