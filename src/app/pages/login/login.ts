import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthStore } from '../../features/auth/core/auth-store';
import { BackButton } from '../../shared/ui/back-button/back-button';
import { InputField } from '../../shared/ui/input-field/input-field';

@Component({
  selector: 'min-login',
  templateUrl: './login.html',
  imports: [InputField, ReactiveFormsModule, BackButton, TranslatePipe],
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
