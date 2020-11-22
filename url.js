
function copy(val) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = val;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("링크 복사완료! 친구들과 공유해봐요!");
 }
