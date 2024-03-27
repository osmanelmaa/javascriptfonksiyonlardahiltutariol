let tarih = new Date();

let result;

result = tarih.getDate(); // gün bilgisi
result = tarih.getDay(); // haftanın kaçıncı günü 0 = pazar, 6= cumartesi..
result = tarih.getFullYear(); // yıl bilgisi
result = tarih.getHours(); // saat bilgisi
result = tarih.getTime(); // milisaniye bilgisi


// tarihi güncelleme
 

tarih.setFullYear(2025);
tarih.setMonth(2);
tarih.setDate(15);
result = tarih;

// doğum tarihi

let dogumtarihi = new Date(1996, 8, 14);

result = tarih.getFullYear() - dogumtarihi.getFullYear();







console.log(result);

