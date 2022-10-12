import { LayoutService } from '@angular-boilerplate/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nglibs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}
}
