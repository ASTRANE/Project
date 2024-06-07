var products_div = document.getElementById("Products");
var Jackets_items_name_list = [
    "WHATTA LIFE HOODIE IN RED",
    "MODUS OPERANDI L/S",
    "MODUS OPERANDI HOODIE",
    "WHATTA LIFE HOODIE IN WHITE",
    "WHATTA LIFE HOODIE IN BLACK",
    "SHINOBI WINDSHELL V3",
    "M'$ ARTIFACT II HOODIE",
    "WAGWAN WINDBREAKER",
    "CLASSIC HOODIE",
    "ZIP TRUCKER JACKET",
    "ASIA CAMO ZIP JACKET",
    "COMIC ART SHARK ZIP HOODIE",
    "INK CAMO SHARK ZIP HOODIE",
    "FACE RELAXED FIT SHARK HOODIE",
    "HAND DRAW PATTERN SHARK HOODIE",
    "WORK JACKET UNLINED PLAID",
    "SMOOTH STOCK HOODIE PIGMENT DYED",
    "BASIC STÜSSY HOODIE",
    "8 BALL HOODIE PIGMENT DYED",
    "THERMAL STOCK HOODIE",
    "DARKWOODS WINDBREAKER JACKET",
    "CHILI HOODIE JACKET",
    "COLLEGE CHAMP SWEATSHIRT JACKET",
    "KALMADO THAI HOODIE JACKET",
    "TRADEMARK EMBOSSED HOODIE",

];

var Jackets_items_price_list =[
    1970.00,
    1070.00,
    1970.00,
    1970.00,
    1970.00,
    2770.00,
    1870.00,
    2570.00,
    1870.00,
    2770.00,
    2770.00,
    1870.00,
    2570.00,
    1870.00,
    2770.00,
    1570.00,
    2770.00,
    1870.00,
    1570.00,
    2870.00,
    1600.00,
    1600.00,
    1200.00,
    1600.00,
    2000.00
]
var T_shirts_items_name_list = [
    "INSIDER IN PALE PURPLE",
    "RR SUN 'FIRE'",
    "MODUS OPERANDI",
    "RR SUN 'STRAIN'",
    "WISDOM RUST",
    "THAI TEE IN CHARCOAL GREY",
    "RARRI 296 TEE IN CAVIAR",
    "COBBLESTONE VINTAGE OVERSIZED TEE",
    "TATTERED VINTAGE BOX POCKET TEE",
    "PM TEE IN CAVIAR",
    "APE HEAD ONE POINT POLO",
    "OG APE HEAD COLLEGE FIT TEE",
    "GRAFFITI BAPE LOGO FIT TEE",
    "COMIC ART APE HEAD FIT TEE",
    "BAPE 31ST ANNIV APE HEAD TEE",
    "TUFF STUFF TEE",
    "VENUS OVAL TEE PIGMENT DYED",
    "8 BALL TEE PIGMENT DYED",
    "THERMAL STOCK TEE",
    "BURLY THREADS TEE PIGMENT DYED",
    "Hoop Legend",
    "Blue Flame Tee",
    "Inner Workings Tee",
    "Sun Eye Tee",
    "Beatdown Tee"
];
 
var T_shirts_items_price_list = [
    870.00,
    970.00,
    970.00,
    970.00,
    870.00,
    970.00,
    870.00,
    870.00,
    970.00,
    870.00,
    2570.00,
    2770.00,
    1870.00,
    2570.00,
    3870.00,
    870.00,
    970.00,
    970.00,
    970.00,
    870.00,
    750.00,
    800.00,
    750.00,
    750.00,
    750.00
];
var Shorts_items_name_list = [
    "DF ESSENTIAL SWEATSHORTS IN DARK PEACH",
    "DF ESSENTIAL SWEATSHORTS IN MAROON",
    "DF ESSENTIAL SWEATSHORTS IN PALE PURPLE",
    "DF ESSENTIAL SWEATSHORTS IN ORANGE",
    "DF ESSENTIAL SWEATSHORTS IN LIGHT BROWN",
    "ORNATE SWEATSHORTS IN OLIVE",
    "HIKE SHORTS IN NAVY",
    "PLEATED SHORTS TYPE II",
    "HOUSE SHORTS IN RUST",
    "HEAVY HOUSE SHORTS IN OAT",
    "COLLEGE DENIM SHORTS",
    "BAPE DESTROY SWEAT SHORTS",
    "BAPE REVERSIBLE BASKETBALL SHORTS",
    "SHARK DENIM SHORTS",
    "COLOR CAMO SHARK SWEAT SHORTS",
    "WATER SHORT SPORT",
    "CHINO WORK SHORT",
    "BIG OL' SHORT DENIM",
    "BIG OL' SHORT REALTREE EDGE",
    "BOARD SHORT BIG STOCK",
    "Stitches Cargo Shorts",
    "Dribbler Shorts",
    "Grand Slam White Shorts",
    "Grand Slam Black Shorts",
    "Heat Essentials Shorts"
];

var Shorts_items_price_list = [
    870.00,
    870.00,
    870.00,
    870.00,
    870.00,
    970.00,
    1170.00,
    970.00,
    870.00,
    970.00,
    970.00,
    570.00,
    870.00,
    870.00,
    470.00,
    870.00,
    870.00,
    870.00,
    870.00,
    870.00,
    1300.00,
    750.00,
    750.00,
    750.00,
    750.00
];
var Pants_items_name_list = [
    "DOUBLE KNEE PHAT PANTS IN NECRO",
    "OVER POCKET PHAT PANTS",
    "CORDUROY WIDE PANTS IN IRON ORE",
    "7 POCKET WIDE PANTS IN DIGI CAMO",
    "ULTRAWIDE PANTS IN LIGHT IRON ORE",
    "ONE POINT EASY 2 PLEAT DENIM PANTS",
    "APE HEAD ONE POINT EASY CHINO PANTS",
    "ASIA CAMO ARMY PANTS",
    "BAPE MULTI POCKETS CARGO PANTS",
    "A BATHING APE 6 POCKET PANTS",
    "BEACH PANT BRUSHED COTTON",
    "BIG OL' JEAN SPRAY DYE",
    "BIG OL' JEAN REALTREE EDGE",
    "BIG OL' JEAN CANVAS PLAID",
    "BIG OL' JEAN COATED COTTON",
    "Darkwoods Pants",
    "Stitches Cargo Pants",
    "Trademark Embossed Pants",
    "Slanted Cargo Black Pants",
    "All Star Trackpants"
];
var Pants_items_price_list = [
    1770.00,
    1770.00,
    1470.00,
    1670.00,
    1570.00,
    1570.00,
    2770.00,
    1870.00,
    1570.00,
    2870.00,
    970.00,
    1170.00,
    970.00,
    870.00,
    970.00,
    1000.00,
    1500.00,
    1500.00,
    1000.00,
    1000.00
];

function navclose(){
    document.getElementById("nav-div").style.display = 'none';
}
function navopen(){
    document.getElementById("nav-div").style.display = 'flex';
}
function search(){
    window.location.href = "/Collections/Search.html";
}

function Products(Collections) {
    var collection_name = Collections + "_items_name_list";
    var collection_price = Collections + "_items_price_list";
    var collection_length = window[collection_name].length;
    var products_div = document.getElementById("Products");
    
    for (var i = 0; i < collection_length; i++) {
        var items_div = document.createElement("div");
        items_div.classList.add("products-div");

        var items_details = document.createElement("div");
        items_details.classList.add("product-name");

        var itempic = "../Assets/" + Collections + "/item" + i + "_1.png";
        var items_img = document.createElement("img");
        items_img.src = itempic;

        var items_name = document.createElement("h3");
        items_name.textContent = window[collection_name][i];

        var items_price = document.createElement("span");
        items_price.textContent = "₱" + window[collection_price][i];

        items_details.appendChild(items_name);
        items_details.appendChild(items_price);
        items_div.appendChild(items_img);
        items_div.appendChild(items_details);
        products_div.appendChild(items_div);
    }
}
function AllProducts() {
    var allItems = [];

    // Combine all arrays
    allItems = allItems.concat(Jackets_items_name_list);
    allItems = allItems.concat(T_shirts_items_name_list);
    allItems = allItems.concat(Shorts_items_name_list);
    allItems = allItems.concat(Pants_items_name_list);

    var allPrices = [];

   
    allPrices = allPrices.concat(Jackets_items_price_list);
    allPrices = allPrices.concat(T_shirts_items_price_list);
    allPrices = allPrices.concat(Shorts_items_price_list);
    allPrices = allPrices.concat(Pants_items_price_list);

   
    var products_div = document.getElementById("Products");
    
    var itemnum = 0;
    var collectiondir;
    for (var i = 0; i < allItems.length; i++) {
        var items_div = document.createElement("div");
        items_div.classList.add("products-div");
        
        var items_details = document.createElement("div");
        items_details.classList.add("product-name");
        if (i === 24 || i === 0) {
            itemnum = 0;
            collectiondir = "Jackets";
        }
        else if (i === 25) 
        {
            itemnum = 0;
            collectiondir = "T_shirts";
        } 
        else if (i === 50) 
        {
            itemnum = 0;
            collectiondir = "Shorts";
        } 
        else if (i === 75) 
        {
            itemnum = 0;
            collectiondir = "Pants";
        } 
      
        var itempic = "../Assets/" + collectiondir + "/item" + itemnum + "_1.png";
        var items_img = document.createElement("img");
        items_img.src = itempic;
        
        itemnum++;

        var items_name = document.createElement("h3");
        items_name.textContent = allItems[i];

        var items_price = document.createElement("span");
        items_price.textContent = "₱" + allPrices[i];
        
        items_details.appendChild(items_name);
        items_details.appendChild(items_price);
        items_div.appendChild(items_img);
        items_div.appendChild(items_details);
        products_div.appendChild(items_div);
       
    }
}
