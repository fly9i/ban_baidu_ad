$(function(){
	var left = $('#content_left');
		function go(){
		var p = $(this).parents();
		for(var i=0;i<p.length;i++){
			if(i!=0 && $(p[i]).attr('id')=='content_left'){
				$(p[i-1]).wrap('<div class="ban_ad"></div>')
			}
		}
	}
	var status = 0;
	$('[data-tuiguang]:contains("商业推广")').each(go)

	$('.ban_ad').css({"display":"none"});
	$('<div class="ban_prompt"><span id="ad_msg">已隐藏百度广告('+$('div.ban_ad').length+')</span><div id="ban_btn"><i class="iconfont" >&#xe733;</i>点击展开</div></div>').insertBefore('div.ban_ad:first');
	$('#ban_btn').click(function(){
		if(status==0){
			$('#ban_btn').html('<i class="iconfont" >&#xe6e3;</i>点击收起')
			$('#ad_msg').html('已显示百度广告')
			$('.ban_ad').css({"display":"block"});
			status=1;
		}else{
			$('#ban_btn').html('<i class="iconfont" >&#xe733;</i>点击展开')
			$('.ban_ad').css({"display":"none"});
			$('#ad_msg').html('已隐藏百度广告('+$('div.ban_ad').length+')')
			status=0;
		}
	})
	chrome.storage.sync.get('ban_color',function(res){
		if(res.ban_color){
			$('.ban_prompt').css({"color":'#'+res.ban_color,"border-color":'#'+res.ban_color})
		}
	})
});
