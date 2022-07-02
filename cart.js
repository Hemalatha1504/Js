let basket=[];
var basket1=[];
let q=[];
let  a=[];
let we1;
let x=['id01','id02','id03','id04','id05','id06','id07','id08','id09','id10','id11','id12'];
let ret=['quan1','quan2','quan3','quan4','quan5','quan6','quan7','quan8','quan9','quan10','quan11','quan12'];
let sname=['Sofa single seater set','Chair with small table','Sofa set','Double size-bed','Single-piece chair'
,'Sofa set','Table','Chair with hanging table','Sofa set with table','King size bed','Pink-table lamp','Lamp'];
let price=[2000,900,3800,5000,450,3200,2000,2800,5500,4950,1000,1200];
let img=['./images/img3.jpeg','./images/furniture.png','./images/slide1.jpg','./images/img5.png','./images/6.jpg','./images/ik.jpeg',
'./images/latest3.jpg','./images/slide3.jpg','./images/office21.png','./images/slide2.jpg','./images/latest2.jpeg',
'./images/img.jpg'];
let  plus=(id)=>{
   let item=id;
    let search=basket.find((x) => x.id === item.id);
    let index=x.indexOf(item.id);
  //  console.log('index',index);
  //  let search=item.quantity;
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
   // console.log(search);
    }
  //  console.log(basket);
   // console.log(item.id);
    update(item.id);
    
    };
    let minus=(id)=>{
        let item=id;
        let search=basket.find((x) => x.id === item.id);
        
        if(search.quantity===0) return;
        else{
        search.quantity -=1;
        }
        update(search.id);
        basket=basket.filter((x)=>x.quantity !== 0);
       console.log(basket);
     //   console.log(item.id); 
    };
   
    let update=(id)=>{
     //   console.log(id);
        let search=basket.find((x) => x.id===id);
     //   console.log(search.quantity);
     //  console.log(x.length);
     //  console.log(ret.length);
       for(i=0;i<x.length;i++)
       {
        if(x[i]==id)
        {
          let pos=ret[i];
         // console.log(pos);

          document.getElementById(pos).innerHTML=search.quantity;
          calc();
        }
       }  
    }
    let calc=()=>{
      let cart=document.getElementById("cartQuantity");
     cart.innerHTML=basket.map((x)=>x.quantity).reduce((x,y)=>x+y,0);
     console.log(basket);
 

};
function display()
{
  let we=document.getElementById("show");
  we.style.display="block";
 
  let button1=document.createElement("button");
  button1.textContent="Cancel";
  button1.style.backgroundColor="#f44336";
  button1.style.border="none";
  button1.style.color= "white";
  button1.style.padding= "8px 24px";
  button1.style.textAlign= "center";
  button1.style.textDecoration="none";
  button1.style.display= "inline-block";
  button1.style.fontSize= "16px";
  button1.style.margin=" 8px 20px";
  button1.style.cursor= "pointer";
 
  let button=document.createElement("button");
  button.textContent="Proceed";
  button.style.backgroundColor=" #4CAF50";
  button.style.border="none";
  button.style.color= "white";
  button.style.padding= "8px 24px";
  button.style.textAlign= "center";
  button.style.textDecoration="none";
  button.style.display= "inline-block";
  button.style.fontSize= "16px";
  button.style.margin=" 8px 20px";
  button.style.cursor= "pointer";
  button.style.marginLeft="115px";

  let label=document.createElement("label");
  label.textContent="Total Amount:";
  label.style.marginLeft="10px";
  let label1=document.createElement("label");
  label1.style.marginLeft="80px";
let tot =[];
  let wr;
  for(x=0;x<basket.length;x++)
  {
    let qw=basket[x].img1;   
      var iid0=basket[x].id;
      console.log(iid0);
  //  console.log(basket[x].name);
   // console.log(basket[x].quantity);
   // console.log(basket[x].cost);
    let num1=basket[x].quantity;
    let num2=basket[x].cost;
     tot[x]=num1 * num2;
   // console.log("total:",tot[x]);
    wr=tot.reduce((p,y)=>p+y);
    label1.textContent=wr;
  //  console.log(wr);                  
     we1=document.createElement("div");
    we1.innerHTML=`<div class="pop">
                    <button onclick="remove(${iid0})"><i class="bi bi-trash"></i></button>
                    <img src=${qw} alt="img1" style="width:100px;height:70px;">
                    <p>${basket[x].name}</p>
                    <div class="dir">
                      <div class="buttonBox">
                     
                      <div class="quanum">${basket[x].quantity}</div>
                    
                      </div>
                      <label>$${tot[x]}</label>
                    </div>
                  </div>
                  <hr/>`;
                 
                /*
                  <button class="button" style="background-color: #f44336;">Cancel</button>
                  <button class="button" style="margin-left:125px;">Proceed</button>
                `;*/
        
    we.appendChild(we1);
   /* we.innerHTML=`
    <button class="button" style="background-color: #f44336;">Cancel</button>
    <button class="button" style="margin-left:125px;">Proceed</button>
      `;
     */
    we.appendChild(label);
    we.appendChild(label1);
    we.appendChild(button1);
    we.appendChild(button);
 //   console.log(we);
  }
  button.addEventListener("click",()=>{

  //  alert(wr);
    localStorage.setItem("total",wr);
    alert('Proceed to Checkout');
    window.location="cartt2.html";
   
  });
  button1.addEventListener("click",()=>{
   // we.style.display="none";
    window.location="cart1.html";
  });
}
let minus1=(id)=>{
  let item=id;
  let search=basket.find((x) => x.id === item.id);
  
  if(search.quantity===0) return;
  else{
  search.quantity -=1;
  }
  let rc=document.createElement("div");
  rc.innerText=search.quantity;
  basket=basket.filter((x)=>x.quantity !== 0);
 console.log(basket);
//   console.log(item.id); 
};
//  we.innerHTML=basket[x].id + "<br> " +"<img src="+qw+" style=width:100px; height:70px;>"+"<br>"+ basket[x].name + "<br> " + basket[x].cost + " <br>" + basket[x].quantity;
function searchtext(){
  let text1=document.getElementById("search").value;
//  alert(text1);
  let text2=text1.toLowerCase();
 // console.log(text2);
  for(d=0;d<sname.length;d++)
  {
    q[d]=sname[d].toLowerCase();
  // console.log(q);
var a1=q[d].match(text2);
  a.push(a1);
  console.log(a);

 // let res=q[d].indexOf(a[d]);
 // console.log(res);
  }
}
function remove(id){

  let item=id;
 // update(item.id);
 basket=basket.slice(item.id,1);
 console.log(basket);
 we1.innerHTML="";
 
}