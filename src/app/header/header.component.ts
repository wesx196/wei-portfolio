import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  isAddingContact = false;

  onStartAddContact() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isAddingContact = true;
  }

  onCloseAddContact() {
    this.isAddingContact = false;
  }



}
