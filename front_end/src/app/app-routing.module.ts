import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NewteacherComponent } from './components/newteacher/newteacher.component';
import { NewstudentComponent } from './components/newstudent/newstudent.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'student',component:StudentComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'newteacher',component:NewteacherComponent},
  {path:'newstudent',component:NewstudentComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
