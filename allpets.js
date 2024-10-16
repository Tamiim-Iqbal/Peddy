// Fetch & Display All Pets

let allPet = [];


const loadPets = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    // console.log(data.pets);
    displayPets(data.pets);

}





const displayImage = async(petId) => 
{
    
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
    const data = await response.json();
    // console.log(data.petData);
    const pet = data.petData;

    const likeImageContainer = document.getElementById("like-image");
    // create img
    const img = document.createElement("div");
    img.innerHTML = 
    `
    <img class="h-full object-cover rounded-lg" src="${pet.image}"/>
    `
     
    likeImageContainer.appendChild(img);

    const icon = document.getElementById(`icon-${petId}`);
    // icon.classList.remove("fa-regular");

    icon.classList.toggle("text-primary");
    icon.classList.toggle("fa-solid");
}


const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("category-btn");
    // console.log(buttons);
    for (let btn of buttons) {
      btn.classList.add("rounded-md");
      btn.classList.remove("active");
    }
  };

const loadCategoriesPets = (category) => {
    console.log(category);

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        //active class remove
        removeActiveClass();
  
        //id er class k active korao
        const activeBtn = document.getElementById(`btn-${category}`);
        activeBtn.classList.remove("rounded-md");
        activeBtn.classList.add("active");
        displayPets(data.data);
      })
      .catch((error) => console.log(error));
  };






  const displayPets = (pets) => {
    const petsContainer = document.getElementById("all-pets");
    petsContainer.innerHTML = ""; // Clear the container initially

    // Show loading spinner before displaying pets
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.classList.remove('hidden'); // Show the loading spinner

    // Delay for 2 seconds before displaying pets
    setTimeout(() => {
        loadingSpinner.classList.add('hidden'); // Hide the loading spinner

        if (pets.length === 0) {
            petsContainer.classList.remove("grid");
            petsContainer.innerHTML = 
            `
            <div class="min-h-[400px] flex flex-col gap-5 justify-center items-center">
                <img src="resources/images/error.webp" /> 
                <h2 class="text-center text-xl font-bold"> No Pet Here in this Category </h2> 
            </div>
            `;

            // remove right div part
            let likeImageDiv = document.getElementById("like-image");
            let leftDiv = document.getElementById("left-div");
            // Check if the div is empty
            if (likeImageDiv.innerHTML.trim() === "") 
            {
                likeImageDiv.parentElement.style.display = "none";           // Hide the parent div
                leftDiv.classList.remove("col-span-7", "md:col-span-9");     // Remove the span classes
                leftDiv.classList.add("col-span-12");                        // Make it take the full width
            }
            
            allPet = [];
        } else {
            petsContainer.classList.add("grid");

            allPet = pets;
            pets.forEach(pet => {
                // Create card
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
                            <p class="text-light text-xs md:text-sm lg:text-base"> Breed : ${pet.breed ? pet.breed : "Not Available"} </p>
                        </div>

                        <div class="flex gap-2 mb-1">
                            <img class="w-4 lg:w-auto" src="resources/birth.png">
                            <p class="text-light text-xs md:text-sm lg:text-base"> Birth : ${pet.date_of_birth ? pet.date_of_birth : "Not Available"} </p>
                        </div>

                        <div class="flex gap-2 mb-1">
                            <img class="w-4 lg:w-auto" src="resources/gender.png">
                            <p class="text-light text-xs md:text-sm lg:text-base"> Gender : ${pet.gender ? pet.gender : "Not Available"} </p>
                        </div>

                        <div class="flex gap-2 mb-2">
                            <img class="w-4 lg:w-auto" src="resources/price.png">
                            <p class="text-light text-xs md:text-sm lg:text-base"> Price : ${pet.price ? pet.price + '$':  "Not Available" } </p>
                        </div>
                    </div>  
                </div>

                <hr>

                <div class="flex justify-between">
                    <button onclick=displayImage('${pet.petId}') class="mt-4 py-2 px-3 rounded-md font-semibold text-xs md:text-sm lg:text-base hover:bg-white hover:border-primary hover:text-primary border border-plight">
                    <i id="icon-${pet.petId}" class="fa-regular fa-heart"></i>
                    </button>

                    <button id="adopt-${pet.petId}" onclick="displayAdopt(this,'${pet.petId}')" class="mt-4 py-2 px-3 rounded-md text-primary font-semibold text-xs md:text-sm lg:text-base border border-plight hover:border-primary">Adopt</button>
                    
                    <button onclick="loadDetails('${pet.petId}')" class="mt-4 py-2 px-3 rounded-md text-primary font-semibold text-xs md:text-sm lg:text-base border border-plight hover:border-primary">Details</button>
                </div>
                `;

                // Add card to pets container
                petsContainer.append(card);
            });
        }
    }, 2000); // 2000 milliseconds = 2 seconds
};


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
