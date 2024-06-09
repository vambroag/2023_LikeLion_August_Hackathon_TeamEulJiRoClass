let search_input_exist = -1;

function click_to_main() {
    location.replace('../main/mainpage.html')
}

const click_login_button_action = document.getElementById("go_back");
click_login_button_action.addEventListener("click", click_to_main);


function input_search_text() {
    const input_search_p = document.getElementById("searchbar_text");
    const input_search_container = document.getElementById("search_input");
    const search_input = document.createElement("input");
    const search_img_container = document.getElementById("search_img_container");
    const search_img = document.getElementById("search_img");
    search_input_exist = search_input_exist + 1;
    if (search_input_exist == 0) {
        search_input.type = "text";
        search_input.style.alignSelf = "center";
        search_input.style.marginLeft = "21px";
        search_input.style.color = "#FFFFFF";
        search_input.style.fontFamily = "Pretendard";
        search_input.style.fontSize = "15px";
        search_input.style.fontWeight = "400";
        search_input.style.lineHeight = "12px";
        search_input.style.letterSpacing = "-0.05em";
        search_input.style.textAlign = "left";
        search_input.style.borderStyle = "none";
        search_input.style.backgroundColor = "#255ECE";
        search_input.className = "created_search_input";
        search_input.id = "created_search_input"
        search_input.addEventListener("click", search_click);
        input_search_p.style.display = "none";
        search_img.remove();
        search_img_container.remove();
        input_search_container.appendChild(search_input);
        input_search_container.appendChild(search_img_container);
        search_img_container.appendChild(search_img);


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
