import { Component } from '@angular/core';
import { ZipSearchComponent } from './zip-search/zip-search.component'

@Component({
  moduleId: module.id,
  selector: 'zip-call-app',
  templateUrl: 'zip-call.component.html',
  styleUrls: ['zip-call.component.css'],
  directives: [ZipSearchComponent]
})
export class ZipCallAppComponent {
  title = 'zip-call works!';
}
