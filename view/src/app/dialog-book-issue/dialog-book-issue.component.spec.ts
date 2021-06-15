import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBookIssueComponent } from './dialog-book-issue.component';

describe('DialogBookIssueComponent', () => {
  let component: DialogBookIssueComponent;
  let fixture: ComponentFixture<DialogBookIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBookIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBookIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
