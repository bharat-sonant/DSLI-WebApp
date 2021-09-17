import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, VERSION } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from "ngx-toastr";



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
  data: any;
  commonFindList: any[];
  textstring: any[];
  DatabaseList: any[];
  pageNo: any;
  sentanceNo: any;
  pdfSentance: any[];
  prevPage: number;
  deletedList: any[];
  getDeletedList: any[];
  DataList: any[];
  getdataList: any[];
  delList: any[];

  constructor(public db: AngularFireDatabase, public toastr: ToastrService) {
  }

  ngOnInit() {
    this.getDeleted();
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
  }


  drop(event: CdkDragDrop<any>) {
    this.everyele[event.previousContainer.data.index] = event.container.data.item
    this.everyele[event.container.data.index] = event.previousContainer.data.item
  }


  getSavedData(event: any, type: any) {
    if (type == 1) {
      this.pdfSentance = [];
      let dbPath = "PDFSentance/Book1/" + this.page;
      let instance = this.db.object(dbPath).valueChanges().subscribe(
        data => {
          instance.unsubscribe();
          if (data != null) {
            let keyArray = Object.keys(data);
            for (let i = 0; i < keyArray.length; i++) {
              let index = keyArray[i];
              this.pdfSentance.push({ index: index, actual: data[index]["actual"], modified: data[index]["modified"] });
            }
            this.sentanceNo = Number(this.pdfSentance[this.pdfSentance.length - 1]["index"]) + 1;
          }
          else {
            this.sentanceNo = 1;
          }
        }
      );
    } else if (event.key == "Enter") {
      let pageNo = $('#page').val();
      this.prevPage = Number(pageNo);
      if (pageNo != "") {
        this.pdfSentance = [];
        let dbPath = "PDFSentance/Book1/" + Number(pageNo);
        let instance = this.db.object(dbPath).valueChanges().subscribe(
          data => {
            instance.unsubscribe();
            if (data != null) {
              let keyArray = Object.keys(data);
              for (let i = 0; i < keyArray.length; i++) {
                let index = keyArray[i];
                this.pdfSentance.push({ index: index, actual: data[index]["actual"], modified: data[index]["modified"] });
              }
              this.sentanceNo = Number(this.pdfSentance[this.pdfSentance.length - 1]["index"]) + 1;
            }
            else {
              this.sentanceNo = 1;
            }
          }
        );
      }
    }
  }


  getDeleted() {
    this.getDeletedList = [];
    let dbPath = "deletedWords/";
    let instance = this.db.object(dbPath).valueChanges().subscribe(
      data => {
        instance.unsubscribe();
        if (data != null) {
          let keyArray = Object.keys(data);
          if (keyArray.length > 0) {
            for (let i = 0; i < keyArray.length; i++) {
              let key = keyArray[i];
              let word = data[key];
              this.getDeletedList.push({ key: key, word: word });
            }
          }
        }
      });
  }


  selectedText() {
    $('#savebtn').show();
    $('#blocksbtn').show();
    $('#txtSentance').show();
    this.page = Number($('#page').val());
    if (this.prevPage != this.page) {
      this.textlist = [];
      this.arrayList = [];
      this.pdfSentance = [];
      let dbPath = "PDFSentance/Book1/" + this.page;
      let instance = this.db.object(dbPath).valueChanges().subscribe(
        data => {
          instance.unsubscribe();
          if (data != null) {
            let keyArray = Object.keys(data);
            for (let i = 0; i < keyArray.length; i++) {
              let index = keyArray[i];
              this.pdfSentance.push({ index: index, actual: data[index]["actual"], modified: data[index]["modified"] });
            }
            this.sentanceNo = Number(this.pdfSentance[this.pdfSentance.length - 1]["index"]) + 1;
          }
          else {
            this.sentanceNo = 1;
          }
        })
    }
    else {
      this.pdfSentance = [];
      let dbPath = "PDFSentance/Book1/" + this.page;
      let instance = this.db.object(dbPath).valueChanges().subscribe(
        data => {
          instance.unsubscribe();
          if (data != null) {
            let keyArray = Object.keys(data);
            for (let i = 0; i < keyArray.length; i++) {
              let index = keyArray[i];
              this.pdfSentance.push({ index: index, actual: data[index]["actual"], modified: data[index]["modified"] });
            }
            this.sentanceNo = Number(this.pdfSentance[this.pdfSentance.length - 1]["index"]) + 1;
          }
          else {
            this.sentanceNo = 1;
          }
        });
    }
    this.textlist = []
    let selection = document.getSelection();
    let selectedText = selection.toString();
    if (selectedText != "") {
      this.splittxt = selectedText.split(".");
      this.textlist.push({ text: this.splittxt[0] }) as any;
      $('#txtSentance').val(this.splittxt[0]);
      let arrayList = this.textlist[0]["text"].split(" ");
      $('#divRight').show();
      this.textstring = arrayList.join("");

    }
    else {
      this.setAlertMessage("error", "Select Text From Book");
    }
    this.commontextlist = [];
    this.fingerlist = [];
    this.uncommontextlist = [];
    this.everyele = [];
  }


  showTextBlocks() {
    $('#resetbtn').show();
    $('#deletebtn').show();
    $('#commonbtn').show();
    $('#uncommonbtn').show();
    $('#fingerbtn').show();
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
    this.setColor();
    this.getSavedData(null, 1);
    this.seticon();
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
          console.log(this.editTextList)
        }
      }
    }
  }


  setAlertMessage(type: any, message: any,) {
    if (type == "error") {
      this.toastr.error(message, "", {
        timeOut: 4000,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: "toast-bottom-right",
      });
    } else {
      this.toastr.error(message, "", {
        timeOut: 4000,
        toastClass: "alert alert-info",
        positionClass: "toast-bottom-right",
      });
    }
  }


  commonText() {
    this.commontextlist = [];
    for (let i = 0; i < this.everyele.length; i++) {
      let check = <HTMLInputElement>document.getElementById("chk" + i);
      if (check.checked == true) {
        check.checked=false;
        let divVal = $('#txt' + i).html();
        let element = <HTMLElement>document.getElementById("dragdiv" + i);
        console.log(element.className);
        if (element.className != "inner sign-found") {
        this.commontextlist.push(divVal);
        this.saveData(divVal.toLowerCase(), "common");
        $('#frequency' + i).html("common");
        this.setAlertMessage("success", "!!!Saved!!!");
        }
       
      }
    }
  }


  uncommonText() {
    this.uncommontextlist = [];
    for (let i = 0; i < this.everyele.length; i++) {
      let check = <HTMLInputElement>document.getElementById("chk" + i);
      if (check.checked == true) {
        check.checked = false;
        let divVal = $('#txt' + i).html();

        let element = <HTMLElement>document.getElementById("dragdiv" + i);
        console.log(element.className);
        if (element.className != "inner sign-found") {
          this.uncommontextlist.push(divVal);
          this.saveData(divVal.toLowerCase(), "unCommon");
          $('#frequency' + i).html("un common");
          this.setAlertMessage("success", "!!!Saved!!!");
        }



      }
    }

  }


  finger() {
    this.fingerlist = [];
    for (let i = 0; i < this.everyele.length; i++) {
      let check = <HTMLInputElement>document.getElementById("chk" + i);
      if (check.checked == true) {
        check.checked=false;
        let divVal = $('#txt' + i).html();
        let element = <HTMLElement>document.getElementById("dragdiv" + i);
        console.log(element.className);
        if (element.className != "inner sign-found") {
          this.fingerlist.push(divVal);
          this.saveData(divVal.toLowerCase(), "finger");
          $('#frequency' + i).html("finger");
          this.setAlertMessage("success", "!!!Saved!!!");
        }

        
      }
    }
  }


  saveData(word: any, type: any) {
    let dbPath = "WordFrequency/" + word + "/" + type;
    let instance = this.db.object(dbPath).valueChanges().subscribe(
      data => {
        instance.unsubscribe();
        if (data != null) {
          let count = Number(data) + 1;
          dbPath = "WordFrequency/" + word;
          if (type == "common") {
            this.db.object(dbPath).update({ common: count });
          }
          else if (type == "unCommon") {
            this.db.object(dbPath).update({ unCommon: count });
          }
          else if (type == "finger") {
            this.db.object(dbPath).update({ finger: count });
          }

        }
        else {
          let count = 1;
          dbPath = "WordFrequency/" + word;
          if (type == "common") {
            this.db.object(dbPath).update({ common: count });
          }
          else if (type == "unCommon") {
            this.db.object(dbPath).update({ unCommon: count });
          }
          else if (type == "finger") {
            this.db.object(dbPath).update({ finger: count });
          }
        }
      }
    );
  }


  savedData() {
    let modified = "";
    for (let i = 0; i < this.everyele.length; i++) {
      let word = this.everyele[i].trim();
      let deletedWord = this.getDeletedList.find(item => item.word == word);
      if (deletedWord == undefined) {
        modified = modified + " " + word;
      }
    }

    let isData = false;
    for (let i = 0; i < this.pdfSentance.length; i++) {
      console.log(this.pdfSentance[i]["actual"].trim())
      let arraylist=this.pdfSentance[i]["actual"].split(" ")
      if (this.textstring == arraylist.join("")) {
        isData = true;
        let dbPath = "PDFSentance/Book1/" + this.page + "/" + this.pdfSentance[i]["index"];
        this.db.object(dbPath).update({ modified: modified });
      }
    }
    if (isData == false) {
      this.setAlertMessage("success", "!!!Saved!!!");
      let dbPath = "PDFSentance/Book1/" + this.page + "/" + this.sentanceNo;

      const data = {
        actual: this.textlist[0]["text"],
        modified: modified,
        actualString: this.textstring
      }
       this.db.object(dbPath).update(data);
    }

    this.getSavedData(null, 1);
  }


  seticon() {
    for (let i = 0; i < this.everyele.length; i++) {
      for (let j = 0; j < this.getDeletedList.length; j++) {
        if (this.everyele[i] == this.getDeletedList[j]["word"]) {
          setTimeout(() => {
            $("#dlticon" + i).show();
          }, 200);
        }
      }
    }
  }


  setColor() {
    for (let i = 0; i < this.everyele.length; i++) {
      let word = this.everyele[i].trim();
      let dbPath = "WordFrequency/" + word.toLowerCase();
      let frequencyInstance = this.db.object(dbPath).valueChanges().subscribe(
        data => {
          frequencyInstance.unsubscribe();
          if (data != null) {
            if (data["isSignAvailable"] == "yes") {
              let element = <HTMLElement>document.getElementById("dragdiv" + i);
              let className = element.className;
              if (className != null) {
                $("#dragdiv" + i).removeClass(className);
              }
              $('#dragdiv' + i).addClass("inner sign-found");
            }
            else {
              let common = 0;
              let unCommon = 0;
              let finger = 0;
              if (data["common"] != null) {
                common = data["common"];
              }
              if (data["unCommon"] != null) {
                unCommon = data["unCommon"];
              }
              if (data["finger"] != null) {
                finger = data["finger"];
              }

              if (common >= unCommon && common >= finger) {
                $('#frequency' + i).html("common");
              }
              else if (unCommon >= common && unCommon >= finger) {
                $('#frequency' + i).html("un common");
              }

              else if (finger >= common && finger >= unCommon) {
                $('#frequency' + i).html("finger");
              }
            }
          }
        }
      );
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
      for (let j = 0; j < this.uncommontextlist.length; j++) {
        if (this.everyele[i] == this.uncommontextlist[j]) {
          let element = <HTMLInputElement>document.getElementById("chk" + i);
          if (element.checked! = true) {
            element.disabled = true;
            element.checked = false;
          }
        }
      }
      for (let j = 0; j < this.fingerlist.length; j++) {
        if (this.everyele[i] == this.fingerlist[j]) {
          let element = <HTMLInputElement>document.getElementById("chk" + i);
          if (element.checked! = true) {
            element.disabled = true;
            element.checked = false;

          }
        }
      }
    }
  }


  reset() {
    this.setAlertMessage("success", "Reset successfully!!");
    this.showTextBlocks();
  }


  deleteText() {
    this.updatelist = [];
    this.updatelist1 = [];
    this.arrayList = [];
    this.deletedList = []
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
      else if (check.checked == true) {
        let divVal = $('#txt' + i).html();
        this.deletedList.push(divVal);
        check.checked = false;
        this.setAlertMessage("success", "Deleted!!")
      }
      else {
        check.checked = false;
      }
    }
    this.deleteSelected()
    this.everyele = this.arrayList;
    this.disableCheck()
  }


  deleteSelected() {
    this.getDeleted();
    let dbPath = "deletedWords/";
    for (let i = 0; i < this.deletedList.length; i++) {
      this.db.list(dbPath).push(this.deletedList[i])
    }
  }


  deleteSentance(index: any) {
    this.setAlertMessage("success", "Sentence Deleted successfully!!");
    let dbPath = "PDFSentance/Book1/" + this.page + "/" + index;
    this.db.object(dbPath).remove();
    setTimeout(() => {
      this.getSavedData(null, 1);
    }, 200);
  }


  deleteFromDatabase(index: any) {
    this.setAlertMessage("success", "Remove word from DeletedWords!!");
    $('#dlticon' + index).hide();
    let word = this.everyele[index];
    let dlist = [];
    for (let i = 0; i < this.getDeletedList.length; i++) {
      if (this.getDeletedList[i]["word"] == word) {
        this.db.object("deletedWords/" + this.getDeletedList[i]["key"]).remove();
      }
      else {
        dlist.push({ key: this.getDeletedList[i]["key"], word: this.getDeletedList[i]["word"] });
      }
    }
    this.getDeletedList = [];
    this.getDeletedList = dlist;
  }



}



