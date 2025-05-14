import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectionDialog } from './selection-dialog';
import { SelectionDialogData } from './types';

export const useOpenSelectionDialog = () => {
  const dialog = inject(MatDialog);

  return <T>(data: SelectionDialogData<T>) =>
    dialog
      .open<
        SelectionDialog<T>,
        SelectionDialogData<T>,
        T
      >(SelectionDialog, { data })
      .afterClosed();
};
