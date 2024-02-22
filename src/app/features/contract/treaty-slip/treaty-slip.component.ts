import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-treaty-slip',
  templateUrl: './treaty-slip.component.html',
  styleUrls: ['./treaty-slip.component.scss']
})
export class TreatySlipComponent implements OnInit {

  formData = new FormGroup ({
    uniqueMarketRef: new FormControl(''),
    treatyNumber: new FormControl(''),

  })
  
  array1: any[] = [
    { label: '2024', value: 'Underwriting 1' },
    { label: '2023', value: 'Underwriting 2' },
    { label: '2022', value: 'Underwriting 3' },
  ];
  constructor(){ }

  submit() {
    console.log('submit');
    
  }

  ngOnInit(): void {}

}
