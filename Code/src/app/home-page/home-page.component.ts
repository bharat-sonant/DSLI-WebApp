import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
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
  pdfSource = "../assets/chapter1.pdf";
  textlist1: any[] = [];
  list12: any[] = [];
  htmlToAdd: any;
  droppedItems: any[] = [];
  updatelist1: any[] = [];
  page: number = 1;
  arrayList = [];
  abc: any;



  constructor() {


  }

  drop(event: CdkDragDrop<any>) {
    this.everyele[event.previousContainer.data.index] = event.container.data.item
    this.everyele[event.container.data.index] = event.previousContainer.data.item
  }



  ngOnInit() {


    let windowHeight = $(window).height();
    let height = (windowHeight * 90) / 100;
    let height1 = (windowHeight * 95) / 100;
    $("#left-div").css("height", height);
    $("#right-div").css("height", height1);

  }
  selectedText() {
    this.textlist = []
    this.everyele = []
    let selection = document.getSelection();
    let selectedText = selection.toString();


    if (selectedText != "") {
      this.splittxt = selectedText.split(".");
      this.textlist.push({ text: this.splittxt[0] }) as any;
      let arrayList = this.textlist[0]["text"].split(" ");
      for (let i = 0; i < arrayList.length; i++) {
        if (arrayList[i].trim() != "") {
          this.everyele.push(arrayList[i].trim());
        }
      }

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
    let arrayList = [];
    for (let i = 0; i < this.everyele.length; i++) {

      let divVal = $('#txt' + i).html();
      if (divVal != undefined) {
        if (!divVal.toString().includes("&nbsp;") && divVal != "" && !divVal.toString().includes("<br>")) {
          arrayList.push(divVal);
        }
      }
    }
    this.everyele = arrayList;
    console.log(this.everyele);

  }


}
