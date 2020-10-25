import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  steps = [
    'From',
    'Info',
    'Date',
    'Size',
    'Where',
    'Success'
  ];
  currentStep = 0;

  @HostListener('document:keyup.enter', ['$event'])
  onEnterPress(): void {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
      console.log(this.currentStep);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
