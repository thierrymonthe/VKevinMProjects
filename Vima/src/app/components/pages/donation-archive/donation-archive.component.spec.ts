import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationArchiveComponent } from './donation-archive.component';

describe('DonationArchiveComponent', () => {
  let component: DonationArchiveComponent;
  let fixture: ComponentFixture<DonationArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
