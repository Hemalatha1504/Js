let basket=[];
let q=[];
let  a=[];
let we1;
let x=['id01','id02','id03','id04','id05','id06','id07','id08','id09','id10','id11','id12'];
let ret=['quan1','quan2','quan3','quan4','quan5','quan6','quan7','quan8','quan9','quan10','quan11','quan12'];
let sname=['Sofa single seater set','Chair with small table','Sofa set','Double size-bed','Single-piece chair'
,'Sofa set with table','Table','Chair with hanging table','Sofa set with table','King size bed','Pink-table lamp','Lamp'];
let price=[2000,900,3800,5000,450,3200,2000,2800,5500,4950,1000,1200];
let img=['./images/img3.jpeg','./images/furniture.png','./images/slide1.jpg','./images/img5.png','./images/6.jpg','./images/ik.jpeg',
'./images/latest3.jpg','./images/slide3.jpg','./images/office21.png','./images/slide2.jpg','./images/latest2.jpg',
'./images/img.jpg'];

let  plus=(id)=>{
   let item=id;
    let search=basket.find((x) => x.id === item.id);
    let index=x.indexOf(item.id);
    if(search===undefined){
    basket.push({
    id:item.id,
    img1:img[index],
    name:sname[index],
    cost:price[index],
    quantity:1,
    });
    }
    else{
    search.quantity +=1;
    }
    update(item.id);
    
    };
    let minus=(id)=>{
        let item=id;
        let search=basket.find((x) => x.id === item.id);
        if(search.quantity===undefined) return;
        else if(search.quantity===0) return;
        else{
        search.quantity -=1;
        }

        update(search.id);
        basket=basket.filter((x)=>x.quantity !== 0);
    };
   
    let update=(id)=>{
        let search=basket.find((x) => x.id===id);
       for(i=0;i<x.length;i++)
       {
        if(x[i]==id)
        {
          let pos=ret[i];
          document.getElementById(pos).innerHTML=search.quantity;
          calc();
        }
       }  
    }
    let calc=()=>{
      let cart=document.getElementById("cartQuantity");
     cart.innerHTML=basket.map((x)=>x.quantity).reduce((x,y)=>x+y,0);
};
function cart(){
 
  localStorage.setItem("data",JSON.stringify(basket));
  window.location="cart2.html";

}