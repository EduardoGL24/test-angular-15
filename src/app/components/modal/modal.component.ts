import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  name: string = '';

  constructor(
    public dialogRef: MatDialogRef<any>,
	) {}

  saveName(){
    this.dialogRef.close(this.name);
  }

}
