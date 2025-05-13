import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { AuthStore } from '../../features/auth/core/auth-store';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputField } from '../../shared/ui/input-field/input-field';
import { BackButton } from '../../shared/ui/back-button/back-button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'trm-login',
  templateUrl: './login.html',
  imports: [InputField, ReactiveFormsModule, BackButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private authStore = inject(AuthStore);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);

  protected isLoading = signal(false);

  protected loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  protected login() {
    const { email, password } = this.loginForm.value;

    if (email && password) {
      this.isLoading.set(true);
      this.authStore
        .login({ email, password })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    }
  }
}
