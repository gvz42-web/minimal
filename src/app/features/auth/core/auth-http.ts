import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { delay, of } from 'rxjs';
import { Credentials } from '../model/auth';

const mockUser: User = {
  firstName: 'John',
  lastName: 'Doe',
};

const mockToken = 'MY_SUPER_FAKE_TOKEN';

@Injectable({ providedIn: 'root' })
export class AuthHttp {
  login(credentials: Credentials) {
    return of(mockToken).pipe(delay(1000));
  }

  getProfile() {
    return of(mockUser).pipe(delay(1000));
  }
}
