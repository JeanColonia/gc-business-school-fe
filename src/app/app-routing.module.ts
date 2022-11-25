import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from './components/course/course.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
{path:'gestionar-cursos', component: CourseComponent},
{path:'', component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
