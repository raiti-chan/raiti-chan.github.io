document.onkeydown = auto_run;

function sleep(wait_ms) {
	var start_time = new Date();
	while(new Date - start_time < wait_ms);
	
}

function auto_run() {
	if (event.ctrlKey != true) return;
	alert("start");
	sleep(5000);
	var c_f = document.kdbox_iframe.document.ctrl;
	var r_f = document.kdbox_iframe.document.right;
	var test_size = c_f.testInfo.length;
	for (var i = 0; i < test_size; i++) {
		var ans = c_f.testInfo[i].correct.split("\n")[0];
		r_f.test_info.answer = ans;
		c_f.move_page(1);
		c_f.move_page(1);
	}
}