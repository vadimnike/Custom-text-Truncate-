function countLines() {
  var el = document.getElementById('content');
  var divHeight = el.offsetHeight
  var lineHeight = parseInt(el.style.lineHeight);
  var clientHeight = parseInt(el.clientHeight);

  var clientWidth = el.getBoundingClientRect().width;
  console.warn('divHeight',divHeight);
  //console.warn('clientHeight', clientHeight);
  var lines = divHeight / lineHeight;
  var maxHeight = (5/lines)*clientHeight;
  console.warn("Lines: " + lines);
  console.warn('maxHeight', maxHeight);
  // String.prototype.lines = function() { return this.split(/\r*\n/); }
  // String.prototype.lineCount = function() { return this.lines().length; }
  el.style.maxHeight = maxHeight + 'px';
  el.style.overflow='hidden';
  let text = el.innerText;
  var lastIndex = text.lastIndexOf(' ');
  console.warn('lastIndex', lastIndex);

  // while(clientHeight >= maxHeight ){
  //   text = el.innerHTML.trim();
  //   if(text.split(' ').length <= 1) {
  //     break;
  //   }
  //   el.innerHTML = text.replace(/\W*\s(\S)*$/, '...');
  // }

  var wordArray = el.innerHTML.split(" ");
  while (maxHeight < clientHeight ) {
    wordArray.pop();
    el.innerHTML = wordArray.join(" ") +  "...";
  }


  console.warn('el.trim()', el.innerHTML.trim());
  console.warn(text.substring(0, lastIndex))
  console.warn('lineCount', text.split(/\r*\n{5}/))
}




window.addEventListener('load', countLines)