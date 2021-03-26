import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  capex_balance: number;
  capex_spent: number;
  opex_balance: number;
  opex_spent: number;
  asset_use: number;
  asset_active: number;
  notifications: number;

  constructor(private api: AppService) { }

  ngOnInit(): void {
    this.api.getStat().subscribe( (res) => {
      this.data = res[0];
      this.getDetails()
    });
  }

  getDetails() {
    this.notifications = this.data.total_notification;
    this.data.stat.forEach( x => {
      this.capex_balance =x[0].balance;
      this.capex_spent = x[0].spent;
      this.opex_balance = x[1].balance;
      this.opex_spent = x[1].spent;
      this.asset_active = x[2].active;
      this.asset_use = x[2].use;
    })
  }

}
