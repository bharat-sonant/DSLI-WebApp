import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
