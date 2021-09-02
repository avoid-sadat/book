const bookSearch = () =>{
    const errorField =document.getElementById('error');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
   
    if(searchText === "")
    {
      errorField.innerHTML = `<h1 class="text-center text-danger">Search field Cannot be Empty"</h1>`;
    }
    searchField.value = '';
    const url =`http://openlibrary.org/search.json?q=${searchText}`
      fetch(url)
      .then(res => res.json())
      .then(data =>{
      if(data.numFound === 0){
        errorField.innerHTML =`<h1 class ="text-center text-warning">No Result Found</h1>`
      }
      else{
        errorField.innerText ="";
      }
      displayhResult(data);
     
    })
  }

const displayhResult = (books)=>{
  
  const resultFound = (books.docs.length);
  const total =document.getElementById('result-found');
  total.innerHTML ='';

  total.innerHTML = `<h1 class="text-center text-success">Number Of Result :${resultFound}</h1>`

    const searchResult = document.getElementById('search-result');
    searchResult.textContent ='';
    books.docs?.forEach(book =>{
        const div = document.createElement('div');
        div.classList.add('col')
      div.innerHTML =`
      <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="img-fluid card-img-top" style ="height:200px; width:500px;" alt="...">
            <div class="card-body">
              <h5 class="card-title text-secondary">Book Title:${book.title}</h5>
              <p class="card-text text-secondary">Author Name:${book.author_name}</p>
              <p class="card-text text-secondary">Publisher Name:${book.publisher}</p>
              <p class="card-text text-secondary">First Publish:${book.first_publish_year}</p>
            </div>
          </div>
      `
        searchResult.appendChild(div);
    })

}

