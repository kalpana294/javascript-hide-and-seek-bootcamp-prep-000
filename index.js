function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n){
  var list = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(var i=0;i<list.length;i++){
    list[i].innerHTML = parseInt(list[i].innerHTML)+n;
  }
}

function deepestChild() {
  var deepList=document.getElementById("grand-node").querySelectorAll("div");
  var child;
  for(let i=0;i<deepList.length-1;i++) {
    child=deepList[i].querySelector("div");
  }
return child;
}