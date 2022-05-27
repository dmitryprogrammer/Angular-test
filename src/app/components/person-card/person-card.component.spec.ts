import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';

import {PersonCardComponent} from './person-card.component';
import {UsersService} from '../../core/services/users.service';
import {UsersModel} from '../../core/models/users.models';

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

describe('PersonCardComponent', () => {
  let component: PersonCardComponent;
  let fixture: ComponentFixture<PersonCardComponent>;

  const userServiceStub = {
    getUserById: (): UsersModel => UsersData,
  };

  const activatedRouteStub = {
    url: of(1),
  };

  const routerStub: Partial<Router> = {
    navigate: () => Promise.resolve(true),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonCardComponent],
      providers: [
        {provide: UsersService, useValue: userServiceStub},
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub,
        },
        {provide: Router, useValue: routerStub},
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initial reacted should be false', () => {
    expect(component.reacted).toBeFalsy();
  });
});
