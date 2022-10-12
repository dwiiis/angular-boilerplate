import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BredcumbComponent } from './bredcumb.component';

describe('BredcumbComponent', () => {
  let component: BredcumbComponent;
  let fixture: ComponentFixture<BredcumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BredcumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BredcumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
