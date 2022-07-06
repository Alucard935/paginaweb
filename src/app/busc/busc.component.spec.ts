import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscComponent } from './busc.component';

describe('BuscComponent', () => {
  let component: BuscComponent;
  let fixture: ComponentFixture<BuscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
