import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHeaderComponent } from './app-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppMainMenuModule } from '../app-main-menu/app-main-menu.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppHeaderComponent', () => {
  let component : AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatToolbarModule, AppMainMenuModule, RouterTestingModule ],
      declarations: [ AppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a logo image', () => {
    let componentHTML : HTMLElement = fixture.nativeElement

    expect(componentHTML.querySelectorAll('.app-logo img').length).toBe(1)
  })
});
