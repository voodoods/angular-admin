import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserListService } from './user-list.service'
import { IUser } from './types'
import { of } from 'rxjs'

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userListMock : IUser[];
  let userListServiceSpy : jasmine.SpyObj<UserListService>

  beforeEach(async(() => {
    userListMock = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net"
      },
    ]

    userListServiceSpy = jasmine.createSpyObj('UserListService', ['getUserList'])
    userListServiceSpy.getUserList.and.returnValue(of(userListMock));

    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatTableModule, HttpClientTestingModule ],
      declarations: [ UserListComponent ],
      providers: [
        {
          provide: UserListService,
          useValue: userListServiceSpy
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define a set of displayable columns', () => {
    expect(component.displayedColumns).toEqual(['id', 'username', 'email']);
  });

  describe('getUsers', () => {
    it('receives a list of users and stores them in userList', () => {
      component.getUsers()
      expect(component.userList.length).toBe(3)
    })
  })

  describe('ngOnInit', () => {
    it('calls getUsers on init', () => {
      const getUsersSpy = spyOn(component, 'getUsers')

      component.ngOnInit()
      expect(getUsersSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('onRowClicked', () => {
    it('logs a message to the console', () => {
      const consoleSpy = spyOn(window.console, 'log')

      component.onRowClicked(1)
      expect(consoleSpy).toHaveBeenCalledTimes(1)
      expect(consoleSpy).toHaveBeenCalledWith("Row clicked: ", 1)
    })
  })
});
