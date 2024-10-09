function sorting (pets) {
    pets.sort((a, b) => b.price - a.price);
    // console.log(pets);
    displayPets(pets);
}

function sort ()
{
    removeActiveClass();
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((response) => response.json())
    .then((data => sorting(data.pets)))
}