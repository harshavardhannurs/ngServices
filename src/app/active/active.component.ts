import { Component, Input } from '@angular/core';
import { AccountsService } from '../directives/accounts.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent {
  @Input() account:{username:string, status:string}
  @Input() index:number;

  constructor(private accountsService:AccountsService){}

  setAsInactive(){
    this.accountsService.changeAccountStatus(this.index, this.account.status);
  }

}
