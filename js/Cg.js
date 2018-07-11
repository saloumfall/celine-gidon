//variable globales
var map;//la carte google maps
var infowindow;//l'info bulle	
//fonction principale appellée sur l'événement onload de la page
function initialize()
{//alert("coucou");pour test
	var latlng=new google.maps.LatLng(43.6031508,6.9869543);//le point central=adresse ABI
	var myOptions={
		zoom:15,
		center:latlng,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	//instancier un objet google maps pour affichage dans un div
	map= new google.maps.Map(document.getElementById("carte"),myOptions);
	
	//instancier un objet info bulle
	infowindow=new google.maps.InfoWindow(
	{
		content:"Nous sommes ici !<br/> 799 avenue de Tournamy Tour Center<br/>06250 Mougins",
		size:new google.maps.Size(20,20),
		position:latlng
	});
	//instancier un 'marker'
	var marker=new google.maps.Marker({
	map: map,
	position:latlng
	});
//ajouter l'appel de la fonction info() au click sur le marker
google.maps.event.addListener(marker,'click',function(){info();});

//affiche tout de suite l'info bule

info();
}//fin initialize()

//fonction d'affichage de l'info-bulle
function info()
{
	
	infowindow.open(map);
}