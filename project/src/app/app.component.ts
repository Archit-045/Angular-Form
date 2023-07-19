import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Registration Form';
  user: string = '';
  number : string = ''
  address : string = ''
  collage : string =''
  student : any = null ;
  edit : any = null ;
  

 onSubmit(){
    this.student= {
      user : this.user,
      number : this.number,
      address : this.address,
     collage : this.collage,
}
}
  onCleartext()
  {
    this.user = ' ';
    this.address = ' ';
    this.number = ' ';
    this.collage = ' '
  }
  onEdit(){
   this.student = this.user
   this.student = this.number
   this.student = this.address
   this.student = this.collage
   }
}
