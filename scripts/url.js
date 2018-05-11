function readUrlParam(paramName, coerceInt, asList) {
  asList = asList || false;
  var vars = {};
  var q = document.URL.split('?')[1];

  if (q != undefined) {
    q = q.split('&');
    for (var i = 0; i < q.length; i++) {
      var param = q[i].split('=');
      var name = param[0];
      var value = param[1];
      vars[name] = vars[name] || [];
      vars[name].push(value);
    }
  }
  
  if (vars.hasOwnProperty(paramName)) {
    var paramList = vars[paramName];
    if (coerceInt) {
      for (var i = 0; i < paramList.length; i++) {
        paramList[i] = parseInt(paramList[i]);
      }
    }
    if (paramList.length == 1 && !asList) {
      return paramList[0];
    }
    return paramList;
  }
  return null;
}

// TODO cleanup url - expunge params