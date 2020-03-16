import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { UserListService } from './user-list.service'
import { IUser } from './types'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'

describe('PostListService', () => {
  let service : UserListService
  let httpMock : HttpTestingController
  let userListMock : IUser[]
  let httpServiceSpy : jasmine.SpyObj<HttpClient>

  beforeEach(() => {
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

    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get'])
    httpServiceSpy.get.and.returnValue(of(userListMock));

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: HttpClient,
          useValue: httpServiceSpy
        }
      ]
    })

    service = TestBed.get(UserListService)
    httpMock = TestBed.get(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy()
  });

  describe('getPostList', () => {
    it('should return a list of posts', (done : DoneFn) => {
      service
      .getUserList()
      .subscribe((res : IUser[]) => {
        expect(res).toBe(userListMock)
        done()
      })
    })
  })
})
