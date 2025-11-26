// 1) 手机号聚焦显示验证码
        // 什么意思？找到页面上 id 为 "phone" 的元素（手机号输入框）；给它贴上一个叫 "phone" 的标签
        // 以后想用这个元素，直接叫 "phone" 就行了

        // 什么是document.getElementById？
        // document 是网页的意思
        // getElementById 是一个方法，意思是“通过ID获取元素”
        // 其中phone就是要找的元素ID 这个方法会返回一个元素对象
        // 什么是元素？网页上的每个部分都是元素：
        // 输入框是元素
        // 按钮是元素
        // 文字是元素
        // 图片是元素
        // <input id="phone" type="tel" name="phone" placeholder="手机号">
        // 这就是一个输入框元素，我们给它起了个 ID 叫 "phone"。

        const phone = document.getElementById('phone');
        const smsRow = document.getElementById('smsRow');
        // ['focus','click'].forEach(evt => phone.addEventListener(evt, () => {
        //   smsRow.hidden = false;
        // }));

        // 确保各种操作方式下都能正常工作
        // 当点击到手机号输入框时，显示验证码区域
        phone.addEventListener('click', () => {
            // phone 手机号输入框元素
            // addEventListener 绑定事件监听
            // click 点击事件
            // () => {} 箭头函数，事件触发时执行的代码
            // smsRow 验证码区域元素
            // hidden 属性 控制元素显示隐藏
            smsRow.hidden = false;
        });

        // 当聚焦手机号输入框时，显示验证码区域
        phone.addEventListener('focus', () => {
            smsRow.hidden = false;
        });
// 2) 发送验证码倒计时（演示版，不发请求）

        // 这里同理获取发送验证码的按钮元素
        const sendBtn = document.getElementById('send_password');
        // 定义一个计时器，值初始化为空
        let timer = null;
        // 初始化剩余时间为0
        let left = 0;
        // 默认启用发送验证码按钮
        sendBtn.disabled = false;
        // 依旧是绑定事件监听，只不过这次我们要给按钮加，毕竟我想的需求是点击当前按钮时能触发60s计时器
        sendBtn.addEventListener('click', () => {
            // 如果计时器已经在跑了（大于0说明计时器正在运行中），就不理它
            if (left > 0) return;
            // 否则，就把 left 设置为60，表示开始60秒倒计时。
            left = 60;
            // 调用 updateSendBtn 更新按钮文字和状态
            updateSendBtn();
            // 创建一个计时器，每隔1秒执行一次，并把 left 减1
            // setInterval(fn, time)，每个一定时间执行一次指定的代码
            timer = setInterval(() => {
                left--;
                updateSendBtn();
                if (left <= 0) {
                    clearInterval(timer);
                    timer = null;
                }
            }, 1000);
        });

        // 更新发送按钮的显示，更新倒计时
        function updateSendBtn() {
            if (left > 0) {
                // 设置按钮文字为剩余秒数加"s"，如"59s"、"30s"等。
                // textContent 用来设置元素的文字内容
                // disabled 用来设置按钮是否禁用，这里我们设置禁用，防止用户在倒计时期间再次点击。
                // ${left} 是模板字符串语法，把变量 left 的值插入到字符串中
                send_password.textContent = `${left}s`;
                send_password.disabled = true;
            } else {
                send_password.textContent = '发送验证码';
                send_password.disabled = false;
            }
        }
