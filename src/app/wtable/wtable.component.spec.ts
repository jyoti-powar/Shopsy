import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtableComponent } from './wtable.component';

describe('WtableComponent', () => {
  let component: WtableComponent;
  let fixture: ComponentFixture<WtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
