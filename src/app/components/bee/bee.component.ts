import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css']
})
export class BeeComponent implements OnInit {

  @Input() bee;
  @Output() sendBee = new EventEmitter();
  @Output() sendContentoShow = new EventEmitter();




  allinfo(pBee, pCont) {
    this.sendBee.emit(pBee);
    this.sendContentoShow.emit(pCont);
  };

  constructor() {

  }

  ngOnInit() {
  }

}
