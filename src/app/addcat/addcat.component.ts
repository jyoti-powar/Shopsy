import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { PrserService } from '../prser.service';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent implements OnInit {

  constructor(private prser:PrserService,private route:Router) { }

  ngOnInit(): void {
  }


  prform = new FormGroup({
   
    cat_id: new FormControl(''),
    cat_name: new FormControl(''),
   
  })


  savepr(): void{

    console.log(this.prform.value);
    this.prser.saveMonProd1(this.prform.value).subscribe(
      (data)=>{console.log(data)}
    )
    this.route.navigate(['/home'])

}
}