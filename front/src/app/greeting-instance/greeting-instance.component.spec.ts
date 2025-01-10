import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingInstanceComponent } from './greeting-instance.component';

describe('GreetingInstanceComponent', () => {
  let component: GreetingInstanceComponent;
  let fixture: ComponentFixture<GreetingInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingInstanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
