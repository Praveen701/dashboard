import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-mycampaings',
  templateUrl: './mycampaings.component.html',
  styleUrls: ['./mycampaings.component.css']
})
export class MycampaingsComponent implements OnInit {
  availableColors: ChipColor[] = [
    {name: 'Travel', color: 'accent'},
    {name: 'Food', color: 'accent'},
    {name: 'Fashion', color: 'accent'},
    {name: 'Gaming', color: 'accent'},
       {name: 'Technology', color: 'accent'},
    {name: 'Education', color: 'accent'},
    {name: 'Automobile', color: 'accent'},
    {name: 'Modeling', color: 'accent'},
    {name: 'Crafts', color: 'accent'},
    {name: 'More', color: 'warn'}
    
 

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
