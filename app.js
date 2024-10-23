const phones = [
    {
      brand: "Samsung",
      model: "Galaxy S21",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 799,
    },
    {
      brand: "Apple",
      model: "iPhone 13",
      ram: 4,
      rom: 128,
      camera: "12 megapixel",
      price: 799,
    },
    {
      brand: "OnePlus",
      model: "9",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 729,
    },
    {
      brand: "Google",
      model: "Pixel 6",
      ram: 8,
      rom: 128,
      camera: "50 megapixel",
      price: 599,
    },
    {
      brand: "Xiaomi",
      model: "Mi 11",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 749,
    },
    {
      brand: "Huawei",
      model: "P40 Pro",
      ram: 8,
      rom: 256,
      camera: "50 megapixel",
      price: 699,
    },
    {
      brand: "Sony",
      model: "Xperia 5 III",
      ram: 8,
      rom: 128,
      camera: "12 megapixel",
      price: 999,
    },
    {
      brand: "Oppo",
      model: "Find X3 Pro",
      ram: 12,
      rom: 256,
      camera: "50 megapixel",
      price: 1149,
    },
    {
      brand: "Vivo",
      model: "X60 Pro",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 799,
    },
    {
      brand: "Realme",
      model: "GT Master",
      ram: 6,
      rom: 128,
      camera: "64 megapixel",
      price: 499,
    },
    {
      brand: "Nokia",
      model: "8.3 5G",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 649,
    },
    {
      brand: "Asus",
      model: "ROG Phone 5",
      ram: 16,
      rom: 256,
      camera: "64 megapixel",
      price: 999,
    },
    {
      brand: "Lenovo",
      model: "Legion Phone Duel 2",
      ram: 12,
      rom: 256,
      camera: "64 megapixel",
      price: 799,
    },
    {
      brand: "Motorola",
      model: "Edge 20 Pro",
      ram: 12,
      rom: 256,
      camera: "108 megapixel",
      price: 699,
    },
    {
      brand: "ZTE",
      model: "Axon 30",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 499,
    },
    {
      brand: "TCL",
      model: "20 Pro 5G",
      ram: 6,
      rom: 256,
      camera: "48 megapixel",
      price: 499,
    },
    {
      brand: "Google",
      model: "Pixel 5a",
      ram: 6,
      rom: 128,
      camera: "12 megapixel",
      price: 449,
    },
    {
      brand: "Samsung",
      model: "Galaxy A52",
      ram: 6,
      rom: 128,
      camera: "64 megapixel",
      price: 349,
    },
    {
      brand: "Apple",
      model: "iPhone 12 Mini",
      ram: 4,
      rom: 64,
      camera: "12 megapixel",
      price: 699,
    },
    {
      brand: "OnePlus",
      model: "Nord 2",
      ram: 8,
      rom: 128,
      camera: "50 megapixel",
      price: 399,
    }
  ];
  let container=document.querySelector("#container");
  let itemArray=[];
function MobileApp(produsts){
produsts.map((item , index)=>{
  container.innerHTML +=`<div class="card border rounded mt-5 p-3">
        <h2>${item.brand}</h2>
        <h3>${item.model}</h3>
        <p>Camera: ${item.camera}</p>
        <p>Price: $${item.price}</p>
        <button type="button" class="btn btn-primary" onclick="addCart(${index})">Add to Cart</button>
    </div>`
})
}
MobileApp(phones);
function addCart(index){
    phones[index].quantity=1;
   const Cardindex =itemArray.indexOf(phones[index]);
//    console.log(Cardindex);
   if(Cardindex === -1){
  itemArray.push(phones[index]);
  console.log(itemArray)
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
   }
   else{
    phones[index].quantity++;
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
   }

}