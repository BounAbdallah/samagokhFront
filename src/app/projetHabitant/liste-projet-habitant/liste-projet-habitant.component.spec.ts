import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProjetHabitantComponent } from './liste-projet-habitant.component';

describe('ListeProjetHabitantComponent', () => {
  let component: ListeProjetHabitantComponent;
  let fixture: ComponentFixture<ListeProjetHabitantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeProjetHabitantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeProjetHabitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
