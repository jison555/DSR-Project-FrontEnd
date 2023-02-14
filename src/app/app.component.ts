import { Component, ViewChild,ElementRef, Output ,EventEmitter } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import jsPDF from 'jspdf';
import { OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  angForm!: FormGroup;
  isshowTable:boolean=false;
  data: any;
  
  // @ViewChild('content', {static:false}) el!:ElementRef;

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

tableView() {
  this.isshowTable=true;
}

onFormSubmit(): void {
  console.log(this.angForm.value);
  this.isshowTable=true;
  this.data = this.angForm.value;
  //this.angForm.reset();

    // Make sure to create a deep copy of the form-model
    //   
    let pdf = new jsPDF();
    // console.log(this.el.nativeElement);

    // autoTable(pdf, {
    //   head: [['Name', 'Email', 'Country']],
    //   body: [
    //     ['David', 'david@example.com', 'Sweden'],
    //     ['Castille', 'castille@example.com', 'Spain'],
    //     // ...
    //   ],
    // })
    // pdf.save('demo.pdf');
    
    // pdf.html(this.el.nativeElement,{
    //   callback: (pdf) =>{
    //     pdf.save('test.pdf');
    //   }
    // })
  
}




}
