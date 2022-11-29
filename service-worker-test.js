// Listen for request events
self.addEventListener('fetch', function (event) {

    // Get the request
    let request = event.request;
  
    // Bug fix
    // https://stackoverflow.com/a/49719964
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
  
    // HTML files
    // Network-first
    if (request.headers.get('Accept').includes('text/html')) {
        event.respondWith(
            fetch('iframe2.htm').then(function(response){
              return new Response('<iframe src="iframe2.htm" height="500" width="1000" title="The iframe fetched"></iframe>',
                  {headers:{'Content-Type': 'text/html'}});
            })
          );
    }

    // CSS & JavaScript
    // Offline-first
    /*if (request.headers.get('Accept').includes('text/css') || request.headers.get('Accept').includes('text/javascript')) {
      // Handle CSS and JavaScript files...
      return;
    }

    // Images
    // Offline-first
    if (request.headers.get('Accept').includes('image')) {
      // Handle images...
    }
*/
    return;
  });