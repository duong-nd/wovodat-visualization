function DataPuller() {
}

DataPuller.getVolcanoList = function(args) {
	var handler = args.handler;
	$.ajax({
		type: 	"POST",
		url: 	"api/",
		data: 	{data:"volcano_list"},
		dataType: "json"
	})
	.done(function(result) {
		args.data = result;
		handler(args);
	});
	
}

DataPuller.getEruptionList = function(args) {
	var vd_id = args.vd_id; 
	var handler = args.handler;

	$.ajax({
		type: "POST",
		url: "api/",
		data: { 
			data: "eruption_list", 
			vd_id: vd_id
		},
		dataType: "json"
	}).done(function(result) {
		args.data = result;
		handler(args);
	});
}

DataPuller.getEruptionForecastList = function(args) {
	var vd_id = args.vd_id;
	var handler = args.handler;
	$.ajax({
		type: "POST",
		url: "api/",
		data: { 
			data: "eruption_forecast_list", 
			vd_id: vd_id
		},
		dataType: "json"
	}).done(function(result) {
		args.data = result;
		handler(args);
	});
}
