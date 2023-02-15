import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrserService } from '../prser.service';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {

  constructor(private prs:PrserService, private rou:Router) { }

  ngOnInit(): void {
    this.prs.getcat().subscribe(
      (data)=>{this.catlist = data; console.log(data)}
    )
  }


  catlist:any;

onrou(cat:any){
  this.rou.navigate(['/prlist',cat])
}


}
