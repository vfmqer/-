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
	var $strHTML = $("div:hidden").html(); //获取隐藏的div元素的html(网页显示的信息)
	$("div").html($strHTML);
	var $strHTML = $("input:hidden").val(); //获取input标签的value值
	$("div").html($strHTML);
18、 取所有可见的标签
$("$li:visible")
19、 $("li[title!='水果']") 获得所有li下的所有title != '水果'
	的标签
20、 $("li[title*='果']") 选出所有含有果字的标签
21、 $("li:first-child") 与first不同的是， 这个取出的是一个集合， 是所有子代li中老大的一个集合last也一样生效
22、 $("li:first-child").hide();
	把第一个子元素隐藏
23、 $("#frmTest :input").addClass("bg_blue");
	注意空格， 选取id = "frmTest"
	下的所有input标签， 并增加class属性
	    < form id = "frmTest"
	action = "#" >
	    < input type = "text"
	id = "Text1"
	value = "我是小纸条" / > < br / >
	    < textarea rows = "3"
	cols = "8" > < /textarea><br / >
	    < input type = "text"
	id = "Text2"
	value = "我也是小纸条" / > < br / >
	    < button >
	    Button < /button><br / >
	    < /form>
24、 $("#frmTest :text").addClass("bg_blue");
	选择所有类型为text的， 像 < textarea > < /textarea>也会被选中
24、 $("#frmTest :password").addClass("bg_blue");
	选择所有密码输入框
25、 $("#frmTest :radio").attr("disabled", "true");
	设置radio的disable属性为真
26、 $("#frmTest :checkbox").attr("checked", "true");
	设置所有checkbox的checked属性为真
27、 $("#frmTest input:submit").addClass("bg_red");
	设置表单中的submit的标签的class为。。。
28、 $("#frmTest :image").addClass("bg_red");
	取到input类型为image的input。 选的是input不是image
29、 $("#frmTest :button").addClass("bg_blue");
	取到type = 'button'
	的input和button标签
30、 $("#frmTest :checked").attr("disabled", true);
	设置当前为选中状态的选择框的disable属性为true
31、 < script type = "text/javascript" >
	    var $txtOpt = $("#frmTest :selected").text();
	$("#tip").html("选中内容为:" + $txtOpt); < /script>
	该: selected选择器只能选中select标签的选项
	该方法为取得当前选中状态的html, 并显示出来
	tip: < select id = "Select1"
	multiple = "multiple" > 设置selece 的multiple = "multiple"
	选择框就可以呈现多选状态
	32、 $("select option:selected").text();
	获取列表框元素中被选中的元素的值
	列表框选中时状态为selected, 而不是checked
33、 attr() 方法的作用是设置或者返回元素的属性， 其中attr(属性名) 格式是获取元素属性名的值， attr(属性名， 属性值) 格式则是设置元素属性名的值。
	$("#a1").attr("href", "www.imooc.com");
	var $url = $("#a1").attr("href");
	$("#tip").html($url);
	该例子为设置id = "a1"
	标签的href = "www.imooc.com"
	并用arrt方法来取出来显示在tip中
34、 使用html() 和text() 方法操作元素的内容， 当两个方法的参数为空时， 表示获取该元素的内容， 而如果方法中包含参数， 则表示将参数值设置为元素内容。

	html() 为设置为html格式， 当输入标签时会解析掉， 而text() 则直接全部输出
35、 通过addClass() 和css() 方法可以方便地操作元素中的样式， 前者括号中的参数为增加元素的样式名称， 后者直接将样式的属性内容写在括号中。
	$("#content").css({
	    "background-color": "red",
	    "color": "blue"
	});
	.css的格式如上
36、 使用removeAttr(name) 和removeClass(class) 分别可以实现移除元素的属性和样式的功能， 前者方法中参数表示移除属性名， 后者方法中参数则表示移除的样式名
37、$("body").append(rethtml());在body标签下增加代码:
	function rethtml() {
                var $html = "<div id='test' title='hi'>我是调用函数创建的</div>"
                return $html;
            }
38、 $($html).appendTo("div");向div标签加代码
39、$(selector).before(content)和$(selector).after(content)，在selector标签前后插入content
40、$(selector).clone()为复制一个selected标签
41、replaceWith()和replaceAll()方法都可以用于替换元素或元素中的内容，但它们调用时，内容和被替换元素所在的位置不同，分别为如下所示：
	$(selector).replaceWith(content)和$(content).replaceAll(selector)
	selector为被替换的内容，content为替换的内容
42、$(selector).wrap(wrapper)和$(selector).wrapInner(wrapper)
	wrap()和wrapInner()方法都可以进行元素的包裹，但前者用于包裹元素本身，后者则用于包裹元素中的内容，它们的调用格式分别为：
43、ecah()遍历所有元素
    <body>
        <h3>使用each()方法遍历元素</h3>
        <span class="green">香蕉</span>
        <span class="green">桃子</span>
        <span class="green">葡萄</span>
        <span class="green">荔枝</span>
        
        <script type="text/javascript">
            $("span").each(function (index) {
                if (index == 1) {
                   $(this).attr("class", "red");
                }
            });
        </script>
        each需要传入一个加调函数，其中index为返回的序号
44、remove()方法删除所选元素本身和子元素，该方法可以通过添加过滤参数指定需要删除的某些元素，而empty()方法则只删除所选元素的子元素。
45、read()事件，onLoad()事件为当元素全部加载完成，read()事件为页面的DOM结构开始加载后便触发
	$(document).ready(function(){})等价于$(function(){});        
46、$(selector).bind(event,[data] function)为selector标签绑定event事件function，多个事件用，想得开
47、$(selector).hover(over，out);为selector标签的鼠标移入执行over函数，移出时执行out函数
48、    <script type="text/javascript">
        $(function () {
            $("#btntest").bind("click", function () {
                $("div").toggle(
                  function(){
                      $(this).attr("display","none");
                  }, 
                  function(){
                      $(this).removeAttr("display");
                  })
            })
        });
    </script>
    动态显示隐藏和显示，有动态效果，如果单纯只想隐藏的话，如下:
        <script type="text/javascript">
        $(function () {
            $("#btntest").bind("click", function () {
                $("div").toggle();
            })
        });
    </script>
    注意：toggle()方法支持目前主流稳定的jQuery版本1.8.2，在1.9.0之后的版本是不支持的。
49、 $(selector).unbind(event,fun)为bind绑定函数的逆函数
50、$().one(event,data,function)函数只运行一次
51、$(selector).trigger(event)调用trigger方法来手动执行某个函数
52、trigger()方法
	$(function(){
		$("input").trigger("select");
	});
	当load页面后选中框里的文字是被选中的
	trigger可以调用某个已定义的事件，比如下列的自定义事件change-color
	        <script type="text/javascript">
            $(function () {
                $("div").bind("change-color", function () {
                    $(this).addClass("color");
                });
                $("div").trigger("change-color");
            });
        </script>
53、focus/blur事件
	$(function() {
    $("input").bind("focus", function() {
            $("div").html("请输入您的姓名！");
        });
    $("input").bind("blur", function() {
        if ($(this).val().length == 0)
            $("div").html("你的名称不能为空！");
    })
	});
54、change事件
        $(function () {
        $("#select").bind("change", function () {
            if ($(this).val() == "苹果")
                $(this).css("background-color", "red");
            else
                $(this).css("background-color", "green");
        })
    });	//该脚本实现改变选择框的背景色

        $(function(){$(select).bind("change",function(){$("div").html("你选择的是:"+$(this).val());})});//此代码可以实现动态显示你选择的内容
55、live()事件 
    $(function () {
    $("#btntest").live("click mouseout", function () {
        $(this).attr("disabled", "true");
    })
    $("body").append("<input id='btntest' type='button' value='点击或移出就不可用了' />");
	});//用live绑定多个事件
	注意：从 jQuery 1.7 开始，不再建议使用 .live() 方法。1.9不支持.live()，本节代码编辑器里的js引用版本改为了1.8。
56、绑定多个事件,事件名用空格分开
57、hind() show方法
    $(function () {
    $("h4").bind("click", function () {
        if ($("#hidval").val() == 0) {
            $("ul").show();
            $("#hidval").val(1);
        } else {
            $("ul").hide();
            $("#hidval").val(0);
        }
    });
	});	
58、show(3000,function(){})//缓慢出现
	hide(3000,function(){})
59、$(selector).slideUp(speed,[callback])和$(selector).slideDown(speed,[callback])
	可以使用slideUp()和slideDown()方法在页面中滑动元素，前者用于向上滑动元素，后者用于向下滑动元素，它们的调用方法分别为：
60、slideToggle()方法，与toggle方法类似
61、fadeIn()和fadeOut()方法可以实现元素的淡入淡出效果，前者淡入隐藏的元素，后者可以淡出可见的元素，也可设置透明度
62、简单的动画效果，变大animate()方法
   <script type="text/javascript">
            $(function () {
                $("span").animate({
                    width: "80px",
                    height: "80px"
                },
                3000, function () {
                    $("#tip").html("执行完成!");
                });
            });
        </script>	     
63、animate()先向右移动，然后放大            
	$(function () {
        $("span").animate({
            left: "+=200px"
        }, 3000, function () {
            $(this).animate({
                height: '+=30px',
                width: '+=30px'
            }, 3000, function () {
                $("#tip").html("执行完成!");
            });
        });
    });
    </script>        
64、stop()停止没有完成和动作
	$("span").stop();
65、delay(2000)，多个变化时，可用此方法来设置每个方法间的间隔
66、load()方法、getJSON()方法、getScript()方法
    <script type="text/javascript">
    $(function () {
        $("#btnShow").bind("click", function () {
            var $this = $(this);
            //请求一个JOSN数据
            $.getJSON("http://www.imooc.com/data/sport.json",function(data){
                $this.attr("disabled", "true");
                //遍历这个数据，取出所序号为3的数值
                $.each(data, function (index, sport) {
                    if(index==3)
                    $("ul").append("<li>" + sport["name"] + "</li>");
                });

            });
        })
    });
	</script>
67、get()请求只能用来读取数据，无法传值到服务器
        <script type="text/javascript">
            $(function () {
                $("#btnShow").bind("click", function () {
                    var $this = $(this);
                    $.get("http://www.imooc.com/data/info_f.php",function(data){
                        $this.attr("disabled", "true");
                        $("ul").append("<li>我的名字叫：" + data.name + "</li>");
                        $("ul").append("<li>男朋友对我说：" + data.say + "</li>");
                    }, "json");
                })
            });
        </script>
68、post()请求，可以传值到服务器进行运算后返回
        <script type="text/javascript">
            $(function () {
                $("#btnCheck").bind("click", function () {
                   $.post("http://www.imooc.com/data/check_f.php",
                   {num:$("#txtNumber").val()},
                   function (data) {
                        $("ul").append("<li>你输入的<b>  "
                        + $("#txtNumber").val() + " </b>是<b> "
                        + data + " </b></li>");
                    });
                })
            });
        </script>        
69、对表单元素进行序列化，可以把所有元素用&连接起来，方便ajax调用。   
     <script type="text/javascript">
            $(function () {
                $("#btnAction").bind("click", function () {
                $("#litest").html($("form").serialize());
                })
            })
        </script>        
70、jQuery.ajax([settings])或$.ajax([settings])使用ajax()方法是最底层、功能最强大的请求服务器数据的方法，它不仅可以获取服务器返回的数据，还能向服务器发送请求并传递数值
	<script type="text/javascript">
	    $(function () {
	        $("#btnCheck").bind("click", function () {
	            $.ajax({
	                url:"http://www.imooc.com/data/check.php",
	                data: { num: $("#txtNumber").val() },
	                dataType:"text",
	                type:"get",
	                success: function (data) {
	                    $("ul").append("<li>你输入的<b>  "
	                    + $("#txtNumber").val() + " </b>是<b> "
	                    + data + " </b></li>");
	                }
	            });
	        })
	    });
	</script>
71、ajaxSetup()方法设置全局Ajax默认选项
  与.ajax配置相同，在此写过就不需要在每个.ajax中去写入配置文件了。
72、ajaxStart()、ajaxStop()方法，在执行ajax时、结束时调用函数
	<script type="text/javascript">
	    $(function () {
	        $("#divload").ajaxStart(function(){
	            $(this).html("正在请求数据...");
	        });
	        $("#divload").ajaxStop(function(){
	            $(this).html("数据请求完成！");
	        });
	        $("#btnShow").bind("click", function () {
	            var $this = $(this);
	            $.ajax({
	                url: "http://www.imooc.com/data/info_f.php",
	                dataType: "json",
	                success: function (data) {
	                    $this.attr("disabled", "true");
	                $("ul").append("<li>我的名字叫：" + data.name + "</li>");
	                $("ul").append("<li>男朋友对我说：" + data.say + "</li>");
	                }
	            });
	        })
	    });
	</script>  	
73、定义一个JSON对象，通过.each()工具函数，获取名称和内容，显示在页面中。
	<!DOCTYPE html>
	<html>
	    <head>
	        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />       
	        <title>挑战题</title>
	        <style>
	    		.ui-table {margin: 20px auto; border-collapse: collapse; font-size: 12px; text-align: center; color: #666;}
				.ui-table th, .ui-table td {padding: 4px 8px; border: 1px solid #ccc;}
				.ui-table th {background-color: #f0f0f0;}
	        </style>
	        <script src="http://libs.baidu.com/jquery/1.9.0/jquery.js"></script>
	    </head>
	    <body>
	        <table class="ui-table" width="800" id="studentInfo">
	            <caption><h2>XX中学学生资料</h2></caption>
	            <thead>
	            <tr>
	                <th style="width:45px">序号</th>
	                <th>姓名</th>
	                <th>学号</th>
	                <th>性别</th>
	                <th>年龄</th>
	                <th>所在班级</th>
	                <th>富二代</th>
	            </tr>
	            </thead>
	            <tbody>
	            	<tr>
	            		<td colspan="7">
	            			<input type="button" value="加载资料" onclick="DisplayInfo()">
	            		</td>
	            	</tr>
	            </tbody>
	        </table>
	        <script>
	        var students = [
	        	{"name": "张三", "id": "00145", "sex": "男", "age": "15", "class": "初一(3)班", "vip": "否"},
	        	{"name": "李四", "id": "00110", "sex": "女", "age": "15", "class": "初二(2)班", "vip": "否"},
	        	{"name": "王五", "id": "00251", "sex": "男", "age": "17", "class": "初一(4)班", "vip": "是"},
	        	{"name": "赵六", "id": "00031", "sex": "女", "age": "16", "class": "初二(3)班", "vip": "否"},
	        	{"name": "吴七", "id": "00009", "sex": "女", "age": "19", "class": "初三(6)班", "vip": "否"},
	        	{"name": "候八", "id": "00352", "sex": "男", "age": "14", "class": "初一(2)班", "vip": "是"},
	        ];     
	        function DisplayInfo() {
	        	var tbody = $("#studentInfo").find("tbody");
	        		tbody.empty();
	        	$.each(students,function(index, el) {
	        		tbody.append(
	        			"<tr><td>" + parseInt(index+1) + "</td><td>" +
									  el.name + "</td><td>" +
							          el.id +   "</td><td>" +
		    						  el.sex +   "</td><td>" +
		    						  el.age +   "</td><td>" +
		    						  el.class +   "</td><td>" +
		    						  el.vip +   "</td></tr>");
	        	});
	        }
	        </script>
	    </body>
</html>	
74、