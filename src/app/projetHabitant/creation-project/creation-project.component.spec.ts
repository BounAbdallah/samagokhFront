import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationProjectComponent } from './creation-project.component';

describe('CreationProjectComponent', () => {
  let component: CreationProjectComponent;
  let fixture: ComponentFixture<CreationProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
