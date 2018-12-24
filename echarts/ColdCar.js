var coldCar = [];
var temp;
var flag = 0;

function getLatLn() {
    coldCar = [];
    flag = 0;
    for (var i = 1; i <= 25; i++) {
        var jsonData = {};
        var lo = [];
        var aaa = GetRandomNum(104, 108) + Math.random();
        var bbb = GetRandomNum(25, 28) + Math.random();
        if (temp == aaa) {
            aaa = GetRandomNum(104, 108) + Math.random();
            i--;
            flag = 1;
        }
        temp = aaa;
        lo[0] = aaa;
        lo[1] = bbb;
        lo[2] = 2;
        jsonData.name = "车辆" + i;
        jsonData.value = lo;
        jsonData.symbolSize = 10;
        jsonData.itemStyle = {
            "normal": {
                "color": "#00CED1"
            }
        };
        if (flag == 0) {
            coldCar.push(jsonData);
        }
    }
}

function getWarining() {
    $('#warnInfo').empty();
    var flag = 0;
    var temp;
    for (var i = 1; i <= 15; i++) {
        var jsonData = {};
        var lo = [];
        var aaa = Math.floor(GetRandomNum(1, 24));
        var bbb = Math.floor(GetRandomNum(80, 120));
        if (temp == aaa) {
            aaa = Math.floor(GetRandomNum(1, 24));
            i--;
            flag = 1;
        }
        var contentHtml = com.formatStr('<li class="mt-list-item"><div class="list-item-content"><h3 class="uppercase" style="width: 433px;"><a href="javascript:;">车辆{0} 在贵安大道附近超速 速度为：{1}KM/H</a></h3></div></li>', aaa, bbb);
        if (flag == 0) {
            $('#warnInfo').append(contentHtml);
        }
    }
}

function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
} 

getLatLn();