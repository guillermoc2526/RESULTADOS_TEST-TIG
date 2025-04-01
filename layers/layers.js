ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([674557.319669, 5921465.797735, 675087.007122, 5921772.956719]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_coor_transformadaUTM_1 = new ol.format.GeoJSON();
var features_coor_transformadaUTM_1 = format_coor_transformadaUTM_1.readFeatures(json_coor_transformadaUTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_coor_transformadaUTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coor_transformadaUTM_1.addFeatures(features_coor_transformadaUTM_1);
cluster_coor_transformadaUTM_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_coor_transformadaUTM_1
});
var lyr_coor_transformadaUTM_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_coor_transformadaUTM_1, 
                style: style_coor_transformadaUTM_1,
                popuplayertitle: 'coor_transformadaUTM',
                interactive: true,
                title: '<img src="styles/legend/coor_transformadaUTM_1.png" /> coor_transformadaUTM'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_coor_transformadaUTM_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_coor_transformadaUTM_1];
lyr_coor_transformadaUTM_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_pregunt': 'T_pregunt', 'N_preg_inc': 'N_preg_inc', 'N_preg_cor': 'N_preg_cor', 'Por_corr': 'Por_corr', 'Por_incor': 'Por_incor', 'Porc_total': 'Porc_total', 'Preg_incor': 'Preg_incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_coor_transformadaUTM_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_pregunt': 'Range', 'N_preg_inc': 'Range', 'N_preg_cor': 'Range', 'Por_corr': 'Range', 'Por_incor': 'Range', 'Porc_total': 'Range', 'Preg_incor': 'Range', 'Nombre': 'TextEdit', 'Video': 'Range', });
lyr_coor_transformadaUTM_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_pregunt': 'inline label - always visible', 'N_preg_inc': 'inline label - always visible', 'N_preg_cor': 'inline label - always visible', 'Por_corr': 'inline label - visible with data', 'Por_incor': 'inline label - always visible', 'Porc_total': 'inline label - always visible', 'Preg_incor': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_coor_transformadaUTM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});