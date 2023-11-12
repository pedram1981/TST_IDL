const obj = {
    user: 'pedram',
    info: {
      university: 'Tabriz,university',
      event: {
        dateStart: '2003',
        dateEnd: '2008',
        grade: 'bachelor',
      },
    },
  };
  
  const handler = {
    get: function(target, prop) {
      return '404';
    },
  };
  
  const proxyObj = new Proxy(obj, handler);
  
  const testObj = {
    test1: proxyObj.user,
    test2: proxyObj.info.university,
    test3: proxyObj.info.event.dateStart,
    test4: proxyObj.info.event.dateEnd,
    test5: proxyObj.info.event.grade,
  };
  
  console.log(testObj.test1); 
  console.log(testObj.test2); 
  console.log(testObj.test3); 
  console.log(testObj.test4); 
  console.log(testObj.test5); 