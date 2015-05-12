JQuery部分
1、 $("#id").html("aa") 设置元素id为id的文本为aa
2、 $("button").arrt("disabled", true) 设置button的disable属性为true
3、 $(".class").html("aa") 设置类名为class的html为aa
4、 $("div *") 选取div的所有 子 元素
5、 $(“sele1, sele2, seleN”);
例： $("#id,button,.class")
6、 与4相同格式$("div span") 选择出div下面的所有span标签
7、 $("div label").css("background-color", "blue");
设置div下的label标签的背景色
8、 $(“parent > child”) 例： $("div > span") 获得div下面的所有span标签
9、 $("div++span") 选取与div同级的下两个span元素
10、 $("div~span") 选取div后面所有的同级元素
11、 $("li:first") $("li:last") 所有li标签中选择第一个
12、 $("li:eq(2)") 选择所有li中的第3个li
14、 $("li:contains('jQuery')") 按理说要在jQuery上加双引号, 但不加也可以实现功能, 为了规范起见, 还是加上单引或双引号。(大小写敏感)
15、 $("li:has(label)") 获取li下面的所有含有label标签的全部标签
17、
	var $strHTML = $("div:hidden").html();//获取隐藏的div元素的html(网页显示的信息)
	$("div").html($strHTML);
	var $strHTML = $("input:hidden").val();//获取input标签的value值
	$("div").html($strHTML);
