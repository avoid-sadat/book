const bookSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    // clear data
    searchField.value = '';

    const url =`http://openlibrary.org/search.json?q=${searchText}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayhResult(data.docs))
   
}


const displayhResult = (books)=>{
    console.log(books.length)
    const searchResult = document.getElementById('search-result');
    books?.forEach(book =>{
      

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid" style="width:400px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Author Name:${book.author_name}</p>
          <p class="card-text">First Publish:${book.publish_year}</p>
        </div>
      </div>
        `
        searchResult.appendChild(div)
    })
}

