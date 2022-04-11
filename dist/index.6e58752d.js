// style 지정 (시작)
let style = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.2)'
    }),
    stroke: new ol.style.Stroke({
        color: 'rgba(0, 0, 0, 0.5)',
        lineDash: [
            10,
            10
        ],
        width: 2
    }),
    image: new ol.style.Circle({
        radius: 5,
        stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 0.7)'
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        })
    })
});
let labelStyle = new ol.style.Style({
    text: new ol.style.Text({
        font: '14px Calibri,sans-serif',
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 1)'
        }),
        backgroundFill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0.7)'
        }),
        padding: [
            3,
            3,
            3,
            3
        ],
        textBaseline: 'bottom',
        offsetY: -15
    }),
    image: new ol.style.RegularShape({
        radius: 8,
        points: 3,
        angle: Math.PI,
        displacement: [
            0,
            10
        ],
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0.7)'
        })
    })
});
let tipStyle = new ol.style.Style({
    text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 1)'
        }),
        backgroundFill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0.4)'
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
let segmentStyle = new ol.style.Style({
    text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 1)'
        }),
        backgroundFill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0.4)'
        }),
        padding: [
            2,
            2,
            2,
            2
        ],
        textBaseline: 'bottom',
        offsetY: -12
    }),
    image: new ol.style.RegularShape({
        radius: 6,
        points: 3,
        angle: Math.PI,
        displacement: [
            0,
            8
        ],
        fill: new ol.style.Fill({
            color: 'rgba(0, 0, 0, 0.4)'
        })
    })
});
let segmentStyles = [
    segmentStyle
]; // style 지정 (끝)

//# sourceMappingURL=index.6e58752d.js.map
