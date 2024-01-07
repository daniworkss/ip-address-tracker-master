const input = document.querySelector('.location-input')
const searchBtn = document.querySelector('.search')

//for map
//deeclare map
const map = L.map('map');
//ap attribution
const  attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
const tileUrl  = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const maxZoom = 17
const tiles = L.tileLayer(tileUrl, {attribution}, maxZoom  )
tiles.addTo(map)
const marker = L.marker([0, 0])


// to search for location

async function getIp(){
    const ipAdress = input.value
    input.value = ''
    const ipUrl = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_SKOsC6lNFIHttBm4tN1zX6eTt2IfB&ipAddress='+ ipAdress

    const ipSearcher = await fetch(ipUrl)
    const ipSearchdata = await ipSearcher.json()
         
    const ipLocation = ipSearchdata.location
    //for ip adress to show on site
     document.querySelector('.ip-text').innerText = ipSearchdata.ip
     document.querySelector('.location-text').innerText = ipLocation.region
    document.querySelector('.timezone-text').innerText = ` UTC ${ipLocation.timezone}`
    document.querySelector('.isp-text').innerText = ipSearchdata.isp
    
    //ip latitude and longitude gotten from the api
    let latitude = ipLocation.lat
    let longitude = ipLocation.lng
    
    //change the icon style
    const mapIcon = L.icon({
        iconUrl: 'icon-location.svg',
        iconSize: [30, 40],
      
    });

    //for traced ip to show on map
    marker.setLatLng([latitude , longitude])
    //to change marker style
    L.marker([latitude, longitude],{icon: mapIcon}).addTo(map);
    //  set map to view the searched ip adress
    map.setView([latitude, longitude], 13);
}
//for main local ip to load once on site
getIp()

// to search up new ip adress
searchBtn.addEventListener('click', ()=>{
    getIp()
})
