import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {
  @Input() bees;
  @Output() sendBee = new EventEmitter();
  @Output() sendContentoShow = new EventEmitter();

  receivedBee(pBee) {
    this.sendBee.emit(pBee);
  }

  receivedContentoShow(pCont) {
    this.sendContentoShow.emit(pCont);
  }
  
  constructor() {

  }

  ngOnInit() {
  }

}
