import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTabComponent } from './skills-tab.component';

describe('SkillsTabComponent', () => {
  let component: SkillsTabComponent;
  let fixture: ComponentFixture<SkillsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
