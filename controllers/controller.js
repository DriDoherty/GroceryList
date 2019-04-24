/////////////////////////////////////////////////////////////////
// Express Router                                              //
//                                                             //
//  Handles page routing/rendering for the application         //
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// Dependencies
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// Global Definitions
/////////////////////////////////////////////////////////////////

// List of images for all categories recognized by our site
// a default "undefined" image is at position '0' and used for any
// un-recognized categories

categoryImageList = [ "undefined", "/assets/img/noun_Question-mark-pin_205046.svg", "Question mark pin by Till Teenck from the Noun Project",
                      "beverage", "/assets/img/noun_beverage_1284312.svg", "by Eucalyp from the Noun Project",
                      "dairy", "/assets/img/noun_dairy_916744.svg", "by aribileru adaleru from the Noun Project",
                      "fruit", "/assets/img/noun_Fruit_1546040.svg", "by Made from the Noun Project",
                      "dessert", "/assets/img/noun_ice-cream-sundae_1128869.svg",  "by Made from the Noun Project",
                      "pasta", "/assets/img/noun_Pasta_1130847.svg", "by Ben Davis from the Noun Project" ];

// in a grocery app this JSON would most likely be retrieved from another source, i.e. API call or db fetch
// for this sample, the JSON is simply defined here

groceryJSON = [ { "category": "fruit", "item": "apples", "type": "Honey Crisp", "brand": "Little cuties", "qty": 10 },
              { "category": "beverage", "item": "milk", "type": "2%", "brand": "generic", "qty": "1 gallon" },
              { "category": "pasta", "item": "Pasta", "type": "Penne", "brand": "Barilla", "qty": 3 },
              { "category": "dessert", "item": "Gelatin dessert", "type": "Green", "brand": "Jello", "qty": 3 },
              { "category": "dairy", "item": "Yogurt", "type": "Assorted flavors", "brand": "Chobani", "qty": 12 },
              { "category": "pasta", "item": "Pasta", "type": "Linguini", "brand": "Barilla", "qty": 3 },
              { "category": "beverage", "item": "Apple juice", "type": "regular", "brand": "Happy Farms", "qty": 2 },
              { "category": "beverage", "item": "Vodka", "type": "Tangerine", "brand": "Grey Goose", "qty": 1 }
];

/////////////////////////////////////////////////////////////////
// Utility Functions
/////////////////////////////////////////////////////////////////

// buildGroceryList function:
//  expects a JSON object containing at least a "category" key

function buildGroceryList( baseList ) {

  var fullGroceryList = [];
  var groceryItem;

  // walk the baseList JSON

  for (i=0; i<baseList.length; i++) {
    groceryItem = baseList[i];

    var categoryIndex = categoryImageList.indexOf( groceryItem.category );

    if ( categoryIndex >= 0 ) { // category exists
      groceryItem.image = categoryImageList[ categoryIndex + 1 ];
      groceryItem.attribution = categoryImageList[ categoryIndex + 2 ];
    } else {
      // use the default image & attribution for all undefined categories
      groceryItem.image = categoryImageList[ 1 ];
      groceryItem.attribution = categoryImageList[ 2 ];
    }

  fullGroceryList[i] = groceryItem;
  }

  return fullGroceryList;
}

/////////////////////////////////////////////////////////////////
// Express Routes exported
/////////////////////////////////////////////////////////////////

module.exports = function(app) {

  // Single route builds the grocery list object & passes it to 
  // handlebars.js to render the single page

  app.get('*', function(req, res) {
  
    // if the grocery list JSON that needs to be rendered on this page were being retrieved
    // from an external source (API? db?), this is where that fetch would happen
    //
    // in our example the JSON is already provided

    // use the grocery list JSON to build a full array of grocery item objects, that include
    // images to use for each category, then pass that array on to handlebars.js for rendering

    var groceryList = buildGroceryList( groceryJSON );

    var handlebarsObj = { groceries: groceryList };
    res.render("index", handlebarsObj);
    
  });

}