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
    console.log(data)
}

const displayNewsDeatiles = news => {
    // console.log(news)
    const newsContainer = document.getElementById('newsContainer')
    newsContainer.innerHTML = ""
    news.forEach(news1 => {
        console.log(news1)
        const { thumbnail_url, title, details } = news1

        const div = document.createElement('div')
        div.classList.add('cardcontainer')
        div.classList.add('my-10')
        div.innerHTML = `
       
            <img  src="${thumbnail_url}" alt="Album">
       
            <div class="card-body m-5">
                <h2 class="card-title">${title}</h2>
                    <p>${details.length > 200 ? details.slice(0, 200) + '...' : details}</p>

                
                <div class="flex flex-nowrap gap-x-60">
                <div>
                      <img class="h-12 w-12 border-solid border-2 rounded-full "  src="${news1.author.img}" alt="Album">
                      <h1>${news1.author.name}</h1 >
              </div >
                 
              <div>
                <i class="fa-solid fa-eye">${news1.total_view}</i>
                </div>
                
                <div>
                <label for="my-modal-3"class="btn btn-primary modal-button">View Detail</label>
                    </div>
                
                
                
            </div >
`
        newsContainer.appendChild(div)

    })


}













loadNewsDeatiles()

newscatagoris()