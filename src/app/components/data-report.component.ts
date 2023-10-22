import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-data-report',
    template: `
        <h1>Filename : {{this.fileName}}</h1>
    `,
    // templateUrl:'./data-report.component.html',
    // styleUrls:['./data-report.component.css']
})

export class DataReportComponent{
    @Input() uploadedFile!:File;
    fileName = "";

    constructor(){
        if(this.uploadedFile){
            this.fileName = this.uploadedFile.name;
        }
    }
}