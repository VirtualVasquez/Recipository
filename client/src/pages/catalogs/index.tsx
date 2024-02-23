export default function Catalogs(){
    return(<h1>This IS 'Catalogs' page. The home of it where all catalogs except 'favorites' and 'my-recipes' can have CRUD operations perform</h1>)
    //I don't think favorites and my-recipes need specific urls.
    //recipes table will have a "favorite" column, and SQL can just match logged-in user id to author_id of recipe.
    //If I am wrong, then these are the two extended urls needed
    // '/catalogs/favorites' - self-explanatory
    // '/catalogs/my-recipes' - user-made and user editable recipes
    //all other catalogs will instead be can be CRUD at '/catalog
}

