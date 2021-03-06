function PercenterJS(objectVar) {

  var progressBarBackground = objectVar.progressBarBackground;
  var progressBarTransition = objectVar.progressBarTransition;

  var progressContainer = document.createElement('div');
  var progressBar = document.createElement('div');

  progressContainer.style.cssText = `
    width: 100%;
    height: 4px;
    background-color: #F5F5F5;
    position: fixed;
    top: 0;
    left: 0;
  `;

  progressBar.style.cssText = `
    width: 0;
    height: 100%;
    background-color: ${progressBarBackground};
    position: absolute;
    top: 0;
    left: 0;
    transition: ${progressBarTransition};
  `;

  progressContainer.appendChild(progressBar);
  document.body.appendChild(progressContainer);

  var bodyElement = document.body,
      htmlElement = document.documentElement;

  var heightOfDocument = Math.max(bodyElement.clientHeight, bodyElement.scrollHeight, bodyElement.offsetHeight, htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight);
  var heightOfWindow = window.innerHeight || bodyElement.clientHeight || htmlElement.clientHeight;

  window.addEventListener('scroll', function() {

    var scrollTopValue = bodyElement.scrollTop || htmlElement.scrollTop;
    
    progressBar.style.width = scrollTopValue / (heightOfDocument - heightOfWindow) * 100 + '%';

  });

}
