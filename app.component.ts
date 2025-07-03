import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemocomponentComponent } from './democomponent/democomponent.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,DemocomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to my first Angular App';
   user = 'Heer';
   input='';
}



 
