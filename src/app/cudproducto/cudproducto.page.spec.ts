import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUDProductoPage } from './cudproducto.page';

describe('CUDProductoPage', () => {
  let component: CUDProductoPage;
  let fixture: ComponentFixture<CUDProductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CUDProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
