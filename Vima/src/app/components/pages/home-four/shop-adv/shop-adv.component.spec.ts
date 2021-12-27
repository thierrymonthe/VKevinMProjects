import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAdvComponent } from './shop-adv.component';

describe('ShopAdvComponent', () => {
  let component: ShopAdvComponent;
  let fixture: ComponentFixture<ShopAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
