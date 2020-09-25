import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {  RouterModule } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';



import { MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MycampaingsComponent } from './mycampaings/mycampaings.component';
import {MatRippleModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { DialogpComponent } from './dialogp/dialogp.component';


@NgModule({
  declarations: [
    
    AppComponent,
    
    DashboardComponent,
    
    ProfileComponent,
    
    MycampaingsComponent,
    
    DialogComponent,
    
    DialogpComponent
  ],
entryComponents:[
  DialogComponent
],



  imports: [
    BrowserModule,MatRadioModule,MatSlideToggleModule,AppRoutingModule,
    MatCheckboxModule,MatSelectModule,MatMenuModule,MatCardModule,
    BrowserAnimationsModule,MatButtonModule,MatIconModule,
    MatToolbarModule,MatFormFieldModule,MatInputModule,
    MatDatepickerModule,MatButtonToggleModule,MatSidenavModule,
    MatListModule,RouterModule,MatChipsModule,MatRippleModule,
    MatTabsModule,FormsModule,MatDialogModule,
    ReactiveFormsModule,MatTooltipModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
