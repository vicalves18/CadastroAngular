import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCadastrosComponent } from './criar-cadastros.component';

describe('CriarCadastrosComponent', () => {
  let component: CriarCadastrosComponent;
  let fixture: ComponentFixture<CriarCadastrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCadastrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
