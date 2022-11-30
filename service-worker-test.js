// Listen for request events
self.addEventListener('fetch', function (event) {

    // Get the request
    let request = event.request;
  
    // Bug fix
    // https://stackoverflow.com/a/49719964
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

    let contentType = request.destination;
    console.log(request.url);


    // HTML file
    // Network-first
    if (request.headers.get('Accept').includes('text/html') && request.url.includes('iframe1.htm')) {
      event.respondWith(
          fetch('iframe2.htm').then(function(response){
            return response;
          })
        );
    }

    // CSS & JavaScript
    // Offline-first
    /*if (request.headers.get('Accept').includes('text/css') || request.headers.get('Accept').includes('text/javascript')) {
      // Handle CSS and JavaScript files...
      return;
    }
    */

    // Image
    // Offline-first
    if (request.headers.get('Accept').includes('image') && request.url.includes('image1.png')) {
      event.respondWith(
        fetch('image2.png').then(function(response){
          return response;
        })
      );
    }

    // Video
    // Offline-first
    if (contentType.toLowerCase() === 'video'){
      let dest = request.url;
    }

    if (request.headers.get('Accept').includes('video') && request.url.includes('big-buck-bunny_trailer.webm')) {
      event.respondWith(
        fetch('file_example_WEBM_480_900KB.webm').then(function(response){
          return response;
        })
      );
    }

    return;
  });