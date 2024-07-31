const zrr=[1,2,3,4,5];
if(zrr.includes(15)){
    console.log("15 in array");
}
else{
    console.log("15 not in array")
}
//array creation 
let arr=[1,2,3,4,5];
let arr2=[9,8,7,6];
console.log(arr);

//array manipulation
arr.push(8);
console.log(arr);

arr.pop()
console.log(arr);

console.log(arr.concat(arr2));

arr.shift()
console.log(arr);
arr.unshift(1);
console.log(arr);

arr.splice(0, arr.length);
console.log(arr);

//array searching
let arr1=[12,13,14,23,15,16,12];
console.log(arr1.indexOf(12));
console.log(arr1.lastIndexOf(12));

//array sorting
console.log(arr1.sort());
console.log(arr1.reverse())

//array mapping and using arrow key
let brr=[1,2,3,4];
console.log(brr)
let newbrr=brr.map(x=>x*2);
console.log(newbrr);
let sri=['sri'];
console.log(sri.map(x=>x.toUpperCase()))

//array filter
let array=[1,2,3,4,5,6];
array1=array.filter(x=>x%2==0)
console.log(array1);
let crr=array.find(x=>x>5);
console.log(crr)

let nir=['mad','madh','niroo'];
let msg=nir.filter(nir=>nir.length>3);
console.log(msg);

//array sorting
let niru=[8,6,3,4,5,2,7,1,9];
console.log(niru.sort())
console.log(niru.reverse());

//array joining & spliting
let a=["niru","madhav"];
console.log(a.join(" kill "))
let b="kicha mad siva niru"
console.log(b.split(" "));
console.log(b.split(""));
console.log(b.split());

//array destruction
let nig=[10,20,30,40,50];
let [x,y,z,p,r]=nig;
console.log(x)
console.log(p);

//array spreading
let sup=[34,45];
let pus=[23,34];
console.log([...sup,...pus]);

//max and min
let ab=[40,30,50,60,70];
let max=0,min=99999;
for(let i=0;i<ab.length;i++){
   if(ab[i]>max)
    max=ab[i];
   if(ab[i]<min)
    min=ab[i];
}
console.log("max :",max)
console.log("min :",min)

//array flattening
let arrr=[[1,2],[3,4],[4,5],[6,7]]
console.log(arrr.flat())