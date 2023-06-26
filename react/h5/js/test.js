
//原型及原型链，对象方法，函数
function Person(name, age) {   //构建函数
  this.name = name;
  this.age = age;
}

var person = new Person('Tom', 20); //建立函数对象

Person.prototype.sayHello = function() {   //建立对象的方法
  console.log('Hello, my name is ' + this.name + ', and I am ' + this.age + ' years old.');
  var one = document.getElementById("one");
one.innerHTML="'Hello, my name is ' + this.name + ', and I am ' + this.age + ' years old.'";
};

Person.prototype.job = 'programmer'; //添加原型对象
Person.prototype.date = 1998;

person.sayHello();   //使用对象方法调用 ----- 对象及函数

console.log(person.__proto__); //查看person原型链
console.log(person.__proto__.__proto__);
console.log(person.job); //查看对象属性的值

  
  var one = document.getElementById("one");
	var xpos = parseInt( document.body.clientWidth) ;
	console.log(xpos);
	var xposd = parseInt( one.clientWidth) ;
	console.log(xposd);
	window.screen.width
	var xposw = parseInt( window.screen.width) ;
	console.log(xposw);
	
	//作用域和闭包函数
	var globalVar = "global";  //全局作用域
	
	function outerFunction(){   //函数作用域
		var outVar = "outer";
		
		function innerFunction(){    //函数作用域
			var innerVar = "inner";
			console.log( innerVar+' ' +outVar+ ' ' +globalVar);  //跨作用域闭包
		}
		return innerFunction;  //闭环
	}
	
	//outerFunction()
	var closure = outerFunction();  //返回闭包函数
	closure();  //执行
	
	
	//高阶函数和函数式编程
	function isOdd(num){     //过滤数组函数
		return num %2 !==0;
	}
	console.log(isOdd(1));
	
	var arr = [1,2,3,4,5 ];
	
	function filter(arr, fn){   //建立高阶函数，用函数参数过滤数组参数
		var result = [ ]; //过滤后新数组
		
		for(var i =0; i<arr.length; i++ ){
			if (fn(arr[i])){   //用过滤数组函数处理数组，true就push
				result.push(arr[i]);
			}
		}
		 console.log(result); 
		return result;  //返回新数组

	}
	var filterArr = filter(arr, isOdd);
	console.log(filterArr);
function filterArrer(){
	console.log(filterArr);
}
	filterArrer();