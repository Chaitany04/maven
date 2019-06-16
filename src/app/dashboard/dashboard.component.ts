import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'profile_image'];
  dataSource;
  myCustomValue:boolean = true;
  constructor(private api: ApiService , private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    console.log(this.api);
  }

  getRecords() {
    let context = this;
    context.spinnerService.show();
    this.api.getRecord().subscribe(
      function (success) {
        debugger
        context.dataSource = success
        context.spinnerService.show();
      }
    );
  }

}
