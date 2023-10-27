import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  scrollUpBtn = 'assets/img/scroll_up.png';

  onMouseEnter() {
    this.scrollUpBtn = 'assets/img/scroll_up_active.png';
  }

  onMouseLeave() {
    this.scrollUpBtn = 'assets/img/scroll_up.png';
  }

  formData = {
    name: '',
    email: '',
    message: '',
    privacyPolicyAccepted: false
  };
  // send mail
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  async submit() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    emailField.disabled = true;

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
    emailField.disabled = false;
  }

  // scroll to top
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
