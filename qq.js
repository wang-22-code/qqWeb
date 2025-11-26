//1.手机号码聚焦显示验证码
const smsROW=document.getElementById('smsROW');
const phone=document.getElementById('phone');
phone.addEventListener('click',()=>{
    smsROW.hiden=false;
})
// phone.addEventListener('click',function(){
//     smsROW.hiden=false;
// })
phone.addEventListener('focus',()=>{
    smsROW.hiden=false;
})
//发送验证码倒计时
const sendBTN =document.getElementById('sendBTN');
//定义一个计时器
let left=0;
//绑定事件监听
sendBTN.addEventListener('click',()=>{
    if(left>0)return;
    left=60
})
function updateSendBtn(){
    if (left>0){
        sendBTN.textContent=`${left}s`;
        sendBTN.disabled = true;
    }
    else{
        sendBTN.textContent='发送验证码'
        sendBTN.disabled = false;

    }
}