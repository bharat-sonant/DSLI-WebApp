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
  arrayList1: any[];
  isChecked: boolean;
  
  constructor() {


  }

  drop(event: CdkDragDrop<any>) {
    this.everyele[event.previousContainer.data.index] = event.container.data.item
    this.everyele[event.container.data.index] = event.previousContainer.data.item
  }



  ngOnInit() {

    const hideThisDiv=true;
    let windowHeight = $(window).height();
    let height = (windowHeight * 100) / 100;
    let height1 = (windowHeight * 100) / 100;
    $("#left-div").css("height", height);
    $("#right-div").css("height", height1);

  }
  selectedText() {

    this.textlist = []
    // this.everyele = []
    let selection = document.getSelection();
    let selectedText = selection.toString();


    if (selectedText != "") {
      this.splittxt = selectedText.split(".");
      this.textlist.push({ text: this.splittxt[0] }) as any;
      $('#txtSentance').val(this.splittxt[0]);
      let arrayList = this.textlist[0]["text"].split(" ");
      $('#divRight').show();
      
    }
  }

  showTextBlocks() {
    this.everyele = []
    this.arrayList1 = []
    let arrayList = [];
    let divval = $('#txtSentance').val();
    arrayList = divval.toString().split(" ");
    for (let i = 0; i < arrayList.length; i++) {
      if (arrayList[i].trim() != "") {
        this.everyele.push(arrayList[i].trim());
      }
    }



  }


  
  updateText() {
    this.updatelist = [];
    this.updatelist1 = [];
    let value = 0;
    let arrayList = [];
    for (let i = 0; i < this.everyele.length; i++) {
      let check = <HTMLInputElement>document.getElementById("chk"+i);
      if (check.checked == false) {
        let divVal = $('#txt' + i).html();
        if (divVal != undefined) {
          if (!divVal.toString().includes("&nbsp;") && divVal != "" && !divVal.toString().includes("<br>")) {
            arrayList.push(divVal);
          }
        }
      }
    }
    this.everyele = arrayList;
    console.log(this.everyele);
  }
  // commonText()
  // {
  //   for(let i=0;i< this.everyele.length;i++)
  //   {
      
  //   }
  // }

}
