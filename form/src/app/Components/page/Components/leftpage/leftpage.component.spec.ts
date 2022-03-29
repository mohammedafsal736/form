import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftpageComponent } from './leftpage.component';

describe('LeftpageComponent', () => {
  let component: LeftpageComponent;
  let fixture: ComponentFixture<LeftpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
