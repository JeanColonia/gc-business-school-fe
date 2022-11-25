import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/Course';
import Swiper, { Autoplay} from 'swiper';
import 'swiper/css';
import {MatTabsModule} from '@angular/material/tabs';

Swiper.use([Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {


cursosContables: Course[]= [];
cursosTributarios: Course[]= [];
cursosLaborales: Course[]= [];
ancho:number;
elementos:number;
  constructor(public courseService: CourseService) {
    this.calcElements();
   }

  ngOnInit(): void {
    this.getCourses();

   

  }

  calcElements(){
    this.ancho = document.body.clientWidth;
    if(this.ancho<400){
      this.elementos =1.2;
    }
    else{
      this.elementos = 5.2
    }
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      loop: false,
      autoplay: {
        delay: 3000,
      },
      slidesPerView:this.elementos,
      spaceBetween:20
     
 
    
    });
  }


 


  getCourses(){
    this.courseService.getCourses().subscribe(
    res =>{
      this.courseService.courses = res;
  
      for(let course of this.courseService.courses){
        if( course.categoria==="CONTABLE"  || course.categoria==="contable"){
          this.cursosContables.push(course);
        }
        else if(course.categoria==="TRIBUTARIO"  || course.categoria==="Tributario"  || course.categoria==="tributario"){
          this.cursosTributarios.push(course);
        }
        else if(course.categoria==="LABORAL"  || course.categoria==="Laboral"  || course.categoria==="laboral"){
          this.cursosLaborales.push(course);
        }
      
      }
    },
 
    err => console.log(err)
    )
    console.log(this.cursosContables)
  }

  
}
