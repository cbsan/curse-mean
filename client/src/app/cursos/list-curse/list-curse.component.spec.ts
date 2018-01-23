import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCurseComponent } from './list-curse.component';

describe('ListCurseComponent', () => {
  let component: ListCurseComponent;
  let fixture: ComponentFixture<ListCurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
