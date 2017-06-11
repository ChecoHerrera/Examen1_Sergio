import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bee-activity',
  templateUrl: './bee-activity.component.html',
  styleUrls: ['./bee-activity.component.css']
})
export class BeeActivityComponent implements OnInit {
  @Input() selectedBee;
   @Input() selectedCont;
  constructor() { }

  ngOnInit() {
  }

}
