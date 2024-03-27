let url = "https://www.osmanalielma.com.tr";
let youtube = "Osman Elma"
let result;


/* karakter sayisi bulma */

result = url.length;
result = youtube.length; // değişkenin arasındaki boşlukları da sayar. 
result = youtube.replace(" ", "").length; // boşlukları almaz

/* kaç kelimeden oluştuğunu öğrenmek için. */

result = youtube.split(" ").length;


/* kanal adı başlangıç kelimesi kontrol */

result = youtube.startsWith("Osman"); // true değer verecektir
result = youtube.startsWith("Ali"); // false değer verecektir
result = url.startsWith("https");  // true

/*
if(result) {   // eğer değer true ise içerisine girer
            console.log("Yapılacaklar");
}else{
            console.log("Yanlis")
}
*/ 
/* kelime kontrolü */

if(youtube.indexOf("Osman") > -1 ){
            console.log("Çalıştı");
}else{
            console.log("Çalışmadı");
}


/* url ve youtube değişken birleştir  */
youtube = youtube.toLowerCase().replace(" ", "-"); // önce haarfleri küçültür, sonra arasına - ekler
url = url.replace("tr","tr/") // urel sonuna / ekler

let newurl = url.replace(url, url+youtube);
newurl = `${url}${youtube}`

console.log(newurl);



