import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostraProductoPage } from './mostra-producto.page';

describe('MostraProductoPage', () => {
  let component: MostraProductoPage;
  let fixture: ComponentFixture<MostraProductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
