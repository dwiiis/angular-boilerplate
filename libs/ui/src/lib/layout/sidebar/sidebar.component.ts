import { LayoutService } from '@angular-boilerplate/services';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'nglibs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) {}
}
