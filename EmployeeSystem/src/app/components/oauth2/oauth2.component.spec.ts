import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAuth2Component } from './oauth2.component';

describe('Oauth2Component', () => {
  let component: OAuth2Component;
  let fixture: ComponentFixture<OAuth2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OAuth2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OAuth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
