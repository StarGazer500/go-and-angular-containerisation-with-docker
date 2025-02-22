import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEntryComponent } from './main-entry.component';

describe('MainEntryComponent', () => {
  let component: MainEntryComponent;
  let fixture: ComponentFixture<MainEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
