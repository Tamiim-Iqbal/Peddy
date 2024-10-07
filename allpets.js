// Fetch & Display All Pets

const loadPets = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    console.log(data.pets);
    displayPets(data.pets);

}

const displayPets = (pets) => {

    const petsContainer = document.getElementById("all-pets");

    pets.forEach(pet => {
        // console.log(pet);

        // create card
        const card = document.createElement("div");
        card.className = "card card-compact border p-4"

        card.innerHTML = 
        `
        <figure class="h-56 rounded-lg relative">
            <img class="h-full object-cover" src="${pet.image}"/>
        </figure>

        <div class="px-0 py-3 flex items-center gap-4">
            <div>
                <h2 class="mb-2 font-semibold text-sm md:text-base lg:text-xl">${pet.pet_name}</h2>
                <div class="flex gap-2 mb-1">
                    <img class="w-4 lg:w-auto" src="resources/breed.png">
                    <p class="text-light text-xs md:text-sm lg:text-base"> Breed : ${pet.breed}</p>
                </div>

                <div class="flex gap-2 mb-1">
                    <img class="w-4 lg:w-auto" src="resources/birth.png">
                    <p class="text-light text-xs md:text-sm lg:text-base"> Birth : ${pet.date_of_birth}</p>
                </div>

                <div class="flex gap-2 mb-1">
                    <img class="w-4 lg:w-auto" src="resources/gender.png">
                    <p class="text-light text-xs md:text-sm lg:text-base"> Gender : ${pet.gender}</p>
                </div>

                <div class="flex gap-2 mb-2">
                    <img class="w-4 lg:w-auto" src="resources/price.png">
                    <p class="text-light text-xs md:text-sm lg:text-base"> Gender : ${pet.price}$</p>
                </div>
            </div>  
        </div>

        <hr>

        <div class="flex justify-between">
            <button class="mt-4 py-2 px-3 rounded-md font-semibold text-xs md:text-sm lg:text-base hover:bg-white hover:border-primary hover:text-primary border border-plight">
            <i class="fa-regular fa-heart"></i>

            </button>

            <button class="mt-4 py-2 px-3 rounded-md text-primary font-semibold text-xs md:text-sm lg:text-base border border-plight hover:border-primary">Adopt</button>
            
            <button class="mt-4 py-2 px-3 rounded-md text-primary font-semibold text-xs md:text-sm lg:text-base border border-plight hover:border-primary">Details</button>
        </div>
        `;

        // add card to pets container
        petsContainer.append(card);
    })
}

loadPets();





// Card Demo
/*
"petId": 1,
      "breed": "Golden Retriever",
      "category": "Dog",
      "date_of_birth": "2023-01-15",
      "price": 1200,
      "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
      "gender": "Male",
      "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
      "vaccinated_status": "Fully",
      "pet_name": "Sunny"
*/
