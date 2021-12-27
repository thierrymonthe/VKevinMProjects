import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCtaComponent } from './video-cta.component';

describe('VideoCtaComponent', () => {
  let component: VideoCtaComponent;
  let fixture: ComponentFixture<VideoCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
