// basit toplama
/*
function sayitoplami(sayi1,sayi2){
            let toplam = sayi1 + sayi2;
            console.log(toplam);
}
sayitoplami(10, 20)
sayitoplami(20, 30)
*/
let toplam = 0;
function sayitoplami(...sayilar) {
            for(let sayi of sayilar){
                        toplam += sayi;
            }
}

sayitoplami(10,20,30,40,50)
console.log(toplam);