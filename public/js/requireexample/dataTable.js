require.config({
	//使用HTTTP 的绝对位置
	//	baseUrl: "http://127.0.0.1:8020/uploadGit",
	//	paths: {
	//		"jquery": "plugins/jquery/jquery-1.12.mini",
	//		"bootstrap": "plugins/bootstrap-3.3.5-dist/js/bootstrap.min",
	//		"jquery.dataTables": "plugins/dataTable/js/jquery.dataTables.min",
	//		"datatables.net": "plugins/dataTable/js/dataTables.bootstrap.min"
	//	},
	//使用相对位置
	paths: {
		"jquery": "../../../plugins/jquery/jquery-1.12.mini",
		"bootstrap": "../../../plugins/bootstrap-3.3.5-dist/js/bootstrap.min",
		"jquery.dataTables": "../../../plugins/dataTable/js/jquery.dataTables.min",
		"datatables.net": "../../../plugins/dataTable/js/dataTables.bootstrap.min",
		"datatables.net-autofill": "./../../plugins/dataTable/AutoFill-2.1.2/js/autoFill.bootstrap.min",
		"bootstrap.autofill": "../../../plugins/dataTable/AutoFill-2.1.2/js/autoFill.bootstrap.min"
	},
	shim: {
		'bootstrap': {
			deps: ['jquery']
		},
		'jquery.dataTables': {
			deps: ['jquery']
		},
		'datatables.net': {
			deps: ['jquery', 'bootstrap', 'jquery.dataTables'],
			exports: 'datatables.net'
		}
	}
});

require(['bootstrap', 'jquery.dataTables', 'datatables.net', 'jquery'], function() {
	var dataTable = $("#exampleTable").dataTable({
		"language": {
			"url": "../../plugins/dataTable/js/Chinese.json"
		},
		//"paging": true,
		//"serverSide": true,
		//"searching": false,
		//"bProcessing": true,
		//"bLengthChange": true,
		//"bSort": false,
		"ajax": {
			//"url": "http://127.0.0.1:8020/uploadGit/plugins/dataTable/js/objects.txt",
			"url": "../../plugins/dataTable/js/objects.txt",
			"type": "get",
			"data": function(d) {
				d.keyword = $.trim($("#searchkey").val());
			},
			dom: 'Bfrtip',
			buttons: ['colvis', 'excel', 'print']
		},
		columns: [{
			"data": "name"
		}, {
			"data": "position"
		}, {
			"data": "salary"
		}, {
			"data": "start_date"
		}, {
			"data": "office"
		}, {
			"data": "extn"
		}]

	})
})