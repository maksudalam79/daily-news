const newsPortalData = async () => {

    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    return data.data.news_category;
}

const displayNewsWebsite = async () => {
    const items = await newsPortalData()

    const AllMenu = document.getElementById("All-Menu");



    items.forEach(item => {


        // console.log(item)
        const { category_name, category_id } = item;

        const li = document.createElement("li")
        li.innerHTML = `
        <button onclick="dynamicCart(${category_id})">${category_name}</button>
        

        
        `;
        AllMenu.appendChild(li);

    });


}


// <figure>
                // <img  src="${news1.thumbnail_url}" alt="Album">
                // </figure>
                //     <div class="card-body">
                //         <h2 class="card-title">${news1.title}</h2>
                //             <p></p>
                //             <div class="card-actions justify-end">
                //             <button class="btn btn-primary">Listen</button>
                //             </div>
                //             </div>