import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewteacherComponent } from './components/newteacher/newteacher.component';
import { NewstudentComponent } from './components/newstudent/newstudent.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherComponent,
    StudentComponent,
    SidenavComponent,
    NewteacherComponent,
    NewstudentComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
