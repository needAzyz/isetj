import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tpform } from './tpform';

describe('Tpform', () => {
  let component: Tpform;
  let fixture: ComponentFixture<Tpform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tpform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tpform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
