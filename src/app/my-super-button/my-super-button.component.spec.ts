import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuperButtonComponent } from './my-super-button.component';

describe('MySuperButtonComponent', () => {
  let component: MySuperButtonComponent;
  let fixture: ComponentFixture<MySuperButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySuperButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySuperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
