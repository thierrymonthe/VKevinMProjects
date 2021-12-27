import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterOneComponent } from './newsletter-one.component';

describe('NewsletterOneComponent', () => {
  let component: NewsletterOneComponent;
  let fixture: ComponentFixture<NewsletterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
