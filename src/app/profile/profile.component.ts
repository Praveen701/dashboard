import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { DialogComponent } from '../dialog/dialog.component';
import {  MatDialog } from '@angular/material/dialog';
import {bprofile} from '../formV/bprofile';




interface Payments{
  value: string;
  viewValue: string;
}



interface Gender {
  value: string;
  viewValue: string;
}

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedValue: string;
  
  bprofileForm: FormGroup;
  bprofile: bprofile;


  user = {
    firstname: '',
   lastname: '', 
   pnumber:'',
   date:'',
   gender:'',
   country:'',
   city:'',
   language:'',
   state:''
  
  }; 



  


onFileSelected(event){
  console.log(event);
}








state:string[] = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 
  'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu', 'Jharkhand', 'Karnataka', 'Kashmir', 
  'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry',
   'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 
  'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'
];




payment: Payments[] = [
  {value: '0', viewValue: 'Bank Transfer'},
  {value: '1', viewValue: 'UPID'}

];

  gen: Gender[] = [
    {value: '0', viewValue: 'Male'},
    {value: '1', viewValue: 'Female'},
    {value: '2', viewValue: 'Others'}
  ];
  availableColors: ChipColor[] = [
    {name: 'Arts', color: 'primary'},
    {name: 'Automobile', color: 'primary'},
    {name: 'Beauty&Makeup', color: 'primary'},
    {name: 'Business&Statup', color: 'primary'},
       {name: 'Education&Career', color: 'primary'},
    {name: 'Fashion', color: 'primary'},
    {name: 'Fitness&Health', color: 'primary'},
    {name: 'Lifestyle', color: 'primary'},
    {name: 'Marketing', color: 'primary'},
    {name: 'Photography', color: 'primary'},
    {name: 'Social Media', color: 'primary'},
    {name: 'Society', color: 'primary'},
    {name: 'Sports', color: 'primary'},
    {name: 'technology', color: 'primary'},
    {name: 'Videography', color: 'primary'},
    {name: 'Travel', color: 'primary'}
    
    
  ];

  openDialog(){
    this.dialog.open(DialogComponent,{
      width:"320px",
      height:"400px",
      disableClose: true
    });
  }


  
 
  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required, Validators.required]);
  lastname = new FormControl('', [Validators.required, Validators.required]);
  dob = new FormControl('', [Validators.required, Validators.required]);
  pnumber = new FormControl('', [Validators.required, Validators.minLength(8)]);
  gender = new FormControl('', [Validators.required, Validators.required]);
  country = new FormControl('', [Validators.required, Validators.required]);
  city = new FormControl('', [Validators.required, Validators.required]);
  language = new FormControl('', [Validators.required, Validators.required]);
  states = new FormControl('', [Validators.required, Validators.required]);
  
/*KYC*/
  pcard = new FormControl('', [Validators.required, Validators.required]);
  anumber = new FormControl('', [Validators.required, Validators.required]);




  getError2(){
    this.pnumber.hasError('required');
    this.anumber.hasError('required');
    return 'This is required';

  }
  getError(){
    this.firstname.hasError('required');
    this.lastname.hasError('required');
    this.language.hasError('required');
    this.states.hasError('required');
    this.gender.hasError('required');
    this.city.hasError('required');
    this.country.hasError('required');
    this.language.hasError('required');
    return 'This is required';

  }




  getErrorMessage2() {
    if (this.pnumber.hasError('required')) {
      return 'Not Verified';
    }
   }
   
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Not Verified';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
   }
  
 
  constructor(private dialog:MatDialog,private bp: FormBuilder) {}

  
  
  ngOnInit(): void {
    
  }
  createForm() {
    this.bprofileForm = this.bp.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      pnumber:['', Validators.required ],
      date:['', Validators.required ],
      gender:['', Validators.required ],
      country:['', Validators.required ],
      city:['', Validators.required ],
      language:['', Validators.required ],
      state:['', Validators.required ]
    });
  }
 
}
