import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsprojetComponent } from './page-detailsprojet.component';

describe('PageDetailsprojetComponent', () => {
  let component: PageDetailsprojetComponent;
  let fixture: ComponentFixture<PageDetailsprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetailsprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDetailsprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
