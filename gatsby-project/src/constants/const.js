
export const sortings = [
    {
        sorting: "Preporučeno ★",
        name: "recommended"
    },
    {
        sorting: "Od najniže cijene ▼",
        name: "lowToHigh"
    },
    {
        sorting: "Od najviše cijene ▲",
        name: "highToLow"
    },
];

export const productCategories = [
    {
        categoryName: "Buketi",
        categoryImage: require("../../src/images/buketiNaslovna.jpg"),
        to: '/webShop1Buketi'      
    },
    {
        categoryName: "Cvijeće u kutiji",
        categoryImage: require("../../src/images/kutijeNaslovna.jpg"),
        to: '/' 
    },
    {
        categoryName: "Aranžmani",
        categoryImage: require("../../src/images/aranzmaniNaslovna.jpg"),
        to: '/' 
    },
    {
        categoryName: "Lončanice",
        categoryImage: require("../../src/images/loncaniceNaslovna.jpg"),
        to: '/' 
    }
];

export const productsBuketi =[
    {
        productName: "Ljiljani i ruže mix",
        productPrice: "175.00 kn",
        productImage: require("../../src/images/buketi1.jpg"),
        to: '/webShop3_LjiljaniIRuze'
    },
    {
        productName: "Jednostavne ruže",
        productPrice: "250.00 kn",
        productImage: require("../../src/images/buketi2.jpg"),
        to: '/'
    },
    {
        productName: "Nježne orhideje",
        productPrice: "210.00 kn",
        productImage: require("../../src/images/buketi3.jpg"),
        to: '/'
    },
    {
        productName: "Egzotični mix",
        productPrice: "300.00 kn",
        productImage: require("../../src/images/buketi4.jpg"),
        to: '/'
    },
    {
        productName: "Šareni tulipani",
        productPrice: "220.00 kn",
        productImage: require("../../src/images/buketi5.jpg"),
        to: '/' 
    },
    
    {
        productName: "Šareni buket",
        productPrice: "180.00 kn",
        productImage: require("../../src/images/buketi6.jpg"),
        to: '/' 
    },
    {
        productName: "Buket Amarilis",
        productPrice: "190.00 kn",
        productImage: require("../../src/images/buketi7.jpg"),
        to: '/' 
    },
    {
        productName: "Margarete u rozom",
        productPrice: "170.00 kn",
        productImage: require("../../src/images/buketi8.jpg"),
        to: '/' 
    }
];

export const Bestsellers = [
    {
        bestseller: "Jednostavne ruže u rozom",
        productImage: require("../../src/images/bestseller1.jpg")
    },
    {
        bestseller: "Bonsai",
        productImage: require("../../src/images/bestseller2.jpeg")
    },
    {
        bestseller: "Cvjetna kutija roze ruže",
        productImage: require("../../src/images/bestseller3.jpeg")
    }
];

export const blogNews = [
    {
        heading: "Simbolika cvijeća",
        image: require("../../src/images/blog1.jpg"),
        newsContent: "Ne znate koji buket odabrati? U današnjem članku donosimo Vam listu najtraženijih cvjetova s njihovim značenjima..."
     },
    {
        heading: "Cvijeće za rođendan",
        image: require("../../src/images/blog2.jpg"),
        newsContent: "Sigurno ponekad ne znate što pokloniti nekome za rođendan. Neka to bude cvijeće. Otkrit ćemo Vam koje se cvijeće ne stavlja u buket za rođendan, tko ga uručuje..."
    },
    {
        heading: "Briga o lončanicama",
        image: require("../../src/images/blog3.jpg"),
        newsContent: "Postoji mnogo razloga zašto je uzgoj biljaka u loncima toliko popularan: omogućava vrtlarima koji izazivaju prostor da se prepune nizu cvijeća, povrća, patuljastih stabala i grmlja..."
    }
];