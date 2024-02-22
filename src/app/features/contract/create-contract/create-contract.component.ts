import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {

  formData = new FormGroup ({
    uniqueMarketRef: new FormControl(''),
    treatyNumber: new FormControl(''),

  })
  public contractName:any = "";
  public selectedbureauType:any;

  status = [
    { label: 'UMR', value: 'UMR' },
    { label: 'Settlement Reference', value: 'Settlement Reference' },
    { label: 'Contract Name', value: 'Contract Name' },
  ];

  submissiontype = [
    { label: 'Select 1', value: '1' },
    { label: 'Select 2', value: '2' },
    { label: 'Select 3', value: '3' },
  ];
  submissionChannel =  [
    {
      "id":1,
      "name":"AnS"
    },
    {
      "id":2,
      "name":"Manual"
    }
  ];
  bureauType = [
    {
      "label":"Llyod's",
      "id":1,
      "value":"Llyod's",
      "checked" :false

    },
    {
      "label":"ILU",
      "id":2,
      "value":"ILU",
      "checked" :false

    },
    {
      "label":"LIRMA",
      "id":3,
      "value":"LIRMA",
      "checked" :false

    }
  ]

  constructor() { }

  ngOnInit(): void {
   
  }
  submit() {
    console.log();
    
  }
  getbureauType(value:any){
    this.selectedbureauType = value;
    console.log(value)
  }

}
