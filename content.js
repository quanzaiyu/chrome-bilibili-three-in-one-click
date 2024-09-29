function performTripleAction() {
	console.log("开始执行一键三连操作");

	// 点赞
	const likeButton = document.querySelector('.video-like');
	if (likeButton && !likeButton.classList.contains('on')) {
		console.log("点击点赞按钮");
		likeButton.click();
	} else {
		console.log("未找到点赞按钮或已经点赞");
	}

	// 投币
	const coinButton = document.querySelector('.video-coin');
	if (coinButton) {
		console.log("点击投币按钮");
		coinButton.click();
		// 等待投币弹窗出现
		setTimeout(() => {
			const oneCoiButton = document.querySelector('.mc-box.left-con');
			if (oneCoiButton) {
				console.log("选择投1个币");
				oneCoiButton.click();
			} else {
				console.log("未找到投1个币的选项");
			}
			const confirmButton = document.querySelector('.coin-bottom > .bi-btn');
			if (confirmButton) {
				console.log("确认投币");
				confirmButton.click();
			} else {
				console.log("未找到确认投币按钮");
			}
		}, 1000); // 增加等待时间到1000毫秒
	} else {
		console.log("未找到投币按钮");
	}

	// 收藏
	const favoriteButton = document.querySelector('.video-fav');
	if (favoriteButton) {
		console.log("点击收藏按钮");
		favoriteButton.click();
		// 等待收藏弹窗出现
		setTimeout(() => {
			const defaultFavoriteFolder = document.querySelector('.collection-m .group-list .collection-item');
			if (defaultFavoriteFolder) {
				console.log("选择默认收藏夹");
				defaultFavoriteFolder.click();
			} else {
				console.log("未找到默认收藏夹");
			}
			const confirmButton = document.querySelector('.collection-m .bottom-actions .confirm-btn');
			if (confirmButton) {
				console.log("确认收藏");
				confirmButton.click();
			} else {
				console.log("未找到确认收藏按钮");
			}
		}, 1000); // 增加等待时间到1000毫秒
	} else {
		console.log("未找到收藏按钮");
	}
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log("收到消息:", request);
	if (request.action === "tripleAction") {
		console.log("执行一键三连操作");
		performTripleAction();
		sendResponse({ status: "success" });  // 添加响应
	}
	return true;  // 表示异步响应
});

console.log("B站一键三连内容脚本已加载");