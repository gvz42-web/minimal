import {
  ChangeDetectionStrategy,
  Component,
  effect,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'trm-input-field',
  templateUrl: './input-field.html',
  imports: [TranslatePipe],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputField),
      multi: true,
    },
  ],
  host: {
    class: 'trm-input-field block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputField implements ControlValueAccessor {
  type = input<'text' | 'email' | 'password'>('text');
  placeholder = input('');
  label = input('');

  protected value = signal('');

  onChangeEffect = effect(() => {
    this.onChange(this.value());
  });

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | null | undefined): void {
    this.value.set(value || '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
