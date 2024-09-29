function checkAndPerformLike() {
	return new Promise((resolve) => {
		const likeButton = document.querySelector('.video-like');
		if (likeButton) {
			if (!likeButton.classList.contains('on')) {
				console.log("点击点赞按钮");
				likeButton.click();
			} else {
				console.log("已经点赞过了");
			}
		} else {
			console.log("未找到点赞按钮");
		}
		resolve();
	});
}

function checkAndPerformCoin() {
	return new Promise((resolve) => {
		const coinButton = document.querySelector('.video-coin');
		if (coinButton) {
			if (!coinButton.classList.contains('on')) {
				console.log("点击投币按钮");
				coinButton.click();
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
					resolve();
				}, 1000);
			} else {
				console.log("已经投币过了");
				resolve();
			}
		} else {
			console.log("未找到投币按钮");
			resolve();
		}
	});
}

function checkAndPerformFavorite() {
	return new Promise((resolve) => {
		const favoriteButton = document.querySelector('.video-fav');
		if (favoriteButton) {
			if (!favoriteButton.classList.contains('on')) {
				console.log("点击收藏按钮");
				favoriteButton.click();
				setTimeout(() => {
					const defaultFavoriteFolder = document.querySelector('.group-list > ul > li:first-child > label');
					if (defaultFavoriteFolder) {
						console.log("选择默认收藏夹");
						defaultFavoriteFolder.click();
						// 添加延迟后再点击确认按钮
						setTimeout(() => {
							const confirmButton = document.querySelector('.collection-m-exp .btn.submit-move');
							if (confirmButton) {
								console.log("确认收藏");
								confirmButton.click();
							} else {
								console.log("未找到确认收藏按钮");
							}
							resolve();
						}, 500); // 添加500毫秒的延迟
					} else {
						console.log("未找到默认收藏夹");
						resolve();
					}
				}, 1000);
			} else {
				console.log("已经收藏过了");
				resolve();
			}
		} else {
			console.log("未找到收藏按钮");
			resolve();
		}
	});
}

async function performTripleAction() {
	console.log("开始执行一键三连操作");
	await checkAndPerformLike();
	await checkAndPerformCoin();
	await checkAndPerformFavorite();
	console.log("一键三连操作完成");
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log("收到消息:", request);
	if (request.action === "tripleAction") {
		console.log("执行一键三连操作");
		performTripleAction().then(() => {
			sendResponse({ status: "success" });
		});
	}
	return true;  // 表示异步响应
});

console.log("B站一键三连内容脚本已加载");