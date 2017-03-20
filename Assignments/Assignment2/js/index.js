window.onload = function() {
      var video = document.getElementById('video');
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');

      var tracker = new tracking.ObjectTracker('face');
      tracker.setInitialScale(4);
      tracker.setStepSize(2);
      tracker.setEdgesDensity(0.1);

      tracking.track('#video', tracker, { camera: true });

      tracker.on('track', function(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function(rect) {
          context.strokeStyle = '#a64ceb';
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = '11px Helvetica';
          context.fillStyle = "#fff";
          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
          
//           ------- START - here is your playground -------
//           WE GET:
//           x position is: rect.x
//           y position is: rect.y
//           face box width: rect.width          
//           face box height: rect.height
          
//           wanna know more read https://trackingjs.com/docs.html

           // lets pass the data to our object somehow
           $('.object').css({
             'margin-left' : rect.x, // move the object form left
             'margin-top' : rect.y, // move the object from top
             'height': rect.height, // set its height
             'width' : rect.width // set its width
            })
          
          console.log(rect.x, rect.y) // write some info to the concole
            
          // do something if we get some data
          if(rect.x && rect.y){
                $('.object').css({
                  'background' : 'green'
                })
              $('.message').text('Got ya')
          }
          // do something if we do not get the data
          else{
                $('.object').css({
                  'background' : 'red'
                })
                 $('.message').text('Come BACK!')
           }
          //  --------- END OF YOUR PLAYGROUND-----------
        });
      });

      var gui = new dat.GUI();
      gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
      gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
      gui.add(tracker, 'stepSize', 1, 5).step(0.1);
    };