import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeNavComponent } from './poke-nav.component';

describe('PokeNavComponent', () => {
  let component: PokeNavComponent;
  let fixture: ComponentFixture<PokeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
