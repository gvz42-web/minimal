import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { PromptData } from './types';

@Component({
  selector: 'trm-prompt',
  imports: [TranslatePipe],
  templateUrl: './prompt.html',
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Prompt {
  private dialogRef = inject<MatDialogRef<Prompt, boolean>>(MatDialogRef);
  protected data: PromptData = inject(MAT_DIALOG_DATA);

  close(agree: boolean) {
    this.dialogRef.close(agree);
  }
}
