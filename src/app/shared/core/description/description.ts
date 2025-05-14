import { effect, inject, Injectable, Signal, signal } from '@angular/core';

const defaultDescription = 'defaultDescription';

@Injectable({ providedIn: 'root' })
export class Description {
  private description = signal(defaultDescription);

  currentDescription = this.description.asReadonly();

  setDescription(description?: string | null) {
    this.description.set(description || defaultDescription);
  }
}

export const useDescription = (
  description: Signal<string | null | undefined>
) => {
  const descriptionService = inject(Description);

  effect(cleanUp => {
    descriptionService.setDescription(description());
  });
};
