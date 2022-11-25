import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  URL_API = 'http://localhost:4000/api/courses';

  selectedCourse:Course = {
    _id:' ',
    nombre:' ',
      imagenLink:' ',
    descripcion:' ',
    modalidad:' ',
    categoria:' ',
    inicio_clases:' ',
    duracion:' ',
    horario:' ',
    inversion:0,
    contenido:' ',
    tags:[],
    docente:' ',
    descuentos:[],
    requisitos:' '

  }
  courses:Course[]=[];
  constructor(private http: HttpClient) { 

  }


  getCourses(){
    return this.http.get<Course[]>(this.URL_API);
  
  }


  createCourse(course:Course){
    return this.http.post(this.URL_API, course);
  }


  
  deleteCourse(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
