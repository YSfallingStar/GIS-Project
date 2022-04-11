// 거리, 속력, 시간 표시
// math.ceil() -> 올림 정수 반환 / Math.floor() -> 내림 정수 반환 / Math.round() -> 반올림 정수 반환
let formatLength = function(line) {
    let length = ol.sphere.getLength(line);
    var velocity = document.getElementById("velocityValue");
    var value_velocity = Number(velocity.value);
    var Distance = Math.round(length / 1000 * 100) / 100;
    var Time = Distance * 3600 / (value_velocity * 1);
    var H = Math.floor(Time / 3600);
    var M = Math.floor((Time - parseInt(Time / 3600) * 3600) / 60);
    var S = Math.round(Time - parseInt((Time - parseInt(Time / 3600) * 3600) / 60) * 60 - parseInt(Time / 3600) * 3600, 2);
    let output;
    if (length > 100) output = Distance + ' km / ' + value_velocity + ' km/h / ' + H + ' h ' + M + ' m ' + S + ' s ';
    else output = Math.round(length * 100) / 100 + ' m' + value_velocity + ' m/s / ' + Math.round(length / 1000 * 100 / 100) / value_velocity + ' s';
    map.render();
    return output;
};
let formatArea = function(polygon) {
    let area = ol.sphere.getArea(polygon);
    let output;
    if (area > 10000) output = Math.round(area / 1000000 * 100) / 100 + ' km\xB2';
    else output = Math.round(area * 100) / 100 + ' m\xB2';
    return output;
};
function styleFunction(feature, segments, drawType, tip) {
    let styles = [
        style
    ];
    let geometry = feature.getGeometry();
    let type = geometry.getType();
    let point, label1, line;
    if (!drawType || drawType === type) {
        if (type === 'Polygon') {
            point = geometry.getInteriorPoint();
            label1 = formatArea(geometry);
            line = new ol.geom.LineString(geometry.getCoordinates()[0]);
        } else if (type === 'LineString') {
            point = new ol.geom.Point(geometry.getLastCoordinate());
            label1 = formatLength(geometry);
            line = geometry;
        }
    }
    if (segments && line) {
        let count = 0;
        line.forEachSegment(function(a, b) {
            let segment = new ol.geom.LineString([
                a,
                b
            ]);
            let label = formatLength(segment);
            if (segmentStyles.length - 1 < count) segmentStyles.push(segmentStyle.clone());
            let segmentPoint = new ol.geom.Point(segment.getCoordinateAt(0.5));
            segmentStyles[count].setGeometry(segmentPoint);
            segmentStyles[count].getText().setText(label);
            styles.push(segmentStyles[count]);
            count++;
        });
    }
    if (label1) {
        labelStyle.setGeometry(point);
        labelStyle.getText().setText(label1);
        styles.push(labelStyle);
    }
    if (tip && type === 'Point' && !modify.getOverlay().getSource().getFeatures().length) {
        tipPoint = geometry;
        tipStyle.getText().setText(tip);
        styles.push(tipStyle);
    }
    return styles;
}

//# sourceMappingURL=index.914b02da.js.map
