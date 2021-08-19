import { Component, OnInit,VERSION } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  name = 'Angular ' + VERSION.major;
  pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }

  ngOnInit() {
  }

}
