(function(){
	$('#setting').click(function(){
		window.open(chrome.extension.getURL('setting.html'));
	})

	$('#color').on('input',function(){
		var val = $(this).val();
		if(val.match(/[0-9a-z]{6}/gi)){
			$('#c_dis').css({'background-color':'#'+val,"border-color":'#'+val})
			 chrome.storage.sync.set({'ban_color': val}, function() {
	          
	        });
		}
	})
	chrome.storage.sync.get('ban_color',function(res){
		if(res.ban_color){
			console.log(res.ban_color)
			val = res.ban_color
			$('#c_dis').css({'background-color':'#'+val,"border-color":'#'+val})
			$('#color').val(res.ban_color)
		}

	})
	chrome.webNavigation.onCompleted.addListener(function(props) {
		console.log(new Date().getTime()+":"+JSON.stringify(arguments))
		if(props && props.tabId){
			console.log(props.tabId);
			chrome.tabs.sendMessage(props.tabId,{"act":"go"}, function() {
			});
		}
	});
})();

