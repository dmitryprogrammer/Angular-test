import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {UsersService} from './users.service';
import {TestBed} from '@angular/core/testing';
import {UsersModel} from '../models/users.models';

describe('UserService', () => {
  const UsersData: UsersModel = [
    {
      id: 1,
      name: 'Sara',
      userPic: '/assets/images/default-userpic.jpg',
      age: 21,
    },
    {
      id: 2,
      name: 'Jessica',
      userPic: '/assets/images/default-userpic.jpg',
      age: 23,
    },
  ];

  let usersService: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });

    usersService = TestBed.inject(UsersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('UserService should be created', () => {
    expect(usersService).toBeTruthy();
  });

  it('UserService getUsers method should return UsersData', (done) => {
    usersService.getUsers().subscribe((users: UsersModel) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(UsersData);
      done();
    });

    const request = httpTestingController.expectOne(usersService.URL);
    expect(request.request.method).toBe('GET');
    request.flush(UsersData);
  });

  afterAll(() => {
    httpTestingController.verify();
  });
});
