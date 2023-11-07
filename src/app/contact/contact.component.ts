import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(500, style({ opacity: 1 }))]),
    ]),
  ],
})
export class ContactComponent {
  isSentSuccessfully: boolean = false;
  scrollUpBtn = 'assets/img/scroll_up.png';

  /**
   * Object to store form data fields.
   */
  formData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

 /**
   * ViewChild reference for the form elements in the template.
   */
  @ViewChild('myForm', { static: false }) myForm!: NgForm;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;

    /**
   * Disables the provided form fields.
   * @param nameField - Reference to the name field.
   * @param emailField - Reference to the email field.
   * @param messageField - Reference to the message field.
   */
  async disableFields(nameField, emailField, messageField) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
  }

   /**
   * Enables the provided form fields.
   * @param nameField - Reference to the name field.
   * @param emailField - Reference to the email field.
   * @param messageField - Reference to the message field.
   */
  async enableFields(nameField, emailField, messageField) {
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
  }

   /**
   * Sends form data to the specified URL using a POST request.
   * @param fd - FormData containing form data to be sent.
   */
  async sendFormData(fd) {
    await fetch('https://bjoerndaigger.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd,
    });
  }

   /**
   * Handles form submission by disabling, sending data, enabling, resetting the form, and displaying a success message.
   */
  async submit() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    this.disableFields(nameField, emailField, messageField);

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    await this.sendFormData(fd);

    this.enableFields(nameField, emailField, messageField);

    this.myForm.reset();
    this.showSuccessMessage();
  }

    /**
   * Displays a success message and hides it after 3 seconds.
   */
  showSuccessMessage() {
    this.isSentSuccessfully = true;

    setTimeout(() => {
      this.isSentSuccessfully = false;
    }, 3000);
  }

  /**
   * Scrolls to the top of the page.
   */
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  /**
   * Handles the mouse enter event to change the scroll-up button image.
   */
  onMouseEnter() {
    this.scrollUpBtn = 'assets/img/scroll_up_active.png';
  }

  /**
   * Handles the mouse leave event to reset the scroll-up button image.
   */
  onMouseLeave() {
    this.scrollUpBtn = 'assets/img/scroll_up.png';
  }
}
