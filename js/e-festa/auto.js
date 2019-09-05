document.onkeydown = auto_run;

function sleep(wait_ms) {
	var start_time = new Date();
	while(new Date - start_time < wait_ms);
	
}

function auto_run() {
	if (event.ctrlKey != true) return;
	alert("start");
	answer_task();
	//sleep(5000);
	//var c_f = document.kdbox_iframe.document.ctrl;
	//var r_f = document.kdbox_iframe.document.right;
	//var test_size = c_f.testInfo.length;
	//for (var i = 0; i < test_size; i++) {
	//	var ans = c_f.testInfo[i].correct.split("\n")[0];
	//	r_f.test_info.answer = ans;
	//	c_f.move_page(1);
	//	c_f.move_page(1);
	//}
}

function select_task() {
	var list_f = document.list;
	for (var i = 0; i < list_f.document.links.length; i++) {
		list_f.location = list_f.document.links[i].href;
		
	}
}

function answer_task() {
	
	
	var kbox = document.kdbox_iframe;
	var ctrl = kdbox.document.ctrl;
	var right = kdbox_iframe.document.right;
	switch (ctrl.test_type) {
		case 1 : //テキスト
			do { 
				ctrl.move_page(1); 
			} while(ctrl.currPage < ctrl.slides.length - 1);
			break;
		case 2 : //筆記
			do {
				var ans = ctrl.testInfo[ctrl.currPage].correct.split("\n")[0];
				alert(ans);
				right.test_info.answer = ans;
				ctrl.move_page(1);
				ctrl.move_page(1);
			} while (ctrl.currPage < ctrl.slides.length - 1);
			kbox.location.href = kbox.document.getElementById("ctl00_masterMain_dkgTestLogDetail_hplBack").href;
			kbox.kdbox_iframe.close();
			break;
	}
	
}



// document.kdbox_iframe.document.ctrl.test_type
// 1 : テキスト slides.length = 1
// 2 : 筆記テスト slides.length = 2 (問題数)
// 3 : 四択[ア,イ,ウ,エ]  slides.length = 2 (問題数)

// document.kdbox_iframe.document.ctrl.currPage = 現在のスライドページ




// 単元選択ページから単元を選択
// document.list.document.links にどうやら一覧がある(というか解放されてる単元すべてへのリンクだ)

// 受講ページから開始するには
// document.kdbox_iframe.location.href = document.kdbox_iframe.document.getElementById("ctl00_masterMain_dkgSubjectTop_hplStart").href
// javascript:__doPostBack('ctl00$masterMain$dkgSubjectTop$hplStart','')

// 結果ページから戻るには
// document.kdbox_iframe.location.href = document.kdbox_iframe.document.getElementById("ctl00_masterMain_dkgTestLogDetail_hplBack").href
// これで受講開始ページへ

//受講開始ページから戻るには
// document.kdbox_iframe.kdbox.close()