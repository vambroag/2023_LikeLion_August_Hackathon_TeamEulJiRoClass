let cons_button_state = 0;
let prod_button_state = 0;
let id_input_exist = -1;
let pw_input_exist = -1;

function select_consumer_mode() {
    const cons_button = document.getElementById("select_consumer");
    const prod_button = document.getElementById("select_producer");
    const checkmark_cons = document.getElementById("checkmark_consumer");
    const checkmark_prod = document.getElementById("checkmark_producer");
    const cons_text = document.getElementById("cons_img_name_text");
    const prod_text = document.getElementById("prod_img_name_text");
    const cons_img = document.getElementById("consumer_img");
    const prod_img = document.getElementById("producer_img");
    if (cons_button_state == 0) {
        cons_button.style.backgroundColor = "#A100FF";
        prod_button.style.backgroundColor = "#FFFFFF";
        checkmark_cons.style.backgroundColor = "#FFFFFF";
        checkmark_prod.style.backgroundColor = "#F5E5FF";
        cons_text.style.color = "#FFFFFF";
        prod_text.style.color = "#A100FF";
        cons_img.src = "./images/man-user11.png";
        prod_img.src = "./images/businessman11.png";
        cons_button_state = 1;
        prod_button_state = 0;
    } else if (cons_button_state == 1) {
        cons_button.style.backgroundColor = "#FFFFFF";
        checkmark_cons.style.backgroundColor = "#F5E5FF";
        cons_text.style.color = "#A100FF";
        cons_img.src = "./images/man-user.png";
        cons_button_state = 0;
    }
}

function select_producer_mode() {
    const cons_button = document.getElementById("select_consumer");
    const prod_button = document.getElementById("select_producer");
    const checkmark_cons = document.getElementById("checkmark_consumer");
    const checkmark_prod = document.getElementById("checkmark_producer");
    const cons_text = document.getElementById("cons_img_name_text");
    const prod_text = document.getElementById("prod_img_name_text");
    const cons_img = document.getElementById("consumer_img");
    const prod_img = document.getElementById("producer_img");
    if (prod_button_state == 0) {
        cons_button.style.backgroundColor = "#FFFFFF";
        prod_button.style.backgroundColor = "#A100FF";
        checkmark_cons.style.backgroundColor = "#F5E5FF";
        checkmark_prod.style.backgroundColor = "#FFFFFF";
        cons_text.style.color = "#A100FF";
        prod_text.style.color = "#FFFFFF";
        cons_img.src = "./images/man-user.png";
        prod_img.src = "./images/businessman.png";
        prod_button_state = 1;
        cons_button_state = 0;
    } else if (prod_button_state == 1) {
        prod_button.style.backgroundColor = "#FFFFFF";
        checkmark_prod.style.backgroundColor = "#F5E5FF";
        prod_text.style.color = "#A100FF";
        prod_img.src = "./images/businessman11.png";
        prod_button_state = 0;
    }

}

function input_id_text() {
    const input_id_p = document.getElementById("input_id_pretext");
    const input_id_container = document.getElementById("input_id_here");
    const id_input = document.createElement("input");
    id_input_exist = id_input_exist + 1;
    if (id_input_exist == 0) {
        id_input.type = "text";
        id_input.style.alignSelf = "center";
        id_input.style.marginLeft = "21px";
        id_input.style.color = "#000000";
        id_input.style.fontFamily = "Pretendard";
        id_input.style.fontSize = "15px";
        id_input.style.fontWeight = "400";
        id_input.style.lineHeight = "12px";
        id_input.style.letterSpacing = "-0.05em";
        id_input.style.textAlign = "left";
        id_input.style.borderStyle = "none";
        id_input.className = "created_id_input";
        id_input.id = "created_id_input"
        id_input.addEventListener("click", id_click);
        input_id_p.style.display = "none";
        input_id_container.appendChild(id_input)
        id_input_exist = 1;

    }
}

function input_pw_text() {
    const input_pw_p = document.getElementById("input_pw_pretext");
    const input_pw_container = document.getElementById("input_pw_here");
    const pw_input = document.createElement("input");
    pw_input_exist = pw_input_exist + 1;
    if (pw_input_exist == 0) {
        pw_input.type = "text";
        pw_input.style.alignSelf = "center";
        pw_input.style.marginLeft = "21px";
        pw_input.style.color = "#000000";
        pw_input.style.fontFamily = "Pretendard";
        pw_input.style.fontSize = "15px";
        pw_input.style.fontWeight = "400";
        pw_input.style.lineHeight = "12px";
        pw_input.style.letterSpacing = "-0.05em";
        pw_input.style.textAlign = "left";
        pw_input.style.borderStyle = "none";
        pw_input.className = "created_pw_input";
        pw_input.id = "created_pw_input"
        pw_input.addEventListener("click", pw_click);
        input_pw_p.style.display = "none";
        input_pw_container.appendChild(pw_input)
        input_pw_container.find
        pw_input_exist = 1;

    }
}

function id_click() {
    const id_input = document.getElementById("created_id_input");
    id_input.onblur = function () { id_lose_focus() };
    console.log("hi");
}

function pw_click() {
    const pw_input = document.getElementById("created_pw_input");
    pw_input.onblur = function () { pw_lose_focus() };
}

function id_lose_focus() {
    const id_input = document.getElementById("created_id_input");
    const input_id_p = document.getElementById("input_id_pretext");
    if (id_input && id_input.value) {
    } else {
        id_input.remove();
        input_id_p.style.display = "block";
        id_input_exist = -1;
    }
}

function pw_lose_focus() {
    const pw_input = document.getElementById("created_pw_input");
    const input_pw_p = document.getElementById("input_pw_pretext");
    if (pw_input && pw_input.value) {
        console.log(pw_input.value);
    } else {
        pw_input.remove();
        input_pw_p.style.display = "block";
        pw_input_exist = -1;
    }
}

function click_login_button() {

    //홈화면으로 이동하기
    location.replace('./main/mainpage.html')
    //alert("홈화면으로 이동합니다!!!");
}

const cons_button_action = document.getElementById("select_consumer");
cons_button_action.addEventListener("click", select_consumer_mode);

const prod_button_action = document.getElementById("select_producer");
prod_button_action.addEventListener("click", select_producer_mode);

const input_id_text_action = document.getElementById("input_id_here");
input_id_text_action.addEventListener("click", input_id_text);

const input_pw_text_action = document.getElementById("input_pw_here");
input_pw_text_action.addEventListener("click", input_pw_text);

const click_login_button_action = document.getElementById("login_button");
click_login_button_action.addEventListener("click", click_login_button);




document.getElementById("quick_img_mystore_container").addEventListener("click", () => {
    location.replace('./mypage/my2.html');
});
document.getElementById("quick_img_editstore_container").addEventListener("click", () => {
    location.replace('./myadedit/cash-1.html');
});
document.getElementById("quick_img_count_container").addEventListener("click", () => {
    location.replace('./mypage/my1.html');
});
document.getElementById("quick_img_help_container").addEventListener("click", () => {
    location.replace('./usesteps/use-step1.html');
});