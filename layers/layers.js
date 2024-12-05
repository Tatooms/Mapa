var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TradaRicardoLorenzoGndara_1 = new ol.format.GeoJSON();
var features_TradaRicardoLorenzoGndara_1 = format_TradaRicardoLorenzoGndara_1.readFeatures(json_TradaRicardoLorenzoGndara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TradaRicardoLorenzoGndara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TradaRicardoLorenzoGndara_1.addFeatures(features_TradaRicardoLorenzoGndara_1);
var lyr_TradaRicardoLorenzoGndara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TradaRicardoLorenzoGndara_1, 
                style: style_TradaRicardoLorenzoGndara_1,
                popuplayertitle: "Traída Ricardo Lorenzo Gándara",
                interactive: true,
                title: '<img src="styles/legend/TradaRicardoLorenzoGndara_1.png" /> Traída Ricardo Lorenzo Gándara'
            });
var format_TradaJosngelGmezLuna_2 = new ol.format.GeoJSON();
var features_TradaJosngelGmezLuna_2 = format_TradaJosngelGmezLuna_2.readFeatures(json_TradaJosngelGmezLuna_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TradaJosngelGmezLuna_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TradaJosngelGmezLuna_2.addFeatures(features_TradaJosngelGmezLuna_2);
var lyr_TradaJosngelGmezLuna_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TradaJosngelGmezLuna_2, 
                style: style_TradaJosngelGmezLuna_2,
                popuplayertitle: "Traída José Ángel Gómez Luna",
                interactive: true,
                title: '<img src="styles/legend/TradaJosngelGmezLuna_2.png" /> Traída José Ángel Gómez Luna'
            });
var format_TradaIsmaelLorenzoGndara_3 = new ol.format.GeoJSON();
var features_TradaIsmaelLorenzoGndara_3 = format_TradaIsmaelLorenzoGndara_3.readFeatures(json_TradaIsmaelLorenzoGndara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TradaIsmaelLorenzoGndara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TradaIsmaelLorenzoGndara_3.addFeatures(features_TradaIsmaelLorenzoGndara_3);
var lyr_TradaIsmaelLorenzoGndara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TradaIsmaelLorenzoGndara_3, 
                style: style_TradaIsmaelLorenzoGndara_3,
                popuplayertitle: "Traída Ismael Lorenzo Gándara",
                interactive: true,
                title: '<img src="styles/legend/TradaIsmaelLorenzoGndara_3.png" /> Traída Ismael Lorenzo Gándara'
            });
var format_Tubocamisa160mm_4 = new ol.format.GeoJSON();
var features_Tubocamisa160mm_4 = format_Tubocamisa160mm_4.readFeatures(json_Tubocamisa160mm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tubocamisa160mm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tubocamisa160mm_4.addFeatures(features_Tubocamisa160mm_4);
var lyr_Tubocamisa160mm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tubocamisa160mm_4, 
                style: style_Tubocamisa160mm_4,
                popuplayertitle: "Tubo camisa 160 mm",
                interactive: true,
                title: '<img src="styles/legend/Tubocamisa160mm_4.png" /> Tubo camisa 160 mm'
            });
var format_Arquetasrexistro_5 = new ol.format.GeoJSON();
var features_Arquetasrexistro_5 = format_Arquetasrexistro_5.readFeatures(json_Arquetasrexistro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arquetasrexistro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arquetasrexistro_5.addFeatures(features_Arquetasrexistro_5);
var lyr_Arquetasrexistro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arquetasrexistro_5, 
                style: style_Arquetasrexistro_5,
                popuplayertitle: "Arquetas rexistro",
                interactive: true,
                title: '<img src="styles/legend/Arquetasrexistro_5.png" /> Arquetas rexistro'
            });
var format_Arquetagranderexistro_6 = new ol.format.GeoJSON();
var features_Arquetagranderexistro_6 = format_Arquetagranderexistro_6.readFeatures(json_Arquetagranderexistro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arquetagranderexistro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arquetagranderexistro_6.addFeatures(features_Arquetagranderexistro_6);
var lyr_Arquetagranderexistro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arquetagranderexistro_6, 
                style: style_Arquetagranderexistro_6,
                popuplayertitle: "Arqueta grande rexistro",
                interactive: true,
                title: '<img src="styles/legend/Arquetagranderexistro_6.png" /> Arqueta grande rexistro'
            });
var format_Mangueiraxeral_7 = new ol.format.GeoJSON();
var features_Mangueiraxeral_7 = format_Mangueiraxeral_7.readFeatures(json_Mangueiraxeral_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mangueiraxeral_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangueiraxeral_7.addFeatures(features_Mangueiraxeral_7);
var lyr_Mangueiraxeral_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangueiraxeral_7, 
                style: style_Mangueiraxeral_7,
                popuplayertitle: "Mangueira xeral",
                interactive: true,
                title: '<img src="styles/legend/Mangueiraxeral_7.png" /> Mangueira xeral'
            });
var format_Navedepsitos_8 = new ol.format.GeoJSON();
var features_Navedepsitos_8 = format_Navedepsitos_8.readFeatures(json_Navedepsitos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Navedepsitos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Navedepsitos_8.addFeatures(features_Navedepsitos_8);
var lyr_Navedepsitos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Navedepsitos_8, 
                style: style_Navedepsitos_8,
                popuplayertitle: "Nave depósitos",
                interactive: true,
                title: '<img src="styles/legend/Navedepsitos_8.png" /> Nave depósitos'
            });
var format_Manantial_9 = new ol.format.GeoJSON();
var features_Manantial_9 = format_Manantial_9.readFeatures(json_Manantial_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manantial_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manantial_9.addFeatures(features_Manantial_9);
var lyr_Manantial_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manantial_9, 
                style: style_Manantial_9,
                popuplayertitle: "Manantial",
                interactive: true,
                title: '<img src="styles/legend/Manantial_9.png" /> Manantial'
            });
var group_Captacin = new ol.layer.Group({
                                layers: [lyr_Mangueiraxeral_7,lyr_Navedepsitos_8,lyr_Manantial_9,],
                                fold: "open",
                                title: "Captación"});
var group_Arquetas = new ol.layer.Group({
                                layers: [lyr_Arquetasrexistro_5,lyr_Arquetagranderexistro_6,],
                                fold: "open",
                                title: "Arquetas"});
var group_Tradas = new ol.layer.Group({
                                layers: [lyr_TradaRicardoLorenzoGndara_1,lyr_TradaJosngelGmezLuna_2,lyr_TradaIsmaelLorenzoGndara_3,],
                                fold: "open",
                                title: "Traídas"});

lyr_GoogleSatellite_0.setVisible(true);lyr_TradaRicardoLorenzoGndara_1.setVisible(true);lyr_TradaJosngelGmezLuna_2.setVisible(true);lyr_TradaIsmaelLorenzoGndara_3.setVisible(true);lyr_Tubocamisa160mm_4.setVisible(true);lyr_Arquetasrexistro_5.setVisible(true);lyr_Arquetagranderexistro_6.setVisible(true);lyr_Mangueiraxeral_7.setVisible(true);lyr_Navedepsitos_8.setVisible(true);lyr_Manantial_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Tradas,lyr_Tubocamisa160mm_4,group_Arquetas,group_Captacin];
lyr_TradaRicardoLorenzoGndara_1.set('fieldAliases', {'Lonxitude': 'Lonxitude', 'Titular': 'Titular', });
lyr_TradaJosngelGmezLuna_2.set('fieldAliases', {'Lonxitude': 'Lonxitude', 'Titular': 'Titular', });
lyr_TradaIsmaelLorenzoGndara_3.set('fieldAliases', {'Lonxitude': 'Lonxitude', 'Titular': 'Titular', });
lyr_Tubocamisa160mm_4.set('fieldAliases', {'Nome': 'Nome', 'Lonxitude': 'Lonxitude', });
lyr_Arquetasrexistro_5.set('fieldAliases', {'Nome': 'Nome', 'X': 'X', 'Y': 'Y', });
lyr_Arquetagranderexistro_6.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Nome': 'Nome', });
lyr_Mangueiraxeral_7.set('fieldAliases', {'Nome': 'Nome', 'Lonxitude': 'Lonxitude', });
lyr_Navedepsitos_8.set('fieldAliases', {'Nome': 'Nome', 'X': 'X', 'Y': 'Y', });
lyr_Manantial_9.set('fieldAliases', {'Nome': 'Nome', 'X': 'X', 'Y': 'Y', });
lyr_TradaRicardoLorenzoGndara_1.set('fieldImages', {'Lonxitude': 'TextEdit', 'Titular': 'TextEdit', });
lyr_TradaJosngelGmezLuna_2.set('fieldImages', {'Lonxitude': 'TextEdit', 'Titular': '', });
lyr_TradaIsmaelLorenzoGndara_3.set('fieldImages', {'Lonxitude': 'TextEdit', 'Titular': '', });
lyr_Tubocamisa160mm_4.set('fieldImages', {'Nome': 'TextEdit', 'Lonxitude': 'Range', });
lyr_Arquetasrexistro_5.set('fieldImages', {'Nome': 'TextEdit', 'X': '', 'Y': '', });
lyr_Arquetagranderexistro_6.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Mangueiraxeral_7.set('fieldImages', {'Nome': 'TextEdit', 'Lonxitude': '', });
lyr_Navedepsitos_8.set('fieldImages', {'Nome': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Manantial_9.set('fieldImages', {'Nome': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_TradaRicardoLorenzoGndara_1.set('fieldLabels', {'Lonxitude': 'inline label - always visible', 'Titular': 'inline label - always visible', });
lyr_TradaJosngelGmezLuna_2.set('fieldLabels', {'Lonxitude': 'inline label - always visible', 'Titular': 'inline label - always visible', });
lyr_TradaIsmaelLorenzoGndara_3.set('fieldLabels', {'Lonxitude': 'inline label - always visible', 'Titular': 'inline label - always visible', });
lyr_Tubocamisa160mm_4.set('fieldLabels', {'Nome': 'inline label - always visible', 'Lonxitude': 'inline label - always visible', });
lyr_Arquetasrexistro_5.set('fieldLabels', {'Nome': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_Arquetagranderexistro_6.set('fieldLabels', {'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Nome': 'inline label - always visible', });
lyr_Mangueiraxeral_7.set('fieldLabels', {'Nome': 'inline label - always visible', 'Lonxitude': 'inline label - always visible', });
lyr_Navedepsitos_8.set('fieldLabels', {'Nome': 'inline label - visible with data', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_Manantial_9.set('fieldLabels', {'Nome': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_Manantial_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});