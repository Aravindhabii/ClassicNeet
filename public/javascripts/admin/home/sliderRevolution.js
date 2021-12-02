const previewDiv = document.querySelector(".preview");
const previewSpan = document.querySelectorAll(".previewSpan");
const sectionop = document.querySelector(".mainsection");
const closesvg = document.querySelector(".closesvg");
const fileimg = document.querySelectorAll(".fileimg");
const sliderimgurl = document.querySelectorAll(".sliderimgurl");
const displaybtn = document.querySelectorAll(".displaybtn");
const uploaddisplay = document.querySelectorAll(".uploaddisplay");
const submitbtn = document.querySelector(".submit");

const uploadDisplayInput = (e) => {
    e.parentNode.parentNode.children[2].children[0].removeAttribute("disabled");
    if(e.value != ""){
      e.parentNode.parentNode.children[2].children[0].removeAttribute("disabled");
      submitbtn.classList.remove("warningcheck");
      e.parentNode.children[1].classList.add("btn-info");
      e.parentNode.children[1].removeAttribute("disabled");
      e.parentNode.children[2].innerText = URL.createObjectURL(e.files[0]);
    }else{
      e.parentNode.parentNode.children[2].children[0].setAttribute("disabled", true);
      e.parentNode.children[1].classList.remove("btn-info");
      e.parentNode.children[1].setAttribute("disabled", true);
      submitbtn.classList.add("warningcheck");
    }
};

const nocontentswal = () => {
  Swal.fire({
    position: "center",
    icon: "warning",
    title: "Please upload any image",
    showConfirmButton: false,
    timer: 2500,
  });
};
const checkswal = () => {
  Swal.fire({
    position: "center",
    icon: "warning",
    title: "Please check any checkbox",
    showConfirmButton: false,
    timer: 2500,
  });
};

const updatesCheckboxChange = (e) => {
  if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
    submitbtn.setAttribute("type", "submit");
  } else {
    submitbtn.setAttribute("type", "button");
    submitbtn.classList.add("warningcheck");
  }
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

const previewSpanClick = (e) => {
  const img = document.createElement("img");
  if (e.parentNode.children[2].innerText.length < 1) return;
  img.src = e.parentNode.children[2].innerText;
  previewDiv.appendChild(img);
  previewDiv.style.display = "flex";
  previewDiv.style.background = "rgba(104, 100, 100, 0.671)";
  closesvg.addEventListener("click", () => {
    previewDiv.removeChild(img);
    previewDiv.style.display = "none";
    previewDiv.style.background = "none";
  });
};

const currentPreviewSpan = (e) => {
  const img = document.createElement("img");
  img.src = e.parentNode.children[2].innerText;
  previewDiv.appendChild(img);
  previewDiv.style.display = "flex";
  previewDiv.style.background = "rgba(104, 100, 100, 0.671)";
  closesvg.addEventListener("click", () => {
    previewDiv.removeChild(img);
    previewDiv.style.display = "none";
    previewDiv.style.background = "none";
  });
};

$("#pagination-container").pagination({
  dataSource: function (done) {
    $.ajax({
      type: "GET",
      url: `/sql/homeslider`,
      success: function (response) {
        done(response);
      },
    });
  },
  className: "paginationjs-theme-blue paginationjs-big",

  pageSize: 3,
  callback: function (data, pagination) {
    // template method of yourself
    var dataHtml = "";

    $.each(data, function (index, i) {
      dataHtml += `<tr>
      <td style="padding: 0.3rem">
        <p class="onclickimg mb-1">${i.imgname}</p>
        <span class="currentPreviewSpan btn btn-info" onclick="currentPreviewSpan(this)"
          >Show Image</span
        >
        <span class="currentSliderimgurl">${i.sliderimg} </span>
      </td>
      <td style="padding: 0.3rem">
        <input
          type="file"
          id="image"
          accept="image/*"
          class="fileimg uploaddisplay"
		      onchange="uploadDisplayInput(this)"
          name="sliderimg"
        />
        <button class="previewSpan displaybtn btn" type="button" onclick="previewSpanClick(this)" disabled>
          Display
        </button>
        <span class="sliderimgurl"></span>
      </td>
      <td style="padding: 0.3rem">
        <input
          type="checkbox"
          id="checkbox"
          class="updatesCheckbox"
          disabled
		  onchange="updatesCheckboxChange(this)"
          name="checkbox"
          value="${i.cloudinaryName}"
          style="height: 20px; width: 20px"
        />
      </td>
    </tr>
		`;
    });

    $(".tbody").html(dataHtml);
  },
});
