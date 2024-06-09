let map;
let shopinfostatus = 0;
let bookmark_status = 0;
let groupname_status = "";
let features = [];
let markergroup = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(37.559196356896, 126.97736606652),
    zoom: 17,
    mapId: '31889289191ab1d3',
    disableDefaultUI: true,
  });


  features = [
    {
      position: new google.maps.LatLng(37.559349, 126.9773777),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/meat.png"),
      groupname: "축산",
      storename: "수진이네 정육점",
      profileimage: "../images/market4.jpg",
    },
    {
      position: new google.maps.LatLng(37.559279, 126.977434),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/fish.png"),
      groupname: "수산",
      storename: "범근이네 수산",
      profileimage: "../images/market1.jpg",
    },
    {
      position: new google.maps.LatLng(37.5592515, 126.9773701),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/fruits.png"),
      groupname: "청과",
      storename: "호동이네 과일가게",
      profileimage: "../images/market6.jpg",
    },
    {
      position: new google.maps.LatLng(37.5592209, 126.9774115),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/accessory.png"),
      groupname: "악세서리",
      storename: "철수네 보석상",
      profileimage: "../images/market7.jpg",
    },
    {
      position: new google.maps.LatLng(37.5590489, 126.9777508),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/clothes.png"),
      groupname: "의류",
      storename: "주은이네 옷가게",
      profileimage: "../images/market3.jpg",

    },
    {
      position: new google.maps.LatLng(37.559114, 126.9774099),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/shoes.png"),
      groupname: "신발",
      storename: "길동슈즈",
      profileimage: "../images/market8.jpg",
    },
    {
      position: new google.maps.LatLng(37.5590981, 126.9774544),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/daily.png"),
      groupname: "생활용품",
      storename: "희연생활",
      profileimage: "../images/market9.jpg",
    },
    {
      position: new google.maps.LatLng(37.5590159, 126.9775489),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/beds.png"),
      groupname: "침구",
      storename: "광수네 이불",
      profileimage: "../images/market10.jpg",
    },
    {
      position: new google.maps.LatLng(37.55924, 126.977774),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/books.png"),
      groupname: "도서",
      storename: "경희도서",
      profileimage: "../images/market11.jpg",
    },
    {
      position: new google.maps.LatLng(37.55929, 126.977774),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/craft.png"),
      groupname: "공방",
      storename: "기태네 철물점",
      profileimage: "../images/market2.jpg",
    },
    {
      position: new google.maps.LatLng(37.5592445, 126.9777),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/pen.png"),
      groupname: "문구",
      storename: "자유문방구",
      profileimage: "../images/market12.jpg",
    },
    {
      position: new google.maps.LatLng(37.5591502, 126.9775453),
      icon: new google.maps.MarkerImage("../images/mapmarkerimg/restaurant.png"),
      groupname: "음식",
      storename: "윤하네 김밥",
      profileimage: "../images/market5.jpg",
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    /*
    const icon1 = {
      url: features[i].icon, // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };*/


    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: features[i].icon,
      map: map,
    });

    marker.addListener("click", () => {
      shopinfostatus = 1;
      const main_window = document.getElementById("main_window");

      const shop_info_container = document.createElement("div");
      shop_info_container.className = "shop_info_container";
      shop_info_container.id = "shop_info_container";
      main_window.appendChild(shop_info_container)

      const shop_info = document.createElement("div");
      shop_info.className = "shop_info";
      shop_info_container.appendChild(shop_info)

      const profile_img_container = document.createElement("div");
      profile_img_container.className = "profile_img_container";
      shop_info.appendChild(profile_img_container)

      const profile_title = document.createElement("p");
      profile_title.className = "profile_title";
      profile_title.innerText = features[i].storename;
      shop_info.appendChild(profile_title)

      const set_location = document.createElement("div");
      set_location.className = "set_location";
      shop_info.appendChild(set_location)

      const set_location_text = document.createElement("p");
      set_location_text.className = "set_location_text";
      set_location_text.innerText = "나의 위치로 설정";
      set_location.appendChild(set_location_text)


      const info_menu = document.createElement("div");
      info_menu.className = "info_menu";
      shop_info_container.appendChild(info_menu);

      const info_menu_1 = document.createElement("div");
      info_menu_1.className = "info_menu_1";
      info_menu_1.id = "info_menu_1";
      info_menu.appendChild(info_menu_1);

      const info_menu_content1 = document.createElement("div");
      info_menu_content1.className = "info_menu_content";
      info_menu_1.appendChild(info_menu_content1);

      const info_menu_img_container1 = document.createElement("div");
      info_menu_img_container1.className = "info_menu_img_container";
      info_menu_content1.appendChild(info_menu_img_container1);

      const info_menu_img1 = document.createElement("img");
      info_menu_img1.className = "info_menu_img";
      info_menu_img1.src = "../images/home.png";
      info_menu_img_container1.appendChild(info_menu_img1);

      const info_menu_text1 = document.createElement("p");
      info_menu_text1.className = "info_menu_text";
      info_menu_text1.innerText = "홈페이지";
      info_menu_content1.appendChild(info_menu_text1);

      const line11 = document.createElement("div");
      line11.className = "line1";
      info_menu.appendChild(line11);

      const info_menu_2 = document.createElement("div");
      info_menu_2.className = "info_menu_2";
      info_menu_2.id = "info_menu_2";
      info_menu.appendChild(info_menu_2);

      const info_menu_content2 = document.createElement("div");
      info_menu_content2.className = "info_menu_content";
      info_menu_2.appendChild(info_menu_content2);

      const info_menu_img_container2 = document.createElement("div");
      info_menu_img_container2.className = "info_menu_img_container";
      info_menu_content2.appendChild(info_menu_img_container2);

      const info_menu_img2 = document.createElement("img");
      info_menu_img2.className = "info_menu_img";
      info_menu_img2.src = "../images/phone-receiver-silhouette.png";
      info_menu_img_container2.appendChild(info_menu_img2);

      const info_menu_text2 = document.createElement("p");
      info_menu_text2.className = "info_menu_text";
      info_menu_text2.innerText = "전화하기";
      info_menu_content2.appendChild(info_menu_text2);

      const line12 = document.createElement("div");
      line12.className = "line1";
      info_menu.appendChild(line12);

      const info_menu_3 = document.createElement("div");
      info_menu_3.className = "info_menu_3";
      info_menu_3.id = "info_menu_3";
      info_menu.appendChild(info_menu_3);

      const info_menu_content3 = document.createElement("div");
      info_menu_content3.className = "info_menu_content";
      info_menu_3.appendChild(info_menu_content3);

      const info_menu_img_container3 = document.createElement("div");
      info_menu_img_container3.className = "info_menu_img_container";
      info_menu_content3.appendChild(info_menu_img_container3);

      const info_menu_img3 = document.createElement("img");
      info_menu_img3.className = "info_menu_img";
      info_menu_img3.src = "../images/chat.png";
      info_menu_img_container3.appendChild(info_menu_img3);

      const info_menu_text3 = document.createElement("p");
      info_menu_text3.className = "info_menu_text";
      info_menu_text3.innerText = "채팅하기";
      info_menu_content3.appendChild(info_menu_text3);

      const profile_img = document.createElement("div");
      profile_img.className = "profile_img";
      shop_info_container.appendChild(profile_img);

      const profile_image = document.createElement("img");
      profile_image.className = "profile_image";
      profile_image.setAttribute("src", features[i].profileimage);
      profile_img.appendChild(profile_image);

      const bookmark_star = document.createElement("div");
      bookmark_star.className = "bookmark_star";
      bookmark_star.id = "bookmark";
      shop_info_container.appendChild(bookmark_star);

      const bookmark_img = document.createElement("img");
      bookmark_img.className = "bookmark_img";
      bookmark_img.src = "../images/star (1).png"
      bookmark_img.id = "bookmark_img";
      bookmark_star.appendChild(bookmark_img);


      document.getElementById("info_menu_1").addEventListener("click", () => {
        location.replace('../main/mainpage.html')
      })
      document.getElementById("info_menu_2").addEventListener("click", () => {
        location.replace('../main/mainpage.html')
      })
      document.getElementById("info_menu_3").addEventListener("click", () => {
        location.replace('../main/mainpage.html')
      })


      const bookmark = document.getElementById("bookmark");
      bookmark.addEventListener("click", () => {
        const bookmark_star_img = document.getElementById("bookmark_img");
        if (bookmark_status == 0) {
          bookmark_star_img.src = "../images/star1.png"
          bookmark_status = 1;
        } else {
          bookmark_star_img.src = "../images/star (1).png"
          bookmark_status = 0;
        }
      });
    });

    markergroup.push(marker)

    setMapOnAll(map);

  }

}

function setMapOnAll(map) {
  for (let i = 0; i < markergroup.length; i++) {
    markergroup[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

function showGroupMakers(groupnum) {
  for (let i = 0; i < markergroup.length; i++) {
    if (features[i].groupname == features[groupnum].groupname) {
      markergroup[i].setMap(map);
    }
  }
}

$('#social').on('change', function (e) {
  hideMarkers();
  e.preventDefault();
  console.log("hi");
  let selectdata = $(".selectcontainer").select2("data");
  for (var i = 0; i <= selectdata.length - 1; i++) {
    groupname_status = selectdata[i].text + "";
    console.log(groupname_status);
    console.log(typeof (groupname_status));
    console.log(features[0].groupname);
    console.log(typeof (features[0].groupname));
  }
  if (groupname_status == features[0].groupname) {
    showGroupMakers(0);
    console.log("hi123");
  } else if (groupname_status == features[1].groupname) {
    showGroupMakers(1);
  } else if (groupname_status == features[2].groupname) {
    showGroupMakers(2);
  } else if (groupname_status == features[3].groupname) {
    showGroupMakers(3);
  } else if (groupname_status == features[4].groupname) {
    showGroupMakers(4);
  } else if (groupname_status == features[5].groupname) {
    showGroupMakers(5);
  } else if (groupname_status == features[6].groupname) {
    showGroupMakers(6);
  } else if (groupname_status == features[7].groupname) {
    showGroupMakers(7);
  } else if (groupname_status == features[8].groupname) {
    showGroupMakers(8);
  } else if (groupname_status == features[9].groupname) {
    showGroupMakers(9);
  } else if (groupname_status == features[10].groupname) {
    showGroupMakers(10);
  } else if (groupname_status == features[11].groupname) {
    showGroupMakers(11);
  } else {
    showMarkers();
  }
});


window.initMap = initMap;

function map_action() {
  if (shopinfostatus == 2) {
    const shop_info_container = document.getElementById("shop_info_container");
    shop_info_container.remove();
    shopinfostatus = 0;
  }
  shopinfostatus = shopinfostatus + 1;
  console.log(shopinfostatus);
}

const map123 = document.getElementById("map");
map123.addEventListener("click", map_action);




import './select2/select2/dist/js/select2.min.js';


$(function () {
  $("#social").select2({
    templateResult: formatState,
    templateSelection: formatState
  });
});

function formatState(state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<span style="color:#255ECE;font-family: Pretendard;font-size: 16px;font-weight: 400;line-height: 34px;letter-spacing: -0.04em;text-align: center;margin:auto; vertical-align: baseline;"><img style="display: inline-block; width: 16px; height: 16px;" src="../images/mapmarkerimg/' + state.element.value.toLowerCase() + '.png" /> ' + state.text + '</span>'
  );
  return $state;
}
