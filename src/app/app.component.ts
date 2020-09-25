import { Component, Injectable } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';
import {DialogpComponent} from '../app/dialogp/dialogp.component';


@Component({
  moduleId: 'module.id',
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent  {

  openDialog(){
    this.dialog.open(DialogpComponent,{
      width:"300px",
      height:"230px",
      disableClose: true
    });
  }




  constructor(private dialog:MatDialog) {}

}
