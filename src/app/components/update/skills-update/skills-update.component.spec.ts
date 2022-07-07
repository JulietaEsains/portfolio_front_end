import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsUpdateComponent } from './skills-update.component';

describe('SkillsUpdateComponent', () => {
  let component: SkillsUpdateComponent;
  let fixture: ComponentFixture<SkillsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
