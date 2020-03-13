import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainMenuComponent } from './app-main-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppMainMenuComponent', () => {
  let component: AppMainMenuComponent;
  let fixture: ComponentFixture<AppMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AppMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a list container for menu items', () => {
    let componentHTML : HTMLElement = fixture.nativeElement

    expect(componentHTML.querySelectorAll('.main-menu').length).toBe(1)
  })

  it('should render a "dashboard" menu item', () => {
    let componentHTML : HTMLElement = fixture.nativeElement

    expect(componentHTML.querySelectorAll('li')[0].innerText).toBe('dashboard')
  })

  it('should render a "blog posts" menu item', () => {
    let componentHTML : HTMLElement = fixture.nativeElement

    expect(componentHTML.querySelectorAll('li')[1].innerText).toBe('blog posts')
  })
});
