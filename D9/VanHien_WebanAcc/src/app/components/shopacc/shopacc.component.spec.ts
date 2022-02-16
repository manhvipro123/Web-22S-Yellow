import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopaccComponent } from './shopacc.component';

describe('ShopaccComponent', () => {
  let component: ShopaccComponent;
  let fixture: ComponentFixture<ShopaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
