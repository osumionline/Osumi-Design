import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsumiDesignComponent } from './osumi-design.component';

describe('OsumiDesignComponent', () => {
  let component: OsumiDesignComponent;
  let fixture: ComponentFixture<OsumiDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsumiDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsumiDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
