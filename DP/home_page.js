const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Spiti Valley",
    price: 18000,
    des:"If you are a person that always mixes adventure and travel, then camping in Spiti Valley is your best bet. The idea of staying inside the tents that are surrounded by perching hillocks, rocky terrains, and clear skies is one of the best experiences you can have here",
    colors: [
      {
        code: "white",
        img: "stones-at-chandrataal-lake-1.jpg",
      },
      {
        code: "darkblue",
        img: "taurus-with-Milkyway.jpg",
      },

    ],
  },
  {
    id: 2,
    title: "Delhousie",
    price: 22000,
    des:"Explore the green hills of Dalhousie and the peaceful Dharamshala while enjoying fun activities. Hike through scenic hills, camp under the stars, and soak in the calm atmosphere of the Himalayas. Experience a mix of thrill and peace in these amazing places.",
    colors: [
      {
        code: "white",
        img: "0_RW9CiQxmSI62rAmf.jpg",
      },
      {
        code: "darkblue",
        img: "dal_n.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Jayalgarh",
    price: 22000,
    des:"The gurgling Alaknanda River, slips and slides over boulders, leaving in its wake a series of frothy rapids. Hemmed along, is a forested mountain on one side and the sandy stretch of Camp High 5 on the other.",
    colors: [
      {
        code: "white",
        img: "jayal_d.jpg",
      },
      {
        code: "darkblue",
        img: "jayal_n.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Thar",
    price: 25000,
    des:"You can trek with your own camel across deserted sand dunes, sit in peace and experience the beautiful sunset and sunrise, enjoy a special evening of Rajasthani folk music and dancing, sleep in a luxury desert camp tent or out on a dune under a star-filled desert sky.",
    colors: [
      {
        code: "white",
        img: "thar_d.jpg",
      },
      {
        code: "darkblue",
        img: "thar_n.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Jim Corbett",
    price: 18000,
    des:"Embark on a thrilling jungle safari adventure amidst the lush greenery and untamed wilderness. Traverse through dense foliage and discover exotic wildlife in their natural habitat. Witness majestic creatures like elephants, tigers, and colorful bird species up close.",
    colors: [
      {
        code: "white",
        img: "jim_d.jpg",
      },
      {
        code: "darkblue",
        img: "jim_n.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductDesc = document.querySelector(".productDesc")
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs. " + choosenProduct.price;
    currentProductDesc.textContent=choosenProduct.des;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});