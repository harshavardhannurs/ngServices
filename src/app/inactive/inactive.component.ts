import { Component, Input } from '@angular/core';
import { AccountsService } from '../directives/accounts.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent {
  @Input() account:{username:string, status:string}
  @Input() index:number;

  constructor(private accountsService:AccountsService){}

  setAsActive(){
    this.accountsService.changeAccountStatus(this.index, this.account.status);
  }
}
