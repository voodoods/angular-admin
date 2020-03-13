import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostListService } from './post-list.service'
import { IBlogPost } from './types'
import { of } from 'rxjs'

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let blogPostsMock : IBlogPost[];
  let postListServiceSpy : jasmine.SpyObj<PostListService>

  beforeEach(async(() => {
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

    postListServiceSpy = jasmine.createSpyObj('PostListService', ['getPostList'])
    postListServiceSpy.getPostList.and.returnValue(of(blogPostsMock));

    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatTableModule, HttpClientTestingModule ],
      declarations: [ PostListComponent ],
      providers: [
        {
          provide: PostListService,
          useValue: postListServiceSpy
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define a set of displayable columns', () => {
    expect(component.displayedColumns).toEqual(['id', 'title', 'userId']);
  });

  describe('getBogPosts', () => {
    it('receives a list of blog posts and stores them in blogList', () => {
      component.getBlogPosts()
      expect(component.blogPosts.length).toBe(3)
    })
  })

  describe('ngOnInit', () => {
    it('calls getBlogPosts on init', () => {
      const getBlogPostsSpy = spyOn(component, 'getBlogPosts')

      component.ngOnInit()
      expect(getBlogPostsSpy).toHaveBeenCalledTimes(1)
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
