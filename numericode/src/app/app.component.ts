import { Component } from '@angular/core';
import { WebService } from './services/web.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Welcome to Numericode';
  messageForm: any;
  message:string;

  constructor(private webservice : WebService, private formBuilder: FormBuilder){
    this.messageForm = this.formBuilder.group({
      message: ''
    });
  }

  async onSubmit(customerData) {
    // Decrypt the message data.
    let secretMessage:any = await this.webservice.decryptMessage(customerData.message);
    this.message = secretMessage.message;
    this.messageForm.reset();
  }

}
