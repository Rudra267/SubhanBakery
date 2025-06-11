const products = [
  {
    name: "Assorted Cookies – BIG",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A variety of rich and flavorful cookies in one large pack.",
    description: "Our Assorted Cookies – BIG pack offers a delightful variety of rich, flavorful treats, including butter, chocolate, coconut, and dry fruit cookies. Carefully crafted with high-quality ingredients, these cookies are perfect for parties, family gatherings, or everyday snacking. With their crisp texture and mouth-watering taste, this large pack ensures that there’s something for everyone to enjoy. A perfect gift or treat for yourself any time of the year.",
    image: "./assets/images/resource/products/AssortedCookie.jpg",
    specification: [
      "Flavor: Mixed (Butter, Chocolate, Coconut, Dry Fruit)",
      "Weight: 500g",
      "Shelf Life: 4 months",
      "Ingredients: Wheat flour, sugar, butter, cocoa, dry fruits",
      "Storage: Keep in a cool and dry place"
    ]
  },
  {
    name: "Assorted Cookies Dry",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Mix of dry, crisp cookies perfect for sharing or gifting.",
    description: "The Assorted Cookies Dry pack includes a tempting variety of crisp, dry cookies made with traditional recipes and natural ingredients. Perfect for tea time or coffee breaks, these cookies offer a satisfying crunch in every bite. Ideal for sharing with guests or gifting to loved ones, they combine timeless flavors with homemade charm. Each cookie is baked to perfection, delivering consistent texture, aroma, and taste that cookie lovers will appreciate.",
    image: "./assets/images/resource/products/AssortedCookie.jpg",
    specification: [
      "Flavor: Dry Cookies Mix",
      "Weight: 450g",
      "Shelf Life: 3 months",
      "Ingredients: Refined flour, sugar, vegetable oil, flavoring",
      "Storage: Store in an airtight container after opening"
    ]
  },
  {
    name: "Brownie Cupcake",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Deliciously fudgy chocolate brownie in rich & satisfying.",
    description: "Our Brownie Cupcake is a rich, fudgy delight that combines the dense goodness of a brownie with the charm of a cupcake. Each bite melts in your mouth, bursting with intense chocolate flavor. Made using premium cocoa and real butter, this treat is moist, soft, and incredibly satisfying. It’s perfect for chocolate lovers looking for a gourmet snack experience. Enjoy it warm or chilled, anytime you crave indulgence with a smile.",
    image: "./assets/images/resource/products/browni.png",
    specification: [
      "Flavor: Chocolate",
      "Weight: 100g",
      "Shelf Life: 10 days",
      "Ingredients: Cocoa, flour, sugar, eggs, butter",
      "Storage: Refrigerate to keep fresh"
    ]
  },
  {
    name: "Cake Rusk Plain",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Double-baked fruit cake rusks, rich in flavor and crispiness.",
    description: "Cake Rusk Plain is a classic tea-time favorite that brings back nostalgic flavors in every bite. Made by double-baking slices of soft cake until golden and crisp, these rusks are crunchy on the outside yet light and airy inside. Perfectly paired with hot tea or coffee, they’re ideal for morning routines or evening snacks. The rusks are made with wholesome ingredients and no preservatives, ensuring a healthy, traditional Indian bakery delight.",
    image: "./assets/images/resource/products/cakerusk.JPG",
    specification: [
      "Flavor: Plain",
      "Weight: 400g",
      "Shelf Life: 6 months",
      "Ingredients: Wheat flour, sugar, milk solids, ghee",
      "Storage: Store in a cool, dry place"
    ]
  },
  {
    name: "Chand Biscuit",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Moon-shaped buttery biscuits with a melt-in-the-mouth.",
    description: "Chand Biscuits are moon-shaped, buttery delicacies crafted for those who love subtle, smooth flavors. With a soft texture that literally melts in the mouth, these biscuits are made with refined flour, ghee, and a touch of cardamom for added aroma. Perfect for kids and adults alike, they’re great for festive occasions, tea breaks, or midnight munchies. Their charming crescent shape adds a whimsical touch to your snack plate or dessert tray.",
    image: "./assets/images/resource/products/chandbis.JPG",
    specification: [
      "Flavor: Butter Cardamom",
      "Weight: 300g",
      "Shelf Life: 4 months",
      "Ingredients: Refined flour, ghee, sugar, cardamom",
      "Storage: Keep in an airtight jar"
    ]
  },
  {
    name: "Chocolate Kaju",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A rich fusion of chocolate and cashew in every crunchy bite.",
    description: "Chocolate Kaju is a luxurious fusion of premium cashew nuts and smooth chocolate, blended into a crispy, crunchy biscuit. Each bite delivers the nuttiness of kaju balanced perfectly with the richness of cocoa. Ideal for festive gifts or personal indulgence, these cookies stand out for their unique texture and gourmet taste. Perfectly baked to achieve a fine crunch, they’re a delicious treat for chocolate and dry fruit lovers of all ages.",
    image: "./assets/images/resource/products/choclatekaju.JPG",
    specification: [
      "Flavor: Chocolate Cashew",
      "Weight: 350g",
      "Shelf Life: 5 months",
      "Ingredients: Cashew nuts, cocoa powder, flour, butter",
      "Storage: Avoid moisture; keep sealed"
    ]
  },
  {
    name: "Coconut Macaroons",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Delicious coconut treats with a chewy center and golden crust.",
    description: "Coconut Macaroons are soft, chewy delights with a beautifully golden crust that are perfect for coconut lovers. Made with desiccated coconut and lightly sweetened for balance, these macaroons are baked to perfection to provide a crisp exterior and moist interior. Whether served as a dessert or a snack, they’re a rich, satisfying treat. Ideal for gifting or festive occasions, these little bites are simple yet indulgent.",
    image: "./assets/images/resource/products/Coconut_Macaroons.jpg",
    specification: [
      "Flavor: Coconut",
      "Weight: 250g",
      "Shelf Life: 2 months",
      "Ingredients: Desiccated coconut, condensed milk, sugar, egg whites",
      "Storage: Store in a cool, airtight container"
    ]
  },
  {
    name: "Dilkhush",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Sweet coconut-filled puff pastry that brings joy with every bite.",
    description: "Dilkhush is a popular South Indian bakery treat made with flaky puff pastry stuffed generously with sweetened coconut, dry fruits, and sometimes a hint of cardamom. It’s soft inside with a crispy outer layer, offering a perfect balance of textures. Often enjoyed as a tea-time snack, this pastry is loved by all ages. A nostalgic delight, Dilkhush is ideal for festive occasions or for enjoying as a satisfying dessert after meals.",
    image: "./assets/images/resource/products/dilkhush.jpg",
    specification: [
      "Flavor: Sweet Coconut",
      "Weight: 300g",
      "Shelf Life: 4 days",
      "Ingredients: Puff pastry, grated coconut, sugar, dry fruits, cardamom",
      "Storage: Refrigerate and consume within 3-4 days"
    ]
  },
  {
    name: "Dinner Roll",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Soft, buttery rolls perfect to pair with soups, curries or as sliders.",
    description: "Dinner Rolls are classic, soft-textured bread rolls that make an excellent side for any meal. Light, fluffy, and slightly buttery, these rolls are perfect for dipping in soups, enjoying with gravies, or stuffing for sandwiches and sliders. They are freshly baked and have a smooth golden crust. A staple in bakeries and homes alike, they are versatile, delicious, and a must-have on any dinner table.",
    image: "./assets/images/resource/products/dinnerroll.jpg",
    specification: [
      "Flavor: Plain / Buttery",
      "Weight: 400g (6 pieces approx.)",
      "Shelf Life: 3 days",
      "Ingredients: Refined flour, yeast, sugar, salt, butter",
      "Storage: Store in a bread box or airtight container"
    ]
  },
  {
    name: "Donuts",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Classic sweet donuts, soft and coated with sugar.",
    description: "Our Donuts are soft, fluffy, and dusted lightly with sugar for that irresistible sweet taste. These classic ring-shaped bakery delights are perfect for a quick bite, sweet craving, or a mid-day treat. Fried to golden perfection, they’re slightly crisp outside with a soft, airy texture inside. Whether eaten plain or paired with coffee, these donuts are sure to bring smiles and satisfy sweet tooth cravings at any time of the day.",
    image: "./assets/images/resource/products/donuts.jpg",
    specification: [
      "Flavor: Plain Sweet",
      "Weight: 300g (4–5 pieces)",
      "Shelf Life: 2 days",
      "Ingredients: Refined flour, sugar, yeast, milk, oil",
      "Storage: Best consumed fresh; refrigerate to store"
    ]
  },
  {
    name: "Double Ka Meetha Bread",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Special bread made for Hyderabadi dessert dishes.",
    description: "Double Ka Meetha Bread is specially crafted for making the beloved Hyderabadi dessert 'Double Ka Meetha'. This bread has the ideal texture and density for absorbing sweetened milk and ghee, while retaining a soft bite after cooking. It toasts well and doesn’t crumble, making it perfect for traditional Indian sweet preparations. Whether you're recreating a festive dish or exploring new dessert recipes, this bread is the authentic choice for richness and flavor.",
    image: "./assets/images/resource/products/doublekamitha.png",
    specification: [
      "Flavor: Neutral (for desserts)",
      "Weight: 400g",
      "Shelf Life: 2 days (fresh)",
      "Ingredients: Maida (refined flour), yeast, sugar, salt, milk",
      "Storage: Keep in a cool dry place or refrigerate"
    ]
  },
  {
    name: "Kunafa",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Crispy golden layers with sweet cheese, soaked in fragrant sugar syrup.",
    description: "Kunafa is a traditional Middle Eastern dessert made with shredded filo pastry and a rich filling of sweet cheese or cream. Soaked in sugar syrup and often topped with pistachios, it offers a perfect balance of crunch and sweetness.",
    image: "./assets/images/resource/products/kunafa.png",
    specification: [
      "Flavor: Sweet Cheese",
      "Weight: 250g",
      "Shelf Life: 3 days",
      "Ingredients: Filo pastry, cheese, sugar syrup, butter",
      "Storage: Keep refrigerated"
    ]
  },
  {
    name: "Dream Cake",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A luscious dessert layered with rich cream and velvety chocolate.",
    description: "Dream Cake is a multi-layered dessert with moist sponge, creamy fillings, and a rich chocolate glaze. Every bite offers a melt-in-mouth experience, perfect for celebrations or indulgent cravings.",
    image: "./assets/images/resource/products/dreamcake.png",
    specification: [
      "Flavor: Chocolate",
      "Weight: 300g",
      "Shelf Life: 5 days",
      "Ingredients: Sponge cake, cream, chocolate ganache",
      "Storage: Refrigerate between 0–5°C"
    ]
  },
  {
    name: "Chocolate Kunafa",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A decadent twist—golden strands of Kunafa with rich chocolate filling.",
    description: "Chocolate Kunafa merges the traditional pastry with indulgent chocolate layers. Crisp and sweet on the outside, with a gooey, rich chocolate interior. A dessert for modern and classic tastes alike.",
    image: "./assets/images/resource/products/chocolatekunffa.png",
    specification: [
      "Flavor: Chocolate",
      "Weight: 250g",
      "Shelf Life: 3 days",
      "Ingredients: Filo pastry, chocolate, sugar syrup, butter",
      "Storage: Store in a cool, dry place or refrigerate"
    ]
  },
  {
    name: "Apricot Pudding",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Smooth and creamy dessert infused with the tangy flavor of ripe apricots.",
    description: "Apricot Pudding is a light and velvety dessert bursting with fruity flavor. Made with real apricots and a creamy base, it’s the perfect balance of sweet and tart for a refreshing end to any meal.",
    image: "./assets/images/resource/products/appricot.png",
    specification: [
      "Flavor: Apricot",
      "Weight: 200g",
      "Shelf Life: 4 days",
      "Ingredients: Apricot puree, cream, gelatin, sugar",
      "Storage: Keep chilled until serving"
    ]
  },
  {
    name: "Dry Fruits",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Premium selection of dry fruits and nuts for all your needs.",
    description: "A wholesome mix of high-quality dry fruits, including almonds, cashews, raisins, and more. Perfect as a snack or to enhance desserts and breakfast bowls.",
    image: "./assets/images/resource/products/Dry.webp",
    specification: [
      "Flavor: Natural",
      "Weight: 500g",
      "Shelf Life: 6 months",
      "Ingredients: Almonds, cashews, raisins, walnuts",
      "Storage: Store in airtight container in a cool place"
    ]
  },
  {
    name: "Mixed Dry Fruits",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A healthy mix of assorted dry fruits and nuts packed with flavor.",
    description: "This delightful blend includes a variety of premium dry fruits and nuts, perfect for gifting, snacking, or adding to festive recipes. Tasty and nutritious in every handful.",
    image: "./assets/images/resource/products/dryfruits.JPG",
    specification: [
      "Flavor: Mixed Nuts",
      "Weight: 400g",
      "Shelf Life: 6 months",
      "Ingredients: Mixed dry fruits and nuts",
      "Storage: Keep in airtight jar; avoid moisture"
    ]
  },
   {
    name: "Fine Biscuit",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Rich, buttery delicacy with a crisp texture.",
    description: "Fine Biscuit Hyderabadi is a classic bakery delight known for its golden color, crisp bite, and smooth buttery flavor. Often enjoyed with tea or as a standalone snack, these biscuits are a nostalgic treat with every crunch.",
    image: "./assets/images/resource/products/fine.JPG",
    specification: [
      "Flavor: Butter",
      "Weight: 200g",
      "Shelf Life: 2 months",
      "Ingredients: Refined flour, butter, sugar, milk solids",
      "Storage: Store in airtight container in a cool place"
    ]
  },
  {
    name: "Fruit Bread",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Soft and fluffy bread packed with real fruit chunks.",
    description: "Fruit Bread is a soft, mildly sweet bread enriched with colorful candied fruits. Perfect for breakfast or snacking, it brings a fruity punch to every bite. Enjoy it toasted, with butter, or as it is.",
    image: "./assets/images/resource/products/fruit_bis.jpg",
    specification: [
      "Flavor: Mixed Fruit",
      "Weight: 400g",
      "Shelf Life: 4 days",
      "Ingredients: Wheat flour, candied fruits, sugar, yeast, milk",
      "Storage: Best consumed fresh; refrigerate for extended shelf life"
    ]
  },
  {
    name: "Fruit Biscuit",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Crispy, buttery biscuit loaded with candied fruits.",
    description: "Fruit Biscuit is a crunchy treat blended with colorful candied fruits, offering a delightful sweetness and vibrant texture. A Hyderabad bakery staple, perfect with chai or as a light dessert.",
    image: "./assets/images/resource/products/fruitbis.png",
    specification: [
      "Flavor: Fruit & Butter",
      "Weight: 250g",
      "Shelf Life: 2 months",
      "Ingredients: Flour, butter, sugar, candied fruits",
      "Storage: Store in a cool, dry place"
    ]
  },
  {
    name: "Kaju",
    newprice: 100.00,
    oldprice: 100.00,
    title: "High-quality cashew nuts – perfect for snacking or cooking.",
    description: "Dry Fruits Kaju are premium-grade cashew nuts that are rich in taste and nutrition. Light in color and naturally sweet, these cashews are perfect for daily snacking, festive recipes, or gifting.",
    image: "./assets/images/resource/products/kajuImage.jpg",
    specification: [
      "Flavor: Natural Cashew",
      "Weight: 250g",
      "Shelf Life: 6 months",
      "Ingredients: Cashew nuts",
      "Storage: Keep in airtight jar; avoid moisture"
    ]
  },
  {
    name: "Fruit Cake Rusks",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Crunchy and buttery rusks with fruity bits inside.",
    description: "Fruit Cake Rusks combine the crisp texture of traditional rusks with the richness of fruit cake flavors. These double-baked snacks are perfect with hot tea and offer a satisfying, buttery crunch with every bite.",
    image: "./assets/images/resource/products/fruitcakerusk.JPG",
    specification: [
      "Flavor: Fruit Cake",
      "Weight: 300g",
      "Shelf Life: 2 months",
      "Ingredients: Cake flour, candied fruits, sugar, butter",
      "Storage: Store in airtight container; avoid humidity"
    ]
  },
   {
    name: "Cashew Nuts",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Crunchy cookies with a cashew twist and jam center.",
    description: "Cashew Nuts cookies are crisp, golden-baked treats topped with a dollop of sweet jam. They combine the nutty richness of cashews with a fruity center, making them a perfect indulgent snack.",
    image: "./assets/images/resource/products/kajunuts.JPG",
    specification: [
      "Flavor: Cashew & Jam",
      "Weight: 200g",
      "Shelf Life: 2 months",
      "Ingredients: Cashew, flour, butter, sugar, jam",
      "Storage: Store in airtight container in a cool, dry place"
    ]
  },
  {
    name: "Jam Kaju",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Crunchy kaju cookies with a vibrant jam topping.",
    description: "Jam Kaju is a classic bakery delight where crispy cashew cookies meet a rich jam topping. These cookies offer a perfect blend of buttery crunch and fruity sweetness.",
    image: "./assets/images/resource/products/kajunuts.JPG",
    specification: [
      "Flavor: Cashew & Fruit Jam",
      "Weight: 200g",
      "Shelf Life: 2 months",
      "Ingredients: Cashew, flour, butter, jam, sugar",
      "Storage: Keep in a cool, airtight container"
    ]
  },
  {
    name: "Khara Biscuit",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Crispy, spicy tea-time biscuits with a savory kick.",
    description: "Khara Biscuits are savory, crunchy bites with a perfect blend of Indian spices. Great for those who prefer a spicy snack with tea, they are light, crisp, and full of flavor.",
    image: "./assets/images/resource/products/KHARA_BIS.JPG",
    specification: [
      "Flavor: Spicy & Savory",
      "Weight: 250g",
      "Shelf Life: 1.5 months",
      "Ingredients: Flour, spices, butter, salt",
      "Storage: Store in a dry, sealed jar"
    ]
  },
  {
    name: "Milk Bread",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Soft, fluffy bread made with pure milk goodness.",
    description: "Milk Bread is a soft and airy loaf made with rich milk for a naturally sweet taste. Ideal for breakfast, sandwiches, or toasted with butter. Loved by all age groups.",
    image: "./assets/images/resource/products/milkbread.jpg",
    specification: [
      "Flavor: Milky",
      "Weight: 400g",
      "Shelf Life: 4 days",
      "Ingredients: Wheat flour, milk, sugar, yeast",
      "Storage: Best when fresh; refrigerate if needed"
    ]
  },
  {
    name: "Milk Rusks",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Double-baked milk rusks for your evening chai.",
    description: "Milk Rusks are crisp, golden rusks made from milk bread and baked twice to perfection. A popular snack for dipping into tea, they are crunchy, satisfying, and slightly sweet.",
    image: "./assets/images/resource/products/milkrusk.JPG",
    specification: [
      "Flavor: Sweet Milk",
      "Weight: 300g",
      "Shelf Life: 2 months",
      "Ingredients: Milk bread, sugar, flour, butter",
      "Storage: Store in airtight container"
    ]
  },
   {
    name: "Muffins 6 Cups",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Pack of six soft muffins, a treat to share and enjoy.",
    description: "Muffins 6 Cups offer a delightful combination of softness and sweetness. Perfect for small gatherings or evening tea, these muffins are light, moist, and delicious.",
    image: "./assets/images/resource/products/MUFFINS.jpg",
    specification: [
      "Quantity: 6 muffins per pack",
      "Flavor: Vanilla",
      "Shelf Life: 4 days",
      "Ingredients: Flour, sugar, eggs, milk, baking powder",
      "Storage: Keep in a cool, dry place"
    ]
  },
  {
    name: "Oats Biscuits",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Healthy, crispy oat biscuits for the health-conscious.",
    description: "Oats Biscuits are crunchy and wholesome, made with rolled oats and minimal sugar. Great for a nutritious snack that doesn’t compromise on taste.",
    image: "./assets/images/resource/products/oatsbis.JPG",
    specification: [
      "Flavor: Oat & Wheat",
      "Weight: 200g",
      "Shelf Life: 2 months",
      "Ingredients: Oats, flour, brown sugar, butter",
      "Storage: Store in an airtight container"
    ]
  },
  {
    name: "Osmania Biscuits 200/400gm",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Buttery and slightly sweet biscuits, a Hyderabadi favorite.",
    description: "Osmania Biscuits are a famous snack from Hyderabad. Soft, buttery, and slightly sweet, they pair perfectly with a hot cup of tea and are loved across generations.",
    image: "./assets/images/resource/products/osmania.jpg",
    specification: [
      "Flavor: Buttery Sweet",
      "Available Sizes: 200g / 400g",
      "Shelf Life: 2 months",
      "Ingredients: Maida, milk, sugar, butter",
      "Storage: Keep sealed in a dry place"
    ]
  },
  {
    name: "Pistachio",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Crunchy biscuit infused with real pistachio flavor.",
    description: "Pistachio cookies deliver a rich, nutty flavor with every bite. Made with real pistachios, these biscuits are a royal treat for nut lovers.",
    image: "./assets/images/resource/products/pista.JPG",
    specification: [
      "Flavor: Pistachio",
      "Weight: 200g",
      "Shelf Life: 1.5 months",
      "Ingredients: Pistachios, flour, butter, sugar",
      "Storage: Store in cool, dry place"
    ]
  },
  {
    name: "Pista Cake 1kg",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Rich and soft pistachio cake, ideal for celebrations.",
    description: "Pista Cake is a soft, moist cake packed with the earthy flavor of pistachios. This 1kg delight is perfect for parties, family get-togethers, or gifting.",
    image: "./assets/images/resource/products/pista.png",
    specification: [
      "Flavor: Pistachio",
      "Weight: 1kg",
      "Shelf Life: 4 days",
      "Ingredients: Pistachios, flour, eggs, sugar, milk",
      "Storage: Keep refrigerated"
    ]
  },
  {
    name: "Plain Sandwich Bread",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Soft and fluffy bread, ideal for everyday sandwiches.",
    description: "Plain Sandwich Bread is freshly baked, soft, and easy to slice. Perfect for daily breakfast, lunchboxes, or snacks with your favorite spreads or fillings.",
    image: "./assets/images/resource/products/plainsandwishbread.jpg",
    specification: [
      "Flavor: Classic Plain",
      "Weight: 400g",
      "Shelf Life: 4 days",
      "Ingredients: Wheat flour, yeast, salt, sugar",
      "Storage: Store in a bread box or refrigerate"
    ]
  },
  {
    name: "Rasmalai Cake 1kg",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Combining the softness of cake with creamy flavor of rasmalai.",
    description: "Rasmalai Cake is a fusion dessert that brings together the richness of traditional rasmalai with the soft texture of cake. Ideal for festive occasions and celebrations.",
    image: "./assets/images/resource/products/Rasmalai.png",
    specification: [
      "Flavor: Rasmalai",
      "Weight: 1kg",
      "Shelf Life: 3 days",
      "Ingredients: Milk, cream, sugar, flour, saffron",
      "Storage: Keep refrigerated"
    ]
  },
  {
    name: "Plum 380/500gm",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Rich and moist plum cake loaded with dried fruits flavor.",
    description: "Plum cake offers a classic holiday treat with its dense texture and rich mix of dried fruits. It’s perfect for tea-time or festive gatherings.",
    image: "./assets/images/resource/products/plum.jpeg",
    specification: [
      "Flavor: Plum",
      "Available Sizes: 380g / 500g",
      "Shelf Life: 15 days",
      "Ingredients: Dried fruits, flour, sugar, eggs, butter",
      "Storage: Store in a cool, dry place"
    ]
  },
  {
    name: "Poori",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Golden fried Indian bread, soft inside and crispy outside.",
    description: "Poori is a deep-fried bread made from wheat flour, served best with curry or sweets. Enjoy it fresh and hot for a satisfying meal.",
    image: "./assets/images/resource/products/poori.jpeg",
    specification: [
      "Type: Indian Fried Bread",
      "Weight: 250g (approx 5-6 pcs)",
      "Shelf Life: Best consumed fresh",
      "Ingredients: Wheat flour, oil, salt",
      "Storage: Serve hot or warm"
    ]
  },
  {
    name: "Roat 500gm",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Traditional baked sweet and rich in flavor, perfect with tea.",
    description: "Roat is a traditional baked goodie, sweet and hearty, often served during festivals or alongside evening tea.",
    image: "./assets/images/resource/products/roat.jpg",
    specification: [
      "Flavor: Traditional Sweet",
      "Weight: 500g",
      "Shelf Life: 1 month",
      "Ingredients: Wheat flour, jaggery, ghee, dry fruits",
      "Storage: Store in an airtight container"
    ]
  },
  {
    name: "Strawberry 1kg",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Sweet strawberry flavored biscuits that melt in your mouth.",
    description: "Strawberry biscuits are soft, sweet treats with a lovely strawberry flavor. Great for gifting or enjoying with milk.",
    image: "./assets/images/resource/products/straberry.jpg",
    specification: [
      "Flavor: Strawberry",
      "Weight: 1kg",
      "Shelf Life: 2 months",
      "Ingredients: Strawberry essence, flour, sugar, butter",
      "Storage: Keep in a cool dry place"
    ]
  },
  {
    name: "Strawberry Cake 1kg",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Sweet strawberry flavored cake that melt in your mouth.",
    description: "This Strawberry Cake is soft, fruity, and perfect for birthdays and celebrations. Topped with fresh cream and infused with strawberry essence.",
    image: "./assets/images/resource/products/stracake.png",
    specification: [
      "Flavor: Strawberry",
      "Weight: 1kg",
      "Shelf Life: 4 days",
      "Ingredients: Strawberries, flour, sugar, eggs, cream",
      "Storage: Keep refrigerated"
    ]
  },
  {
    name: "Sweet Puff",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Flaky puff pastry filled with sweet coconut mixture a bakery.",
    description: "Sweet Puff is a layered, golden baked pastry with a luscious sweet coconut filling. A bakery classic, perfect for snacking.",
    image: "./assets/images/resource/products/sweetpuf.jpg",
    specification: [
      "Filling: Sweet coconut mix",
      "Weight: 150g (approx 2 pcs)",
      "Shelf Life: 3 days",
      "Ingredients: Flour, butter, coconut, sugar",
      "Storage: Store in cool place, consume fresh"
    ]
  },
   {
    name: "Walnuts",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Premium quality walnuts packed with nutrition and crunch.",
    description: "Our premium walnuts are rich in Omega-3 and antioxidants, perfect for snacking or adding to your favorite recipes. Sourced from the best farms for quality and taste.",
    image: "./assets/images/resource/products/walnuts.JPG",
    specification: [
      "Type: Whole Walnuts",
      "Weight: 250g",
      "Shelf Life: 6 months",
      "Ingredients: Natural walnuts",
      "Storage: Store in a cool, dry place"
    ]
  },
  {
    name: "Mango Cake 1kg",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A tropical treat bursting with the juicy mangoes in every bite.",
    description: "Mango Cake offers a moist sponge layered with mango puree and whipped cream. A deliciously fruity cake perfect for summer parties and celebrations.",
    image: "./assets/images/resource/products/mangocake.png",
    specification: [
      "Flavor: Mango",
      "Weight: 1kg",
      "Shelf Life: 4 days",
      "Ingredients: Mango pulp, flour, cream, sugar, eggs",
      "Storage: Keep refrigerated"
    ]
  },
  {
    name: "Butterscotch Cake 1kg",
    newprice: 100.00,
    oldprice: 100.00,
    title: "An indulgence with a buttery that melts in your mouth.",
    description: "This Butterscotch Cake is rich, creamy, and topped with crunchy caramel bits. A classic choice for celebrations and dessert lovers.",
    image: "./assets/images/resource/products/Butterscotch.png",
    specification: [
      "Flavor: Butterscotch",
      "Weight: 1kg",
      "Shelf Life: 4 days",
      "Ingredients: Butter, sugar, caramel, flour, cream, eggs",
      "Storage: Keep refrigerated"
    ]
  },
  {
    name: "White Almond",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A light and fluffy cake with the delicate flavor of almonds.",
    description: "White Almond Cake is a soft, nutty dessert made with finely ground almonds and a hint of vanilla. Ideal for tea parties and elegant gatherings.",
    image: "./assets/images/resource/products/whiteAlomond.png",
    specification: [
      "Flavor: Almond",
      "Weight: 1kg",
      "Shelf Life: 4 days",
      "Ingredients: Almond flour, vanilla, sugar, eggs, cream",
      "Storage: Keep refrigerated"
    ]
  },
  {
    name: "White Forest",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A dreamy delight of soft vanilla sponge layered.",
    description: "White Forest Cake features vanilla sponge cake layers filled with whipped cream and white chocolate. A modern twist on a beloved classic.",
    image: "./assets/images/resource/products/whiteforest.png",
    specification: [
      "Flavor: Vanilla & White Chocolate",
      "Weight: 1kg",
      "Shelf Life: 4 days",
      "Ingredients: Flour, sugar, white chocolate, cream, eggs",
      "Storage: Keep refrigerated"
    ]
  },
  {
    name: "Black Forest Cake",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A decadent classic with layers of rich chocolate sponge.",
    description: "Black Forest Cake is a traditional German dessert with layers of chocolate sponge, whipped cream, and cherries. A timeless favorite for all occasions.",
    image: "./assets/images/resource/products/blackforest.png",
    specification: [
      "Flavor: Chocolate & Cherry",
      "Weight: 1kg",
      "Shelf Life: 4 days",
      "Ingredients: Cocoa, flour, cherries, cream, eggs",
      "Storage: Keep refrigerated"
    ]
  },

   {
    name: "Pine Apple Cake",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A refreshing layered whipped sweetness of pineapple.",
    description: "Pineapple Cake is a light, tropical dessert made with layers of vanilla sponge, pineapple slices, and whipped cream. It’s perfect for birthdays and summer celebrations.",
    image: "./assets/images/resource/products/pineapple.png",
    specification: [
      "Flavor: Pineapple",
      "Weight: 1kg",
      "Shelf Life: 4 days",
      "Ingredients: Pineapple, flour, sugar, cream, eggs",
      "Storage: Keep refrigerated"
    ]
  },
  {
    name: "Victoria Rich Plane",
    newprice: 100.00,
    oldprice: 100.00,
    title: "Victoria Plain Rich Cake is soft, buttery satisfying bite.",
    description: "The Victoria Rich Plain Cake is a buttery classic known for its soft crumb and rich flavor. Ideal for pairing with tea or coffee, and loved for its simplicity and taste.",
    image: "./assets/images/resource/products/victoriaplaincake.jpg",
    specification: [
      "Flavor: Butter Plain",
      "Weight: 500g",
      "Shelf Life: 7 days",
      "Ingredients: Butter, flour, sugar, eggs, vanilla",
      "Storage: Store in a cool, dry place"
    ]
  },
  {
    name: "Chocolate Exotia",
    newprice: 100.00,
    oldprice: 100.00,
    title: "A luxurious fusion of rich chocolate and exotic flavors.",
    description: "Chocolate Exotia is a premium dessert cake with multiple chocolate layers, rich ganache, and hints of exotic spices or fruits. Crafted for indulgence and special occasions.",
    image: "./assets/images/resource/products/exotia.png",
    specification: [
      "Flavor: Rich Chocolate Fusion",
      "Weight: 1kg",
      "Shelf Life: 4 days",
      "Ingredients: Dark chocolate, flour, cream, sugar, exotic flavoring",
      "Storage: Keep refrigerated"
    ]
  }
];


const queryString = window.location.search;

// Parse the query string
const urlParams = new URLSearchParams(queryString);

// Get individual parameters

const data = urlParams.get('data'); 
let figureTag = document.getElementById('figureTag');
let imageTag = document.getElementById('imageTag');
let newprice = document.getElementById("newprice");
let oldprice = document.getElementById('oldprice');
let productName = document.getElementById("productName");
let desc = document.getElementById("desc");
// console.log(desc)
let title = document.querySelectorAll('.title')

let specification = document.getElementById("specification"); // Get table container

const filterProduct = (data) => {
  const product = products[data];

  newprice.textContent = `₹ ${product.newprice}`;
  oldprice.textContent = `₹ ${product.oldprice}`;
  productName.textContent = product.name;
  desc.textContent = product.description;

  title.forEach(element => {
    element.textContent = product.title;
  });

  imageTag.setAttribute('src', `${product.image}`);

  // Clear any existing table
  specification.innerHTML = "";

  // Create table
  const table = document.createElement("table");
  table.className = "spec-table";

  // Add rows for each specification
  product.specification.forEach(spec => {
    const row = document.createElement("tr");
    const [key, value] = spec.split(":").map(s => s.trim());

    const th = document.createElement("th");
    th.textContent = key;

    const td = document.createElement("td");
    td.textContent = value;

    row.appendChild(th);
    row.appendChild(td);
    table.appendChild(row);
  });

  // Append table to specification container
  specification.appendChild(table);
};


filterProduct(parseInt(data));
