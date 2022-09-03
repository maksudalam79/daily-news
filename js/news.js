const newscatagoris = async () => {
    const url = "https://openapi.programming-hero.com/api/news/categories"
    const res = await fetch(url)
    const data = await res.json()
    displayCategories(data.data.news_category)
}

const displayCategories = cata => {

    const navbarContainer = document.getElementById("navbar-Container");
    cata.forEach(catas => {
        const li = document.createElement('li')

        li.innerHTML = `
        <li><a>${catas.category_name}</a></li>
        `
        navbarContainer.appendChild(li)

    });
}

newscatagoris()