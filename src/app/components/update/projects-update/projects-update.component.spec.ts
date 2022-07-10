import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsUpdateComponent } from './projects-update.component';

describe('ProjectsUpdateComponent', () => {
  let component: ProjectsUpdateComponent;
  let fixture: ComponentFixture<ProjectsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
