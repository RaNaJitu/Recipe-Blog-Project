require('../models/database')
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

/**
 * GET /
 * homepage
 */
exports.homepage = async(req, res)=>{
    try{
        const limitNumber =5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        const thai = await Recipe.find({ 'category': 'Thai'}).limit(limitNumber);
        const american = await Recipe.find({ 'category': 'American'}).limit(limitNumber);
        const chinese = await Recipe.find({ 'category': 'Chinese'}).limit(limitNumber);
        const food = {latest, thai, american, chinese};
        res.render('index',{title: 'homepage', categories, food});
    }catch(error){
        res.status(500).send({ message: error.message || "Error occurred" });
    }
}
/**
 * GET /
 * Categories
 */
exports.exploreCategories = async (req, res)=>{
    try{
        const limitNumber =20;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('categories', {title: 'Categories', categories});
    }catch(error){
        res.status(500).send({ message: error.message || "Error occurred" });
    }
}
/**
 * GET /
 * Recipe
 */
exports.exploreRecipe = async (req, res)=>{
    try{

        let recipeId = req.params.id;
        const recipe = await Recipe.findById(recipeId)
        res.render('recipe', {title: 'Recipe', recipe});
    }catch(error){
        res.status(500).send({ message: error.message || "Error occurred" });
    }
}
/**
 * GET /
 * Categories/:id
 * categoriesById
 */
 exports.exploreCategoriesById = async (req, res)=>{
    try{
        let categoryById = req.params.id;
        console.log(categoryById)
        const limitNumber =20;
        const categoriesById = await Recipe.find({'category': categoryById}).limit(limitNumber);
        console.log(categoriesById)
        res.render('categories', {title: 'Categories', categoriesById});
    }catch(error){
        res.status(500).send({ message: error.message || "Error occurred" });
    }
}
/**
 * POST /
 * Search
 */
exports.searchRecipe = async (req, res)=>{
    try{
        let categoryById = req.params.id;
        console.log(categoryById)
        const limitNumber =20;
        const categoriesById = await Recipe.find({'category': categoryById}).limit(limitNumber);
        console.log(categoriesById)
        res.render('categories', {title: 'Categories', categoriesById});
    }catch(error){
        res.status(500).send({ message: error.message || "Error occurred" });
    }
}
// const insertDummyCategoryData = async ()=>{
//     try{

//         await Category.insertMany([
//       {
//         "name": "Thai",
//         "image": "thai-food.jpg"
//       },
//       {
//         "name": "American",
//         "image": "american-food.jpg"
//       }, 
//       {
//         "name": "Chinese",
//         "image": "chinese-food.jpg"
//       },
//       {
//         "name": "Mexican",
//         "image": "mexican-food.jpg"
//       }, 
//       {
//         "name": "Indian",
//         "image": "indian-food.jpg"
//       },
//       {
//         "name": "Spanish",
//         "image": "spanish-food.jpg"
//       }
//     ]);
//     }catch(error){
//         console.log('err' + error)
//     }
// }
// insertDummyCategoryData();

//  async function insertDymmyRecipeData(){
//       try {
//         await Recipe.insertMany([
//           { 
//             "name": "Recipe Name Goes Here",
//             "description": `Recipe Description Goes Here`,
//             "email": "recipeemail@raddy.co.uk",
//             "ingredients": [
//               "1 level teaspoon baking powder",
//               "1 level teaspoon cayenne pepper",
//               "1 level teaspoon hot smoked paprika",
//             ],
//             "category": "American", 
//             "image": "southern-friend-chicken.jpg"
//           },
//           { 
//             "name": "Recipe Name Goes Here",
//             "description": `Recipe Description Goes Here`,
//             "email": "recipeemail@raddy.co.uk",
//             "ingredients": [
//               "1 level teaspoon baking powder",
//               "1 level teaspoon cayenne pepper",
//               "1 level teaspoon hot smoked paprika",
//             ],
//             "category": "American", 
//             "image": "southern-friend-chicken.jpg"
//           },
//         ]);
//       } catch (error) {
//         console.log('err', + error)
//       }
//     }
    
//     insertDymmyRecipeData();