/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */
const onPopup = document.getElementById('popupInfo');

closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

// click to popup
map.on('singleclick', function (evt) {
    const coordinate = evt.coordinate;
    const hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate));
    if (onPopup.checked) {
        content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
        overlay.setPosition(coordinate);
    }
});