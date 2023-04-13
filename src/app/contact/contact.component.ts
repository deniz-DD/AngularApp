import { Component } from '@angular/core';

@Component({
    selector:'app-contact', 
    templateUrl:'./contact.component.html',
    styles: [`

    .online{
        color: green;

    }
    
    
    `]
})

export class ContactComponent{

    serverId: number =10;
    serverStatus: string = 'Alle od';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    

    getServer(){
        return this.serverStatus
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green': 'red';
    }
  
        
        

    

}