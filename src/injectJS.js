function loadScript(url, callback) {
  if (window.__loadedHighlight) {
    if (callback) callback();
  } else {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = function () {
      window.__loadedHighlight = true;
      callback();
    };

    // Fire the loading
    head.appendChild(script);
  }
}

export default (callback) => {
  loadScript('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js', callback);
};
