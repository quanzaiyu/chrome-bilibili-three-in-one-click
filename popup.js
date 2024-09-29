document.getElementById('tripleAction').addEventListener('click', function () {
	console.log("点击了一键三连按钮");
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		if (tabs.length === 0) {
			console.error("未找到活动标签页");
			return;
		}
		console.log("向内容脚本发送消息");
		chrome.tabs.sendMessage(tabs[0].id, { action: "tripleAction" }, function (response) {
			if (chrome.runtime.lastError) {
				console.error("发送消息时出错:", JSON.stringify(chrome.runtime.lastError));
			} else {
				console.log("消息发送成功，响应:", response);
			}
		});
	});
});

console.log("弹出脚本已加载");