import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './Container/containerComponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imageUrl:string ='/assets/PhotosWithSanta.webp';
  title = 'angular-basics';

  isImagedisable:boolean =false;

  searchValue:string="";
  changeSearchValue(eventData:any){
    console.log("Input value",<HTMLInputElement>eventData.target.value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;

  }
}
