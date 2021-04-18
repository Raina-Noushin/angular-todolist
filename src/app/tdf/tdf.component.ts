import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tdf-root',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  title = 'New Template driven form';

  /*@ViewChild('contactForm',null) contactForm: NgForm;
  contact:contact;

  ngOnInit() {

    this.contact = {
      firstname:"",
      lastname:"",
      email:"",
    };

  }*/
  cityList:city[] = [
    new city("1", "Kolkata"),
    new city('2', 'Howrah')
  ];

  /*onSubmit() {
    console.log(this.contactForm.value);
  }*/
}

/*export class contact {
  firstname:string;
  lastname:string;
  email:string;
} */

export class city {
  id:string;
  name:string;

  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
