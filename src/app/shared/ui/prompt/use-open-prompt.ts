import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Prompt } from './prompt';
import { PromptData } from './types';

export const useOpenPrompt = () => {
  const dialog = inject(MatDialog);
  return (data: PromptData) =>
    dialog.open<Prompt, PromptData, boolean>(Prompt, { data }).afterClosed();
};
