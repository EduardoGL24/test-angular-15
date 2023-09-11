import { Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  name: string = '';
   
  constructor(private modalService: ModalService){
  }

  openModal(){
    this.modalService.openModal().afterClosed()
    .subscribe((resp) => {
      if (resp) {
        this.name = resp;
      }
    });
  }

  
}
