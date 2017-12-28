import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-calculator',
    templateUrl: 'calculator.html'
})
export class CalculatorPage {
    constructor(public navCtrl: NavController, private alertCtrl: AlertController) { }

    result = '';

    btnClicked(btn) {
        if (btn == 'C') {
            this.result = '';
        }
        else if (btn == '=') {
            if (this.result == '') {
                return;
            }

            try {
                this.result = eval(this.result).toFixed(2);
            } catch (error) {
                this.showAlert();
                this.result = '';
            }
        }
        else {
            this.result += btn;
        }
    }

    showAlert() {
        this.alertCtrl.create({
            title: 'Malformed input',
            subTitle: 'Ooops, please try again...',
            buttons: ['Dismiss']
        }).present();
    }
}