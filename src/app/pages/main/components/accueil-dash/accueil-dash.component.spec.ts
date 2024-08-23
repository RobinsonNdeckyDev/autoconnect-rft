import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilDashComponent } from './accueil-dash.component';

describe('AccueilDashComponent', () => {
  let component: AccueilDashComponent;
  let fixture: ComponentFixture<AccueilDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
