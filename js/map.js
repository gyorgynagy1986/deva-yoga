let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.25172, lng: 20.14573 },
    zoom: 15.5,
    mapId: "dc748274853a2ec0",
  });

  const image = "https://devayoga.hu/photos/svg/map_icon.svg";

  new google.maps.Marker({
    position: { lat: 46.25625102883284, lng: 20.148884697890406 },
    map,
    icon: image,
    title: "Devá Yoga Studio, Tisza Lajos krt. 37",
  });

  new google.maps.Marker({
    position: { lat: 46.25172, lng: 20.14573 },
    map,
    icon: image,
    title: "Devá Yoga Studio, kölcsey utca 13",
  });
}
