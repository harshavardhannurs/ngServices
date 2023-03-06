import { Injectable } from "@angular/core";

@Injectable()

export class AccountsService{
  activeAccounts = [
    {username:'Harry',status:'active'},
    {username:'Sarah',status:'active'},
    {username:'Angela',status:'active'}
  ];

  inactiveAccounts = [
    {username:'Jack',status:'inactive'},
    {username:'Colton',status:'inactive'}
  ];

  changeAccountStatus(id:number, status:string){
    if(status === 'active'){
      const swapAccount = this.activeAccounts.splice(id, 1)[0]
      swapAccount.status = 'inactive'
      this.inactiveAccounts.push(swapAccount)
    }else if(status === 'inactive'){
      const swapAccount = this.inactiveAccounts.splice(id, 1)[0]
      swapAccount.status = 'active'
      this.activeAccounts.push(swapAccount)
    }
  }

}