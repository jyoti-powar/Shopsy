import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrserService {

  constructor(private http:HttpClient) { }


  url="http://localhost:3400/mens"
  url1="http://localhost:3400/womens"


  geturl(){
    return this.http.get(this.url)
  }

  geturl1(){
    return this.http.get(this.url1)
  }

  //for saving data of mens
saveMonProd(data:any){
  return this.http.post('http://localhost:3400/saveprd',data)
}

 //for saving data of womens
 saveMonProd1(data:any){
  return this.http.post('http://localhost:3400/saveprd1',data)
}



//for delete mens_prd
delProd(id:any){
  return this.http.delete(`http://localhost:3400/product/${id}`)
}

//for delete womens_prd
delProd1(id:any){
  return this.http.delete(`http://localhost:3400/product1/${id}`)
}

//for update prd
updateProd(data:any,id:any){
  return this.http.put(`http://localhost:3400/updprd/${id}`,data)
}

//for update  womensprd
updateProd1(data:any,id:any){
  return this.http.put(`http://localhost:3400/updprd1/${id}`,data)
}

getCurrentData(id:any){
  return this.http.get(`(this.url)/${id}`)
}

getCurrentData1(id:any){
  return this.http.get(`(this.url1)/${id}`)
}

getcat(){
  return this.http.get("http://localhost:3400/cat")
}
getpr(cat:any){
  return this.http.get(`http://localhost:3400/products/${cat}`)
}
  















}
