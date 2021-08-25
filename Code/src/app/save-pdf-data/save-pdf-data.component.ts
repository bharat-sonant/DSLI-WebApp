// import { Component, OnInit,ViewChild } from '@angular/core';
// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


// @Component({
//   selector: 'app-save-pdf-data',
//   templateUrl: './save-pdf-data.component.html',
//   styleUrls: ['./save-pdf-data.component.css']
// })
// export class SavePdfDataComponent {
//   constructor() {
//   }

//   timePeriods = [
//     'Bronze age',
//     'Iron age',
//     'Middle ages',
//     'Early modern period',
//     'Long nineteenth century'
//   ];

//   drop(event: CdkDragDrop<string[]>) {
//     moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
//   }

// }
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, VERSION } from '@angular/core';


@Component({
  selector: 'app-save-pdf-data',
   templateUrl: './save-pdf-data.component.html',
 styleUrls: ['./save-pdf-data.component.css']
})
export class SavePdfDataComponent  {
  textlist: any[];
  splittxt: any[] = [];
  splittxt1: any[] = [];
  splitstatment: any[] = [];
  everyele: any[];
  updatelist: any[];
  elementlist: any[] = [];
  name = 'Angular ' + VERSION.major;
  pdfSource = "http://www.africau.edu/images/default/sample.pdf";
  withCredentials: true
  textlist1: any[] = [];
  list12: any[] = [];
  htmlToAdd: any;
  droppedItems: any[] = [];
  updatelist1: any[] = [];


  constructor() {


  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.everyele, event.previousIndex, event.currentIndex);
    console.log(this.everyele)
  }

  ngOnInit() {


  }
  selectedText() {
    this.textlist = []
    this.everyele = []
    let selection = document.getSelection();
    let selectedText = selection.toString();


    if (selectedText != "") {
      this.splittxt = selectedText.split(".");
      this.textlist.push({ text: this.splittxt[0] }) as any;
      this.everyele = this.textlist[0]["text"].split(" ");
      console.log(this.everyele)

    }
    else {
      window.alert("Please select text");
    }
  }

  editText(index: any) {
    console.log(index);
    document.getElementById("txt" + index).addEventListener("input", function () {
      console.log("input event fired");
    }, false);


  }
  updateText() {
    this.updatelist = [];
    this.updatelist1 = [];
    let value = "";
    for (let i = 0; i <= this.everyele.length; i++) {
      let divVal=$('#txt' + i).html();
      console.log(divVal)
      if ( divVal!= "" && !String(divVal).includes("&nbsp;")) {
        if (value == "") {
          value = divVal;
        }
        else {
          value = value + " " + $('#txt' + i).html();
        }
      }
    }
    this.everyele = value.split(" ");
  }


}
