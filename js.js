javascript部分
1、document.write(mystr+"I love JavaScript");可用于直接向 HTML 输出流写内容。简单的说就是直接在网页中输出内容。
2、确认（confirm 消息对话框）
		返回值:
		当用户点击"确定"按钮时，返回true
		当用户点击"取消"按钮时，返回false
3、提问（prompt 消息对话框）
		返回值:
		1. 点击确定按钮，文本框中的内容将作为函数返回值
		2. 点击取消按钮，将返回null
4、打开新窗口（window.open）
		window.open(<URL>, <窗口名称>, <参数字符串>)
5、关闭窗口（window.close）
6、innerHTML 属性用于获取或替换 HTML 元素的内容。
7、Object.style.property=new style;改变 HTML 样式
8、Object.style.display = value;display(none,block)
9、object.className = classname


10、.toUpperCase(); //使用字符串对象方法，使对象的文本转换为大写(.toLowerCase())
11、getDay() 返回星期，返回的是0-6的数字，0 表示星期天。如果要返回相对应“星期”，通过数组完成，代码如下:
	<script type="text/javascript">
	  var mydate=new Date();//定义日期对象
	  var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	//定义数组对象,给每个数组项赋值
	  var mynum=mydate.getDay();//返回值存储在变量mynum中
	  document.write(mydate.getDay());//输出getDay()获取值
	  document.write("今天是："+ weekday[mynum]);//输出星期几
	</script>
12、stringObject.charAt(index) 方法可返回指定位置的字符。返回的字符是长度为 1 的字符串。//index为字符下标，字符从0开始
13、indexOf(a,b) 方法可返回某个指定的字符串值在字符串中首次出现的位置。a为要检索的字符串，b为从什么位置检索
14、stringObject.split(要分割的标记,分割为多少数组) 分割字符串
15、stringObject.substr(startPos,length)，两个变量均为整数。取从starPos到length的字符。substring() 方法用于提取字符串中介于两个指定下标之间的字符。
16、Match.PI;Match对象 提供对数据的数学计算。
17、Match.ceil(9.9);向上取整、floor()向下取整数、round()四舍五入、random()随机数
18、arrayObject.concat(array1,array2,...,arrayN)，连接数组
19、arrayObject.join(分隔符)为数组加入分隔符连接数组
20、arrayObject.reverse()方法用于颠倒数组中元素的顺序
21、slice() 方法可从已有的数组中返回选定的元素。
22、arrayObject.sort(方法函数)
	<script type="text/javascript">
	  function sortNum(a,b) {
	  return a - b;
	 //升序，如降序，把“a - b”该成“b - a”
	}
	 var myarr = new Array("80","16","50","6","100","1");
	  document.write(myarr + "<br>");
	  document.write(myarr.sort(sortNum));
	</script>
23、显示当前日期 格式：2014年5月9日 星期六
	  var xq=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	    var a = new Date();
	  document.write(a.getFullYear()+"年"+a.getMonth()+"月"+a.getDate()+"日&nbsp;"+xq[a.getDay()]+"<br>");
24、SetInterval(代码，交互时间)同期性得执行代码 clearInterval(a)
		<script type="text/javascript">
		  var attime;
		  function clock(){
		    var time=new Date();          
		    attime=time.getHours()+"时"+time.getMinutes()+"分"+time.getSeconds()+"秒" ;
		    document.getElementById("clock").value = attime;
		  }
		  var a=setInterval(clock,1000);
		</script>	  
25、setTimeout(代码,延迟时间);载入代码后延迟之后执行代码
26、window.history.length 浏览器列表中的url数量
				  .back()前一个url
				  .forward()后一个url
				  .go()指定的url
27、window.location.href  http://www.imooc.com:8080/list.php?courseid=8&chapterid=86#mediaid118
				   .hash			#mediaid118  返回#号后面开始的url锚
				   .host 			www.immooc.com:8080  返回当前url和端口号
				   .hostname		www.immooc.com  返回url主机名
				   .href			http://www.imooc.com:8080/list.php?courseid=8&chapterid=86#mediaid118
				   .pathname		/list.php  返回url路径部分
				   .port 			8080  返回端口号
				   .portocol		http://   返回协议
				   .search			?courseid=8&chapterid=86		返回从？开始的url查询
				   .assign()		加载新的文档
				   .reload()		重新加载当前文档
				   .replace()		用新的文档替换当前文档
28、navigator.appCodeName	浏览器代码名的字符串表示
			 .appName 		返回浏览器名称				   
			 .appVersion    返回浏览器平台和版本信息
			 .platform		返回运行浏览器的操作系统平台
			 .userAgent		返回由客户机发送服务器的user-agent头部的值
29、用navigastor.userAgent返回用户代理头的字符串表示（包括浏览器版本信息等的字符串）
		<script type="text/javascript">
		  function validB(){ 
		    var u_agent = navigator.userAgent; 
		    var B_name="不是想用的主流浏览器!"; 
		    if(u_agent.indexOf("Firefox")>-1){ 
		        B_name="Firefox"; 
		    }else if(u_agent.indexOf("Chrome")>-1){ 
		        B_name="Chrome"; 
		    }else if(u_agent.indexOf("MSIE")>-1&&u_agent.indexOf("Trident")>-1){ 
		        B_name="IE(8-10)";  
		    }
		        document.write("浏览器:"+B_name+"<br>");
		        document.write("u_agent:"+u_agent+"<br>"); 
		  } 
		</script>			 
30、window.screen.availHeight	窗口可以使用的屏幕高度，单位像素
				 .availWidth	窗口可以使用的屏幕宽度，单位像素
				 .colorDepth	用户浏览器表示的颜色位数，通常为32位
				 .pixelDepth	同上，IE不支持此属性
				 .height 		屏幕高
				 .width 		屏幕宽
31、document.getElementsByName("name")	与byid不同的是这里取出的是数组，因为name可以不唯一
32、document.getElementsByTagName('input') input为网页标签，所以返回的也是数组
33、elementNode.getAttribute()方法	elementNode：使用getElementById()、getElementsByTagName()等方法，获取到的元素节点。此方法可以取到已知元素节点的属性值
34、elementNode.setAttribute(name,value)  设置一个元素节点的属性，name为属性，value为属性值
35、节点属性
		在文档对象模型 (DOM) 中，每个节点都是一个对象。DOM 节点有三个重要的属性 ：
		1. nodeName : 节点的名称
		2. nodeValue ：节点的值
		3. nodeType ：节点的类型
		一、nodeName 属性: 节点的名称，是只读的。
		1. 元素节点的 nodeName 与标签名相同
		2. 属性节点的 nodeName 是属性的名称
		3. 文本节点的 nodeName 永远是 #text
		4. 文档节点的 nodeName 永远是 #document
		二、nodeValue 属性：节点的值
		1. 元素节点的 nodeValue 是 undefined 或 null
		2. 文本节点的 nodeValue 是文本自身
		3. 属性节点的 nodeValue 是属性的值
		三、nodeType 属性: 节点的类型，是只读的。以下常用的几种结点类型:
		元素类型    节点类型
		  元素          1
		  属性          2
		  文本          3
		  注释          8
		  文档          9		
36、elementNode.childNodes	访问选定元素节点下的所有子节点的列表，返回的值可以看作是一个数组，他具有length属性。	  
37、node.firstChild=elementNode.childNodes[0];node.lastChild=elementNode.childNodes[elementNode.childNodes.length-1]
38、elementNode.parentNode.parentNode获得elementNode的父节点的父节点
39、nodeObject.nextSibling获得之后的兄弟节点。nodeObject.previousSibling获得之前的兄弟节点
40、.appendChild()  在指定节点的最后一个子节点列表之后添加一个新的子节点。
		<body>
		<ul id="test">
		  <li>JavaScript</li>
		  <li>HTML</li>
		</ul> 
		<script type="text/javascript">
		  var otest = document.getElementById("test");  
		  var newnode=document.createElement("li");
		 newnode.innerHTML="PHP";
		otest.appendChild(newnode);          
		</script> 
		</body>
41、.insertBefore() 方法可在已有的子节点前插入一个新的子节点。otest.insertBefore(newnode,node); 也可以改为:  otest.insertBefore(newnode,otest.childNodes[0]); 		
42、window.innerHeight - 浏览器窗口的内部高度  (对于IE9+、Chrome、Firefox、Opera 以及 Safari：)
	window.innerWidth - 浏览器窗口的内部宽度	(对于IE9+、Chrome、Firefox、Opera 以及 Safari：)
	在不同浏览器都实用的 JavaScript 方案：
	var w= document.documentElement.clientWidth
	      || document.body.clientWidth;
	var h= document.documentElement.clientHeight
	      || document.body.clientHeight;
43、网页尺寸scrollHeight
		浏览器兼容性
		var w=document.documentElement.scrollWidth
		   || document.body.scrollWidth;
		var h=document.documentElement.scrollHeight
		   || document.body.scrollHeight;	      
44、网页尺寸offsetHeight
	offsetHeight和offsetWidth，获取网页内容高度和宽度(包括滚动条等边线，会随窗口的显示大小改变)。
	一、值
	offsetHeight = clientHeight + 滚动条 + 边框。
	二、浏览器兼容性
	var w= document.documentElement.offsetWidth
	    || document.body.offsetWidth;
	var h= document.documentElement.offsetHeight
	    || document.body.offsetHeight;		   
/*以上部分为imooc网学习笔记，该类型其它笔记请写在下面*/
