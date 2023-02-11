import { Component, ViewChild,ElementRef } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import jsPDF from 'jspdf';
import { OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ContactRequest, HEB } from 'src/models/contact-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  angForm!: FormGroup;
  

  ngOnInit(): void {
    {
      this.angForm = new FormGroup({
        rows: new FormArray([
          new FormGroup({
            subject: new FormControl(),
            desc: new FormArray([
              new FormControl()
            ])
          })
        ])
      });
    }
}

get rows(): FormArray{
  return this.angForm.get('rows') as FormArray;
}
rowDesc(index:number):FormArray {
  return this.rows.at(index).get('desc') as FormArray;
}
addRowField() {
  this.rows.push(new FormGroup({
    subject: new FormControl(),
    desc: new FormArray([
      new FormControl()
    ])
  }));
}

removeRowField(index:number){
  this.rows.removeAt(index); 
}

addDesc(index:number){
  this.rowDesc(index).push(new FormControl())
}
removeDesc(idx:number,jdx:number) {
  this.rowDesc(idx).removeAt(jdx);
}

deleteNameField(index:number) {
  if(this.rows.length!==1) {
  this.rows.removeAt(index); 
  }
}

onFormSubmit(): void {
  console.log(this.angForm.value);
  
  // for (let i = 0; i < this.rows.length; i++) {
  //   console.log(this.rows.value);
  // }
}



// onSubmit() {
//   // Make sure to create a deep copy of the form-model
//       let pdf = new jsPDF('p','pt','a4');
//     console.log(this.el.nativeElement);
    
//     pdf.html(this.el.nativeElement,{
//       callback: (doc) =>{
//         doc.save('test.pdf');
//       }
//     })

}
