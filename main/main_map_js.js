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


    markergroup.push(marker)

    setMapOnAll(map);

  }

}

function setMapOnAll(map) {
  for (let i = 0; i < markergroup.length; i++) {
    markergroup[i].setMap(map);
  }
}

window.initMap = initMap;