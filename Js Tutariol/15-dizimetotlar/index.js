let products = ["iphone5", "samsung", "huawei"];
let result;
result = products;
/*

result = products.length; // eleman sayısını gösterir

result = products.toString(); // stringe çevirir
result = products.join(" ") //stringe çevirir. parantez içindeki ifade yok etmek istediğimiz karakteri yazar

diziden eleman silme

result = products.shift(); // ilk elemanı siler sonra döndürür
result = products.pop(); // son elemanı siler sonra döndürür

 diziye eleman ekleme

result = products.push("xiaomi ") // dizi sonuna elemen ekler
result = products.unshift("xiamoi") // dizi başına eleman ekler
*/
let products1 = ["asus", "apple" ];
let products2= ["dell", "intel" ];
let products3 = ["excalibur", "samsung"];
 
result = products1.concat(products2, products3)

console.log(result);
console.log(products);