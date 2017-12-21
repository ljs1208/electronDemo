var divId = 1;
$(document).ready(function() {
    $("#parsItem").on('click', function() {
        var jsonStr = $.trim($("#jsonData").val());
        if (!isJsonFormat(jsonStr)) {
            dialog('提示', '您输入的不是json数据');
        } else if (jsonIsEmpty(jsonStr)) {
            dialog('提示', '请输入json内容');
        } else {
            json2Item(jsonStr);
        }
    });

    // $("#formatJson").on('click', function() {
    //     var jsonStr = $.trim($("#jsonData").val());
    //     $("#jsonData").val("");
    //     $("#jsonData").val(JSON.stringify(jsonStr, null, "\t"))
    // });

    $("#parsJson").on('click', function() {
        var data = {}
        $(".weui-cell input").map(function() {
            if ($(this).parent().is(".report")) {
                //后期优化
                return false;
            } else {
                //标签属性
                var keyLabel = $(this).data("label");
                //输入数据
                var value = $(this).val();
                if (value.length > 1) {
                    data[keyLabel] = value;
                }
            }
        });
        var keyreports = "reports";
        var reportDiv = $(".weui-cell .report");

        var reportData = [];
        $.each(reportDiv, function(index) {
            var report = $(this).find("input");
            var reportArr = {};
            $.each(report, function(index, item) {
                var key = $(this).data("label");
                var value = $(this).val();
                if (value.length > 0) {
                    reportArr[key] = value;
                }
            });
            if (!$.isEmptyObject(reportArr)) {
                reportData.push(reportArr);
            }
        });
        if (reportData.length >= 1 && !$.isEmptyObject(reportData)) {
            data[keyreports] = reportData
        }

        $("#jsonData").val(JSON.stringify(data, null, "\t"))
    });
    /**
     * 新增报表数据
     */

    $("#addReport").on('click', function() {
        //复制第一个节点
        var report = $(".weui-cell .report:first");
        var newDiv = report.clone(true);
        newDiv.attr("index", divId);
        //追加到最后一个节点
        $(".weui-cell .report:last").after(newDiv);
        newDiv.find("#linkReportId").val("");
        newDiv.find("#linkReportName").val("");
        divId++;
    });
    $("#delReport").on('click', function() {
        var reportDiv = $(".weui-cell .report");
        if (reportDiv.length == 1) {
            dialog("警告", "不能再删除了");
            return;
        }
        //删除最后一个节点
        $(".weui-cell .report:last").remove();

    })
});

function json2Item(str) {
    var json = $.parseJSON(str)
    $.each(json, function(key) {
        if (json[key] instanceof Array) {
            var arrayData = json[key];
            $.each(arrayData, function(arrayKey) {
                if (key === "reports") {
                    //删除不是第一个节点
                    $(".weui-cell  .report:not(:first)").remove();
                    if (arrayKey == 0) {
                        var reportId = arrayData[arrayKey].id;
                        var reportName = arrayData[arrayKey].name;
                        $("#linkReportId").val(reportId);
                        $("#linkReportName").val(reportName);
                    } else {
                        var reportId = arrayData[arrayKey].id;
                        var reportName = arrayData[arrayKey].name;

                        var report = $(".weui-cell .report:first");
                        var newDiv = report.clone(true);
                        newDiv.attr("index", divId);
                        $(".weui-cell .report:last").after(newDiv);

                        newDiv.find("#linkReportId").val(reportId);
                        newDiv.find("#linkReportName").val(reportName);
                        divId++;
                    }
                }
            })
        }
        //公式
        if (key === "formula") {
            $("#formula").val(json[key]);
        }
        //
        else if (key === "sbsx") {
            $("#sbsx").val(json[key]);
        } else if (key === "linkReportsUrl") {
            $("#linkReportsUrl").val(json[key]);
        } else if (key === "elementType") {
            $("#elementType").val(json[key]);
        } else if (key === "validateFormula") {
            $("#validateFormula").val(json[key]);
        } else if (key === "precision") {
            $("#precision").val(json[key]);
        } else if (key === "frontFormula") {
            $("#frontFormula").val(json[key]);
        } else if (key === "frontValidateFormula") {
            $("#frontValidateFormula").val(json[key]);
        } else if (key === "zkm") {
            $("#zkm").val(json[key]);
        } else if (key === "kms") {
            $("#kms").val(json[key]);
        }

    });

};