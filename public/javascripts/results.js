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

document.querySelector(".dropdown").addEventListener("change", async (e) => {
    // tbody.innerHTML = "";
  
    loadDetails(1, "load", e.target.value);
    await fetch(
      `/pagination/totalCount/${document.querySelector(".currentYear").value}`
    )
      .then((response) => response.json())
      .then((data) => {
        tbody.setAttribute("data-total", Math.ceil(data / 5));
      });
    if (tbody.getAttribute("data-total") > 1) {
      next.removeAttribute("disabled");
    } else {
      next.setAttribute("disabled", true);
    }
  });


  const loadDetails = async (page, type, year) => {
    const details = await pagination(page, year);
    details.forEach((detail) => {
      const row = 
      `<div class = "gridbox">
            <div class="imgDesign">
							
				<img class="imgTopper" src="${detail.image}" />
			</div>
            <span class="griditem1span">
                <h3 class="nameStudent">${detail.name}</h3>
				<p class="scoreStudent">${detail.collegename}</p
			></span>
        </div>`;
        switch (type) {
        case "load":
          tbody.innerHTML += row;
          break;
        case "next":
          tbody.innerHTML += row;
          break;
        case "prev":
          tbody.innerHTML += row;
          break;
      }
    });
    return details.length;
  };
















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


