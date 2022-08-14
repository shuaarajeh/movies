var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });


  const API_KEY='api_key=e63156d999db4b157829adead2989f71';
  const BASE_URL='https://api.themoviedb.org/3';
  const API_URL=BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
  const IMG_URL='https://image.tmdb.org/t/p/w500';


  var main=document.getElementById("main");

  getMovies(API_URL);
  function getMovies(url){
      fetch(url).then(res=>res.json()).then(data=>{
        showMovies(data.results);


      })
  }



  function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
             <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="green">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <a class="bookbtn" href="#">Book now</a>
            </div>
        
            `

        main.appendChild(movieEl);

     })
 }