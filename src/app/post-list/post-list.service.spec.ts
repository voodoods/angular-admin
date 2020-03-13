import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { PostListService } from './post-list.service'
import { IBlogPost } from './types'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'

describe('PostListService', () => {
  let service : PostListService
  let httpMock : HttpTestingController
  let blogPostsMock : IBlogPost[]
  let httpServiceSpy : jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    blogPostsMock = [
      {
        userId: 5,
        id: 1,
        title: 'my fine post'
      },
      {
        userId: 12,
        id: 2,
        title: 'my awesome post'
      },
      {
        userId: 8,
        id: 3,
        title: 'my bad post'
      }
    ]

    httpServiceSpy = jasmine.createSpyObj('HttpClient', ['get'])
    httpServiceSpy.get.and.returnValue(of(blogPostsMock));

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

    service = TestBed.get(PostListService)
    httpMock = TestBed.get(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy()
  });

  describe('getPostList', () => {
    it('should return a list of posts', (done : DoneFn) => {
      service
      .getPostList()
      .subscribe((res : IBlogPost[]) => {
        expect(res).toBe(blogPostsMock)
        done()
      })
    })
  })
})
