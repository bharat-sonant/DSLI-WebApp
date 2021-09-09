import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, VERSION } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

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
  arrayList1: any[];
  isChecked: boolean;
  commontextlist: any[];
  uncommontextlist: any[];
  savedtextlist: any[]
  checked: boolean;
  fingerlist: any[];
  datalist: any[];
  savedtextlist1: any[];
  filterList: any[];
  editTextList: any[];
  MoCapList: any[];
  constructor(public db: AngularFireDatabase) {
  }

  drop(event: CdkDragDrop<any>) {
    this.everyele[event.previousContainer.data.index] = event.container.data.item
    this.everyele[event.container.data.index] = event.previousContainer.data.item
  }

  ngOnInit() {
    this.datalist = [];
    this.filterList = [];
    let windowHeight = $(window).height();
    let height = (windowHeight * 100) / 100;
    let height1 = (windowHeight * 80) / 100;
    $("#left-div").css("height", height);
    $("#right-div").css("height", height1);
    this.savedtextlist = JSON.parse(localStorage.getItem("saveData"));
    if (this.savedtextlist == null) {
      this.savedtextlist = [];
    }
    let pageDataList = this.savedtextlist.filter((item) => item.page == this.page);
    if (pageDataList.length > 0) {
      this.filterList = pageDataList;
    }
    this.getData();

  }

  getData() {
    this.MoCapList = [];
    let dbPath = "MoCap";
    let instance = this.db.list(dbPath).valueChanges().subscribe(
      data => {
        instance.unsubscribe();
        if(data.length>0){
          for(let i=0;i<data.length;i++){
            this.MoCapList.push({word:data[i]["Word"]});
          }
        }
      }
    );
  }

  getSavedData() {
    if ($('#page').val() != "") {
      this.page = Number($('#page').val());
      this.filterList = [];
      let pageDataList = this.savedtextlist.filter((item) => item.page == this.page);
      if (pageDataList.length > 0) {
        this.filterList = pageDataList;
      }
    }
  }


  selectedText() {
    $('#savebtn').show();
    $('#blocksbtn').show();
    $('#txtSentance').show();

    this.page = Number($('#page').val());
    this.textlist = []
    let selection = document.getSelection();
    let selectedText = selection.toString();
    if (selectedText != "") {
      this.splittxt = selectedText.split(".");
      this.textlist.push({ text: this.splittxt[0] }) as any;
      $('#txtSentance').val(this.splittxt[0]);
      let arrayList = this.textlist[0]["text"].split(" ");
      $('#divRight').show();

    }
    this.commontextlist = [];
    this.fingerlist = [];
    this.uncommontextlist = [];
    this.everyele = [];
    this.getSavedData();
  }

  showTextBlocks() {
    $('#resetbtn').show();
    $('#deletebtn').show();
    $('#commonbtn').show();
    $('#uncommonbtn').show();
    $('#fingerbtn').show();
    $('#cmntextdiv').show();
    $('#uncmntextdiv').show();
    $('#fngtextdiv').show();
    $('#clicktxt').show();
    this.everyele = [];
    this.arrayList1 = [];
    let arrayList = [];
    this.fingerlist = [];
    this.commontextlist = [];
    this.uncommontextlist = [];
    let divval = $('#txtSentance').val();
    arrayList = divval.toString().split(" ");
    for (let i = 0; i < arrayList.length; i++) {
      if (arrayList[i].trim() != "") {
        this.everyele.push(arrayList[i].trim());
        let wordDetail=this.MoCapList.find(item=>item.word==arrayList[i].trim());
        if(wordDetail!=undefined){
          console.log(wordDetail.word);
          
        }
      }
    }
    if (this.everyele.length > 0) {
      for (let i = 0; i < this.everyele.length; i++) {
        let check = <HTMLInputElement>document.getElementById("chk" + i);
        if (check != null) {
          check.disabled = false;
        }
      }
    }

  }

  disableCheck() {
    for (let i = 0; i < this.everyele.length; i++) {
      for (let j = 0; j < this.commontextlist.length; j++) {
        if (this.everyele[i] == this.commontextlist[j]) {
          let element = <HTMLInputElement>document.getElementById("chk" + i);
          if (element.checked! = true) {
            element.disabled = true;
            element.checked = false;

          }
        }
      }
    }
  }

  editText(index: any) {
    this.editTextList = []
    document.getElementById("txt" + index).addEventListener("input", function () {
    }, false);

    for (let i = 0; i <= this.everyele.length; i++) {
      let divVal = $('#txt' + i).html();
      if (divVal != undefined) {
        if (!divVal.toString().includes("&nbsp;") && divVal != "" && !divVal.toString().includes("<br>")) {
          this.editTextList.push(divVal);
        }
      }
    }


  }


  deleteText() {

    this.updatelist = [];
    this.updatelist1 = [];
    this.arrayList = [];
    for (let i = 0; i < this.everyele.length; i++) {
      let check = <HTMLInputElement>document.getElementById("chk" + i);
      if (check.checked == false) {
        let divVal = $('#txt' + i).html();
        if (divVal != undefined) {
          if (!divVal.toString().includes("&nbsp;") && divVal != "" && !divVal.toString().includes("<br>")) {
            this.arrayList.push(divVal);

          }
        }
      }
    }
    this.everyele = this.arrayList;
    this.disableCheck()

  }


  commonText() {

    this.commontextlist = [];

    for (let i = 0; i < this.everyele.length; i++) {
      let check = <HTMLInputElement>document.getElementById("chk" + i);
      if (check.checked == true) {
        let divVal = $('#txt' + i).html();
        this.commontextlist.push(divVal);
        let element = <HTMLInputElement>document.getElementById("chk" + i);
        element.disabled = true;
        element.checked = false;

      }
    }

    for (let i = 0; i < this.everyele.length; i++) {
      for (let j = 0; j <= this.commontextlist.length; j++) {
        if (this.everyele[i] == this.commontextlist[j]) {
          let element = <HTMLInputElement>document.getElementById("chk" + i);
          element.disabled = true;
          element.checked = false;
        }

      }
    }

  }


  uncommonText() {
    this.uncommontextlist = [];
    for (let i = 0; i < this.everyele.length; i++) {
      let check = <HTMLInputElement>document.getElementById("chk" + i);
      if (check.checked == true) {
        let divVal = $('#txt' + i).html();
        this.uncommontextlist.push(divVal);
        let element = <HTMLInputElement>document.getElementById("chk" + i);
        element.disabled = true;
        element.checked = false;
      }
    }
    for (let i = 0; i < this.everyele.length; i++) {
      for (let j = 0; j <= this.uncommontextlist.length; j++) {
        if (this.everyele[i] == this.uncommontextlist[j]) {
          let element = <HTMLInputElement>document.getElementById("chk" + i);
          element.disabled = true;
          element.checked = false;
        }
      }
    }
  }


  finger() {
    this.fingerlist = [];
    for (let i = 0; i < this.everyele.length; i++) {
      let check = <HTMLInputElement>document.getElementById("chk" + i);
      if (check.checked == true) {
        let divVal = $('#txt' + i).html();
        this.fingerlist.push(divVal);
        let element = <HTMLInputElement>document.getElementById("chk" + i);
        element.disabled = true;
        element.checked = false;


      }

    }
    for (let i = 0; i < this.everyele.length; i++) {
      for (let j = 0; j <= this.fingerlist.length; j++) {
        if (this.everyele[i] == this.fingerlist[j]) {
          let element = <HTMLInputElement>document.getElementById("chk" + i);
          element.disabled = true;
          element.checked = false;
        }

      }
    }
  }


  reset() {

    this.showTextBlocks();

  }


  savedData() {
    this.savedtextlist = JSON.parse(localStorage.getItem("saveData"));

    if (this.savedtextlist == null) {
      this.savedtextlist = [];
    }
    for (let i = 0; i < this.textlist.length; i++) {
      this.savedtextlist.push({ page: this.page, text: this.textlist[i] })
    }
    let abc = localStorage.setItem("saveData", JSON.stringify(this.savedtextlist));
    if ($('#page').val() != "") {
      this.page = Number($('#page').val());
      this.filterList = [];
      let pageDataList = this.savedtextlist.filter((item) => item.page == this.page);
      if (pageDataList.length > 0) {
        this.filterList = pageDataList;
      }
    }

  }
}
