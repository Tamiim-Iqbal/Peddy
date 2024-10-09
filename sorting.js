function sorting () {
    allPet.sort((a, b) => b.price - a.price);
    // console.log(pets);
    displayPets(allPet);
    allPet = [];
}

function sort ()
{
    sorting();
}