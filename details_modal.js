const loadDetails = async (petId) => {
    console.log(petId);
    const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
    const res = await fetch(uri);
    const data = await res.json();
    displayDetails(data.petData);
  };




const displayDetails = (pet) => {
    // console.log(video);
    const detailContainer = document.getElementById("modal-content");
    
    detailContainer.innerHTML = `
     <img class="w-full rounded-lg" src=${pet.image} />

    <div>
        <h2 class="mt-3 mb-2 font-semibold text-sm md:text-base lg:text-xl">${pet.pet_name}</h2>
        <div class="flex gap-2 mb-1">
            <img class="w-4 lg:w-auto" src="resources/breed.png">
            <p class="text-light text-xs md:text-sm lg:text-base"> Breed : ${pet.breed ? pet.breed : "Not Available"} </p>
        </div>

        <div class="grid grid-cols-2">
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

            <div class="flex gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 lg:size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>

                <p class="text-light text-xs md:text-sm lg:text-base"> Vaccinated Status : ${pet.vaccinated_status ? pet.vaccinated_status :  "Not Available" } </p>
            </div>
        </div>
    </div>  

    <hr class="mt-2">
     <h3 class="mt-3 font-semibold text-sm md:text-base lg:text-lg">Detail Information</h3>
     <p class="mt-2">${pet.pet_details}</p>
    `;

    // way 1
    // document.getElementById("showModalData").click();
    
    // way 2
    document.getElementById("customModal").showModal();

  }