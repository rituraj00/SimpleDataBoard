import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleDataBoard';
  isOpen = false;
  uploading = false;
  fileTypeActive:any = {
    csv: false,
    xlsx: false
  };


  toggleMenu(){
    console.log("Clicked");
    this.isOpen = !this.isOpen;
  }

  resetFiles(){
    for (let key in this.fileTypeActive) {
      if(Object.hasOwn(this.fileTypeActive, key)){
        this.fileTypeActive[key] = false;
      }
    }
  }

  onFileSelected(event: any) {
    this.uploading = true;

    const file: File = event.target.files[0];
    
    if (file) {
      this.resetFiles();
      if (file.name.endsWith('.csv')) {
        this.fileTypeActive.csv = true;
        } else if (file.name.endsWith('.xlsx')) {
          this.fileTypeActive.xlsx = true;
        } else {
        alert('Unsupported file format. Please upload a CSV or XLSX file.');
      }
    }

    setTimeout(() => {
      this.uploading = false;
    },2500);
  }
}
