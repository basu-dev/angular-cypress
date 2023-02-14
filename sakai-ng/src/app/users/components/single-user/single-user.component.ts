import { Component, Input } from '@angular/core';
import { IUser } from '../users/users.component';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent {

  @Input() user: IUser | null = null;
  startingLetter = '';

  ngOnInit() {
    this.startingLetter = this.user?.name.slice(0, 1).toUpperCase() ?? '';
  }
}
