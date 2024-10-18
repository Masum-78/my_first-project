let price= [250,645,300,900,50];
let offer;
for(let i=0; i<price.length; i++)
{
     let offer= price[i]*.1;
     price[i]-=offer;
}
console.log(price);