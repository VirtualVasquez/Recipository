import { useRouter } from "next/router"
//this file should ultimately query the db
//all recipes should have a url of '/recipe/[id]'
//it will not pull from an array, like the LinkedIn example.
//maybe have to import a helper of some sort. And create it.

export default function Recipe() {
    const  router = useRouter()
    //if I'm right, the const of {id} should be for recipes
    // const { id } == router.query == recipeID
    const { id } = router.query

    //PSEUDO CODE BELOW - DO NOT ASSUME THIS CORRECT/COMPLETE
        //const recipe = recipes.find(recipe => recipe.id === id) //<- I think it's right
        //Need to figure out how to properly return markup, but I think...
        //return (<h1>recipe.name<h1> <p>recipe.servings</p> ...)
}

