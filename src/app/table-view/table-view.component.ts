import { Component, OnInit, Input } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'



@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})


export class TableViewComponent implements OnInit {


  ELEMENT_DATA = [{"subject": "1111","desc": "333"},
                    { "subject": "2222","desc": "444"}
                  ];

  @Input() item: any;

  displayedColumns: string[] = ['subject', 'desc'];
  dataSource:any;


  constructor() { 
  }



  ngOnInit(): void {
    this.dataSource=this.item.rows;
    console.log("item", this.item.rows);

    // autoTable(doc, {
    //   head: [['Topic', 'Desc']],
    //   body: [],
    // })

    // for (let i = 0; i < this.item.rows.length; i++){
      
    // }
  }



}
