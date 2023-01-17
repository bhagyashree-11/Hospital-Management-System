import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratioinComponent } from './registratioin.component';

describe('RegistratioinComponent', () => {
  let component: RegistratioinComponent;
  let fixture: ComponentFixture<RegistratioinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratioinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistratioinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
