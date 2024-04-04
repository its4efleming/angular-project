import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNRClassComponent } from './unrclass.component';

describe('UNRClassComponent', () => {
  let component: UNRClassComponent;
  let fixture: ComponentFixture<UNRClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UNRClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UNRClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
