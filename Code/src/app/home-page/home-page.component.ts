import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  textlist: any[];
  splittxt: any[] = [];
  splittxt1: any[] = [];
  splitstatment: any[] = [];
  everyele: any[];
  elementlist: any[] = [];
  name = 'Angular ' + VERSION.major;
  pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  textlist1: any[] = [];
  list12: any[] = [];
  htmlToAdd: any;
  droppedItems: any[] = [];


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
      this.everyele = this.textlist[0]["text"].split(" ")
      console.log(this.everyele)
      
    }
    else {
      window.alert("Please select text");
    }
  }



}
