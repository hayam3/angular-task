import { data } from '../data';
import { ApiDataService } from './../api-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
constructor(private ApiDataService:ApiDataService){

}

usersData:data[]=[]

ngOnInit() {
 
  this.ApiDataService.getData().subscribe({
    next:(res)=>{

      this.usersData=res.data;
      console.log(res.data);
    },
    error:(err)=>{
       console.log(err);
       alert("eroorrrr")
       
    }

  })

  
}

isClicked:boolean=false;
data:data[]=[]



open(){
  this.isClicked=true;
//  this.data=dataUser;
  console.log("hhhhhhhhh");
  
}

close(){
  this.isClicked=false;
}

}
