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
  commontextlist:any[];
  uncommontextlist:any[];
   disabled:boolean;
  checked:boolean;
  fingerlist:any[];
  
  
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
    let height1 = (windowHeight * 80) / 100;
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


  editText(index: any) {
    console.log(index);
    document.getElementById("txt" + index).addEventListener("input", function () {
      console.log("input event fired");
    }, false);


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
  commonText()
  { this.commontextlist=[]
    for(let i=0;i< this.everyele.length;i++)
    {
      let check= <HTMLInputElement>document.getElementById("chk"+i);
      if(check.checked==true)
      {
        let divVal=$('#txt' + i).html();
        this.commontextlist.push(divVal);
        

      }
      
     
    }
    console.log(this.commontextlist);
    
    for(let i=0;i< this.everyele.length;i++)
    {
      for(let j=0;j<=this.commontextlist.length;j++)
      {
      if(this.everyele[i] == this.commontextlist[j])
      {
        let element =<HTMLInputElement> document.getElementById("chk"+i);
        element.disabled=true;
        element.checked=false;
      }
     
    }
    }
  }

  uncommonText()
  { this.uncommontextlist=[]
    for(let i=0;i< this.everyele.length;i++)
    {
      let check= <HTMLInputElement>document.getElementById("chk"+i);
      if(check.checked==true)
      {
        let divVal=$('#txt' + i).html();
        this.uncommontextlist.push(divVal);
        

      }
      
    }
    console.log(this.uncommontextlist);

    for(let i=0;i< this.everyele.length;i++)
    {
      for(let j=0;j<=this.uncommontextlist.length;j++)
      {
      if(this.everyele[i] == this.uncommontextlist[j])
      {
        let element =<HTMLInputElement> document.getElementById("chk"+i);
        element.disabled=true;
        element.checked=false;
      }
     
    }
    }
           
  }
  finger()
  {
    this.fingerlist=[]
    for(let i=0;i< this.everyele.length;i++)
    {
      let check= <HTMLInputElement>document.getElementById("chk"+i);
      if(check.checked==true)
      {
        let divVal=$('#txt' + i).html();
        this.fingerlist.push(divVal);
        

      }
      
    }
    console.log(this.fingerlist);
    for(let i=0;i< this.everyele.length;i++)
    {
      for(let j=0;j<=this.fingerlist.length;j++)
      {
      if(this.everyele[i] == this.fingerlist[j])
      {
        let element =<HTMLInputElement> document.getElementById("chk"+i);
        element.disabled=true;
        element.checked=false;
      }
     
    }
    }
  }

}
