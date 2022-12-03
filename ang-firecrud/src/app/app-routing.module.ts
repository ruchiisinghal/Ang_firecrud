import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';



const routes: Routes = [
  {path: '', redirectTo:'/create', pathMatch:'full'},
  {path: 'create', component : CreateStudentComponent},
  {path: 'list-student', component : ListStudentComponent},
  {path: 'edit-student', component : EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
