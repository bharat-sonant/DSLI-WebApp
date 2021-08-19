import { Component, OnInit,VERSION } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  textlist:any[];
  splittxt:any[]=[];
  name = 'Angular ' + VERSION.major;
  pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }

  ngOnInit() {
   
  }
  selectedText()
  {  this.textlist=[]
    
    let selection = document.getSelection();
    let selectedText = selection.toString();
    
    if(selectedText!="")
    {
      this.splittxt=selectedText.split("." ); 
      console.log(this.splittxt)
      for(let i=0;i<this.splittxt.length;i++)
      { 
        this.textlist.push({text:this.splittxt[i],sno:(i+1)});
      } 
    }
    else
    {
      window.alert("Please select text");
      
    } 
  }
}
