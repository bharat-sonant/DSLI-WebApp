import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePdfDataComponent } from './save-pdf-data.component';

describe('SavePdfDataComponent', () => {
  let component: SavePdfDataComponent;
  let fixture: ComponentFixture<SavePdfDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePdfDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePdfDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
