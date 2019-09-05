document.onkeydown = select_task;

function sleep(wait_ms) {
	var start_time = new Date();
	while(new Date - start_time < wait_ms);
	
}

function auto_run() {
	if (event.ctrlKey != true) return;
	alert("start");
	select_task();
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
		var name = list_f.document.links[i].innerText;
		alert(name);
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