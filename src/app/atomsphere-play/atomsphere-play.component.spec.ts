import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomspherePlayComponent } from './atomsphere-play.component';

describe('AtomspherePlayComponent', () => {
  let component: AtomspherePlayComponent;
  let fixture: ComponentFixture<AtomspherePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomspherePlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomspherePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
