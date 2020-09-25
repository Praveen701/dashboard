import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  oldp = new FormControl('', [Validators.required, Validators.minLength(6)]);
  newp = new FormControl('', [Validators.required, Validators.minLength(6)]);
  newpc = new FormControl('', [Validators.required, Validators.minLength(6)]);

  getpassError0() {
    if (this.oldp.hasError('required')) {
      return 'Password is required';
    }

    return this.oldp.hasError('minlength') ? 'Password must be atleast 6 character' : '';
   }
   getpassError1() {
    if (this.oldp.hasError('required')) {
      return 'Password is required';
    }

    return this.newp.hasError('minlength') ? 'Password must be atleast 6 character' : '';
   }
   getpassError2() {
    if (this.oldp.hasError('required')) {
      return 'Password is required';
    }

    return this.newpc.hasError('minlength') ? 'Password must be atleast 6 character' : '';
   }

  



  constructor() { }
 
 
  
  
 
  ngOnInit(): void {
 
  }
  hide0 = true;
  hide1 = true;
    hide2 = true;
}
