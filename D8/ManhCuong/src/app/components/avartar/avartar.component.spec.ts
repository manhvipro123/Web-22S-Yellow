import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvartarComponent } from './avartar.component';

describe('AvartarComponent', () => {
  let component: AvartarComponent;
  let fixture: ComponentFixture<AvartarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvartarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvartarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
