import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDashboardComponent } from './app-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

describe('AppDashboardComponent', () => {
  let component: AppDashboardComponent;
  let fixture: ComponentFixture<AppDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatGridListModule ],
      declarations: [ AppDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a MUI card containing the title "Revenue"', () => {
    let componentHTML : HTMLElement = fixture.nativeElement

    expect(componentHTML.querySelectorAll('.card')[0].querySelector('h1.mat-headline').textContent).toBe("Revenue")
  })
  it('should render a MUI card containing the title "Tools"', () => {
    let componentHTML : HTMLElement = fixture.nativeElement

    expect(componentHTML.querySelectorAll('.card')[1].querySelector('h1.mat-headline').textContent).toBe("Tools")
  })
  it('should render a MUI card containing the title "Users"', () => {
    let componentHTML : HTMLElement = fixture.nativeElement

    expect(componentHTML.querySelectorAll('.card')[2].querySelector('h1.mat-headline').textContent).toBe("Users")
  })
});
