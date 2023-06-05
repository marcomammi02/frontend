import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent {

  constructor(private dataService: DataService) {
    this.getObjectFromService()
  }

  resultsObj: any;
  getObjectFromService() {
    this.resultsObj = this.dataService.resultObj;
  }
}

