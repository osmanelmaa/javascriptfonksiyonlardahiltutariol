let youtube = "Yönetim Bilişim Sistemleri";

let result;

result = youtube.toLowerCase(); // metotlar () ile kapanır. toLocaleLowerCase() değişkendeki string ifadeyi küçük harflerle yazar.
result = youtube.toUpperCase(); // hepsini büyük harfle yazar.
result = youtube.length; // string ifadede kaç karakter olduğunu gösterir.
result = youtube.slice(0,6); // 0.karakterden 6. karaktere kadar yazar
result = youtube.split(" "); //iki ayrı karaktere dönüşür ve köşeli paranteze alır


console.log(result);