import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationSidebarComponent } from './donation-sidebar.component';

describe('DonationSidebarComponent', () => {
  let component: DonationSidebarComponent;
  let fixture: ComponentFixture<DonationSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
