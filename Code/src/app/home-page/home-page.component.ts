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
  updatelist: any[];
  elementlist: any[] = [];
  name = 'Angular ' + VERSION.major;
  pdfSource = "https://firebasestorage.googleapis.com/v0/b/dsiapp-103c4.appspot.com/o/Books%2Fdiversity.pdf?alt=media&token=4574a454-dc34-4888-93b2-6abf15c5fe9f";
  textlist1: any[] = [];
  list12: any[] = [];
  htmlToAdd: any;
  droppedItems: any[] = [];
  updatelist1: any[] = [];
  page:number=1;

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
    for (let i = 0; i < this.everyele.length; i++) {
      let divVal=$('#txt' + i).html();
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
    console.log(this.everyele)
  }


}
