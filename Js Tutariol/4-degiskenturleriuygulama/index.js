/*
             Öğrenci Bilgileri
            
             1- Mert Demir
                        dogum tarihi = 2001
                        Bilgisayar dersi notları = 100, 90, 10
             2- Eylül Demir
                        dogum tarihi = 2002
                        Bilgisayar dersi notları = 60, 30, 50
            Geçer Not : 45
            
            
            Program Şartları: 
            1-Öğrencilerin yaşlarını hesaplayınız.
            2-Öğrencilerin ders ortalamalarınnı hesaplayınız.
            3-Öğrencilerin dders geçme notuna göre kaldı/geçti durumunu hesaplayınız.


*/

let ogr1 = "Mert Demir";
let ogr1yas = 2001;
let ogr2 = "Eylül Demir";
let ogr2yas = 2002; 
let mevcutyil = 2024;
let mevcutyas1 = (mevcutyil - ogr1yas);
let mevcutyas2 = (mevcutyil - ogr2yas);

console.log("Mert Demirin mevcut yasi: " + " " + mevcutyas1);
console.log("Eylül Demirin mevcut yasi: " + " " + mevcutyas2);

let ogr1not = 100;
let ogr1not2 = 90;
let ogr1not3 = 10;

let ogr1dersdurum = (100+90+10)/3;

if(ogr1dersdurum > 45){
            console.log("Mert Demir'in notu: " + ogr1dersdurum + " " + "Dersi Basarili olarak gecti");
}
else{
            console.log("Mert Demir'in notu: " + ogr1dersdurum + " " + "Dersi Basarisiz olarak tamamladi ve ders tekrarina kaldi.");
}


let ogr2not = 60;
let ogr2not2 = 30;
let ogr2not3 = 50;

let ogr2dersdurum = (60+30+50)/3;

if(ogr2dersdurum > 45){
            console.log("Eylül Demir'in notu: " + ogr2dersdurum + " " + "Dersi Basarili olarak gecti");
}
else{
            console.log("Eylül Demir'in notu: " + ogr2dersdurum + " " + "Dersi Basarisiz olarak tamamladi ve ders tekrarina kaldi.");
}
