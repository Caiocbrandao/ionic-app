import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidePage } from '../slide/slide';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  title:string = "Contato";

  constructor(
    public navCtrl: NavController
    ) {}

  gotoSlide(){
    this.navCtrl.push(SlidePage);
  }

}
