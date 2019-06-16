import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { DataSourceComponent } from './data-page/data-source/data-source.component';
import { DataPageModule } from './data-page/data-page.module';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  {
    path: "info", component: InfoComponent, 
    children: [
      {
        path:"",
        component: HomeComponent
      },
      {
        path:"home",
        component: HomeComponent
      },
      {
        path:"news",
        component: NewsComponent
      },
      {
        path:"signup",
        component: SignupFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    DataPageModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
