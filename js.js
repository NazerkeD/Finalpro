// $(document).ready(function(){

//   let burger = $('.fas');
//   let nav = $('.navbar');

//   burger.on('click', function() {
//     nav.toggleClass('.navtoggle');
//   });


//   });

 
  var app = new Vue({
    el: '#app',
    data:{
      isHidden:false
    }

  });

  var apps = new Vue({
    el: '#apps',
    data:{
      isHidden: false
    }
  });
 