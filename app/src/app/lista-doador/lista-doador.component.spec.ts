import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDoadorComponent } from './lista-doador.component';

describe('ListaDoadorComponent', () => {
  let component: ListaDoadorComponent;
  let fixture: ComponentFixture<ListaDoadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDoadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
