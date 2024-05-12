import p1 from "./all_brown_bear.jpg"
import p2 from "./alpaca.jpg"
import p3 from "./bear_presents.jpg"
import p4 from "./black_white_cat.jpg"
import p5 from "./blue_hat_dog.jpg"
import p6 from "./brown_bear_bow.jpg"
import p7 from "./brown_bear_shirt.jpg"
import p8 from "./brown_bear_white_snout.jpg"
import p9 from "./brownish_fluffy_bear.jpg"
import p10 from "./carousel_1_large_brown_bear.jpg"
import p11 from "./carousel_2 - happy_small_brown_bear.jpg"
import p12 from "./carousel_3 - screaming_white_bear.jpg"
import p13 from "./grey_bear.jpg"
import p14 from "./happy_brown_bear.jpg"
import p15 from "./new_1_sq.jpg"
import p16 from "./panda.jpg"
import p17 from "./rabbit.jpg"
import p18 from "./rabbit_chick.jpg"
import p19 from "./reindeer.jpg"
import p20 from "./reindeer_green_scarf.jpg"
import p21 from "./reindeer_red_scarf.jpg"
import p22 from "./shark.jpg"
import p23 from "./whale.jpg"
import p24 from "./white_bear_shirt.jpg"


//maybe add more categories to filter by like price

let data_product = [
    {
        id:1,
        title:"Jack",
        cat:"Bears",
        tags:["jack", "bear", "bears", "brown", "medium", "fluff"],
        price: 77,
        image: p1,
        sale: false,
        popular: false,
        description:"Jack is a good bear and makes great sandwiches."   
    },

    {
        id:2,
        title:"Al",
        cat:"Not Bears (Land)",
        tags:["al", "alpaca", "white", "small", "not bears", "land", "fluff"],
        price: 66,
        image: p2,
        sale: false,
        popular: false,
        description:"Al makes a lot of fleece for the winter."
    },

    {
        id:3,
        title:"Jacob",
        cat:"Bears",
        tags:["jacob", "bear", "bears", "brown", "large", "fluff"],
        price: 99,
        image: p3,
        sale: false,
        popular: true,
        description:"Jacob will occasionally bring you presents from unknown sources."
    },

    {
        id:4,
        title:"Nyafuu",
        cat:"Not Bears (Land)",
        tags:["nyafuu", "cat", "cats", "kitty", "kitten", "black", "white", "small", "not bears", "land", "fluff"],
        price: 90,
        image: p4,
        sale: false,
        popular: false,
        description:"Nyafuu might eat all your tuna, but will return it in love."
    },

    {
        id:5,
        title:"Bob",
        cat:"Seasonal",
        tags:["bob", "dog", "puppy", "brown", "blue", "small", "not bears", "land", "scarf", "hat", "seasonal", "fluff"],
        price: 50,
        image: p5,
        sale: false,
        popular: false,
        description:"Bob loves to be taken on walks in the snow. Looks like a bear, but it's a dog. Probably."
    },

    {
        id:6,
        title:"Fluffer",
        cat:"Bears",
        tags:["fluffer", "bear", "bears", "brown", "medium", "bow", "red", "fluff"],
        price: 80,
        image: p6,
        sale: false,
        popular: false,
        description:"Fluffer is soft and will keep you warm at night."
    },

    {
        id:7,
        title:"Mark",
        cat:"Bears",
        price: 40,
        tags:["mark", "bear", "bears", "brown", "medium", "shirt", "white", "fluff"],
        image: p7,
        sale: true,
        popular: false,
        description:"Mark has chronic backpains but will keep you good company."
    },

    {
        id:8,
        title:"Frank",
        cat:"Bears",
        tags:["frank", "bear", "bears", "brown", "large", "fluff"],
        price: 58,
        image: p8,
        sale: false,
        popular: false,
        description:"Frank loves to climb to high places."
    },

    {
        id:9,
        title:"Mofuz",
        cat:"Bears",
        tags:["mofuz", "bear", "bears", "white", "large", "bow", "fluff"],
        price: 90,
        image: p9,
        sale: false,
        popular: false,
        description:"Mofuz likes to photobomb but he just wants your attention."
    },

    {
        id:10,
        title:"Jumbo",
        cat:"Bears",
        tags:["jumbo", "bear", "bears", "brown", "extra large", "bow", "red", "fluff"],
        price: 200,
        image: p10,
        sale: false,
        popular: false,
        description:"Jumbo needs his own bed (preferably queen size at minimum if you want to sleep with them at night). Warm and fuzzy."
    },

    {
        id:11,
        title:"Wahoo",
        cat:"Bears",
        tags:["wahoo", "bear", "bears", "white", "large", "fluff"],
        price: 150,
        image: p11,
        sale: false,
        popular: false,
        description:"Wahoo is a good boy who kicks you out of bed when the alarm clock rings."
    },

    {
        id:12,
        title:"George",
        cat:"Bears",
        tags:["george", "bear", "bears", "white", "small", "fluff"],
        price: 70,
        image: p12,
        sale: false,
        popular: false,
        description:"George is a white bear, but not for long because they like to roll in the grass."
    },

    {
        id:13,
        title:"Sunny",
        cat:"Bears",
        tags:["sunny", "bear", "bears", "brown", "small", "white", "fluff"],
        price: 65,
        image: p13,
        sale: false,
        popular: false,
        description:"Sunny likes to lay in the grass and sunbathe."
    },

    {
        id:14,
        title:"Boko",
        cat:"Bears",
        tags:["boko", "bear", "bears", "brown", "medium", "bow", "yellow", "fluff"],
        price: 94,
        image: p14,
        sale: false,
        popular: false,
        description:"Boko is an energetic bear that likes to start fights with neighboring pets."
    },

    {
        id:15,
        title:"Mary",
        cat:"Bears",
        tags:["mary", "bear", "bears", "pink", "small", "bow", "white", "fluff"],
        price: 40,
        image: p15,
        sale: true,
        popular: false,
        description:"Mary loves to take photos with anyone at anytime."
    },

    {
        id:16,
        title:"Bender",
        cat:"Bears",
        tags:["bender", "bear", "bears", "black",  "medium", "panda", "white", "fluff"],
        price: 75,
        image: p16,
        sale: false,
        popular: false,
        description:"Bender is great at bending and cutting things for you."
    },

    {
        id:17,
        title:"Hoppy",
        cat:"Not Bears (Land)",
        tags:["hoppy", "rabbit", "bunny", "brown", "large", "not bears", "land", "fluff"],
        price: 80,
        image: p17,
        sale: true,
        popular: true,
        description:"Hoppy can reach high shelves for you and only requires 10 carrots a day for payment."
    },

    {
        id:18,
        title:"Usak",
        cat:"Seasonal",
        tags:["usak", "rabbit", "bunny", "yellow", "chick", "small", "not bears", "land", "seasonal", "fluff"],
        price: 66,
        image: p18,
        sale: false,
        popular: false,
        description:"Usak is a rabbit probably, but they can lay fresh eggs for you too."
    },

    {
        id:19,
        title:"Tony",
        cat:"Seasonal",
        tags:["tony", "reindeer", "brown", "red", "medium", "not bears", "land", "hat", "seasonal", "fluff"],
        price: 30,
        image: p19,
        sale: true,
        popular: false,
        description:"Tony is small but will bring you presents sometimes of varying quality."
    },

    {
        id:20,
        title:"Rudolph",
        cat:"Seasonal",
        tags:["rudolph", "reindeer", "brown", "red", "medium", "not bears", "land", "hat", "scarf", "green", "seasonal", "fluff"],
        price: 63,
        image: p20,
        sale: false,
        popular: false,
        description:"Rudolph is festive and will party every night whether you like it or not."
    },

    {
        id:21,
        title:"David",
        cat:"Seasonal",
        tags:["david", "reindeer", "brown", "red", "small", "not bears", "land", "white", "seasonal", "fluff"],
        price: 70,
        image: p21,
        sale: true,
        popular: false,
        description:"David looks festive but he just likes to be warm all year long."
    },

    {
        id:22,
        title:"Sam",
        cat:"Not Bears (Sea)",
        tags:["sam", "shark", "silver", "grey", "medium", "not bears", "sea", "white", "fluff"],
        price: 88,
        image: p22,
        sale: true,
        popular: false,
        description:"Sam loves eating, so make sure to have extra food for him so that they won't forage for other sources of meat."
    },

    {
        id:23,
        title:"Numbys",
        cat:"Not Bears (Sea)",
        tags:["numbys", "whale", "blue", "medium", "not bears", "sea", "white", "fluff"],
        price: 300,
        image: p23,
        sale: false,
        popular: true,
        description:"Numbys is the king of whales and is a pro-gamer who can beat stages for you."
    },

    {
        id:24,
        title:"Jimmy",
        cat:"Bears",
        tags:["jimmy", "bear", "bears", "grey", "large", "white", "shirt", "red", "fluff"],
        price: 70,
        image: p24,
        sale: false,
        popular: false,
        description:"Jimmy is a big bear, but he's only two years old!"
    }
]

export default data_product;