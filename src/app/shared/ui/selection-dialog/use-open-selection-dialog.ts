import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { useDirection } from 'app/shared/core/i18n/translate';
import { SelectionDialog } from './selection-dialog';
import { SelectionDialogData } from './types';

export const useOpenSelectionDialog = () => {
  const dialog = inject(MatDialog);
  const dir = useDirection();

  return <T>(data: SelectionDialogData<T>) =>
    dialog
      .open<
        SelectionDialog<T>,
        SelectionDialogData<T>,
        T
      >(SelectionDialog, { data, direction: dir() })
      .afterClosed();
};
