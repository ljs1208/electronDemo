/**
 * 判断是否为json格式
 * @param {*字符串} str 
 */
function isJsonFormat(str) {
    try {
        $.parseJSON(str);
    } catch (e) {
        return false;
    }
    return true;
};

/**
 * 判断是否为json格式
 * @param {*字符串} str 
 */
function jsonIsEmpty(str) {
    try {
        var jsonData = $.parseJSON(str);
        if ($.isEmptyObject(jsonData)) {
            return true;
        }
    } catch (e) {
        return true;
    }
    return false;
};
/**
 * 
 * @param {*标题} title 
 * @param {*信息} msg 
 */
function dialog(title, msg) {
    var dialog = '\<div style="display: none;" id="dialog1">\
                    <div class="weui-mask"></div>\
                    <div class="weui-dialog">\
                        <div class="weui-dialog__hd"><strong class="weui-dialog__title">' + title + '</strong></div>\
                        <div class="weui-dialog__bd">' + msg + '</div>\
                        <div class="weui-dialog__ft">\
                            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary primary">确定</a>\
                        </div>\
                    </div>\
                </div>';

    $('body').append(dialog);
    $('#dialog1').fadeIn('fast');
    //点击确定按钮
    $('#dialog1 .primary').on('click', function() {
        $('#dialog1').remove();
    });
}