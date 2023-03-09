    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(37.554669851798046, 127.0945711919892),
        level: 2
    }
    var map = new kakao.maps.Map(container, options);
    var positions = [
        {
            title:'두부천국',
            latlng: new kakao.maps.LatLng(37.554669851798046, 127.0945711919892),
            url:'https://place.map.kakao.com/16559163'
        },
        {
            title:'우리콩밭순두부',
            latlng: new kakao.maps.LatLng(37.55442476623123, 127.09458898976345),
            url:'https://place.map.kakao.com/1590516901'
        },
        {
            title:'가마솥손두부',
            latlng: new kakao.maps.LatLng(37.55465195142486, 127.09442178217547),
            url:'https://place.map.kakao.com/884167919'
        }
    ];

    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    positions.forEach(function(pos){
        var imageSize = new kakao.maps.Size(22,33);
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        var marker = new kakao.maps.Marker({
            map:map,
            position: pos.latlng,
            title:pos.title,
            url:pos.url,
            image:markerImage,
        });
        kakao.maps.event.addListener(marker,'click', function(mouseEvent){
            window.open(pos.url);
        });
    });

    // var markerPosition = new kakao.maps.LatLng(37.554669851798046, 127.0945711919892);
    // var marker = new kakao.maps.Marker({
    //     position: markerPosition
    // });
    // marker.setMap(map);
