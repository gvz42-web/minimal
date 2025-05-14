import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { useDirection } from 'app/shared/core/i18n/translate';
import { Prompt } from './prompt';
import { PromptData } from './types';

export const useOpenPrompt = () => {
  const dialog = inject(MatDialog);
  const dir = useDirection();
  return (data: PromptData) =>
    dialog
      .open<Prompt, PromptData, boolean>(Prompt, { data, direction: dir() })
      .afterClosed();
};
