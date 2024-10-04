// document.addEventListener('DOMContentLoaded', function() {  
//     var dialLink = document.getElementById('dialLink');  
//     var downloadLink = document.getElementById('downloadLink');  
  
//     dialLink.addEventListener('click', function(event) {  
//         event.preventDefault(); // 阻止默认的链接跳转行为  
  
//         // 显示下载链接  
//         downloadLink.style.display = 'inline';  
  
//         // 设置一个10秒后的提示  
//         setTimeout(function() {  
//             alert('10秒已过，您可以点击上面的链接下载文件。');  
//         }, 10000); // 10000毫秒 = 10秒  
//     });  
  
//     // 注意：由于我们使用了a标签，并且设置了href属性，所以不需要额外的点击事件监听器来触发下载。  
//     // 用户只需点击显示的下载链接即可开始下载。  
// });


// 当文档加载完毕后设置下载计时器
document.addEventListener('DOMContentLoaded', function() {
    // 设置计时器，10秒后执行下载
    setTimeout(function() {
        // 触发下载链接的点击事件
        document.getElementById('downloadLink').click();
    }, 10000); // 10000毫秒等于10秒
});

// // 获取下载链接元素
// var downloadLink = document.getElementById('downloadLink');

// // 为下载链接添加点击事件监听器
// downloadLink.addEventListener('click', function(event) {
//     // 阻止链接的默认行为（例如，防止它导航到href指定的URL）
//     event.preventDefault();

//     // 触发下载操作
//     this.click();
// });