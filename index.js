// Fetch & Display Categories

const loadCategories = async() =>
{
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await response.json();
    displayCategories(data.categories);
    
};


const displayCategories = (categories) =>
{
    const categoryContainer = document.getElementById("category");
    // console.log(categories);

    categories.forEach(item => {
        // console.log(item);

        // create button
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = 
        //<button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">${item.category}</button>
        `
            <button id="btn-${item.category_id}" onclick="" class="h-8 md:h-12 lg:h-14 flex gap-2 lg:gap-3 justify-center items-center category-btn mt-4 px-4 lg:px-6 rounded-md font-semibold text-xs md:text-sm lg:text-base hover:bg-white border hover:border-primary">
            <img class="w-1/3 md:w-1/4 lg:w-2/6" src='${item.category_icon}' alt="">
            ${item.category}</button>
        `;
        // add button to category container
        categoryContainer.append(buttonContainer)
        
    });
    
}
loadCategories();