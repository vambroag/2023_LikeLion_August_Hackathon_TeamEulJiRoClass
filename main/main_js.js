const slider = document.querySelector('.recommend_slide_box');
let mouseDown = false;
let startX, scrollLeft;
let touchOn = false;
let startTouch, dragLeft;

let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
    mouseDown = false;
};

let startTouching = function (e) {
    touchOn = true;
    startTouch = e.touches[0].pageX - slider.offsetLeft;
    dragLeft = slider.scrollLeft;
}
let stopTouching = function (e) {
    touchOn = false;
}

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);


slider.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!touchOn) { return; }
    const x = e.touches[0].pageX - slider.offsetLeft;
    const scroll = x - startTouch;
    slider.scrollLeft = dragLeft - scroll;
    console.log("hi")
});

slider.addEventListener('touchstart',startTouching,false);
slider.addEventListener('touchend',stopTouching,false);

function click_to_map(){
  location.replace('../map/map.html')
}

const click_login_button_action = document.getElementById("to_map");
click_login_button_action.addEventListener("click", click_to_map);





let search_input_exist = -1;

function input_search_text() {
    const input_search_p = document.getElementById("searchbar_text");
    const input_search_container = document.getElementById("search_input");
    const search_input = document.createElement("input");
    const search_button = document.getElementById("search_button");
    const search_button_img = document.getElementById("search_button_img");
    search_input_exist = search_input_exist + 1;
    if (search_input_exist == 0) {
          search_input.type = "text";
          search_input.style.alignSelf = "center";
          search_input.style.marginLeft = "21px";
          search_input.style.color = "#000000";
          search_input.style.fontFamily = "Pretendard";
          search_input.style.fontSize = "15px";
          search_input.style.fontWeight = "400";
          search_input.style.lineHeight = "12px";
          search_input.style.letterSpacing = "-0.05em";
          search_input.style.textAlign = "left";
          search_input.style.borderStyle = "none";
          search_input.style.backgroundColor = "#F6F6F6";
          search_input.className = "created_search_input";
          search_input.id = "created_search_input"
          search_input.addEventListener("click", search_click);
          input_search_p.style.display = "none";
          search_button_img.remove();
          search_button.remove();
          input_search_container.appendChild(search_input);
          input_search_container.appendChild(search_button);
          search_button.appendChild(search_button_img);


        search_input_exist = 1;

    }
}

function search_click() {
    const search_input = document.getElementById("created_search_input");
    search_input.onblur = function () { search_lose_focus() };
    console.log("hi");
}


function search_lose_focus() {
    const search_input = document.getElementById("created_search_input");
    const input_search_p = document.getElementById("searchbar_text");
    if (search_input && search_input.value) {
    } else {
        search_input.remove();
        input_search_p.style.display = "block";
        search_input_exist = -1;
    }
}


const input_search_text_action = document.getElementById("search_input");
input_search_text_action.addEventListener("click", input_search_text);


document.getElementById("quick_img_mystore_container").addEventListener("click", () => {
    location.replace('../mypage/my2.html');
});
document.getElementById("quick_img_editstore_container").addEventListener("click", () => {
    location.replace('../myadedit/cash-1.html');
});
document.getElementById("quick_img_count_container").addEventListener("click", () => {
    location.replace('../mypage/my1.html');
});
document.getElementById("quick_img_help_container").addEventListener("click", () => {
    location.replace('../usesteps/use-step1.html');
});
