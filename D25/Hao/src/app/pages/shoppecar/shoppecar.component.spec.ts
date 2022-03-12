import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppecarComponent } from './shoppecar.component';

describe('ShoppecarComponent', () => {
  let component: ShoppecarComponent;
  let fixture: ComponentFixture<ShoppecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
