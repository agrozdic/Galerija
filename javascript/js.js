$(document).ready(function(){
	var
		images = "#gallery > img"
		, circles = "#circles > span"// image selector
		, interval = 3000           // milliseconds between transitions
        , index = 0                 // starting index
        , count = $(images).length
		, countC = $(circles).length// image count
			// the transition loop
        , handle = setInterval(function() {
            // fade out the current image
            $(images + ":eq(" + index + ")").fadeOut(1000);
			$(circles + ":eq(" + index + ")").css("background-color", "white");
            // get the next index, or cycle back to 0
            if (++index === count) index = 0;
            // fade in the next image
            $(images + ":eq(" + index + ")").fadeIn(1000);
			$(circles + ":eq(" + index + ")").css("background-color", "grey");
		}
          , interval
        )
        , stop = function(){
			clearInterval(handle);
        };
      });