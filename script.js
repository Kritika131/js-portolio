//turn pages when click next or prev button

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((elem,idx)=>{
  elem.onclick=()=>{
    const pageTurnId = elem.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    if(pageTurn.classList.contains('turn')){
      pageTurn.classList.remove('turn');
      setTimeout(()=>{
        pageTurn.style.zIndex=20-idx;
      },500)
    }
    else{
      pageTurn.classList.add('turn')
      setTimeout(()=>{
        pageTurn.style.zIndex=20+idx;
      },500)
    }
  }
})

// contact me button when click 

const pages = document.querySelectorAll('.book-page.page-right')
const contactBtn = document.querySelector('.contact-me');

contactBtn.onclick=()=>{
  console.log("clicked");

  pages.forEach((page,idx)=>{
    setTimeout(()=>{

      page.classList.add('turn');
      setTimeout(()=>{
        page.style.zIndex = 20 + idx;
      },500)
    },(idx + 1) *200 + 100)
    
  })
}

//create reverse index function

let totalPages = pages.length;
let pageNumber=0

function reverseIndex(){
  pageNumber--;
  if(pageNumber<0){
    pageNumber = totalPages - 1;
  }
}

//back profile button when click 
 const backProfile = document.querySelector('.back-profile');
 backProfile.onclick=()=>{

  pages.forEach((_,idx)=>{
    setTimeout(()=>{
      reverseIndex()
      pages[pageNumber].classList.remove('turn');
      setTimeout(()=>{
        reverseIndex()
        pages[pageNumber].style.zIndex = 10 + idx;
      },500)
    },(idx+1)*200 +100)
  })

 }

 //opening animation 
 const coverRight = document.querySelector('.cover.cover-right');
 const pageLeft = document.querySelector('.book-page.page-left');

 //opening animation (cover right turn)
 setTimeout(()=>{
  coverRight.classList.add('turn')
  // coverRight.style.zIndex=-1
 },2100)
 setTimeout(()=>{
  coverRight.style.zIndex=-1;
 },2800)

 //opening animation (left page or profile page animation)

 setTimeout(()=>{
  pageLeft.style.zIndex=-1;
 },2800)

  //opening animation (all pages right turn)
  pages.forEach((_,idx)=>{
    setTimeout(()=>{
      reverseIndex()
      pages[pageNumber].classList.remove('turn');
      setTimeout(()=>{
        reverseIndex()
        pages[pageNumber].style.zIndex = 10 + idx;
      },500)
    },(idx+1) * 200 + 2100)
  })



