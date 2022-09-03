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
        <button onclick="loadNewsDeatiles(${catas.category_id})">${catas.category_name}</button>
    `
        navbarContainer.appendChild(li)

    });
}

const loadNewsDeatiles = async (id) => {

    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`
    const res = await fetch(url)
    const data = await res.json()
    displayNewsDeatiles(data.data)
    // console.log(data)
}

const displayNewsDeatiles = news => {
    // console.log(news)
    const newsContainer = document.getElementById('newsContainer')
    newsContainer.innerHTML = ""
    news.forEach(news1 => {
        console.log(news1)
        const div = document.createElement('div')
        div.classList.add('cardcontainer')
        div.classList.add('my-10')
        div.innerHTML = `
       
            <img  src="${news1.thumbnail_url}" alt="Album">
       
            <div class="card-body m-5">
                <h2 class="card-title">${news1.title}</h2>
                    <p></p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                    </div>
                    </div>
        `
        newsContainer.appendChild(div)

    })
}


loadNewsDeatiles()

newscatagoris()