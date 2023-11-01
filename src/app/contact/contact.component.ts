import { Component, ElementRef, ViewChild } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate(500, style({ opacity: 1 })),
      ]),
      /* transition(':leave', [
        animate(500, style({ opacity: 0 })),
      ]), */
    ]),
  ],
})
export class ContactComponent {
  isSentSuccessfully: boolean = false;
  scrollUpBtn = 'assets/img/scroll_up.png';

  formData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  // send mail
  @ViewChild('myForm', { static: false }) myForm!: NgForm;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;

  async submit() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    await fetch('https://bjoerndaigger.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd,
    });

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;

    this.myForm.reset();
    this.showSuccessMessage();

  }

  showSuccessMessage() {
    this.isSentSuccessfully = true;
  
    setTimeout(() => {
      this.isSentSuccessfully = false;
    }, 4000); 
  }
  
  
  // scroll to top
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  onMouseEnter() {
    this.scrollUpBtn = 'assets/img/scroll_up_active.png';
  }

  onMouseLeave() {
    this.scrollUpBtn = 'assets/img/scroll_up.png';
  }
}
