import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 
  constructor(public courseService: CourseService, private toast: ToastrService) { 
    
  }


  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courseService.getCourses().subscribe(
    res =>{
      this.courseService.courses = res;
    },
    err => console.log(err)
    )
  }


  errorAddToast(){
    
    this.toast.error("Ingrese todos los datos", "ERROR",{
      closeButton: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: 'toast-bottom-center',


    });
  }

  deleteCourseToast(){
    
    this.toast.warning("El curso ha sido eliminado", "CURSO",{
      closeButton: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: 'toast-bottom-center',


    });
  }
  succesToast(){
    
    this.toast.success("Se ha guardado Satisfactoriamente!", "CURSO",{
      closeButton: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: 'toast-bottom-center',


    });
  }

  addCourse(form: NgForm){

    if(form.value.nombre!==' ' && form.value.imagenLink!==' ' && form.value.descripcion!==' ' && form.value.modalidad!==' ' && form.value.categoria!==' ' && form.value.inicio_clases!==' ' && form.value.duracion !== ' ' && form.value.horario!==' ' && form.value.docente!==' ' && form.value.contenido!==' ' && form.value.requisitos!==' '){
      this.courseService.createCourse(form.value).subscribe(
        res => {
          this.getCourses();
          this.succesToast();
          form.reset();
        },
      err => console.log(err)
        );
     
    
    }
    else{
      this.errorAddToast();
 
    }
    
  }

  deleteCourse(id:string){
    const deleteCourseRes= confirm("¿Desea eliminar el curso?");
    if(deleteCourseRes){
      this.courseService.deleteCourse(id).subscribe(
        res=>  {
          this.deleteCourseToast(),
          this.getCourses()
          
        } ,
        err => console.log(err)
      )
    }
  }
}
