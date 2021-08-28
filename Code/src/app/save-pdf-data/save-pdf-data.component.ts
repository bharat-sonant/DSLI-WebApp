import { Component, OnInit,ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-save-pdf-data',
  templateUrl: './save-pdf-data.component.html',
  styleUrls: ['./save-pdf-data.component.css']
})
export class SavePdfDataComponent {
  constructor() {
  }

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

}