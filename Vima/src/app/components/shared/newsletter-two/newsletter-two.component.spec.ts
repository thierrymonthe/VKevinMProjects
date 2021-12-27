import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterTwoComponent } from './newsletter-two.component';

describe('NewsletterTwoComponent', () => {
  let component: NewsletterTwoComponent;
  let fixture: ComponentFixture<NewsletterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
