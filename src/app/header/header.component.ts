import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  solgan: string ="I am the new solgan";

  getSolgan() {
    return "I am from the method";

  }
}
