import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators , FormArray } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  form = new FormGroup({
    name :new FormControl('jison',Validators.required),
    email :new FormControl('jisonkjames@gmail.com',Validators.required),
    skills :  new FormArray([
      new FormControl()
    ])
  });

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }
  addSkills() {
    this.skills.push(new FormControl);
  }
  removeSkills(i:number) {
    this.skills.removeAt(i);
  }

  constructor() {

    
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.form.controls.skills.value);
    
    
    
    
  }

}
