const addbtn = document.querySelector(".addbtn");
const previewDiv = document.querySelector(".preview");
const backbtn = document.querySelector(".backbtn");
const sectionop = document.querySelector(".mainsection");
const imgform = document.querySelector(".imgform");
const submitbtn = document.querySelector(".submitbtn");
const latestupdateform = document.querySelector(".imgform");
const collegenum = document.querySelector(".collegenum");

collegenum.addEventListener("input", (evt) => {
  var ASCIICode = evt.target.value.slice(-1).charCodeAt(0);
  if (!(ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))) {
    evt.target.value = evt.target.value.slice(0, -1);
  }
});

if (addbtn) {
  addbtn.addEventListener("click", () => {
    previewDiv.style.display = "flex";
    imgform.style.transform = "translate(300vw,0)";
    previewDiv.style.transform = "none";
  });
}

backbtn.addEventListener("click", () => {
  previewDiv.style.transform = "translate(300vw,0)";
  imgform.style.transform = "translate(0,0)";
});

const previewTopper = document.querySelector(".previewTopper");
const previewSpan = document.querySelectorAll(".currentPreviewSpan");
const closesvg = document.querySelector(".closesvg");
const sliderimgurl = document.querySelectorAll(".currentSliderimgurl");

const currentPreviewSpanClick = (e) => {
  const img = document.createElement("img");
  if (e.parentNode.children[2].innerText.length < 1) return;
  img.src = e.parentNode.children[2].innerText;
  previewTopper.appendChild(img);
  previewTopper.style.display = "flex";
  closesvg.addEventListener("click", () => {
    previewTopper.removeChild(img);
    previewTopper.style.display = "none";
  });
};

const nocontentswal = () => {
  Swal.fire({
    position: "center",
    icon: "warning",
    title: "Please check any checkbox",
    showConfirmButton: false,
    timer: 2500,
  });
};

const checkswal = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "Are you sure you want to delete!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      latestupdateform.submit();
    }
  });
};

submitbtn.addEventListener("click", () => {
  if (
    submitbtn.getAttribute("type") == "button" &&
    submitbtn.classList.contains("warningcheck")
  ) {
    nocontentswal();
  } else if (
    submitbtn.getAttribute("type") == "button" &&
    !submitbtn.classList.contains("warningcheck")
  ) {
    checkswal();
  } else {
    return;
  }
});

const updatesCheckboxChange = (e) => {
  if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
    submitbtn.classList.remove("warningcheck");
  } else {
    submitbtn.classList.add("warningcheck");
  }
};
$("#pagination-container").pagination({
  dataSource: function (done) {
    $.ajax({
      type: "GET",
      url: `/sql/ourtoppers`,
      success: function (response) {
        done(response);
      },
    });
  },
  className: "paginationjs-theme-blue paginationjs-big",

  pageSize: 5,
  callback: function (data, pagination) {
    // template method of yourself
    var dataHtml = "";

    $.each(data, function (index, i) {
      dataHtml += `<tr>
      <td>
        <p>${i.name}</p>
      </td>
      <td>
        <p class="onclickimg">${i.imgname}</p>
        <span class="currentPreviewSpan btn btn-info" onclick="currentPreviewSpanClick(this)"
          >Show Image</span
        >
        <span class="currentSliderimgurl">${i.studentimg}</span>
      </td>
      <td>
        <p>${i.score}</p>
      </td>
      <td>
        <p>${i.collegename}</p>
      </td>
      <td>
        <input
          type="checkbox"
          id="checkbox"
          class="updatesCheckbox"
		  onchange="updatesCheckboxChange(this)"
          name="checkbox"
          value="${i.cloudinaryname}"
          style="height: 20px; width: 20px"
        />
      </td>
    </tr>
		`;
    });

    $(".tbody").html(dataHtml);
  },
});
