// let customer1 = ["emin", ["asus", "monster", "dell", [10, 20, 30]]]; 
let customer = {
            "ad": "osman", //value
            "soyad": "elma",
            "sehir": "antalya",
            "yas": 21,
            "products": [
                        "laptop", "car", "phone"
            ]
};
let customer1 = {
            "ad": "zeynep", //value
            "soyad": "çadır",
            "sehir": "ankara",
            "yas": 28,
            "products":
            {
                        "phone": "Iphone",
                        "price": 10
            }

};
let customer2 = {
            "ad": "mustafa", //value
            "soyad": "kara",
            "sehir": "adana",
            "yas": 55
};

let musteriler = [
            customer,
            customer1,
            customer2
]

let urunler = [
            {
                        "urunAdi": "huawei",
                        "fiyatı": 10
            },
            {
                        "urunAdi": "apple",
                        "fiyatı": 20
            },
            {
                        "urunAdi": "vestel",
                        "fiyatı": 30
            },
            
]
//console.log("Müşterinin aldığı telefon: " + customer1.products.phone + " " + "ve" + " " + "fiyatı ise" + " " + customer1.products.price);

console.log(urunler[2].fiyatı);