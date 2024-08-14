import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgClass,RouterLink,RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
@ViewChild('sideNav') nav!:ElementRef;
  
open(){

   
this.nav.nativeElement.style.width='240px';

}

close(){

 
  this.nav.nativeElement.style.width='0';
  console.log('ggggggggggggg');
  
}
}
