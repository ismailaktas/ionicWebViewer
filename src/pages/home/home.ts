import { Component, Input } from '@angular/core';
import {DomSanitizer, SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @Input()
  id:string; 
  url: string = "";
  urlSafe: SafeResourceUrl;
  jsonUrl: any;

  constructor(public sanitizer: DomSanitizer) {
    var data = require('../../assets/json/url.json');
    this.url = data[0]["webUrl"]; 
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  
}
