function Component() {}

module.exports = Component;

Component.prototype.view = __dirname;
Component.prototype.name = 'd-leaflet-example';
Component.prototype.init = function(){
    this.model.push('markers', {
        latlng: [51.5, -0.09],
        options: {
            icon:{
                type:'divIcon',
                options: {
                    className: 'my-div-name'
                }
            }
        }
    });
}