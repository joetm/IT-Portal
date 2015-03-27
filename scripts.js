require.config({
    paths: {
        "jquery": 'dist/jquery.min'
    }
});

//require(["jquery"], function ($) {
//    console.log('jquery v.' + $.fn.jquery);
//});

requirejs(['build/js/scripts.min']);

require(['dist/knockout-3.3.0'], function(ko) {

    ko.components.register('header', { require: 'components/header' });
    //ko.applyBindings(headerModel);

    var baseicon_path = 'img/metro_ui_icon_set_by_dakirby309';
    services = [
        { name: 'Firefox', icon: baseicon_path + '/Web-Browsers/Firefox%20alt.png'},
        { name: 'Google Chrome', icon: baseicon_path + '/Web-Browsers/Google%20Chrome.png'},
        { name: 'Opera', icon: baseicon_path + '/Web-Browsers/Opera.png'},
        { name: 'After Effects', icon: baseicon_path + '/Applications/Adobe%20After%20Effects.png'},
        { name: 'Illustrator', icon: baseicon_path + '/Applications/Adobe%20Illustrator.png'},
        { name: 'InDesign', icon: baseicon_path + '/Applications/Adobe%20InDesign.png'},
        { name: 'Photoshop', icon: baseicon_path + '/Applications/Adobe%20Photoshop.png'},
        { name: 'Premiere', icon: baseicon_path + '/Applications/Adobe%20Premiere%20Pro.png'},
        { name: 'Camstudio', icon: baseicon_path + '/Applications/Camstudio.png'},
        { name: 'Nero', icon: baseicon_path + '/Applications/Nero.png'},
        { name: 'Visual Studio 2012', icon: baseicon_path + '/Applications/Visual%20Studio%202012.png'},
        { name: 'VLC Media Player', icon: baseicon_path + '/Applications/VLC%20Media%20Player.png'},
        { name: '17" monitor', icon: baseicon_path + '/Devices-Drives/Computer%20alt%202.png'},
        { name: '21" monitor', icon: baseicon_path + '/Devices-Drives/Computer%20alt%202.png'},
        { name: '24" monitor', icon: baseicon_path + '/Devices-Drives/Computer%20alt%202.png'},
        { name: 'Projector', icon: baseicon_path + '/System-Icons/Connect%20Network%20Projector.png' }
    ];
    ko.applyBindings(services);

});