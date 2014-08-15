module.exports = run;

function run(app, options){
    options || (options = {});//TODO create optional loading of components

    app.component(require('./src/core/d-leaflet-map/index.js'));
//    app.component(require('./src/core/d-leaflet-marker/index.js'));
    app.component(require('./src/example/index.js'));

    app.loadStyles(__dirname + '/node_modules/leaflet/dist/leaflet.css');
}