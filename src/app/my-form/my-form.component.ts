import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  name = '';
  email = '';

  constructor() { }

  submitForm() {
    console.log(`Name: ${this.name} Email: ${this.email}`);
  }
  ngOnInit() { }

}
