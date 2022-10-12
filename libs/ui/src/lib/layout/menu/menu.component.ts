import { LayoutService } from '@angular-boilerplate/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nglibs-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/home'],
          },
        ],
      },
      {
        label: 'UI Components',
        items: [
          {
            label: 'Datatable',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/table/basic'],
          }
        ],
      },
    ];
  }
}
