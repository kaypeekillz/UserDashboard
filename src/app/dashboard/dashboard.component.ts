import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  capex_balance: any;
  capex_spent: any;
  opex_balance: any;
  opex_spent: any;
  asset_use: any;
  asset_active: any;

  constructor(private api: AppService) { }

  ngOnInit(): void {
    this.api.getStat().subscribe( (res) => {
      this.data = res[0];
      this.getDetails()
    });
  }

  getDetails() {
    console.log(this.data);
    console.log("stat: ", this.data.stat); 
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
