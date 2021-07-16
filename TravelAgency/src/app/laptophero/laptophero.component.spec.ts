import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopheroComponent } from './laptophero.component';

describe('LaptopheroComponent', () => {
  let component: LaptopheroComponent;
  let fixture: ComponentFixture<LaptopheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
