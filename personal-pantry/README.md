1. Project Description:

This project is to create a space for people to keep stock of what they have in the kitchen. Essentially by tracking what you have bought and what you have left, it's possible to be more accurate with your shopping.

Also by using data analysis, it can be possible to be more efficient with the food you buy, helping decide the shop for the future. This is how it would be structured.

There will be three parts to the app:

Part 1: Pantry

This part of the app will hold all the items of which your kitchen currently contains. You would know by looking in the app every item in your kitchen cupboards, fridge and freezer.

Not only would it tell you the items, but it would know how much you have. This could be either a number of items, or total gram /lbs, depending on the type of item it is. For example:

In my kitchen right now I have...
1 pint of milk,
2 tomatoes,
1 pack of noodles,
2 tins of sweetcorn,
300g's mince beef,
200g pack of spaghetti,
5 carrots,
1 courgette,
1 litre of orange juice,
2 litres of apple juice.

This example is in no particular order, but gives an example of what currently you may have in your kitchen. Each item wil be able to be organised into catergories (fruit, fridge items etc.) This brings to part 2...

Part 2: Cooking

When you come to use these items, it may be that you will be cooking a meal. A popular way to cook a meal is to follow a recipe, and for this example I will use spaghetti bolognaise.

If I was to cook spag bol, I would use the following ingredients from the pantry...
2 tomatoes,
300g's mince beef,
200g pack of spaghetti,
3 carrots,
1 courgette

As I pick the items to use I can record I've picked these items in the app, then go ahead cook and enjoy the meal. The next day when I look at my pantry it will now show:
1 pint of milk,
1 pack of noodles,
2 tins of sweetcorn,
2 carrots,
1 litre of orange juice,
2 litres of apple juice

The items I used in the spag bol have been removed from the pantry, but at a glance I can see what I have left in the kitchen without having to remember or look through the kitchen. If I want spag bol again I know I need to go back to the shop to get more ingredients. Leading into part 3...

Part 3: Shopping

Now I made a banging spag bol, and when I ticked off the ingredients I was using, it gave me the option to save these into my recipe list, which I saved as spag bol.

I can look at this recipe list and decide, hey I want that spag bol again, hit the recipe and add it to my shopping list. The app will look at your pantry, see what you have left , and add what you need to buy to a shopping list. In this case it would add:
2 tomatoes,
300g's mince beef,
200g pack of spaghetti,
1 carrot (as you already have 2 left in you pantry),
1 courgette.

Perfect I have a ready made shopping list, so I can buy the exact ingredients I need. As you can see the app knew not to double up on carrots! If I bought 3 carrots, I would end up with 5 carrots, with 2 at risk of going to waste.

I nip to the shop with my list, buy the ingredients, and as with a usual shopping list I can tick off the items I've collected in my trolley. Once I'm done, I can confirm all items have been purchased in the app. This then adds them back to the pantry, so whem I check the pantry I see:
1 pint of milk,
2 tomatoes,
1 pack of noodles,
2 tins of sweetcorn,
300g's mince beef,
200g pack of spaghetti,
5 carrots,
1 courgette,
1 litre of orange juice,
2 litres of apple juice.

My app will also show in my recipe list that I have the ingredients available in my pantry to cook spag bol!

So this is the point of the app. Easy access to all the items you have in your kitchen. A link to recipes you can make based on the items in your kitchen. An easy way to track which items you have used, and which items you will need to buy.

Once you have built a number of recipes, rather than looking though books, making notes of ingredients, looking through the kitchen to find what you have OR doing it all on the fly and over buy (like with the carrots); you can pick your recipes, it checks it against your current items you have, a lets you know what you need to buy.

This is to help you not forget you got 3 onions last time and didn't use them, or buy a bag of potatoes when you still have half a bag left. It means less food goes off, it means you utilise more of the items you have in your kitchen.

2. Installation Guide

Initially I will be building this project from a GitHub repository, and initialise a React app within it.
If you would like see and work with the code, clone the repo, then in the personal-pantry folder, npm i.
This should download all dependencies required.

3. Usage and Features

Usage: The idea is this app is used daily and can be used by anyone. It's most likely to be used on a mobile, but due to my current knowledge I will build a website first, then transition to the app once main features are working. It likely to be used when shopping, cooking and/or meal planning for the week.

Main Features:

Personal Pantry - List of items currently in the kithen including the weight or amount of items.
(Stretch Goal - To be able to record when in was bought, when i goes out of date, and nutritional data).

Cooking Section - Here you would record which ingredients used, and be able to save recipes in which these ingredients are used. Linked to the pantry so they are reduced or removed from stock once cooked with.
(Stretch Goal - To be able to take recipes from other sources and add them to the app. Also use AI or other tools to be able to suggest a recipe based on the current items in your pantry).

Shopping Section - Manually and automatically add ingredients needed either because you are out of them or a recipe you selected requires them. Checklist you can share with others, and tick off as you pick up the items in the shop. Finally easily add to pantry once items are bought
(Stretch Goal -  Have favourite items, such as milk, which can be added automatically when the are low or finished. Also to be able to scan the barcode on items with the camera on phone to add to list. This would also give financial info that could be saved for the data part).

Stretch Stretch Goal
Data Analysis of the following:
Items used
Cost of items
Best use of items
Most used / least used
Most wasted
Used in most or least recipes
And many more...

4. Technologies Used

Initally this will be built in React, but future plans are to port this to React native for App use.
Mongo DB will be used for the database.
First app to be built will be for Apple.

5. Documentation and Code Structure

Component based structure.

6. Contribution Guidelines

This app is currently deployed on netlify, so no pushing to main.
Feel free to clone, create your own branch then raise a pull request for review to go to dev branch.
