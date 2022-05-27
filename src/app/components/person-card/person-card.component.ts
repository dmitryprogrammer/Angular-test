import {Component} from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {filter, map, Observable, pluck, switchMap} from 'rxjs';

import {UsersService} from '../../core/services/users.service';
import {UserModel} from '../../core/models/users.models';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent {
  public user$: Observable<UserModel> = this.activatedRoute.url.pipe(
    filter((url: UrlSegment[]) => Boolean(url?.length)),
    pluck(0, 'path'),
    map((userId: string) => Number(userId)),
    switchMap((userId: number) => this.usersService.getUserById(userId))
  );
  public reacted = false;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  public reaction(userId: number): void {
    const nextId = userId === 2 ? 1 : 2;

    this.router.navigate(['./', nextId]).then(() => {
      this.reacted = false;
    });
  }

  public react(): void {
    this.reacted = true;
  }
}
