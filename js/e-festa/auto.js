
if (document.title == "e-FESTA") {
	document.onkeydown = auto_run;
}

function sleep(sec) {
	return new Promise(resolve => setTimeout(resolve, sec*1000));
}

function auto_run() {
	if (event.ctrlKey != true) return;
	if (!confirm("start")) return;
	select_task();
}

async function select_task() {
	var list_f = document.list;
	for (var i = 0; i < list_f.document.links.length; i++) {
		window.open("http://deli3.study.jp/home/course/" + list_f.document.links[i].href.split("'")[1]).is_task = true;
		await sleep(5);
	}
}

/*

function start() {
	var kdbox = document.kdbox_iframe;
	kdbox.__doPostBack('ctl00$masterMain$dkgSubjectTop$hplStart','');
	answer_task();
	console.log("a");
	
}

async function answer_task() {
	await sleep(2);
	var kdbox = document.kdbox_iframe;
	var ctrl = kdbox.document.ctrl;
	var right = kdbox_iframe.document.right;
	switch (ctrl.test_type) {
		case 1 : //テキスト
			for (var i = ctrl.currPage; i < ctrl.slides.length; i++) { 
				ctrl.move_page(1);
			}
			break;
		case 2 : //筆記
			for (var i = ctrl.currPage; i < ctrl.slides.length; i++) {
				var ans = ctrl.testInfo[ctrl.currPage].correct.split("\n")[0];
				console.log(ans);
				right.test_info.answer = ans;
				ctrl.move_page(1);
				ctrl.move_page(1);
			}
			
			break;
		case 3 : //四択[ア,イ,ウ,エ]
			for (var i = ctrl.currPage; i < ctrl.slides.length; i++) {
				var ans = ctrl.testInfo[ctrl.currPage].correct.split("\n")[0];
				console.log(ans);
				right.test_info.answer = ans;
				ctrl.move_page(1);
			}
			break;
	}
	
}

*/


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