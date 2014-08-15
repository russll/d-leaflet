function Component() {}

module.exports = Component;

Component.prototype.view = __dirname;

Component.prototype.init = function () {
    this.model.setNull('id', 'd-leaflet-map');
    this.model.setNull('latlng', [51.505, -0.09]);
    this.model.setNull('zoom', '13');
    this.model.setNull('width', '400px');
    this.model.setNull('height', '300px');
    this.model.setNull('markers', []);
}

Component.prototype.create = function () {
    require('leaflet');
    this.map = L.map(this.model.get('id')).setView(this.model.get('latlng'), this.model.get('zoom'));

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors & d-leaflet pre-alpha'
    }).addTo(this.map);
    this.update();
}

Component.prototype.update = function() {
//    L.Icon.Default.imagePath =
    for (var i = 0; i < this.model.get('markers').length; i++) {
        var marker = this.model.get('markers.' + i);
        var latlng = this.model.get('markers.' + i + '.latlng');

        var myIcon = L.divIcon({className: 'leaflet-div-icon'});

        L.marker(latlng, {icon: myIcon}).addTo(this.map)
            .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
            .openPopup();
    }
}