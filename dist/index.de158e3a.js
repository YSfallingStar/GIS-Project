// TMS 불러오기
let imagery = new ol.layer.Tile({
    crossOrigin: 'anonymous',
    source: new ol.source.XYZ({
        url: 'https://d2map.com:7443/TARTMS/World_TMS/{z}/{x}/{-y}.png',
        maxZoom: 20,
        crossOrigin: 'anonymous'
    })
});
// 수정 스타일 (전역변수 설정이 안되서 못옮김)
let modifyStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 5,
        stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 0.7)'
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0.4)'
        })
    }),
    text: new ol.style.Text({
        text: 'Drag to modify',
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 1)'
        }),
        backgroundFill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0.7)'
        }),
        padding: [
            2,
            2,
            2,
            2
        ],
        textAlign: 'left',
        offsetX: 15
    })
});
// 수정 스타일 (end)
//////////////////////////////////////////
let source = new ol.source.Vector();
let modify = new ol.interaction.Modify({
    source: source,
    style: modifyStyle
});
let vector = new ol.layer.Vector({
    source: source,
    style: function(feature) {
        return styleFunction(feature, showSegments.checked);
    }
});
// popup 속성 생성
const container = document.getElementById('popup');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');
let overlay = new ol.Overlay({
    element: container,
    autoPan: {
        animation: {
            duration: 250
        }
    }
});
///////////////////////////////////////////
const extent = ol.proj.get('EPSG:3857').getExtent().slice();
extent[0] += extent[0];
extent[2] += extent[2];
let mapView = new ol.View({
    projection: 'EPSG:3857',
    center: new ol.geom.Point([
        126.97659953,
        37.579220423
    ]).transform('EPSG:4326', 'EPSG:3857').getCoordinates(),
    zoom: 5,
    extent
});
// map 불러오기
let map = new ol.Map({
    layers: [
        imagery,
        vector
    ],
    overlays: [
        overlay
    ],
    target: 'map',
    view: mapView,
    controls: []
});
// const moveButton = document.getElementById('epsg_move');
/////////////////
// function flyTo(location, done) {
//   const duration = 2000;
//   const zoom = mapView.getZoom();
//   let parts = 2;
//   let called = false;
//   function callback(complete) {
//     --parts;
//     if (called) {
//       return;
//     }
//     if (parts === 0 || !complete) {
//       called = true;
//       done(complete);
//     }
//   }
//   mapView.animate(
//     {
//       center: location,
//       duration: duration,
//     },
//     callback
//   );
//   view.animate(
//     {
//       zoom: zoom - 1,
//       duration: duration / 2,
//     },
//     {
//       zoom: zoom,
//       duration: duration / 2,
//     },
//     callback
//   );
// }
/////////////
function move() {
    var longitudeYY = document.getElementById("longitudeMove");
    var latitudeYY = document.getElementById("latitudeMove");
    var longitudeYY_Move = Number(longitudeYY.value);
    var latitudeYY_Move = Number(latitudeYY.value);
    map.getView().setCenter(new ol.geom.Point([
        longitudeYY_Move,
        latitudeYY_Move
    ]).transform('EPSG:4326', 'EPSG:3857').getCoordinates());
    map.getView().setZoom(parseInt(5));
}
// WMS 불러오기
let LAYER_WMS = new ol.layer.Tile({
    title: "LAYER_WMS",
    source: new ol.source.TileWMS({
        url: 'https://d2map.com/geoserver/D2Map/wms',
        params: {
            LAYERS: 'afa001,sudo',
            VERSION: '1.1.0',
            SRS: 'EPSG:4326',
            TRANSPARENT: true
        },
        serverType: 'geoserver',
        crossOrigin: 'Anonymous'
    }),
    opacity: 1,
    visible: false
});
map.addLayer(LAYER_WMS);
// OSM 불러오기
let LAYER_OSM = new ol.layer.Tile({
    title: "LAYER_OSM",
    source: new ol.source.OSM(),
    visible: false
});
map.addLayer(LAYER_OSM);
// title로 checkbox 분류
function toggleLayer(eve) {
    var lyrname = eve.target.value;
    var checkedStatus = eve.target.checked;
    var lyrList = map.getLayers();
    lyrList.forEach(function(element) {
        if (lyrname == element.get('title')) element.setVisible(checkedStatus);
    });
}
// 마우스에 따라 경도 위도 표시
var mousePosition = new ol.control.MousePosition({
    bar: true,
    text: true,
    className: 'mousePosition',
    projection: 'EPSG:4326',
    coordinateFormat: function(coordinate) {
        return ol.coordinate.format(coordinate, '{y} N, {x} E', 3);
    }
});
map.addControl(mousePosition);
// zoom에 따라 scale 값 확인
var scaleControl = new ol.control.ScaleLine({
    bar: true,
    text: true
});
map.addControl(scaleControl);
// spinner
map.on('loadstart', function() {
    map.getTargetElement().classList.add('spinner');
});
map.on('loadend', function() {
    map.getTargetElement().classList.remove('spinner');
});
// test
const queryInput = document.getElementById('epsg-query');
const searchButton = document.getElementById('epsg-search');
const resultSpan = document.getElementById('epsg-result');
function setProjection(code, name, proj4def, bbox) {
    if (code === null || name === null || proj4def === null || bbox === null) {
        resultSpan.innerHTML = 'Nothing usable found, using EPSG:3857...';
        map.setView(new ol.View({
            projection: 'EPSG:3857',
            center: [
                0,
                0
            ],
            zoom: 1
        }));
        return;
    }
    resultSpan.innerHTML = '(' + code + ') ' + name;
    const newProjCode = 'EPSG:' + code;
    // proj4.defs(newProjCode, proj4def);
    // ol.proj.proj4.register(proj4);
    const newProj = ol.proj.get(newProjCode);
    const fromLonLat = ol.proj.getTransform('EPSG:4326', newProj);
    let worldExtent = [
        bbox[1],
        bbox[2],
        bbox[3],
        bbox[0]
    ];
    newProj.setWorldExtent(worldExtent);
    // approximate calculation of projection extent,
    // checking if the world extent crosses the dateline
    if (bbox[1] > bbox[3]) worldExtent = [
        bbox[1],
        bbox[2],
        bbox[3] + 360,
        bbox[0]
    ];
    const extent1 = ol.extent.applyTransform(worldExtent, fromLonLat, undefined, 8);
    newProj.setExtent(extent1);
    const newView = new ol.View({
        projection: newProj
    });
    map.setView(newView);
    newView.fit(extent1);
}
function search(query) {
    resultSpan.innerHTML = 'Searching ...';
    fetch('https://epsg.io/?format=json&q=' + query).then(function(response) {
        return response.json();
    }).then(function(json) {
        const results = json['results'];
        if (results && results.length > 0) for(let i = 0, ii = results.length; i < ii; i++){
            const result = results[i];
            if (result) {
                const code = result['code'];
                const name = result['name'];
                const proj4def = result['proj4'];
                const bbox = result['bbox'];
                if (code && code.length > 0 && proj4def && proj4def.length > 0 && bbox && bbox.length == 4) {
                    setProjection(code, name, proj4def, bbox);
                    return;
                }
            }
        }
        setProjection(null, null, null, null);
    });
}
/**
 * Handle click event.
 * @param {Event} event The event.
 */ searchButton.onclick = function(event) {
    search(queryInput.value);
    event.preventDefault();
};

//# sourceMappingURL=index.de158e3a.js.map
