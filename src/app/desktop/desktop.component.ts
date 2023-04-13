import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  allowNewServer: boolean =  false;
  serverC: string = 'Server was not created'
  serName: string = ' ';
  serverCreated = false;
  servers = ['Test'];

  btn = document.getElementById("button-1");
   

  constructor(){

    setTimeout(  () =>{
      this.allowNewServer =true;

    }, 2000 );
  }

  onCreateServer(){
    if(this.serName !== ' '){
      this.serverC = 'Server was created! Name is ' + this.serName;
      this.servers.push(this.serName);

    }else{
      this.serverC ="The Server has name due to some problems in the code."
    }
    
  }
 


  onUpdateServerName(event: Event){

    this.serName = (<HTMLInputElement>event.target).value;

}

}
