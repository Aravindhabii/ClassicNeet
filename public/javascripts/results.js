const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// // If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination'
	// },

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

//toppers

// const box = document.querySelectorAll('.refbox');
// const name1 = document.querySelectorAll('.nameStudent');
// const score = document.querySelectorAll('.scoreStudent');
// const img = document.querySelectorAll('.imgTopper');
// const main = document.querySelector('.gridcontainer');
// const card = document.querySelectorAll('.gridbox');
// const arr = [];

// box.forEach((n) => {
// 	arr.push({
// 		name: n.getAttribute('data-name'),
// 		score: n.getAttribute('data-score'),
// 		img: n.getAttribute('data-img')
// 	});
// });

// var count = 0;

// window.addEventListener('load', () => {
// 	if (arr[count]) {
// 		name1[0].innerText = arr[count].name;
// 		score[0].innerText = arr[count].score;
// 		card[0].classList.add('gridanime1');
// 		img[0].src = arr[count].img;
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[0].innerText = arr[count].name;
// 		score[0].innerText = arr[count].score;
// 		img[0].src = arr[count].img;
// 		card[0].classList.add('gridanime1');
// 		count++;
// 	}

// 	if (arr[count]) {
// 		name1[1].innerText = arr[count].name;
// 		score[1].innerText = arr[count].score;
// 		img[1].src = arr[count].img;
// 		card[1].classList.add('gridanime2');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[1].innerText = arr[count].name;
// 		score[1].innerText = arr[count].score;
// 		img[1].src = arr[count].img;
// 		card[1].classList.add('gridanime2');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[2].innerText = arr[count].name;
// 		score[2].innerText = arr[count].score;

// 		img[2].src = arr[count].img;
// 		card[2].classList.add('gridanime1');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[2].innerText = arr[count].name;
// 		score[2].innerText = arr[count].score;
// 		img[2].src = arr[count].img;
// 		card[2].classList.add('gridanime1');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[3].innerText = arr[count].name;
// 		score[3].innerText = arr[count].score;
// 		img[3].src = arr[count].img;
// 		card[3].classList.add('gridanime2');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[3].innerText = arr[count].name;
// 		score[3].innerText = arr[count].score;
// 		img[3].src = arr[count].img;
// 		card[3].classList.add('gridanime2');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[4].innerText = arr[count].name;
// 		score[4].innerText = arr[count].score;
// 		img[4].src = arr[count].img;
// 		card[4].classList.add('gridanime1');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[4].innerText = arr[count].name;
// 		score[4].innerText = arr[count].score;
// 		img[4].src = arr[count].img;
// 		card[4].classList.add('gridanime1');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[5].innerText = arr[count].name;
// 		score[5].innerText = arr[count].score;
// 		img[5].src = arr[count].img;
// 		card[5].classList.add('gridanime2');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[5].innerText = arr[count].name;
// 		score[5].innerText = arr[count].score;
// 		img[5].src = arr[count].img;
// 		card[5].classList.add('gridanime2');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[6].innerText = arr[count].name;
// 		score[6].innerText = arr[count].score;
// 		img[6].src = arr[count].img;
// 		card[6].classList.add('gridanime1');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[6].innerText = arr[count].name;
// 		score[6].innerText = arr[count].score;
// 		img[6].src = arr[count].img;
// 		card[6].classList.add('gridanime1');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[7].innerText = arr[count].name;
// 		score[7].innerText = arr[count].score;
// 		img[7].src = arr[count].img;
// 		card[7].classList.add('gridanime2');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[7].innerText = arr[count].name;
// 		score[7].innerText = arr[count].score;
// 		img[7].src = arr[count].img;
// 		card[7].classList.add('gridanime2');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[8].innerText = arr[count].name;
// 		score[8].innerText = arr[count].score;
// 		img[8].src = arr[count].img;
// 		card[8].classList.add('gridanime1');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[8].innerText = arr[count].name;
// 		score[8].innerText = arr[count].score;
// 		img[8].src = arr[count].img;
// 		card[8].classList.add('gridanime1');
// 		count++;
// 	}
// });
// setInterval(() => {
// 	if (arr[count]) {
// 		name1[0].innerText = arr[count].name;
// 		score[0].innerText = arr[count].score;
// 		card[0].classList.add('gridanime1');
// 		img[0].src = arr[count].img;
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[0].innerText = arr[count].name;
// 		score[0].innerText = arr[count].score;
// 		img[0].src = arr[count].img;
// 		card[0].classList.add('gridanime1');
// 		count++;
// 	}

// 	if (arr[count]) {
// 		name1[1].innerText = arr[count].name;
// 		score[1].innerText = arr[count].score;
// 		img[1].src = arr[count].img;
// 		card[1].classList.add('gridanime2');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[1].innerText = arr[count].name;
// 		score[1].innerText = arr[count].score;
// 		img[1].src = arr[count].img;
// 		card[1].classList.add('gridanime2');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[2].innerText = arr[count].name;
// 		score[2].innerText = arr[count].score;

// 		img[2].src = arr[count].img;
// 		card[2].classList.add('gridanime1');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[2].innerText = arr[count].name;
// 		score[2].innerText = arr[count].score;
// 		img[2].src = arr[count].img;
// 		card[2].classList.add('gridanime1');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[3].innerText = arr[count].name;
// 		score[3].innerText = arr[count].score;
// 		img[3].src = arr[count].img;
// 		card[3].classList.add('gridanime2');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[3].innerText = arr[count].name;
// 		score[3].innerText = arr[count].score;
// 		img[3].src = arr[count].img;
// 		card[3].classList.add('gridanime2');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[4].innerText = arr[count].name;
// 		score[4].innerText = arr[count].score;
// 		img[4].src = arr[count].img;
// 		card[4].classList.add('gridanime1');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[4].innerText = arr[count].name;
// 		score[4].innerText = arr[count].score;
// 		img[4].src = arr[count].img;
// 		card[4].classList.add('gridanime1');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[5].innerText = arr[count].name;
// 		score[5].innerText = arr[count].score;
// 		img[5].src = arr[count].img;
// 		card[5].classList.add('gridanime2');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[5].innerText = arr[count].name;
// 		score[5].innerText = arr[count].score;
// 		img[5].src = arr[count].img;
// 		card[5].classList.add('gridanime2');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[6].innerText = arr[count].name;
// 		score[6].innerText = arr[count].score;
// 		img[6].src = arr[count].img;
// 		card[6].classList.add('gridanime1');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[6].innerText = arr[count].name;
// 		score[6].innerText = arr[count].score;
// 		img[6].src = arr[count].img;
// 		card[6].classList.add('gridanime1');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[7].innerText = arr[count].name;
// 		score[7].innerText = arr[count].score;
// 		img[7].src = arr[count].img;
// 		card[7].classList.add('gridanime2');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[7].innerText = arr[count].name;
// 		score[7].innerText = arr[count].score;
// 		img[7].src = arr[count].img;
// 		card[7].classList.add('gridanime2');
// 		count++;
// 	}
// 	if (arr[count]) {
// 		name1[8].innerText = arr[count].name;
// 		score[8].innerText = arr[count].score;
// 		img[8].src = arr[count].img;
// 		card[8].classList.add('gridanime1');
// 		count++;
// 	} else {
// 		count = 0;
// 		name1[8].innerText = arr[count].name;
// 		score[8].innerText = arr[count].score;
// 		img[8].src = arr[count].img;
// 		card[8].classList.add('gridanime1');
// 		count++;
// 	}
// }, 10000);


//pagination


function getPageList(totalPages,page,maxLength) {
    function range(start,end) {
        return Array.from(Array(end - start + 1), (_,i) => i + start)
    }


    var sideWidth = maxLength < 6 ? 0 : 1
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1

    if(totalPages <= maxLength) {
        return range(1,totalPages);
    }
    if(page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1,maxLength - sideWidth - 1).concat(0,range(totalPages - sideWidth + 1, totalPages))
    }

    if (page >=  totalPages - sideWidth - 1 - rightWidth) {
        return range(1,sideWidth).concat(0,range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages))
    }
    return range(1,sideWidth).concat(0, range(page - leftWidth, page +  rightWidth), 0, range(totalPages-sideWidth + 1 , totalPages));
}


$(function(){
    var numberofitems = $(".gridcontainer .gridbox").length;
    console.log($(".gridcontainer .gridbox"));
    var limitperpage = 9;
    if(window.innerWidth < 1150){

        limitperpage = 6;
    }
   
    var totalPages = Math.ceil(numberofitems/ limitperpage)
    var paginationSize = ( totalPages <= 5 ?  Math.ceil(numberofitems/ limitperpage) : 5);
    var currentPage;
    function showPage (whichpage) {
        if (whichpage < 1 || whichpage > totalPages) return false;

        currentPage = whichpage;

        $(".gridcontainer .gridbox").hide().slice((currentPage - 1) * limitperpage, currentPage * limitperpage).show();
        $(".pagination li").slice(1,-1).remove();

        getPageList(totalPages,currentPage,paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass(item ? "current-page" : "dott").toggleClass("active", item === currentPage).append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
        })

        $(".previous-page").toggleClass("disable", currentPage === 1);
        $(".next-page").toggleClass("disable", currentPage === totalPages);
        $(".prev-page1").toggleClass("disable1", currentPage === 1);
        $(".next-page1").toggleClass("disable1", currentPage === totalPages);
        return true;
    }
    $(".pagination").append(

         $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Prev")),
         $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({href: "javascript:void(0)"}).text("Next")),
        
    );
    $(".arrowRight").append(
        $("<img>").attr({src: "https://img.icons8.com/flat-round/64/000000/arrow--v1.png"}).addClass("btnItem").addClass("next-page1")
    )
    $(".arrowLeft").append(
        $("<img>").attr({src: "https://img.icons8.com/flat-round/64/000000/arrow--v1.png"}).addClass("btnItem2").addClass("prev-page1")
    )     
    $(".gridcontainer").show();
    // const dropdown = document.querySelector('.dropdown');

    // dropdown.addEventListener('change', (e) => {
    //     showPage(1);
	
    // });
    showPage(1)

    $(document).on("click", ".pagination li.current-page:not(.active)",function(){
        return showPage(+$(this).text())
    })

    $(".next-page").on("click", function(){
        return showPage(currentPage+1)
        
    })
    $(".next-page1").on("click", function(){
        return showPage(currentPage+1)
        
    })
    $(".previous-page").on("click", function(){
        return showPage(currentPage-1)
    })
    $(".prev-page1").on("click", function(){
        return showPage(currentPage-1)
    })
;})


