import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationUpdateComponent } from './qualification-update.component';

describe('QualificationUpdateComponent', () => {
  let component: QualificationUpdateComponent;
  let fixture: ComponentFixture<QualificationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
