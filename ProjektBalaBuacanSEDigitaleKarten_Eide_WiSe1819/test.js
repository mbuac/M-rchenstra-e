
	var mymap = L.map('mapid').setView([51, 10], 6);
     
     
     
	L.tileLayer('https:stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png', {
		
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	}).addTo(mymap); 

	//Dornröschen ICON
	var dornIcon = L.icon({
    iconUrl: 'dron.png',


    iconSize:     [50, 50], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
     });

	//Frau Holle ICON

	var holleIcon = L.icon({
    iconUrl: 'holle.png',


    iconSize:     [50, 50], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
     });


	//Brüder Grimm ICON

	var grimmIcon = L.icon({
    iconUrl: 'grimm.png',
    

    iconSize:     [50, 50], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
     });

	//Rotkäppchen ICON

	var rotIcon = L.icon({
    iconUrl: 'rotkap.png',
        

    iconSize:     [50, 50], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
     });

	// Hänsel und Gretel

	var gretelIcon = L.icon({
    iconUrl: 'gretel.png',


    iconSize:     [50, 50], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
     });

     
     //Leaflet extra markers
     var redMarker = L.ExtraMarkers.icon({
    icon: 'fa-number',
    markerColor: 'red',
    shape: 'star',
    prefix: 'fa'
  });

     var blackMarker = L.ExtraMarkers.icon({
    icon: 'fa-number',
    markerColor: 'black',
    shape: 'star',
    prefix: 'fa'
  });
     
     var rectMarker = L.ExtraMarkers.icon({
    icon: 'sync',  //Error: Symbol wird nicht angezeigt
    markerColor: 'green-dark',
    shape: 'penta',
    prefix: 'fa'
  });
     
     //FRAU HOLLE ROUTE: PUNKTE (danach kommen noch Linien und Gebäude)
  
     //Deutschee Märchenstraße e.V.  
     /*
     L.marker([51.317061, 9.490092], {icon: redMarker}).bindPopup("Deutsche Märchenstraße e.V. <br> Kurfürstenstraße 9 <br> 34117 Kassel").addTo(mymap);
     //GRIMMWELT Kassel
     L.marker([51.309047, 9.489083], {icon: redMarker}).bindPopup("GRIMMWELT Kassel gGmbH <br> Weinbergstraße 21 <br> 34117 Kassel").addTo(mymap);
     //ESSEN:Grimms Garten (ESSEN-Symbol hinzufügen-Aktivität)
     L.marker([51.308785, 9.489337], {icon: blackMarker}).bindPopup("Grimms Garten <br> Weinbergstraße 21 <br> 34117 Kassel").addTo(mymap);
     //FÜHRUNG: Weinbergbunker
     L.marker([51.309079, 9.489393], {icon: rectMarker}).bindPopup("Weinbergbunker <br> Frankfurter Str. <br> 34117 Kassel").addTo(mymap);
     //Wanderparkplatz Sage "Niester Riesen"
     L.marker([51.305782, 9.650861], {icon: redMarker}).bindPopup("Wander-Parkplatz 'Niester Riesen' <br> K6 <br> 34329 Nieste").addTo(mymap);
     //Weg "Niester Riesen"
     L.marker([51.306224, 9.651076], {icon: redMarker}).bindPopup("Premiumweg P11 Niester Riesen <br> 34329 Nieste").addTo(mymap);
     //ESSEN: Königs-Alm
     L.marker([51.305507, 9.654499], {icon: blackMarker}).bindPopup("Königs-Alm <br> Tannenhütte 1 <br> 34329 Nieste").addTo(mymap);
     //PKW Parkplatz Königs-Alm
     L.marker([51.305418, 9.651838], {icon: redMarker}).bindPopup("PKW Parkplatz <br> 34329 Nieste").addTo(mymap);
     //Motorrad Parkplatz Königsalm
     L.marker([51.305619, 9.653432], {icon: rectMarker}).bindPopup("Motorradparkplatz (Königsalm) <br> 34329 Nieste").addTo(mymap);
     //Stiftskirche Zum heiligen Kreuz-Die heilige Kunigunde --//Partner-WEBSITEN//INFOS noch ergänzen!Bei klick
     L.marker([51.280161, 9.634457], {icon: rectMarker}).bindPopup("Stiftskirche Zum heiligen Kreuz <br> Zur Schönen Aussicht 2 <br> 34260 Kaufungen").addTo(mymap);
     //Theater Laku Paka
     L.marker([51.279994, 9.635680], {icon: rectMarker}).bindPopup("Theater Laku Paka <br> sistergold GbR <br> Jakobstraße 17 <br> 34260 Kaufungen").addTo(mymap);
     //Geo-Naturpark Frau-Holle-Land
     L.marker([51.193787, 10.032420], {icon: rectMarker}).bindPopup("Geo-Naturpark Frau-Holle-Land <br> Niederhoner Str. 54 <br> 37269 Eschwege").addTo(mymap);
     //Helsa GEMEINDE
     L.marker([51.257396, 9.686381], {icon: rectMarker}).bindPopup("Helsa <br> 34298 <br> Helsa").addTo(mymap);
     //Parkplatz am BF Helsa
     L.marker([51.258005, 9.682305], {icon: rectMarker}).bindPopup("Parkplatz am Bf <br> In der Aue 2 <br> 34298 Helsa").addTo(mymap);
     //Essen: Pizzeria La Grotta
     L.marker([51.257200, 9.685556], {icon: rectMarker}).bindPopup("Pizzeria La Grotta <br>  Berliner Str. 2 <br> 34298 Helsa").addTo(mymap);
     //Sehenswürdigkeit Merten Jäger Brunnen in Helsa
     L.marker([51.258606, 9.684764], {icon: rectMarker}).bindPopup("Merten Jäger Brunnen <br> Leipziger Str. 35 <br> 34298 Helsa").addTo(mymap);
     //
     L.marker([51.279994, 9.635680], {icon: rectMarker}).bindPopup("Theater Laku Paka <br> sistergold GbR <br> Jakobstraße 17 <br> 34260 Kaufungen").addTo(mymap);
     L.marker([51.279994, 9.635680], {icon: rectMarker}).bindPopup("Theater Laku Paka <br> sistergold GbR <br> Jakobstraße 17 <br> 34260 Kaufungen").addTo(mymap);
     L.marker([51.279994, 9.635680], {icon: rectMarker}).bindPopup("Theater Laku Paka <br> sistergold GbR <br> Jakobstraße 17 <br> 34260 Kaufungen").addTo(mymap);
     L.marker([51.279994, 9.635680], {icon: rectMarker}).bindPopup("Theater Laku Paka <br> sistergold GbR <br> Jakobstraße 17 <br> 34260 Kaufungen").addTo(mymap); */


     //Dornröschen Route
     var dornröschen = L.layerGroup();
     L.marker([51.419285, 9.6557588], {icon: dornIcon}).bindPopup("Hann.Münden").addTo(dornröschen);
     L.marker([51.4286582, 9.4771217], {icon: dornIcon}).bindPopup("Immenhausen").addTo(dornröschen);
     L.marker([51.4970925, 9.3860472], {icon: dornIcon}).bindPopup("Hofgeismar").addTo(dornröschen);
     L.marker([51.5738886, 9.4205694], {icon: dornIcon}).bindPopup("Trendelburg").addTo(dornröschen);
     L.marker([51.5965297, 9.6064613], {icon: dornIcon}).bindPopup("Oberweser").addTo(dornröschen);
     L.marker([51.73116, 9.402839], {icon: dornIcon}).bindPopup("Fürstenberg").addTo(dornröschen);
  
     L.marker([51.543611, 9.5375], {icon: dornIcon}).bindPopup("Sababurg").addTo(dornröschen);


     //Frau Holle Route
     var holle = L.layerGroup();
     L.marker([51.312047, 9.67083], {icon: holleIcon}).bindPopup("Nieste").addTo(holle);
     L.marker([51.2831485, 9.6212385], {icon: holleIcon}).bindPopup("Kaufungen").addTo(holle);
     L.marker([51.1982109, 9.7197866], {icon: holleIcon}).bindPopup("Hessisch Lichtenau").addTo(holle);
     L.marker([51.2703403 , 9.9800957], {icon: holleIcon}).bindPopup("Bad Sooden-Allendorf").addTo(holle);
     L.marker([51.3399682, 9.8555643], {icon: holleIcon}).bindPopup("Witzenhausen").addTo(holle);
     L.marker([51.3770297, 10.1439107], {icon: holleIcon}).bindPopup("Heilbad Heiligenstadt ").addTo(holle);
     L.marker([51.5710484, 10.1072144], {icon: holleIcon}).bindPopup("Ebergötzen").addTo(holle);
     L.marker([51.6182697, 9.5681743], {icon: holleIcon}).bindPopup("Wahlsburg").addTo(holle);
     L.marker([51.73116, 9.402839], {icon: holleIcon}).bindPopup("Fürstenberg").addTo(holle);
     L.marker([51.2603585, 9.6894179], {icon: holleIcon}).bindPopup("Helsa").addTo(holle);
     L.marker([51.2587473, 9.786006], {icon: holleIcon}).bindPopup("Großalmerode").addTo(holle);


     //Deutsche Märchenstraße

     var deutsche = L.layerGroup();

     L.marker([50.1264123, 8.9283105], {icon: grimmIcon}).bindPopup("Hanau").addTo(deutsche);
     L.marker([50.3166763, 9.4512418], {icon: grimmIcon}).bindPopup("Steinau an der Straße").addTo(deutsche);
     L.marker([50.3493544, 9.5255493], {icon: grimmIcon}).bindPopup("Schlüchtern").addTo(deutsche);
     L.marker([50.4261733,9.4041114], {icon: grimmIcon}).bindPopup("Freiensteinau").addTo(deutsche);
     L.marker([50.5595067, 9.3463111], {icon: grimmIcon}).bindPopup("Herbstein").addTo(deutsche);
     L.marker([ 50.750828, 9.2691602], {icon: grimmIcon}).bindPopup("Alsfeld ").addTo(deutsche);
     L.marker([50.8021728,8.7667933], {icon: grimmIcon}).bindPopup("Marburg").addTo(deutsche);

    // Rotkäppchen Route
    var rotkäppchen = L.layerGroup();

    L.marker([50.909328, 9.189271], {icon: rotIcon}).bindPopup("Treysa").addTo(rotkäppchen);
    L.marker([50.91039363171484,  9.234952926635742], {icon: rotIcon}).bindPopup("Ziegenhain ").addTo(rotkäppchen);
    L.marker([50.883922, 9.256217], {icon: rotIcon}).bindPopup("Loshausen ").addTo(rotkäppchen);
    L.marker([50.87780243724243, 9.309368133544922], {icon: rotIcon}).bindPopup("Riebelsdorf ").addTo(rotkäppchen);
    L.marker([50.869118, 9.343763], {icon: rotIcon}).bindPopup("Neukirchen  ").addTo(rotkäppchen);
    L.marker([50.84039192596998, 9.364128112792969], {icon: rotIcon}).bindPopup("Nausis  ").addTo(rotkäppchen);
	L.marker([50.823934, 9.383906], {icon: rotIcon}).bindPopup("Kleinropperhausen  ").addTo(rotkäppchen);
	L.marker([50.82575546743661, 9.40577745437622], {icon: rotIcon}).bindPopup("Steinmühle  ").addTo(rotkäppchen);
	L.marker([50.81581, 9.409684], {icon: rotIcon}).bindPopup("Bahnhof Ottrau  ").addTo(rotkäppchen);
	L.marker([50.807114,9.442753 ], {icon: rotIcon}).bindPopup("Görzhain  ").addTo(rotkäppchen);
	L.marker([50.82299028767253, 9.435067176818848], {icon: rotIcon}).bindPopup("Weißenborn  ").addTo(rotkäppchen);
	L.marker([50.862481, 9.419154], {icon: rotIcon}).bindPopup("Olberode   ").addTo(rotkäppchen);
	L.marker([50.841765,9.457340 ], {icon: rotIcon}).bindPopup(" Hausen ").addTo(rotkäppchen);
	L.marker([50.850265,9.489798 ], {icon: rotIcon}).bindPopup("Wahlshausen  ").addTo(rotkäppchen);
	L.marker([50.855061, 9.531888 ], {icon: rotIcon}).bindPopup("Frielingen  ").addTo(rotkäppchen);
	L.marker([50.851853, 9.553823 ], {icon: rotIcon}).bindPopup("Heddersdorf ").addTo(rotkäppchen);
	L.marker([50.835404, 9.574928 ], {icon: rotIcon}).bindPopup("Kirchheim  ").addTo(rotkäppchen);
	L.marker([50.82006, 9.575139 ], {icon: rotIcon}).bindPopup("Kleba   ").addTo(rotkäppchen);
	L.marker([50.801656, 9.60473 ], {icon: rotIcon}).bindPopup("Niederaula ").addTo(rotkäppchen);
	L.marker([50.825186,9.65016 ], {icon: rotIcon}).bindPopup("Beiershausen").addTo(rotkäppchen);
	L.marker([50.834131336018494,9.667046070098877], {icon: rotIcon}).bindPopup("Asbach").addTo(rotkäppchen);
	L.marker([50.849717,9.67668 ], {icon: rotIcon}).bindPopup("Eichhof").addTo(rotkäppchen);
	L.marker([50.868134,9.706848 ], {icon: rotIcon}).bindPopup("Eichhof").addTo(rotkäppchen);
	
	//Hänsel und Gretel
	var hänselgretel = L.layerGroup();

	
   
     
    // Sehenswürdigkeiten
    var sehenswürdigkeiten = L.layerGroup();
    L.marker([51.19394, 10.032373], {icon: rotIcon}).bindPopup("Frau-Holle-Landhfsjknknlahijvisknlksljivsijivksaljvslijflwsnjndvjnjkndj").addTo(sehenswürdigkeiten);
    L.marker([50.750445, 9.269733], {icon: rotIcon}).bindPopup("Alsfelder Märchenhaus").addTo(sehenswürdigkeiten);
    L.marker([51.2687, 9.96506], {icon: rotIcon}).bindPopup("Märchenlaternenweg").addTo(sehenswürdigkeiten);
    L.marker([50.810698, 8.775352], {icon: rotIcon}).bindPopup("Grimm-Dich-Pfad").addTo(sehenswürdigkeiten);
    L.marker([51.539266, 9.531726], {icon: rotIcon}).bindPopup("Tierpark Sababurg").addTo(sehenswürdigkeiten);
    L.marker([51.091704, 8.933336], {icon: rotIcon}).bindPopup("Bergpark Wilhelmshöhe").addTo(sehenswürdigkeiten);
    L.marker([51.309163, 51.309163], {icon: rotIcon}).bindPopup("GRIMMWELT Kassel").addTo(sehenswürdigkeiten);

    /*
    L.marker([], {icon: rotIcon}).bindPopup("").addTo(sehenswürdigkeiten);
    L.marker([], {icon: rotIcon}).bindPopup("").addTo(sehenswürdigkeiten);
    L.marker([], {icon: rotIcon}).bindPopup("").addTo(sehenswürdigkeiten);
    L.marker([], {icon: rotIcon}).bindPopup("").addTo(sehenswürdigkeiten);
    L.marker([], {icon: rotIcon}).bindPopup("").addTo(sehenswürdigkeiten);
    L.marker([], {icon: rotIcon}).bindPopup("").addTo(sehenswürdigkeiten);
    L.marker([], {icon: rotIcon}).bindPopup("").addTo(sehenswürdigkeiten);
    L.marker([], {icon: rotIcon}).bindPopup("").addTo(sehenswürdigkeiten);
    L.marker([], {icon: rotIcon}).bindPopup("").addTo(sehenswürdigkeiten); */
     
   
   //Circle für DornröschenArea

    L.circle([51.566240134420916, 9.510469436645508], 21500, {
		color: 'silver',
		fillColor: 'silver',
		fillOpacity: 0.5,

	}).addTo(mymap).bindPopup("Dornröschen ");



    var hänselgretel = L.layerGroup();

    var latlngs = [[50.1918469807045, 9.380950927734375],[50.154026111358014, 9.163970947265625],[49.68273545366889, 9.24774169921875],[50.10032188683107, 9.817657470703125],[50.1918469807045, 9.380950927734375]];
	var polygon = L.polygon(latlngs, {color: 'silver'}).addTo(mymap).bindPopup("Hänsel und Gretel");
    

	/*L.circle([51.5, 11], 500, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("Sehenswürdigkeit XY");*/

	//Polygon für Deutsche Märchenstraße

	var latlngs = [[50.044793599665226,8.53912353515625],[50.044793599665226, 9.766845703125],[50.835432306955276,9.766845703125],[50.835432306955276, 8.53912353515625],[50.044793599665226,8.53912353515625]];
	var polygon = L.polygon(latlngs, {color: 'silver'}).addTo(mymap).bindPopup("Deutsche Märchenstraße");
	//map.fitBounds(polygon.getBounds());
     
	//Polygon für Frau Holle
	var latlngs = [[51.744704, 9.384384],[51.11657, 9.673462],[51.549011, 10.59082],[51.744704, 9.384384]];
	var polygon = L.polygon(latlngs, {color: 'silver'}).addTo(mymap).bindPopup("Frau Holle");

	//POlygon für Rotkäppchen
	var latlngs = [[50.881001, 9.783325],[50.741047, 9.544373],[50.916267, 9.179077],[50.881001, 9.783325]];
	var polygon = L.polygon(latlngs, {color: 'silver'}).addTo(mymap).bindPopup("Frau Holle");
     //polylines for Dornröschen
     var pointA = new L.LatLng(51.419285, 9.6557588);
     var pointB = new L.LatLng(51.4286582, 9.4771217);
     var pointC = new L.LatLng(51.4970925, 9.3860472);
     var pointD = new L.LatLng(51.5738886, 9.4205694);
     var pointE = new L.LatLng(51.543611, 9.5375);
     var pointF = new L.LatLng(51.5965297, 9.6064613);
     var pointG = new L.LatLng(51.73116, 9.402839);
     var pointList = [pointA, pointB, pointC,pointD,pointE, pointF, pointG];

     var firstpolyline = new L.Polyline(pointList, {
        color: 'black',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 10

     });
     firstpolyline.addTo(dornröschen).bindPopup("Dornröschen ");


     //polylines for Holle
     var pointA = new L.LatLng(51.312047, 9.67083);
     var pointB = new L.LatLng(51.2831485, 9.6212385);
     var pointC = new L.LatLng(51.2603585, 9.6894179);
     var pointD = new L.LatLng(51.1982109, 9.7197866);
     var pointE = new L.LatLng(51.2587473, 9.786006);
     var pointF = new L.LatLng(51.2703403 , 9.9800957);
     var pointG = new L.LatLng(51.3399682, 9.8555643);
     var pointH = new L.LatLng(51.3770297, 10.1439107);
     var pointI = new L.LatLng(51.5710484, 10.1072144);
     var pointJ = new L.LatLng(51.6182697, 9.5681743);
     var pointK = new L.LatLng(51.73116, 9.402839);
     var pointList = [pointA, pointB, pointC, pointD, pointE, pointF, pointG, pointH, pointI, pointJ, pointK]

     var firstpolyline = new L.Polyline(pointList, {
        color: 'blue',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 10

     });
     firstpolyline.addTo(holle).bindPopup("Frau Holle ");

     //Route für Deutsche Märchenstraße

     var pointA = new L.LatLng(50.1264123, 8.9283105);
     var pointB = new L.LatLng(50.3166763, 9.4512418);
     var pointC = new L.LatLng(50.3493544, 9.5255493);
     var pointD = new L.LatLng(50.4261733,9.4041114);
     var pointE = new L.LatLng(50.5595067, 9.3463111);
     var pointF = new L.LatLng(50.750828, 9.2691602);
     var pointG = new L.LatLng(50.8021728,8.7667933);
     var pointList = [pointA, pointB, pointC,pointD,pointE, pointF, pointG];

     var firstpolyline = new L.Polyline(pointList, {
        color: 'purple',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 10

     });
     firstpolyline.addTo(deutsche).bindPopup("Deutsche Märchenstraße ");

     var pointA = new L.LatLng(50.909328, 9.189271);
     var pointB = new L.LatLng(50.91039363171484,  9.234952926635742);
     var pointC = new L.LatLng(50.883922, 9.256217);
     var pointD = new L.LatLng(50.87780243724243, 9.309368133544922);
     var pointE = new L.LatLng(50.869118, 9.343763);
     var pointF = new L.LatLng(50.84039192596998, 9.364128112792969);
     var pointG = new L.LatLng(50.823934, 9.383906);
     var pointA1 = new L.LatLng(50.82575546743661, 9.40577745437622);
     var pointB1 = new L.LatLng(50.81581, 9.409684);
     var pointC1 = new L.LatLng(50.807114,9.442753 );
     var pointD1 = new L.LatLng(50.82299028767253, 9.435067176818848);
     var pointE1 = new L.LatLng(50.862481, 9.419154);
     var pointF1 = new L.LatLng(50.841765,9.457340 );
     var pointG1 = new L.LatLng(50.850265,9.489798 );
     var pointA2 = new L.LatLng(50.855061, 9.531888 );
     var pointB2 = new L.LatLng(50.851853, 9.553823 );
     var pointC2 = new L.LatLng(50.835404, 9.574928 );
     var pointD2 = new L.LatLng(50.82006, 9.575139 );
     var pointE2 = new L.LatLng(50.801656, 9.60473 );
     var pointF2 = new L.LatLng(50.825186,9.65016 );
     var pointG2 = new L.LatLng(50.834131336018494,9.667046070098877);
     var pointA3 = new L.LatLng(50.849717,9.67668 );
     var pointB3 = new L.LatLng(50.868134,9.706848 );
     
     var pointList = [pointA, pointB, pointC,pointD,pointE, pointF, pointG,pointA1, pointB1, pointC1,pointD1,pointE1, pointF1, pointG1,pointA2, pointB2, pointC2,pointD2,pointE2, pointF2, pointG2,pointA3, pointB3];

     var firstpolyline = new L.Polyline(pointList, {
        color: 'red',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 10

     });
     firstpolyline.addTo(rotkäppchen).bindPopup("Rotkäppchen ");

     
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
        streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});
var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };

    var overlays = {
        "Dornröschen": dornröschen,
        "Frau Holle": holle,
        "Deutsche Märchenstraße": deutsche,
        "Rotkäppchen": rotkäppchen,
        "Hänsel & Gretel": hänselgretel,
        "Sehenswürdigkeiten": sehenswürdigkeiten
      

    };

    L.control.layers(baseLayers, overlays).addTo(mymap);

    

	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Koordinaten: " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);

     


      /* //Timeline JS: 
        
            data = {"type": "FeatureCollection",
                        "features": [
                            {
                                "type": "Feature",
                                "properties": {
                                    "title": "1",
                                    "content": "This is where some people moved to."
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        50,
                                        10.7282,
                                        1
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "title": "2",
                                    "content": "This is where some people grooved to."
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        54.3838,
                                        10.9148,
                                        1
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "title": "3",
                                    "content": "This is where they went to have fun."
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        54.899431,
                                        12.379189,
                                        1
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "title": "4",
                                    "content": "This where they went when the revolution had begun."
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        51.3489484,
                                        12.4603719,
                                        1
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "title": "5",
                                    "content": "This where they went when the revolution had begun."
                                    
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        51.2272,
                                        12.4473,
                                        1
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "title": "1999",
                                    "content": "So they all came here...and disappeared without a trace!"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        50.118092,
                                        10.509865,
                                        1
                                    ]
                                }
                            },
            
                        ]
                    }

            
            getDataAddMarkers = function( {label, value, map, exclamation} ) {
                map.eachLayer(function (layer) {
                        if (layer instanceof L.Marker) {
                            map.removeLayer(layer);
                        }
                });

                filteredData = data.features.filter(function (i, n) {
                    return i.properties.title===label;
                    });

                var markerArray = []
                L.geoJson(filteredData, {
                    onEachFeature: function onEachFeature(feature, layer) {
                        content = `${feature.properties.content} <br> (${Math.round(value/6 * 100)}% done with story)`
                        var popup = L.popup().setContent(content);
                        layer.bindPopup(popup);
                        markerArray.push(layer);
                    }
                }).addTo(map);
                
                var markerGroup = L.featureGroup(markerArray);
                map.fitBounds(markerGroup.getBounds()).setZoom(7);
                //markerGroup.addTo(map);
            };

            L.control.timelineSlider({
                timelineItems: ["1", "2", "3", "4", "5", "1999"], 
                changeMap: getDataAddMarkers })
            .addTo(mymap);      */
            
