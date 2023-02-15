import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PrserService } from '../prser.service';

@Component({
  selector: 'app-edit-pr',
  templateUrl: './edit-pr.component.html',
  styleUrls: ['./edit-pr.component.css']
})
export class EditPrComponent implements OnInit {

  constructor(private acr:ActivatedRoute, private prser:PrserService,private route:Router) { }

  ngOnInit(): void {

    this.acr.params.subscribe(
      (data)=>{this.curr_id1=data['id']}
      
    )
  
    this.acr
  }
  curr_id1:any;

  prform = new FormGroup({
    cat_id: new FormControl(''),
    cat_name: new FormControl(''),
    pr_id: new FormControl(''),
    pr_name: new FormControl(''),
    color: new FormControl(''),
    price: new FormControl('')
  })


  updateprod1()
  {
    this.prser.updateProd1(this.prform.value,this.curr_id1).subscribe(
      (info)=>{console.log(info)}
    )

    this.route.navigate(['/home']);

  }


}
