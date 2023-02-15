import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrserService } from '../prser.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public p:number=1;
  constructor(private prser:PrserService, private acr:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    
    this.acr.params.subscribe(
      (data)=>{this.cat=data['cat']}
    )

    this.prser.getpr(this.cat).subscribe(
      (data)=>{this.prlist=data}
    )

  }
prlist:any;
cat:any


onedit(id:any)
{
  this.route.navigate(['/edit_pr',id])
}
delflag:any

delId(id:any)
  {
console.log(id)
this.prser.delProd1(id).subscribe((data)=>{console.log(data);
  this.delflag=data;
  this.route.navigate(['/prlist/womens'])
})
  }

}
