import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HeaderComponent {
  openMenu: boolean = false;

  toggleMobileMenu(): void {
    this.openMenu = !this.openMenu;
  }
}
