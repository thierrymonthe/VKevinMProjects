import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySidebarComponent } from './story-sidebar.component';

describe('StorySidebarComponent', () => {
  let component: StorySidebarComponent;
  let fixture: ComponentFixture<StorySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorySidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
