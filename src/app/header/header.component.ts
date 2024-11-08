import { Component, ElementRef, ViewChild } from '@angular/core';
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
    //Make the page return to top after clicking the contact button
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isAddingContact = true;
  }

  onCloseAddContact() {
    this.isAddingContact = false;
  }

  @ViewChild('navbarContent') navbarContent!: ElementRef;

  toggleNavbar(): void {
    const element = this.navbarContent.nativeElement as HTMLElement;
    element.classList.toggle('show');
  }

  


}
