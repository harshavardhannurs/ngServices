import { Component, OnInit} from '@angular/core';
import { AccountsService } from './directives/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  activeAccounts:{username:string, status:string}[]
  inactiveAccounts:{username:string, status:string}[]

  constructor(private accountsService:AccountsService){}

  ngOnInit(){
    this.activeAccounts = this.accountsService.activeAccounts;
    this.inactiveAccounts = this.accountsService.inactiveAccounts;
  }
}
