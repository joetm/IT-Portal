/*IT Portal App*/
$(document).ready(function(){

    $('#usermenu .view-ui').popup({
        inline   : true,
        hoverable: true,
        position : 'bottom right',
        delay: {
            show: 50,
            hide: 500
        }
    });

    var animation = 'horizontal flip';
    $('.ui .cards .card').each(function(index, value){
        var $this = $(this);
        setTimeout(function() {
            $this.transition(animation);
        }, index * 20);
    });



    //Backbone Router
    var AppRouter = Backbone.Router.extend({
        routes: {
            "about(/)": "about" // #about
        },
        about: function() {
            //alert('about page');
        },
        /*,
        search: function(query, page) {
            //...
        }
        */
    });//Backbone.Router

    // Initiate the router
    var app_router = new AppRouter;

    //start the Backbone router
    Backbone.history.start(); //{pushState: true}


});



