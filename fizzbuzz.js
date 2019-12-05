for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz")
    } else if (i % 3 == 0) {
      console.log("Fizz")
    } else if (i % 5 == 0) {
      console.log("Buzz")
    }else{
      console.log(i)
    } 
  }



  // fizzbuzz
  $(document).on('scroll', function(){
                 
    var pixelsFromTop = $(document).scrollTop()
    
    if (pixelsFromTop > 50){
      $('header').addClass('hidden')
    } else {
      $('header').removeClass('hidden')
      }
    
    if (pixelsFromTop < 600){
      $('body').css('background-color', '#fff')
      
    } else if  (pixelsFromTop < 1400){
      $('body').css('background-color', '#a29c97')
    } else if (pixelsFromTop < 2200){
      $('body').css('background-color', '#d9dfe4')
    } else if (pixelsFromTop < 3000){
      $('body').css('background-color', '#fff0f0')
    } else {
       $('body').css('background-color', '#cdccc7')
    }
    
    
    var documentHeight = $(document).height()
    var windowHeight = $(window).height()
    
    var difference = documentHeight - windowHeight 
    
    var percentage = 100 * pixelsFromTop / difference
    
    $('.bar').css('width', percentage + '%')
    
    
          })

          function random(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
           }
  