import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, map, startWith, Subject, switchMap } from 'rxjs';

export interface IUser {
  name: string,
  age: number;
  email: string;
}

function markFormControlsTouched(form: FormGroup) {
  Object.keys(form.controls).forEach(controlName => {
    form.get(controlName)?.markAsTouched();
    form.get(controlName)?.updateValueAndValidity();
  });
}

function markFormControlsUnTouched(form: FormGroup) {
  Object.keys(form.controls).forEach(controlName => {
    form.get(controlName)?.markAsUntouched();
    form.get(controlName)?.updateValueAndValidity();
  });
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  searchInput$ = new BehaviorSubject('');
  constructor(private http: HttpClient,
    private fb: NonNullableFormBuilder
  ) { }

  refresh$ = new Subject<void>();

  form = this.fb.group({
    name: ['', Validators.required],
    age: [, Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  URL = 'http://localhost:3000';
  users$ =
    this.refresh$.pipe(
      startWith(0),
      switchMap(_ => this.http.get<IUser[]>(this.URL + '/users'))
    ).pipe(
      switchMap(users => this.searchInput$.pipe(
        map(searchString => users.filter(user => user.name.includes(searchString)))
      ))
    );

  addUser() {
    if (this.form.invalid) {
      markFormControlsTouched(this.form);
      return;
    };
    this.http.post(this.URL + '/users', this.form.value).subscribe({
      next: _ => {
        this.refresh$.next();
        this.form.reset();
        markFormControlsUnTouched(this.form);
      },
      error: error => {
        console.error(error);
      }
    }
    );
  }

  onSelect(event: any) {
    console.log(event);
  }

}
