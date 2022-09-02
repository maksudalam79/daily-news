const newscatagoris = async () => {
    const url = "https://openapi.programming-hero.com/api/news/categories"
    const res = await fetch(url)
    const data = await res.json()
    displayCategories(data.data.news_category)
}

const displayCategories = cata => {
    console.log(cata)
    const navbarContainer = document.getElementById("navbar-Container");
    const uniqeArray = []


    cata.forEach(catas => {

        const li = document.createElement('li')
        li.innerHTML = `
        <a href="${catas.category_id}"></a>${catas.category_name}
        `
        navbarContainer.appendChild(li)

    });



}


newscatagoris()