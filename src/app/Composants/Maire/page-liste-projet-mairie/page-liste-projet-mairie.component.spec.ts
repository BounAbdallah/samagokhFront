import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeProjetMairieComponent } from './page-liste-projet-mairie.component';

describe('PageListeProjetMairieComponent', () => {
  let component: PageListeProjetMairieComponent;
  let fixture: ComponentFixture<PageListeProjetMairieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListeProjetMairieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageListeProjetMairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
