import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bee-activity',
  templateUrl: './bee-activity.component.html',
  styleUrls: ['./bee-activity.component.css']
})
export class BeeActivityComponent implements OnInit {
  @Input() selectedBee;
  @Input() selectedCont;
  @Input() showCont = false;
  @Input() showCont2 = false;
  @Input() showCont3 = false;
  @Input() myUser;
   post = '';


  receivedContentoShow(pCont) {

    this.showCont = pCont;

  }

  receivedContentoShow2(pCont) {

    this.showCont2 = pCont;

  }
  receivedContentoShow3(pCont) {
    this.showCont3 = pCont;

  }

  receivedPost(pPost) {
   this.post = pPost;

  }

  constructor() { }


  ngOnInit() {
  }

}
