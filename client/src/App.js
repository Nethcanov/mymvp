import DefaultProject from './DefaultProject';
import './App.css';
// import ButtonGroup from "./components/ButtonGroup";

import React, { useState } from 'react';
import {Collapse, Button, CardBody, Card } from 'reactstrap';
import {CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';



const items = [
  {
      id: 1,
      name: "Name: Chili con carne",
      url: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/a0e2c09c-7fe1-47e5-b4df-bfa450a981e8/Derivates/40dc6435-5651-497e-9a69-3f30fa04c133.jpg",
      prepTime: "Preparation time: 10 mins",
      cookTime: "Cooking time: 1 hour",
      level: "Level: easy",
      ingredients: "Ingredients: 2 medium onions, 2 cloves garlic, 2 medium carrots, 2 sticks celery, 2 red peppers, olive oil, 1 heaped teaspoon chilli powder, 1 heaped teaspoon ground cumin, 1 heaped teaspoon ground cinnamon, 1 x 400 g tin of chickpeas, 1 x 400 g tin of red kidney beans, 2 x 400 g tin of chopped tomatoes, 500 g quality minced beef, ½ a bunch of fresh coriander, 2 tablespoons balsamic vinegar ",
      method: "Method: 1. Peel and finely chop the onions, garlic, carrots and celery – don’t worry about the technique, just chop away until fine. Halve the red peppers, remove the stalks and seeds and roughly chop. 2. Heat 2 tablespoons of oil in a large casserole pan on a medium-high heat, add the chopped veg, chilli powder, cumin, cinnamon and a good pinch of sea salt and black pepper, then cook for 7 minutes, or until softened, stirring regularly. 3. Drain and add the chickpeas and kidney beans, tip in the tomatoes, breaking them up with the back of a spoon, then pour in 1 tin's worth of water. Add the minced beef, breaking any larger chunks. 4. Pick the coriander leaves and put aside, then finely chop and add the stalks to the pan, with the balsamic vinegar. Season with a good pinch of sea salt and black pepper. 5. Bring to the boil, then reduce the heat to low and simmer with a lid slightly ajar for 1 hour, or until slightly thickened and reduced, stirring occasionally. 6. Serve up with fluffy rice or couscous, a hunk of crusty bread, or over a jacket potato, with some yoghurt, guacamole, and wedges of lime on the side for squeezing over. Sprinkle over the reserved coriander, and some fresh chilli, if you like, then tuck in. "
  },
  {
      id: 2,
      name: "Minestrone soup",
      url: "https://img.jamieoliver.com/jamieoliver/recipe-database/105276769.jpg?tr=w-800,h-1066",
      prepTime: "30 hour" ,
      cookTime: "30 hour",
      level: "easy",
      ingredients: "4 rashers of smoked streaky bacon,  olive oil, 1 clove of garlic, 2 small onions, 2 fresh bay leaves, 2 carrots, 2 sticks of celery, 2 large handfuls of seasonal greens, 1 vegetable stock cube, 1 x 400 g tin of quality plum tomatoes, 2 x 400 g tins of beans, 100 g dried pasta, Parmesan cheese, extra virgin olive oil ",
      method: " 1. Put a large shallow casserole pan on a medium-high heat. 2. Finely slice the bacon, if using, and sprinkle into the pan with 1 tablespoon of olive oil, stirring occasionally while you prep your veg. 3. Peel and finely chop the garlic and onion, adding the garlic to the pan with the bay leaves as soon as the bacon turns golden, followed by the onions. 4. Trim and chop the carrots and celery into rough 1cm dice, adding to the pan as you go. Remove and finely chop any tough stalks from your greens and add to the pan. Cook for 10 to 15 minutes, stirring regularly, or until softened and caramelised. 5. Crumble in the stock cube, pour in the tinned tomatoes, breaking them up with your spoon, then add 1 tin’s worth of water. 6. Pour in the beans, juice and all, then add a pinch of sea salt and black pepper. 7. Shred your greens and sprinkle into the pan, top up with 600ml of boiling kettle water, then add the pasta. Cover and leave to simmer for 10 to 15 minutes, or until the pasta is just cooked and the soup has thickened to your liking. 8. Season the soup to perfection, then serve it with a grating of Parmesan cheese and a drizzle of extra virgin olive oil. A sprinkling of fresh baby basil leaves will always be delicious, if you’ve got them, and my kids enjoy it with a dollop of pesto on top, too. "
  },
  {
      id: 3,
      name: "Quickest white fish tagine",
      url: "https://img.jamieoliver.com/jamieoliver/recipe-database/109469720.jpg?tr=w-800,h-1066",
      prepTime: "20 min" ,
      cookTime: "15 min",
      level: "easy",
      ingredients: "150 g couscous, 4 cloves of garlic, olive oil, 250 g ripe mixed-colour cherry tomatoes, 250 g asparagus, 2 heaped teaspoons rose harissa, 2 x 150 g white fish fillets, 1 lemon, 2 tablespoons natural yoghurt ",
      method: "1. Place the couscous in a bowl, add a pinch of sea salt and black pepper, then just cover with boiling kettle water, and cover. 2. Peel and slice the garlic, then place in a shallow casserole pan on a medium-high heat with 1 tablespoon of olive oil, stirring while you halve the cherry tomatoes, adding them to the pan as you go. 3. Snap the woody ends off the asparagus, roughly chop the spears and stir into the pan, then season with salt and pepper. 4. Rub most of the harissa over the fish, sit it on top of the veg, finely grate over the lemon zest and squeeze over half the juice. 5. Add 150ml of water, cover, and cook for 5 minutes, or until the fish is just cooked through. 6. Fluff up the couscous. Ripple the remaining harissa through the yoghurt, then spoon it over the fish and couscous. Serve with lemon wedges, for squeezing over. "
  },
  {
      id: 4,
      name: "Quick green pasta",
      url: "https://img.jamieoliver.com/jamieoliver/recipe-database/105564455.jpg?tr=w-800,h-1066",
      prepTime: "20 min" ,
      cookTime: "10 min",
      level: "easy",
      ingredients: " 6 spring onions, 1 leek, 1 large handful of Tenderstem broccoli spears, olive oil, 2 cloves of garlic, 100 g frozen spinach, 2 large handfuls of frozen peas, 450 g dried pasta, 50 g Parmesan cheese ",
      method: " 1. Trim and slice the spring onions. Trim the leek, wash it, then finely slice. Finely slice the broccoli stalks, reserving the tips. 2. Put a large pan on a medium heat. 3. Put 1 tablespoon of olive oil into the pan, with the spring onions, leeks and broccoli stalks. 4. Peel and finely chop the garlic and add to the pan. 5. Add the frozen spinach and peas, then add a pinch of sea salt and black pepper. 6. Cook for 10 to 15 minutes, or until soft and the spinach has defrosted. 7. Meanwhile, cook the pasta in a large pan of boiling salted water, according to the packet instructions, adding the broccoli florets for the last 2 minutes. 8. While everything is ticking away, finely grate the Parmesan. 9. Scoop or pour out about 200ml of cooking water from the pasta into your veg pan. Now, you can either leave your sauce chunky, blitz it until smooth in a blender, or use a hand blender to go somewhere in between – it’s up to you. 10. Drain the pasta and broccoli, and tip it into the sauce. Add 1 tablespoon of extra virgin olive oil and the grated Parmesan, and toss it all together."
  },
  {
      id: 5,
      name: "Classic ratatouille",
      url: "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1571_2_1437661403.jpg?tr=w-800,h-1066",
      prepTime: "20 min" ,
      cookTime: "1 hout 15 min",
      level: "easy",
      ingredients: " 2 red onions, 4 cloves of garlic, 2 aubergines, 3 courgettes, 3 red or yellow peppers, 6 ripe tomatoes, ½ a bunch of fresh basil, olive oil, a few sprigs of fresh thyme, 1 x 400 g tin of quality plum tomatoes, 1 tablespoon balsamic vinegar, ½ a lemon ",
      method: " 1. Prep your ingredients before you start – peel and cut the onions into wedges, then peel and finely slice the garlic. Trim the aubergines and courgettes, deseed the peppers and chop into 2.5cm chunks. Roughly chop the tomatoes. Pick the basil leaves and set aside, then finely slice the stalks. 2. Heat 2 tablespoons of oil in a large casserole pan or saucepan over a medium heat, add the chopped aubergines, courgettes and peppers (you may need to do this in batches) and fry for around 5 minutes, or until golden and softened, but not cooked through. Spoon the cooked veg into a large bowl. 3. To the pan, add the onion, garlic, basil stalks and thyme leaves with another drizzle of oil, if needed. Fry for 10 to 15 minutes, or until softened and golden. 4. Return the cooked veg to the pan and stir in the fresh and tinned tomatoes, the balsamic and a good pinch of sea salt and black pepper. 5. Mix well, breaking up the tomatoes with the back of a spoon. Cover the pan and simmer over a low heat for 30 to 35 minutes, or until reduced, sticky and sweet. 6. Tear in the basil leaves, finely grate in the lemon zest and adjust the seasoning, if needed. Serve with a hunk of bread or steamed rice. "
  },
  {
      id: 6,
      name: "Silky squash risotto",
      url: "https://img.jamieoliver.com/jamieoliver/recipe-database/121936025.jpg?tr=w-800,h-1066",
      prepTime: "15 min" ,
      cookTime: "1 hour 10 min",
      level: "easy",
      ingredients: " 1 butternut (1.2kg) or acorn squash, 1 bunch of fresh marjoram, olive oil, 1.2 litres quality vegetable or chicken stock, 1 onion, 1 stick of celery, 300 g Arborio risotto rice, 150 ml dry white wine, 200 g Tenderstem broccoli, ½ a lemon, extra virgin olive oil, 50 g Parmesan cheese, 1 knob of unsalted butter",
      method: " 1. Preheat the oven to 180°C. Scrub the squash (there’s no need to peel it), deseed, then chop into 2cm chunks. 2. Place the squash in a roasting tray, chop the marjoram leaves, then toss with 1 tablespoon of olive oil and a pinch of sea salt and black pepper, roast for 1 hour 3. With 20 minutes to go on the squash, simmer the stock over a low heat. Peel and chop the onion and celery, place in a pan on a medium heat with ½ a tablespoon of olive oil. Cook for 10 minutes, stirring regularly, then stir in the rice to toast for 2 minutes. 4. Pour in the wine and stir until absorbed. Add a ladleful of stock and wait until it’s been fully absorbed before adding another, stirring constantly and adding ladlefuls of stock until the rice is cooked – 16 to 18 minutes. 5. Remove the squash from the oven and mash up with a fork – then stir through the risotto about halfway through. 6. Meanwhile, trim the broccoli, steam for 2 minutes, then toss with the lemon juice and a drizzle of extra virgin olive oil, and season to perfection. 7. When the risotto is done, add enough extra stock or boiling kettle water to make the risotto oozy, then finely grate in the Parmesan, and beat in with the butter. 8. Cover the pan, turn off the heat and leave to relax for 2 minutes. Stir, season to perfection. Lovely. "
  },
  {
      id: 7,
      name: "Super spinach pancakes",
      url: "https://img.jamieoliver.com/jamieoliver/recipe-database/92507799.jpg?tr=w-800,h-1066",
      prepTime: "10 min" ,
      cookTime: "20 min",
      level: "easy",
      ingredients: " 1 ripe avocado, 350 g mixed-colour cherry tomatoes, 100 g baby spinach, 3 spring onions, ½ a bunch of fresh coriander, 1 lime, extra virgin olive oil, 1 large free-range egg, 1 mug of self-raising flour, 1 mug of semi-skimmed milk, olive oil, 300 g cottage cheese, hot chilli sauce ",
      method: " 1. Halve, destone, peel and finely slice the avocado and quarter the tomatoes, then place in a salad bowl with a quarter of the spinach. 2. Trim, slice and add the spring onions and pick in the coriander leaves, then squeeze over the lime juice. 3. Drizzle with 1 tablespoon of extra virgin olive oil, season with sea salt and black pepper, toss to coat and put aside. 4. Crack the egg into a blender, add the flour, milk, remaining spinach and a pinch of salt and pepper, then blitz until smooth. 5. Place a large non stick frying pan on a medium heat, rub the pan with a little olive oil, then pour in a thin layer of batter, swirling it up and around the edges. Cook on one side only for 2 minutes, then stack up on a serving plate and repeat. 6. Top each pancake with dollops of cottage cheese, the avocado salad, and a few good shakes of chilli sauce. Really nice served with extra lime wedges for squeezing over, and a fried egg on top, if you fancy. "
  },
  {
      id: 8,
      name: "Hot & sour chicken broth",
      url: "https://img.jamieoliver.com/jamieoliver/recipe-database/6ykh__U-KH5Bg3tceVILK3.jpg?tr=w-800,h-1066",
      prepTime: "10 min" ,
      cookTime: "15 min",
      level: "easy",
      ingredients: " 2 shallots, 3 sticks of lemongrass, 5 cm ginger, 2 cloves of garlic, 1-2 fresh red chillies, ½ a bunch of fresh coriander, 1 bunch of spring onions, 2 free-range chicken breasts, groundnut oil, 1.75 litres light organic chicken or vegetable stock, fish sauce, 3 limes, 1 large handful of beansprouts ",
      method: "1. Peel and dice the shallots, then remove the outer leaves from the lemongrass and chop the remainder. 2. Peel and finely grate the ginger and garlic, and slice the chilli. Pick the coriander leaves, then trim and shred the spring onions and set aside. Next, cut the chicken into finger-width strips. 3. Gently sweat the shallots in a splash of oil until soft. Throw in the lemongrass, ginger and garlic, and fry for 1 minute. Add the stock and most of the chilli. 4. Add the chicken and simmer for about 8 minutes or until the chicken is cooked through. Add a splash of fish sauce and squeeze in the lime juice. 5. Taste and add more fish sauce, lime juice or chilli as needed. At the last minute, add the coriander, beansprouts and spring onions, then divide between bowls."
  },
  {
      id: 9,
      name: "Perfect roast beef",
      url: "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/389_1_1436872106.jpg?tr=w-800,h-1066",
      prepTime: "25 min" ,
      cookTime: "1 hour 20 min",
      level: "medium",
      ingredients: " 1.5 kg topside of beef, 2 medium onions, 2 carrots, 2 sticks celery, 1 bulb of garlic, 1 bunch of mixed fresh herbs, olive oil ",
      method: " 1. Remove the beef from the fridge 30 minutes before you want to cook it, to let it come up to room temperature. 2. Preheat the oven to 240°C/475°F/ gas 9. 3. Wash and roughly chop the vegetables – there’s no need to peel them. Break the garlic bulb into cloves, leaving them unpeeled. 4. Pile all the veg, garlic and herbs into the middle of a large roasting tray and drizzle with oil. 5. Drizzle the beef with oil and season well with sea salt and black pepper, then rub all over the meat. Place the beef on top of the vegetables. 6. Place the tray in the oven, then turn the heat down immediately to 200°C/400°F/gas 6 and cook for 1 hour for medium beef. If you prefer it medium-rare, take it out 5 to 10 minutes earlier. For well done, leave it in for another 10 to 15 minutes. 7. If you’re doing roast potatoes and veggies, this is the time to crack on with them – get them into the oven for the last 45 minutes of cooking. 8. Baste the beef halfway through cooking and if the veg look dry, add a splash of water to the tray to stop them from burning. 9. When the beef is cooked to your liking, take the tray out of the oven and transfer the beef to a board to rest for 15 minutes or so. Cover it with a layer of tin foil and a tea towel and leave aside while you make your gravy, horseradish sauce and Yorkshire puddings."
  },
  {
      id: 10,
      name: "Veg & lentil cottage pie",
      url: "https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1547_2_1438867071.jpg?tr=w-800,h-1066",
      prepTime: "30" ,
      cookTime: "1 hour",
      level: "medium",
      ingredients: " 1 medium leek, 1 large carrot, 1 small onion, 1 stick celery, olive oil, 100 g split pea red lentils, 500 ml organic vegetable stock, 100 g frozen peas, sea salt, freshly ground black pepper, 2 tablespoons tomato purée, 30 g Parmesan cheese, 300g sweet potato ",
      method: " 1. Preheat the oven to 180ºC/. Trim, wash and finely slice the leek. Peel and dice the carrot, onion and celery. 2. Heat a splash of oil in a medium pan on a medium heat, add the leek, carrot, onion and celery. Pop the lid on and cook for 5 to 10 minutes, or until softened. Add the lentils, stock and peas, then bring to the boil, stirring regularly. Once boiling, reduce to a simmer and cook for 10 to 15 minutes, or until the lentils are cooked through. 3. Season to taste with sea salt and black pepper, then add the tomato purée. Scrub the sweet potato clean, then coarsely grate it into a bowl, toss with a little oil and a good few gratings of Parmesan. 4. Transfer the filling to a 15cm x 20cm ovenproof dish and sprinkle with the sweet potato. Bake for 15 to 20 minutes, or until the potato topping is golden and cooked through and the filling is piping hot."
  },
  {
      id: 11,
      name: "Spaghetti Bolognese",
      url: "https://img.jamieoliver.com/jamieoliver/recipe-database/80307052.jpg?tr=w-800,h-1066",
      prepTime: "15 min" ,
      cookTime: "1 hour",
      level: "easy",
      ingredients: "2 cloves of garlic, 1 onion, 2 sprigs of fresh rosemary, 6 rashers smoked streaky bacon,  olive oil, 500 g minced beef, 200 ml red wine, 1 x 280 g jar of sun-dried tomatoes, 2 x 400 g tins of plum tomatoes, 500 g dried spaghetti, Parmesan cheese, extra virgin olive oil",
      method: " 1. Preheat the oven to 180ºC. 2. Peel and finely chop the garlic and onions, pick and finely chop the rosemary, then finely slice the bacon. 3. Heat a splash of oil in a casserole pan on a medium heat, add the bacon, rosemary, garlic and onion and cook for 5 minutes, stirring occasionally. 4. Add the minced beef, breaking it apart, then cook for 2 to 3 minutes, or until starting to brown, then pour in the wine. Leave to bubble and cook away. 5. Meanwhile, drain and tip the sun-dried tomatoes into a food processor, blitz to a paste, then add to the pan with the tomatoes. Stir well, break the plum tomatoes apart a little. 6. Cover with a lid then place in the oven for 1 hour, removing the lid and giving it a stir after 30 minutes – if it looks a little dry at this stage, add a splash of water to help it along. 7. About 10 minutes before the time is up, cook the spaghetti in boiling salted water according to the packet instructions 8. Once the spaghetti is cooked, drain, reserving a mugful of cooking water, then return to the pan with a few spoons of Bolognese, a good grating of Parmesan and a drizzle of extra virgin olive oil. 9. Toss to coat the spaghetti, loosening with a splash of cooking water, if needed. Serve, enjoy!."
  },
  {
      id: 12,
      name: "Classic schnitzel",
      url: "https://images.kitchenstories.io/recipeImages/RP09_20_07_ClassicSchnitzel_TitlePicture/RP09_20_07_ClassicSchnitzel_TitlePicture-large-landscape-150.jpg",
      prepTime: "10 min" ,
      cookTime: "20 min",
      level: "easy",
      ingredients: "500 g veal, 4 eggs, 100 ml milk, 200 g flour, 200 g breadcrumbs, 1 lemon, butter for frying ",
      method: "1. In a large bowl, whisk together eggs and milk. 2. Cut veal into approx. two finger thick butterflied portions. 3. Beat out the veal as thinly as possible without making holes in it. 4. Season cutlets with salt and pepper. Dredge each piece in flour and afterwards in the egg mixture. Set aside. 5. Next, dredge the cutlets in breadcrumbs. 6. In a frying pan, fry schnitzel in some butter over medium heat until golden brown and crispy. Season once more with salt. Serve with a lemon wedge and enjoy with some homemade potato salad!"
  },
  {
      id: 13,
      name: "Polish Beef Roulade (Zrazy)",
      url: "https://www.thespruceeats.com/thmb/vkTIOIcT9P4rUMSOjvR2gtlxg4g=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-93225947-582b27c63df78c6f6a8eb3cc.jpg",
      prepTime: "30 min" ,
      cookTime: "1 hour",
      level: "medium",
      ingredients: "8 sandwich steaks, 1 tablespoon grainy mustard, 2 dill pickles, 4 ounces ham, 2 green onions, 4 tablespoons canola oil, 2 tablespoons all-purpose flour, 1 cup beef stock, 4 tablespoons white wine, 1 tablespoon tomato paste, salt and pepper, Garnish: sour cream, chopped parsley ",
      method: " 1. Spread a thin layer of mustard on each steak and divide the pickles, ham, and onion among the steaks. Fold in the sides and roll like stuffed cabbage. Secure with a toothpick, if necessary. 2. Heat oil in a large Dutch oven and brown beef rolls on all sides. Remove meat and reserve. 3. Add flour to the pan and cook until light brown to make a roux. Stir in the stock, wine, tomato paste, salt, and pepper. Bring to a boil and simmer 1 minute. 4. Return beef rolls to the pan and spoon over some of the sauce. Cover and cook on low 45 minutes to 1 hour, adding more liquid as necessary during cooking. 5. When the rolls are cooked, transfer to a serving dish and remove the toothpicks, if used, and ladle over the sauce. Dollop with sour cream and chopped parsley. 6. Serve with rice, mashed potatoes, finger dumplings, or drop potato dumplings. "
  },
  {
      id: 14,
      name: "Classic kartoffelpuffer- potato pancakes",
      url: "https://www.daringgourmet.com/wp-content/uploads/2017/10/Kartoffelpuffer-12.jpg",
      prepTime: "15 min" ,
      cookTime: "10 min",
      level: "easy",
      ingredients: " 6 or 7 medium starchy potatoes, 1 Brown onion, 2 Eggs, 1/4 cip Plain flour, Butter and olive oil for frying",
      method: "1. Wash and peel the potatoes. 2. Grate the potatoes on the rough side of the grater and Place the grated potatoes in a large bowl. 3. Peel and grate the onion and Add the grated onion to the grated potato. 4. Lightly beat the 2 eggs. 5. Measure out 1/3 cup of flour. 6. Add the eggs, flour and salt to the bowl with the potato and onion. 7. Mix together well. 8. Place 1/4 cup fulls into a hot fry pan with a little olive oil and butter. Flatten them out a little bit. 9. Fry for about 3-5 minutes on each side on a medium to high heat until golden. 10. Drain on paper towels. "
  },
  {
      id: 15,
      name: "Polish ”Kopytka” – whole wheat dumplings with sauerkraut and honey. ",
      url: "https://i2.wp.com/tasteisyours.com/wp-content/uploads/2019/03/IMG_7209.jpg?fit=2048%2C1365&ssl=1",
      prepTime: "10 min" ,
      cookTime: "15 min",
      level: "easy",
      ingredients: " 2 cups mashed potatoes cold, 1 large egg 1 cup all-purpose flour",
      method: " 1. Place mashed potatoes in a mixing bowl. They should be cold, so this is a great way to use up leftover potatoes. 2. Add egg and flour and mix until the dough comes together. Place dough onto a floured surface and divide into two parts. Roll one part of the dough into a long log and slice into 1.5 to 2 dumplings. 3. In a large saucepan or pot, boil water and add 1 teaspoon of salt. Add 5 to 8 dumplings at a time to the boiling water and cook until they start to float at the top. Remove and place on a plate. Repeat with remaining dumplings. 4. You can serve the dumplings right away as a side dish or follow the suggestion below. 5. In a skillet, heat up 1 tablespoon of olive oil and 1 tablespoon of butter. Add cooked dumplings and cook until golden brown. Remove onto a plate. Add 2 minced garlic cloves, 1 small yellow onion, chopped, 4 slices of bacon,chopped, and 4 white mushrooms, washed, sliced. Saute until fragrant and the bacon is crispy. Toss with dumplings and serve."
  },
];


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false); // for toggle option (to open button)
  const [data, setData] = useState(DefaultProject); // to use data form another folder 

  //to get the button to open the data saved 
    const toggle = () => setIsOpen(!isOpen); //for toggle option (to open button)


    // to fetch the data from default project
fetch("./DefaultProject.js").then (
  function(res){
    return res.json()
  }).then(function(data){
    setData(data)
  }).catch(
    function(err){
      console.log(err, "error")
    }
  )
//-----------------
const printButtonLabel = (event) => {
  console.log(event.target.name);
  //do some stuff here
};

  //--------------------
  return (   
    <div className="App">
    {
     //map the data from defaultProject 
     data
     ? data.map(
        function(data){
            return (
            <div className="dataMap"> 
              {/* <ul key={data.toString()}></ul> */}
              {/* get the template from the web */}
              <Card>
              <CardImg top width="100%" img src={data.url} alt="Card image cap" />
              <CardBody>
              <CardTitle tag="h5">{data.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{data.prepTime},  {data.cookTime}</CardSubtitle>
              <CardText>{data.level}</CardText>

              {/* to get the button working: */}
              <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Method</Button>

              <Collapse isOpen={isOpen}>
                <Card>
                <CardBody>
                  {data.method}
                </CardBody>

                </Card>
              </Collapse>

              </CardBody>
              </Card>

             </div>)
             
        }
      ):""
    }
    </div>
  )
}

export default Example;

