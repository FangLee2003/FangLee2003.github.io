'use strict';
jQuery(document).ready(function() {
 	if(document.getElementById('candle-chart')){
 		new TradingView.widget(
		 	{
		  		"autosize": true,
			  	"symbol": "BTCUSD",
			  	"interval": "D",
			  	"timezone": "Etc/UTC",
			  	"theme": "Dark",
			  	"style": "1",
			  	"locale": "en",
			  	"toolbar_bg": "rgba(0, 0, 0, 0.5)",
			  	"enable_publishing": false,
			  	"allow_symbol_change": true,
			  	"container_id": "candle-chart"
			}
	  	);
 	}
});