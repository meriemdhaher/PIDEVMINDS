import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmationDialog(data: any): void {
    this.dialog.open(ConfirmationdialogComponent, {
      width: '400px',
      data: { details: data },
    });
  }

  closeConfirmationDialog(): void {
    this.dialog.closeAll();
  }
}
