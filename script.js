// Mobile nav toggle
(function(){
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if(toggle){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }
})();

// FAQ accordion
(function(){
  var items = document.querySelectorAll('.faq-item');
  items.forEach(function(item){
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if(!q || !a) return;
    q.addEventListener('click', function(){
      var isOpen = item.classList.contains('open');
      // close siblings within the same list
      var group = item.parentElement.querySelectorAll('.faq-item');
      group.forEach(function(other){
        other.classList.remove('open');
        var oa = other.querySelector('.faq-a');
        if(oa) oa.style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
})();
