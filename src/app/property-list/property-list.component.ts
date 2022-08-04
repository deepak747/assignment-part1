import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  addPropertyFrom: any
  propertyList: any = []

  constructor(private fb: FormBuilder) {
    this.addPropertyFrom = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      length: new FormControl('', Validators.required),
      width: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  submit() {

    if (this.addPropertyFrom?.invalid) {
      return
    }
    this.propertyList.push(this.addPropertyFrom?.value)

  }
  deleteId(id: any) {
    alert('Are you want to sure delete this data!')
    this.propertyList.splice(id, 1);
  }
  get f() {
    return this.addPropertyFrom.controls;
  }
}
