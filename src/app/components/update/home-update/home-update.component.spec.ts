import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpdateComponent } from './home-update.component';

describe('HomeUpdateComponent', () => {
  let component: HomeUpdateComponent;
  let fixture: ComponentFixture<HomeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
