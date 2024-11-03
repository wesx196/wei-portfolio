import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @Output() close = new EventEmitter<void>();
  enteredName = '';
  enteredEmail = '';
  enteredMessage = '';

  onCancel() {
    this.close.emit();
  }

  // onSubmit() {
  //   this.close.emit();
  // }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_ln3fdnj', 'template_169i1rs', e.target as HTMLFormElement, {
        publicKey: 'ZIyJROy6E2InjB0Cd',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          alert('Message sent successfully!')
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

}
