import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrserService } from '../prser.service';

@Component({
  selector: 'app-wtable',
  templateUrl: './wtable.component.html',
  styleUrls: ['./wtable.component.css']
})
export class WtableComponent implements OnInit {

  constructor(private prser:PrserService,private route:Router) { }

  ngOnInit(): void {
    this.getData1()
  }

  prdtList1:any;
  getData1(){
    this.prser.geturl1().subscribe(
      (data)=>{this.prdtList1=data}
    )
  }

  delflag:any

  delId1(id:any)
  {
console.log(id)
this.prser.delProd1(id).subscribe((data)=>{console.log(data);
  this.delflag=data;
  this.route.navigate(['/womens'])
})
  }



onedit(id:any)
{
  this.route.navigate(['/up_wprd',id])
}



}
