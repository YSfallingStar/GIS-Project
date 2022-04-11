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
    visible: true
});
map.addLayer(LAYER_WMS);

//# sourceMappingURL=index.afafedb8.js.map
