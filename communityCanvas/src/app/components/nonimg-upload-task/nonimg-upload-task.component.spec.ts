import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonimgUploadTaskComponent } from './nonimg-upload-task.component';

describe('NonimgUploadTaskComponent', () => {
  let component: NonimgUploadTaskComponent;
  let fixture: ComponentFixture<NonimgUploadTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonimgUploadTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonimgUploadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
