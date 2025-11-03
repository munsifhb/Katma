

export const shops = [
  {
    id: 1,
    name: "Zara Fabrics",
    location: "123 Main St",
    category: "Fabrics",
    descrition: "A wide variety of fabrics for all your sewing needs.",
    image: "./images/fabric-shop.jpg",
    products: [
      { id: 1, name: "Chiganvy Gold", price: 50000, image: "./images/chiganvy.jpeg", quantity: 1, shopId: 1, shopName: "Zara Fabrics", descrition: "Premium African print fabric with a soft, high-quality texture." },
      { id: 2, name: "Men Lace", price: 60000, image: "./images/men-lace.jpeg", quantity: 1, shopId: 1, shopName: "Zara Fabrics", descrition: "Elegant men's lace fabric, perfect for native wears." },
      { id: 3, name: "Lace", price: 100000, image: "./images/lace.jpeg", quantity: 1, shopId: 1, shopName: "Zara Fabrics", descrition: "High-quality lace for stylish traditional outfits." },
      { id: 4, name: "Getzner", price: 70000, image: "./images/getzner.jpeg", quantity: 1, shopId: 1, shopName: "Zara Fabrics", descrition: "Original Getzner fabric known for its fine texture and durability." }
    ]
  },

  {
    id: 2,
    name: "Medea Electronics",
    location: "IBB way opposite Kebram.",
    category: "Electronics",
    descrition: "Trusted home for affordable electronics and gadgets.",
    image: "./images/electronic-shop.jpeg",
    products: [
      { id: 5, name: "Generator", price: 120000, image: "./images/generator.jpeg", quantity: 1, shopId: 2, shopName: "Medea Electronics", descrition: "Reliable power generator ideal for home or office use." },
      { id: 6, name: "Washing Machine", price: 80000, image: "./images/washing-machine.jpeg", quantity: 1, shopId: 2, shopName: "Medea Electronics", descrition: "Automatic washing machine with multiple wash modes." },
      { id: 7, name: "Woofers", price: 30000, image: "./images/woofers.jpeg", quantity: 1, shopId: 2, shopName: "Medea Electronics", descrition: "Powerful woofers for deep sound experience." },
      { id: 8, name: "Television", price: 100000, image: "./images/tv.jpeg", quantity: 1, shopId: 2, shopName: "Medea Electronics", descrition: "LED smart TV with high resolution and sharp display." }
    ]
  },

  {
    id: 3,
    name: "Chawai Communication",
    location: "Radda way opposite Jipatu.",
    category: "Gadget",
    descrition: "Your one-stop shop for mobile and tech gadgets.",
    image: "./images/gadget-shop.jpg",
    products: [
      { id: 9, name: "Hp EliteBook", price: 300000, image: "./images/hp-elitebook.webp", quantity: 1, shopId: 3, shopName: "Chawai Communication", descrition: "Durable laptop suitable for business and personal use." },
      { id: 10, name: "Headphone", price: 5000, image: "./images/headphone.jpeg", quantity: 1, shopId: 3, shopName: "Chawai Communication", descrition: "High-quality wired headphone with clear sound." },
      { id: 11, name: "Power Bank", price: 20000, image: "./images/power-bank.jpeg", quantity: 1, shopId: 3, shopName: "Chawai Communication", descrition: "10,000mAh fast-charging power bank for mobile devices." },
      { id: 12, name: "Phone Charger", price: 3000, image: "./images/phone-charger.jpeg", quantity: 1, shopId: 3, shopName: "Chawai Communication", descrition: "Universal fast-charging phone charger." }
    ]
  },

  {
    id: 4,
    name: "JIPATU",
    location: "No.3 Himba Str.",
    category: "Groceries",
    descrition: "Everyday groceries delivered fresh to your door.",
    image: "./images/groceries-shop.jpg",
    products: [
      { id: 13, name: "Vegetables", price: 3000, image: "./images/vegetables.jpg", quantity: 1, shopId: 4, shopName: "JIPATU", descrition: "Fresh and organic vegetables from local farmers." },
      { id: 14, name: "Peak Milk", price: 5000, image: "./images/peak-milk.jpeg", quantity: 1, shopId: 4, shopName: "JIPATU", descrition: "Rich, creamy milk for your daily nutrition." },
      { id: 15, name: "Orange Juice", price: 20000, image: "./images/orange-juice.jpeg", quantity: 1, shopId: 4, shopName: "JIPATU", descrition: "Refreshing orange juice packed with vitamin C." },
      { id: 16, name: "Milk", price: 3000, image: "./images/milk.jpeg", quantity: 1, shopId: 4, shopName: "JIPATU", descrition: "Pure and healthy fresh milk." },
      { id: 17, name: "Corn Flakes", price: 3000, image: "./images/cornflakes.jpeg", quantity: 1, shopId: 4, shopName: "JIPATU", descrition: "Crunchy breakfast cereal perfect with milk or yogurt." }
    ]
  },
{
  id: 5,
  name: "Royal Jewels",
  location: "No.3 Himba Str.",
  category: "Jewelry",
  descrition: "Royal Jewels offers elegant, handcrafted jewelry pieces that combine timeless beauty with modern sophistication.",
  image: "./images/jewelry-shop.jpeg",
  products: [
    {
      id: 18,
      name: "Golden Radiance Necklace",
      price: 28000,
      image: "./images/jewelry-1.jpeg",
      quantity: 1,
      shopId: 5,
      shopName: "Royal Jewels",
      description: "A stunning gold-plated necklace that adds a graceful shine to any outfit."
    },
    {
      id: 19,
      name: "Silver Elegance Bracelet",
      price: 15000,
      image: "./images/jewelry-2.jpeg",
      quantity: 1,
      shopId: 5,
      shopName: "Royal Jewels",
      descrition: "A sleek sterling silver bracelet designed for both style and simplicity."
    },
    {
      id: 20,
      name: "Diamond Spark Earrings",
      price: 22000,
      image: "./images/jewelry-3.jpeg",
      quantity: 1,
      shopId: 5,
      shopName: "Royal Jewels",
      description: "Elegant diamond-inspired earrings that shimmer with every turn."
    },
    {
      id: 21,
      name: "RoseGold Charm Ring",
      price: 18000,
      image: "./images/jewelry-4.jpeg",
      quantity: 1,
      shopId: 5,
      shopName: "Royal Jewels",
      description: "A chic rose gold ring featuring a delicate charm symbolizing beauty and love."
    },
    {
      id: 22,
      name: "Pearl Whisper Pendant",
      price: 20000,
      image: "./images/jewelry-5.jpeg",
      quantity: 1,
      shopId: 5,
      shopName: "Royal Jewels",
      description: "A classic pearl pendant necklace that brings timeless elegance to your collection."
    }
  ]
},

{
  id: 6,
  name: "GlowNest",
  location: "No.5 Himba Str.",
  category: "Cosmetics",
  descrition: "GlowNest is your one-stop beauty shop for skincare, makeup, and self-care essentials that help you glow every day.",
  image: "./images/glownest-shop.png",
  products: [
    {
      id: 23,
      name: "Radiant Glow Face Cream",
      price: 8500,
      image: "./images/product-1.jpeg",
      quantity: 1,
      shopId: 6,
      shopName: "GlowNest",
      description: "A hydrating face cream that brightens and evens your skin tone for a natural glow."
    },
    {
      id: 24,
      name: "SilkTouch Body Lotion",
      price: 6000,
      image: "./images/product-2.jpeg",
      quantity: 1,
      shopId: 6,
      shopName: "GlowNest",
      description: "Deeply nourishing body lotion that keeps your skin smooth and moisturized all day."
    },
    {
      id: 25,
      name: "Velvet Matte Lipstick",
      price: 4500,
      image: "./images/product-3.jpeg",
      quantity: 1,
      shopId: 6,
      shopName: "GlowNest",
      description: "Long-lasting matte lipstick with a rich, velvety finish for all-day confidence."
    },
    {
      id: 26,
      name: "Pure Essence Face Cleanser",
      price: 7000,
      image: "./images/product-4.jpeg",
      quantity: 1,
      shopId: 6,
      shopName: "GlowNest",
      description: "Gentle face cleanser that removes dirt and makeup while keeping your skin fresh and soft."
    },
    {
      id: 27,
      name: "Aloe Vera Soothing Gel",
      price: 5000,
      image: "./images/product-5.jpeg",
      quantity: 1,
      shopId: 6,
      shopName: "GlowNest",
      description: "Cooling aloe vera gel that hydrates and soothes irritated skin naturally."
    },
    {
      id: 28,
      name: "RoseMist Face Toner",
      price: 5500,
      image: "./images/product-6.jpeg",
      quantity: 1,
      shopId: 6,
      shopName: "GlowNest",
      description: "Refreshing rose water toner that refines pores and restores your skin’s balance."
    },
    {
      id: 29,
      name: "Charcoal Detox Mask",
      price: 8000,
      image: "./images/product-7.jpeg",
      quantity: 1,
      shopId: 6,
      shopName: "GlowNest",
      description: "Purifying mask that deeply cleanses your skin, removing oil and impurities."
    },
    {
      id: 30,
      name: "GlowBlend Foundation",
      price: 9500,
      image: "./images/product-8.jpeg",
      quantity: 1,
      shopId: 6,
      shopName: "GlowNest",
      description: "Lightweight foundation that gives smooth, natural coverage with a radiant finish."
    },
    {
      id: 31,
      name: "Lavish Hair Serum",
      price: 10000,
      image: "./images/product-9.jpeg",
      quantity: 1,
      shopId: 6,
      shopName: "GlowNest",
      description: "Nourishing serum that adds shine and reduces frizz, leaving your hair silky smooth."
    },
    {
      id: 32,
      name: "GoldShine Body Scrub",
      price: 7500,
      image: "./images/product-10.jpeg",
      quantity: 1,
      shopId: 6,
      shopName: "GlowNest",
      description: "Exfoliating body scrub with natural gold particles that brighten and polish your skin."
    }
  ]
}

];
