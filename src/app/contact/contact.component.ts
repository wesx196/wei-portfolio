import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @Output() close = new EventEmitter<void>();
  enteredName = '';
  enteredEmail = '';
  enteredMessage = '';
  isClicked = false;
  

  onCancel() {
    this.isClicked = false;
    this.close.emit();
  }

  public sendEmail(e: Event) {

    this.isClicked = true;
    e.preventDefault();

    if(this.enteredName && this.enteredEmail && this.enteredMessage) {

      emailjs
      .sendForm('service_ln3fdnj', 'template_169i1rs', e.target as HTMLFormElement, {
        publicKey: 'ZIyJROy6E2InjB0Cd',
      })
      .then(
        () => {
          alert('Message sent successfully!')
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
    }
    
  }

}
