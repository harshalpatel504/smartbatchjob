import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitJobComponent } from './Update-Data-Job.component';

describe('SubmitJobComponent', () => {
  let component: SubmitJobComponent;
  let fixture: ComponentFixture<SubmitJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitJobComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
