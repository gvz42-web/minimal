import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { SelectionDialogData } from './types';

@Component({
  selector: 'trm-selection-dialog',
  imports: [CdkListbox, CdkOption, TranslatePipe],
  templateUrl: './selection-dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionDialog<T> {
  private dialogRef = inject<MatDialogRef<SelectionDialog<T>, T>>(MatDialogRef);
  protected data: SelectionDialogData<T> = inject(MAT_DIALOG_DATA);

  protected selectedValue = signal<T>(this.data.selectedOption);

  close(value?: T) {
    this.dialogRef.close(value);
  }
}
