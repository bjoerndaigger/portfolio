import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Join',
      languages: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System: create, organize, and prioritize tasks with drag-and-drop functionality, while assigning users and categories.',
      img: 'assets/img/join_board.png',
      url: 'https://join.daigger.de/',
      github: 'https://github.com/bjoerndaigger/join'
    },
    {
      name: 'El Pollo Loco',
      languages: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against a crazy chicken.',
      img: 'assets/img/el_pollo_loco.png',
      url: 'https://el-pollo-loco.daigger.de/',
      github: 'https://github.com/bjoerndaigger/el-pollo-loco'
    },
    {
      name: 'Simple CRM',
      languages: 'Angular | Typescript | Firebase',
      description: 'A very simple Customer Relationship Management system that works with CRUD functionality.',
      img: 'assets/img/simple_crm.png',
      url: 'https://simple-crm.daigger.de/',
      github: 'https://github.com/bjoerndaigger/simple-crm'
    },
  ];
}
