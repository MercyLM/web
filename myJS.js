//第一層
$(document).ready(function(){    
    $("#body").addClass("style");
    
    $("footer").text("作者：MercyLM # 請勿盜用");
    
    $("#body").append("<div id = 'top'></div>");
    $("#body").append("<div id = 'bottom'></div>");

    topFuntion();
    bottomFuntion();
});

//第二層
function topFuntion(){
    $("#top").addClass("style");
    
    $("#top").append("<P>使用說明：</p>");
    $("#top").append("<P>請先點選是幾級的裝備，就會顯示屬性！</p>");
    $("#top").append("<P>基礎材料部分尚未齊全，之後會更新！(0715)</p>");
};

function bottomFuntion(){
    $("#bottom").addClass("style");
    
    $("#bottom").append("<div id = 'bottom-topBox'></div>");
    $("#bottom").append("<div id = 'bottom-btmBox'></div>");
    
    topBoxFuntion();
    btmBoxFuntion();
};

//第三層
function topBoxFuntion(){
    $("#bottom-topBox").addClass("style");
    
    $("#bottom-topBox").append("<button id = 'level_20'>20級裝備</button>");
    $("#bottom-topBox").append("<button id = 'level_30'>30級裝備</button>");
    $("#bottom-topBox").append("<button id = 'level_40'>40級裝備</button><br>");
    $("#bottom-topBox").append("<button id = 'type_1' class = 'type'>純力</button>");
    $("#bottom-topBox").append("<button id = 'type_2' class = 'type'>純智</button>");
    $("#bottom-topBox").append("<button id = 'type_3' class = 'type'>純敏</button>");
    $("#bottom-topBox").append("<button id = 'type_4' class = 'type'>力智</button>");
    $("#bottom-topBox").append("<button id = 'type_5' class = 'type'>智敏</button>");
    $("#bottom-topBox").append("<button id = 'type_6' class = 'type'>力敏</button>");

    btn();
};

function btmBoxFuntion(){
    $("#bottom-btmBox").addClass("style");
};

//第四層
function btn(){
    $("#bottom-topBox button").addClass("style");
    $("#bottom-topBox .type").hide();
    $("#bottom-topBox #change").hide();
    
    //- - - - - 20級製作裝 - - - - - 
    var level20_type1_1 = '{"type1":[' +//純力
        '{"name":"鍛鐵盾","item1":"鍛鐵板片3個","item2":"煤礦2個","item3":"","item4":"","item5":""},'+//副手
        '{"name":"烏鐵戰帽","item1":"鍛鐵板片1個","item2":"鑄鐵鎧罩1個","item3":"烏鐵石1個","item4":"煤礦2個","item5":""},'+//頭盔
        '{"name":"烏鐵戰甲","item1":"鍛鐵板片4個","item2":"鑄鐵鎧甲1個","item3":"烏鐵石1個","item4":"煤礦2個","item5":""},'+//衣服              
        '{"name":"烏鐵褲鎧","item1":"鍛鐵板片2個","item2":"鑄鐵鎧褲1個","item3":"烏鐵石1個","item4":"煤礦2個","item5":""},'+//褲子              
        '{"name":"烏鐵戰靴","item1":"鍛鐵板片1個","item2":"鑄鐵脛甲1個","item3":"烏鐵石1個","item4":"煤礦2個","item5":""}]}';//鞋子            
    var level20_type1_2 = '{"type1":[' +//純力               
        '{"name":"鍛鐵盾","item1":"粗鐵礦4個","item2":"煤礦6個","item3":"","item4":"","item5":""},'+//副手               
        '{"name":"烏鐵戰帽","item1":"粗鐵礦2個","item2":"烏鐵石碎片10個","item3":"煤礦5個","item4":"鑄鐵鎧罩1個","item5":""},'+//頭盔               
        '{"name":"烏鐵戰甲","item1":"粗鐵礦4個","item2":"烏鐵石碎片10個","item3":"煤礦7個","item4":"鑄鐵鎧甲1個","item5":""},'+//衣服                
        '{"name":"烏鐵褲鎧","item1":"粗鐵礦2個","item2":"烏鐵石碎片10個","item3":"煤礦5個","item4":"鑄鐵鎧褲1個","item5":""},'+//褲子                
        '{"name":"烏鐵戰靴","item1":"粗鐵礦2個","item2":"烏鐵石碎片10個","item3":"煤礦5個","item4":"鑄鐵脛甲1個","item5":""}]}';//鞋子
    var level20_type2_1 = '{"type2":[' +//純智
        '{"name":"能量札記","item1":"皮革2個","item2":"木質紙100個","item3":"魔法石2個","item4":"堅韌的線團2個","item5":""},'+//副手                
        '{"name":"巫士法帽","item1":"綢緞1個","item2":"巫徒之冠1個","item3":"魔性綢緞1個","item4":"剪刀1個","item5":""},'+//頭盔                
        '{"name":"巫士法袍","item1":"綢緞4個","item2":"巫徒披肩1個","item3":"魔性綢緞1個","item4":"剪刀1個","item5":""},'+//衣服                
        '{"name":"巫士護褲","item1":"綢緞3個","item2":"巫徒護褲1個","item3":"魔性綢緞1個","item4":"剪刀1個","item5":""},'+//褲子                
        '{"name":"巫士尖靴","item1":"綢緞2個","item2":"巫士法靴1個","item3":"魔性綢緞1個","item4":"剪刀1個","item5":""}]}';//鞋子            
    var level20_type2_2 = '{"type2":[' +//純智                
        '{"name":"能量札記","item1":"普通的獸皮4個","item2":"堅韌的蛛絲囊4個","item3":"受損的蛛絲囊16個","item4":"木質紙100個","item5":"魔法石2個","item6":""},'+//副手    
        '{"name":"巫士法帽","item1":"堅韌的蛛絲囊6個","item2":"受損的蛛絲囊18個","item3":"魔法石2個","item4":"巫徒之冠1個","item5":"傑爾特的唾絲1個","item6":"剪刀1個"},'+//頭盔  
        '{"name":"巫士法袍","item1":"堅韌的蛛絲囊14個","item2":"受損的蛛絲囊42個","item3":"魔法石8個","item4":"巫徒披肩1個","item5":"傑爾特的唾絲1個","item6":"剪刀1個"},'+//衣服                
        '{"name":"巫士護褲","item1":"堅韌的蛛絲囊12個","item2":"受損的蛛絲囊36個","item3":"魔法石6個","item4":"巫徒護褲1個","item5":"傑爾特的唾絲1個","item6":"剪刀1個"},'+//褲子                
        '{"name":"巫世尖靴","item1":"堅韌的蛛絲囊8個","item2":"受損的蛛絲囊24個","item3":"魔法石4個","item4":"巫士法靴1個","item5":"傑爾特的唾絲1個","item6":"剪刀1個"}]}';//鞋子
    var level20_type3_1 = '{"type3":[' +//純敏
        '{"name":"輕皮盾","item1":"皮革3個","item2":"堅韌的線團2個","item3":"","item4":"","item5":""},'+//副手
        '{"name":"夜獸影帽","item1":"皮革3個","item2":"野獸戰帽1個","item3":"剪刀1個","item4":"","item5":""},'+//頭盔
        '{"name":"夜獸影甲","item1":"野獸大衫1個","item2":"野性皮革2個","item3":"剪刀1個","item4":"","item5":""},'+//衣服
        '{"name":"夜獸影褲","item1":"皮革4個","item2":"野獸旅褲1個","item3":"野性皮革1個","item4":"剪刀1個","item5":""},'+//褲子
        '{"name":"夜獸影靴","item1":"皮革3個","item2":"野獸旅靴1個","item3":"野性皮革1個","item4":"剪刀1個","item5":""}]}';//鞋子
    var level20_type3_2 = '{"type3":[' +//純敏
        '{"name":"輕皮盾","item1":"完整的獸皮3個","item2":"受損的蛛絲囊12個","item3":"堅韌的蛛絲囊4個","item4":"","item5":"","item6":""},'+//副手
        '{"name":"夜獸影帽","item1":"受損的蛛絲囊12個","item2":"堅韌的蛛絲囊4個","item3":"完整的獸皮4個","item4":"凡狼皮1個","item5":"剪刀1個","item6":"野獸戰帽1個"},'+//頭盔
        '{"name":"夜獸影甲","item1":"受損的蛛絲囊12個","item2":"堅韌的蛛絲囊4個","item3":"完整的獸皮4個","item4":"凡狼皮2個","item5":"剪刀1個","item6":"野獸大衫1個"},'+//衣服
        '{"name":"夜獸影褲","item1":"受損的蛛絲囊12個","item2":"堅韌的蛛絲囊4個","item3":"完整的獸皮4個","item4":"凡狼皮1個","item5":"剪刀1個","item6":"野獸旅褲1個"},'+//褲子
        '{"name":"夜獸影靴","item1":"受損的蛛絲囊12個","item2":"堅韌的蛛絲囊4個","item3":"完整的獸皮4個","item4":"凡狼皮1個","item5":"剪刀1個","item6":"野獸旅靴1個"}]}';//鞋子
    var level20_type4_1 = '{"type4":[' +//力智
        '{"name":"烏銀護帽","item1":"輕鐵板片1個","item2":"網紋護帽1個","item3":"魔性綢緞1個","item4":"煤礦2個","item5":""},'+//副手
        '{"name":"烏銀大衫","item1":"輕鐵板片4個","item2":"網紋行甲1個","item3":"魔性綢緞1個","item4":"煤礦2個","item5":""},'+//頭盔
        '{"name":"烏銀鍛褲","item1":"輕鐵板片2個","item2":"網紋旅褲1個","item3":"魔性綢緞1個","item4":"煤礦2個","item5":""},'+//衣服
        '{"name":"烏銀長靴","item1":"輕鐵板片1個","item2":"網紋長靴1個","item3":"魔性綢緞1個","item4":"煤礦2個","item5":""},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":""}]}';//鞋子
    var level20_type4_2 = '{"type4":[' +//力智
        '{"name":"烏銀護帽","item1":"粗鐵礦2個","item2":"煤礦4個","item3":"受損的蛛絲囊12個","item4":"堅韌的蛛絲囊4個","item5":"傑爾特的唾絲1個","item6":"網紋護帽1個"},'+//副手
        '{"name":"烏銀大衫","item1":"粗鐵礦4個","item2":"煤礦6個","item3":"受損的蛛絲囊12個","item4":"堅韌的蛛絲囊4個","item5":"傑爾特的唾絲1個","item6":"網紋行甲1個"},'+//頭盔
        '{"name":"烏銀鍛褲","item1":"粗鐵礦2個","item2":"煤礦4個","item3":"受損的蛛絲囊12個","item4":"堅韌的蛛絲囊4個","item5":"傑爾特的唾絲1個","item6":"網紋旅褲1個"},'+//衣服
        '{"name":"烏銀長靴","item1":"粗鐵礦2個","item2":"煤礦4個","item3":"受損的蛛絲囊12個","item4":"堅韌的蛛絲囊4個","item5":"傑爾特的唾絲1個","item6":"網紋長靴1個"},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":"","item6":""}]}';//鞋子
    var level20_type5_1 = '{"type5":[' +//智敏
        '{"name":"魔紋旅帽","item1":"皮革1個","item2":"青絲護面1個","item3":"魔性綢緞1個","item4":"剪刀1個","item5":""},'+//副手
        '{"name":"魔紋風衣","item1":"皮革4個","item2":"青絲旅帽1個","item3":"魔性綢緞1個","item4":"剪刀1個","item5":""},'+//頭盔
        '{"name":"魔紋旅褲","item1":"皮革1個","item2":"青絲旅褲1個","item3":"魔性綢緞1個","item4":"剪刀1個","item5":""},'+//衣服
        '{"name":"魔紋旅靴","item1":"皮革2個","item2":"青絲長靴1個","item3":"魔性綢緞1個","item4":"剪刀1個","item5":""},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":""}]}';//鞋子
    var level20_type5_2 = '{"type5":[' +//智敏
        '{"name":"魔紋旅帽","item1":"受損的蛛絲囊12個","item2":"堅韌的蛛絲囊4個","item3":"完整的獸皮1個","item4":"傑爾特的唾絲1個","item5":"剪刀1個","item6":"青絲護面1個"},'+//副手
        '{"name":"魔紋風衣","item1":"受損的蛛絲囊18個","item2":"堅韌的蛛絲囊6個","item3":"完整的獸皮4個","item4":"傑爾特的唾絲1個","item5":"剪刀1個","item6":"青絲旅帽1個"},'+//頭盔
        '{"name":"魔紋旅褲","item1":"受損的蛛絲囊12個","item2":"堅韌的蛛絲囊4個","item3":"完整的獸皮1個","item4":"傑爾特的唾絲1個","item5":"剪刀1個","item6":"青絲旅褲1個"},'+//衣服
        '{"name":"魔紋旅靴","item1":"受損的蛛絲囊12個","item2":"堅韌的蛛絲囊4個","item3":"完整的獸皮2個","item4":"傑爾特的唾絲1個","item5":"剪刀1個","item6":"青絲長靴1個"},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":"","item6":""}]}';//鞋子
    var level20_type6_1 = '{"type6":[' +//力敏
        '{"name":"輕鐵盾","item1":"輕鐵板片2個","item2":"皮革1個","item3":"煤礦2個","item4":"","item5":""},'+//副手
        '{"name":"烏鐵輕盔","item1":"輕鐵板片1個","item2":"輕鐵護面1個","item3":"堅硬外殼2個","item4":"烏鐵石碎片3個","item5":"煤礦2個"},'+//頭盔
        '{"name":"烏鐵鱗甲","item1":"輕鐵板片3個","item2":"輕鐵胸甲1個","item3":"堅硬外殼5個","item4":"烏鐵石碎片5個","item5":"煤礦2個"},'+//衣服
        '{"name":"烏鐵護腿","item1":"輕鐵板片2個","item2":"輕鐵護褲1個","item3":"堅硬外殼4個","item4":"烏鐵石碎片4個","item5":"煤礦2個"},'+//褲子
        '{"name":"烏鐵輕靴","item1":"輕鐵板片1個","item2":"輕鐵馬靴1個","item3":"堅硬外殼2個","item4":"烏鐵石碎片3個","item5":"煤礦2個"}]}';//鞋子
    var level20_type6_2 = '{"type6":[' +//力敏
        '{"name":"輕鐵盾","item1":"粗鐵礦2個","item2":"煤礦4個","item3":"完整的獸皮1個","item4":"受損的蛛絲囊6個","item5":"堅韌的蛛絲囊2個"},'+//副手
        '{"name":"烏鐵輕盔","item1":"粗鐵礦2個","item2":"煤礦4個","item3":"烏鐵石碎片3個","item4":"堅硬外殼2個","item5":"輕鐵護面1個"},'+//頭盔
        '{"name":"烏鐵鱗甲","item1":"粗鐵礦4個","item2":"煤礦6個","item3":"烏鐵石碎片5個","item4":"堅硬外殼5個","item5":"輕鐵胸甲1個"},'+//衣服
        '{"name":"烏鐵護腿","item1":"粗鐵礦2個","item2":"煤礦4個","item3":"烏鐵石碎片4個","item4":"堅硬外殼4個","item5":"輕鐵護褲1個"},'+//褲子
        '{"name":"烏鐵輕靴","item1":"粗鐵礦2個","item2":"煤礦4個","item3":"烏鐵石碎片3個","item4":"堅硬外殼2個","item5":"輕鐵馬靴1個"}]}';//鞋子
    //- - - - - 30級製作裝 - - - - -
    var level30_type1_1 = '{"type1":[' +//純力
        '{"name":"烏鋼盾","item1":"鍛鐵板片3個","item2":"烏鐵石4個","item3":"煤礦4個","item4":"妖魔獠牙圖騰2個","item5":""},'+//副手
        '{"name":"妖魔戰鬥面甲","item1":"鍛鐵板片3個","item2":"烏鐵戰帽1個","item3":"烏鐵石4個","item4":"妖魔鎧甲碎片3個","item5":"煤礦4個"},'+//頭盔
        '{"name":"妖魔戰鬥鎧甲","item1":"鍛鐵板片6個","item2":"烏鐵戰甲1個","item3":"烏鐵石6個","item4":"妖魔鎧甲碎片3個","item5":"煤礦4個"},'+//衣服
        '{"name":"妖魔戰鬥褲鎧","item1":"鍛鐵板片5個","item2":"烏鐵褲鎧1個","item3":"烏鐵石5個","item4":"妖魔鎧甲碎片3個","item5":"煤礦4個"},'+//褲子
        '{"name":"妖魔戰鬥戰靴","item1":"鍛鐵板片3個","item2":"烏鐵戰靴1個","item3":"烏鐵石3個","item4":"妖魔鎧甲碎片3個","item5":"煤礦2個"}]}';//鞋子
    var level30_type1_2 = '{"type1":[' +//純力
        '{"name":"烏鋼盾","item1":"粗鐵礦4個","item2":"煤礦10個","item3":"烏鐵石碎片20個","item4":"妖魔獠牙圖騰2個","item5":""},'+//副手
        '{"name":"妖魔戰鬥面甲","item1":"粗鐵礦4個","item2":"煤礦10個","item3":"烏鐵石碎片20個","item4":"妖魔鎧甲碎片3個","item5":"烏鐵戰帽1個"},'+//頭盔
        '{"name":"妖魔戰鬥鎧甲","item1":"粗鐵礦6個","item2":"煤礦13個","item3":"烏鐵石碎片30個","item4":"妖魔鎧甲碎片3個","item5":"烏鐵戰甲1個"},'+//衣服
        '{"name":"妖魔戰鬥褲鎧","item1":"粗鐵礦6個","item2":"煤礦13個","item3":"烏鐵石碎片30個","item4":"妖魔鎧甲碎片3個","item5":"烏鐵褲鎧1個"},'+//褲子
        '{"name":"妖魔戰鬥戰靴","item1":"粗鐵礦4個","item2":"煤礦8個","item3":"烏鐵石碎片20個","item4":"妖魔鎧甲碎片3個","item5":"烏鐵戰靴1個"}]}';//鞋子
    var level30_type2_1 = '{"type2":[' +//純智
        '{"name":"風暴之書","item1":"皮革4個","item2":"木紋紙100個","item3":"轉印石4個","item4":"堅韌的線團3個","item5":"妖魔獠牙圖騰2個"},'+//副手
        '{"name":"妖魔咒術之帽","item1":"巫士法帽1個","item2":"綢緞1個","item3":"魔性綢緞4個","item4":"妖魔咒術碎片3個","item5":"烏鐵剪1個"},'+//頭盔
        '{"name":"妖魔咒術法袍","item1":"巫士法袍1個","item2":"綢緞2個","item3":"魔性綢緞6個","item4":"妖魔咒術碎片3個","item5":"烏鐵剪1個"},'+//衣服
        '{"name":"妖魔咒術護褲","item1":"巫士護褲1個","item2":"綢緞2個","item3":"魔性綢緞5個","item4":"妖魔咒術碎片3個","item5":"烏鐵剪1個"},'+//褲子
        '{"name":"妖魔咒術尖靴","item1":"巫士尖靴1個","item2":"綢緞1個","item3":"魔性綢緞4個","item4":"妖魔咒術碎片3個","item5":"烏鐵剪1個"}]}';//鞋子
    var level30_type2_2 = '{"type2":[' +//純智
        '{"name":"風暴之書","item1":"橡木原木40個","item2":"轉印石4個","item3":"完整的獸皮4個","item4":"受損的蛛絲囊18個","item5":"堅韌的蛛絲囊6個","item6":"妖魔獠牙圖騰2個","item7":"","item8":"","item9":""},'+//副手
        '{"name":"妖魔咒術之帽","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊42個","item5":"堅韌的蛛絲囊14個","item6":"傑爾特的唾絲4個","item7":"魔法石2個","item8":"妖魔咒術碎片3個","item9":"巫士法帽1個"},'+//頭盔
        '{"name":"妖魔咒術法袍","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊66個","item5":"堅韌的蛛絲囊22個","item6":"傑爾特的唾絲6個","item7":"魔法石4個","item8":"妖魔咒術碎片3個","item9":"巫士法袍1個"},'+//衣服
        '{"name":"妖魔咒術護褲","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊60個","item5":"堅韌的蛛絲囊20個","item6":"傑爾特的唾絲5個","item7":"魔法石4個","item8":"妖魔咒術碎片3個","item9":"巫士護褲1個"},'+//褲子
        '{"name":"妖魔咒術尖靴","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊42個","item5":"堅韌的蛛絲囊14個","item6":"傑爾特的唾絲4個","item7":"魔法石2個","item8":"妖魔咒術碎片3個","item9":"巫士尖靴1個"}]}';//鞋子
    var level30_type3_1 = '{"type3":[' +//純敏
        '{"name":"妖魔狙殺箭袋","item1":"野性皮革2個","item2":"烏鐵石2個","item3":"妖魔狙殺圖騰2個","item4":"烏鐵剪1個","item5":""},'+//箭袋
        '{"name":"妖魔盾","item1":"野性皮革2個","item2":"烏鐵石2個","item3":"煤礦4個","item4":"妖魔獠牙圖騰2個","item5":""},'+//副手
        '{"name":"妖魔夜行面具","item1":"夜獸影帽1個","item2":"野性皮革3個","item3":"妖魔夜行碎片3個","item4":"烏鐵剪1個","item5":""},'+//頭盔
        '{"name":"妖魔夜行影甲","item1":"夜獸影甲1個","item2":"野性皮革5個","item3":"妖魔夜行碎片3個","item4":"烏鐵剪1個","item5":""},'+//衣服
        '{"name":"妖魔夜行影褲","item1":"夜獸影褲1個","item2":"野性皮革5個","item3":"妖魔夜行碎片3個","item4":"烏鐵剪1個","item5":""},'+//褲子
        '{"name":"妖魔夜行影靴","item1":"夜獸影靴1個","item2":"野性皮革4個","item3":"妖魔夜行碎片3個","item4":"烏鐵剪1個","item5":""}]}';//鞋子
    var level30_type3_2 = '{"type3":[' +//純敏
        '{"name":"妖魔狙殺箭袋","item1":"完整的皮革2個","item2":"凡郎皮2個","item3":"受損的蛛絲囊12個","item4":"堅韌的蛛絲囊4個","item5":"煤礦3個","item6":"烏鐵石碎片20個","item7":"妖魔獠牙圖騰2個","item8":"","item9":""},'+//箭袋
        '{"name":"妖魔盾","item1":"煤礦5個","item2":"烏鐵石碎片10個","item3":"完整的獸皮2個","item4":"凡郎皮2個","item5":"受損的蛛絲囊12個","item6":"堅韌的蛛絲囊4個","item7":"妖魔獠牙圖騰2個","item8":"妖魔夜行碎片3個","item9":"夜獸影帽1個"},'+//副手
        '{"name":"妖魔夜行面具","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊12個","item5":"堅韌的蛛絲囊4個","item6":"完整的獸皮3個","item7":"凡狼皮3個","item8":"妖魔夜行碎片3個","item9":"夜獸影甲1個"},'+//頭盔
        '{"name":"妖魔夜行影甲","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊24個","item5":"堅韌的蛛絲囊8個","item6":"完整的獸皮5個","item7":"凡狼皮5個","item8":"妖魔夜行碎片3個","item9":"夜獸影褲1個"},'+//衣服
        '{"name":"妖魔夜行影褲","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊24個","item5":"堅韌的蛛絲囊8個","item6":"完整的獸皮5個","item7":"凡狼皮5個","item8":"妖魔夜行碎片3個","item9":"夜獸影靴1個"},'+//褲子
        '{"name":"妖魔夜行影靴","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊18個","item5":"堅韌的蛛絲囊6個","item6":"完整的獸皮4個","item7":"凡狼皮4個","item8":"","item9":""}]}';//鞋子
    var level30_type4_1 = '{"type4":[' +//力智
        '{"name":"妖魔鎖鏈頭盔","item1":"烏銀護帽1個","item2":"輕鐵板片2個","item3":"妖魔鎖鏈碎片3個","item4":"魔性綢緞2個","item5":"煤礦4個"},'+//副手
        '{"name":"妖魔鎖鏈護甲","item1":"烏銀大衫1個","item2":"輕鐵板片4個","item3":"妖魔鎖鏈碎片3個","item4":"魔性綢緞4個","item5":"煤礦4個"},'+//頭盔
        '{"name":"妖魔鎖鏈護褲","item1":"烏銀鍛褲1個","item2":"輕鐵板片3個","item3":"妖魔鎖鏈碎片3個","item4":"魔性綢緞3個","item5":"煤礦4個"},'+//衣服
        '{"name":"妖魔鎖鏈長靴","item1":"烏銀長靴1個","item2":"輕鐵板片2個","item3":"妖魔鎖鏈碎片3個","item4":"魔性綢緞2個","item5":"煤礦4個"},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":""}]}';//鞋子
    var level30_type4_2 = '{"type4":[' +//力智
        '{"name":"妖魔鎖鏈頭盔","item1":"粗鐵礦2個","item2":"煤礦6個","item3":"受損的蛛絲囊18個","item4":"堅韌的蛛絲囊6個","item5":"傑爾特的唾絲2個","item6":"妖魔鎖鏈碎片3個","item7":"烏銀護帽1個"},'+//副手
        '{"name":"妖魔鎖鏈護甲","item1":"粗鐵礦4個","item2":"煤礦8個","item3":"受損的蛛絲囊36個","item4":"堅韌的蛛絲囊12個","item5":"傑爾特的唾絲4個","item6":"妖魔鎖鏈碎片3個","item7":"烏銀大衫1個"},'+//頭盔
        '{"name":"妖魔鎖鏈護褲","item1":"粗鐵礦4個","item2":"煤礦8個","item3":"受損的蛛絲囊24個","item4":"堅韌的蛛絲囊8個","item5":"傑爾特的唾絲3個","item6":"妖魔鎖鏈碎片3個","item7":"烏銀鍛褲1個"},'+//衣服
        '{"name":"妖魔鎖鏈長靴","item1":"粗鐵礦2個","item2":"煤礦6個","item3":"受損的蛛絲囊18個","item4":"堅韌的蛛絲囊6個","item5":"傑爾特的唾絲2個","item6":"妖魔鎖鏈碎片3個","item7":"烏銀長靴1個"},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":"","item6":"","item7":""}]}';//鞋子
    var level30_type5_1 = '{"type5":[' +//智敏
        '{"name":"妖魔圖騰扁帽","item1":"魔紋旅帽1個","item2":"野性皮革1個","item3":"妖魔圖騰碎片3個","item4":"魔性綢緞1個","item5":"烏鐵剪1個"},'+//副手
        '{"name":"妖魔圖騰披肩","item1":"魔紋風衣1個","item2":"野性皮革3個","item3":"妖魔圖騰碎片3個","item4":"模型綢緞3個","item5":"烏鐵剪1個"},'+//頭盔
        '{"name":"妖魔圖騰長褲","item1":"魔紋旅褲1個","item2":"野性皮革2個","item3":"妖魔圖騰碎片3個","item4":"魔性綢緞2個","item5":"烏鐵剪1個"},'+//衣服
        '{"name":"妖魔圖騰長靴","item1":"魔紋旅靴1個","item2":"野性皮革1個","item3":"妖魔圖騰碎片3個","item4":"魔性綢緞1個","item5":"烏鐵剪1個"},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":""}]}';//鞋子
    var level30_type5_2 = '{"type5":[' +//智敏
        '{"name":"妖魔圖騰扁帽","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊12個","item5":"堅韌的蛛絲囊4個","item6":"完整的獸皮1個","item7":"凡狼皮1個","item8":"傑爾特的唾絲1個","item9":"妖魔圖騰碎片3個","item10":"魔紋旅帽1個"},'+//副手
        '{"name":"妖魔圖騰披肩","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊36個","item5":"堅韌的蛛絲囊12個","item6":"完整的獸皮3個","item7":"凡狼皮3個","item8":"傑爾特的唾絲3個","item9":"妖魔圖騰碎片3個","item10":"魔紋風衣1個"},'+//頭盔
        '{"name":"妖魔圖騰長褲","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊24個","item5":"堅韌的蛛絲囊8個","item6":"完整的獸皮2個","item7":"凡狼皮2個","item8":"傑爾特的唾絲2個","item9":"妖魔圖騰碎片3個","item10":"魔紋旅褲1個"},'+//衣服
        '{"name":"妖魔圖騰長靴","item1":"粗鐵礦3個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊12個","item5":"堅韌的蛛絲囊4個","item6":"完整的獸皮1個","item7":"凡狼皮1個","item8":"傑爾特的唾絲1個","item9":"妖魔圖騰碎片3個","item10":"魔紋旅靴1個"},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":"","item6":"","item7":"","item8":"","item9":"","item10":""}]}';//鞋子
    var level30_type6_1 = '{"type6":[' +//力敏
        '{"name":"烏鋼輕盾","item1":"輕鐵板片2個","item2":"皮革3個","item3":"烏鐵石2個","item4":"煤礦4個","item5":"妖魔獠牙圖騰2個"},'+//副手
        '{"name":"妖魔游擊輕盔","item1":"輕鐵板片4個","item2":"烏鐵輕盔1個","item3":"妖魔輕甲碎片3個","item4":"烏鐵石2個","item5":"煤礦4個"},'+//頭盔
        '{"name":"妖魔游擊輕甲","item1":"輕鐵板片6個","item2":"烏鐵鱗甲1個","item3":"妖魔輕甲碎片3個","item4":"烏鐵石4個","item5":"煤礦4個"},'+//衣服
        '{"name":"妖魔游擊護腿","item1":"輕鐵板片5個","item2":"烏鐵護腿1個","item3":"妖魔輕甲碎片3個","item4":"烏鐵石3個","item5":"煤礦4個"},'+//褲子
        '{"name":"妖魔游擊輕靴","item1":"輕鐵板片4個","item2":"烏鐵輕靴1個","item3":"妖魔輕甲碎片3個","item4":"烏鐵石2個","item5":"煤礦4個"}]}';//鞋子
    var level30_type6_2 = '{"type6":[' +//力敏
        '{"name":"烏鋼輕盾","item1":"粗鐵礦2個","item2":"煤礦7個","item3":"烏鐵石碎片10個","item4":"完整的獸皮3個","item5":"受損的蛛絲囊6個","item6":"堅韌蛛絲囊2個","item7":"妖魔獠牙圖騰2個"},'+//副手
        '{"name":"妖魔游擊輕盔","item1":"粗鐵礦4個","item2":"煤礦9個","item3":"烏鐵石碎片10個","item4":"妖魔輕甲碎片3個","item5":"烏鐵輕盔1個","item6":"","item7":""},'+//頭盔
        '{"name":"妖魔游擊輕甲","item1":"粗鐵礦6個","item2":"煤礦12個","item3":"烏鐵石碎片20個","item4":"妖魔輕甲碎片3個","item5":"烏鐵鱗甲1個","item6":"","item7":""},'+//衣服
        '{"name":"妖魔游擊護腿","item1":"粗鐵礦6個","item2":"煤礦12個","item3":"烏鐵石碎片20個","item4":"妖魔輕甲碎片3個","item5":"烏鐵護腿1個","item6":"","item7":""},'+//褲子
        '{"name":"妖魔游擊輕靴","item1":"粗鐵礦4個","item2":"煤礦9個","item3":"烏鐵石碎片10個","item4":"妖魔輕甲碎片3個","item5":"烏鐵輕靴1個","item6":"","item7":""}]}';//鞋子
    //- - - - - 40級製作裝 - - - - -
    var level40_type1_1 = '{"type1":[' +//純力
        '{"name":"金鐵之盾","item1":"叢林原木18個","item2":"光輝鐵板7個","item3":"煤礦3個","item4":"木雕刻刀1個","item5":""},'+//副手
        '{"name":"光耀戰盔","item1":"光輝鐵板5個","item2":"煤礦1個","item3":"","item4":"","item5":""},'+//頭盔
        '{"name":"光耀戰甲","item1":"光輝鐵板8個","item2":"煤礦1個","item3":"","item4":"","item5":""},'+//衣服
        '{"name":"光耀褲鎧","item1":"光耀鐵板7個","item2":"煤礦1個","item3":"","item4":"","item5":""},'+//褲子
        '{"name":"光耀戰靴","item1":"光耀鐵板6個","item2":"煤礦1個","item3":"","item4":"","item5":""}]}';//鞋子
    var level40_type1_2 = '{"type1":[' +//純力
        '{"name":"金鐵之盾","item1":"粗鐵礦5個","item2":"暗鐵礦42個","item3":"煤礦45個","item4":"橡木木材64個","item5":"叢林原木18個","item6":"附魔石2個"},'+//副手
        '{"name":"光耀戰盔","item1":"暗鐵礦30個","item2":"煤礦31個","item3":"荒蕪碎片5個","item4":"","item5":"","item6":""},'+//頭盔
        '{"name":"光耀戰甲","item1":"暗鐵礦48個","item2":"煤礦49個","item3":"荒蕪碎片8個","item4":"","item5":"","item6":""},'+//衣服
        '{"name":"光耀褲鎧","item1":"暗鐵礦42個","item2":"煤礦43個","item3":"荒蕪碎片7個","item4":"","item5":"","item6":""},'+//褲子
        '{"name":"光耀戰靴","item1":"暗鐵礦36個","item2":"煤礦37個","item3":"荒蕪碎片6個","item4":"","item5":"","item6":""}]}';//鞋子
    var level40_type2_1 = '{"type2":[' +//純智
        '{"name":"智慧隨從","item1":"叢林原木18個","item2":"狂獸皮革1個","item3":"銀綢7個","item4":"符紋紙64個","item5":"烏鐵剪1個","item6":"木雕刻刀"},'+//副手
        '{"name":"銀光法帽","item1":"銀綢5個","item2":"烏鐵剪1個","item3":"","item4":"","item5":"","item6":""},'+//頭盔
        '{"name":"銀光法袍","item1":"銀綢8個","item2":"烏鐵剪1個","item3":"","item4":"","item5":"","item6":""},'+//衣服
        '{"name":"銀光褲裙","item1":"銀綢7個","item2":"烏鐵剪1個","item3":"","item4":"","item5":"","item6":""},'+//褲子
        '{"name":"銀光之履","item1":"銀綢6個","item2":"烏鐵剪1個","item3":"","item4":"","item5":"","item6":""}]}';//鞋子
    var level40_type2_2 = '{"type2":[' +//純智
        '{"name":"智慧隨從","item1":"粗鐵礦8個","item2":"煤礦2個","item3":"橡木木材64個","item4":"叢林原木60個","item5":"受損的蛛絲囊72個","item6":"堅韌的蛛絲囊24個","item7":"完整的獸皮1個","item8":"狂狼皮2個","item9":"銀化魔絲21個","item10":"附魔石9個"},'+//副手
        '{"name":"銀光法帽","item1":"受損的蛛絲囊42個","item2":"堅韌的蛛絲囊14個","item3":"銀化魔絲15個","item4":"附魔石5個","item5":"","item6":"","item7":"","item8":"","item9":"","item10":""},'+//頭盔
        '{"name":"銀光法袍","item1":"受損的蛛絲囊66個","item2":"堅韌的蛛絲囊22個","item3":"銀化魔絲24個","item4":"附魔石8個","item5":"","item6":"","item7":"","item8":"","item9":"","item10":""},'+//衣服
        '{"name":"銀光褲裙","item1":"受損的蛛絲囊60個","item2":"堅韌的蛛絲囊20個","item3":"銀化魔絲21個","item4":"附魔石7個","item5":"","item6":"","item7":"","item8":"","item9":"","item10":""},'+//褲子
        '{"name":"銀光之履","item1":"受損的蛛絲囊48個","item2":"堅韌的蛛絲囊16個","item3":"銀化魔絲18個","item4":"附魔石6個","item5":"","item6":"","item7":"","item8":"","item9":"","item10":""}]}';//鞋子
    var level40_type3_1 = '{"type3":[' +//純敏
        '{"name":"光耀箭袋","item1":"狂獸皮革6個","item2":"烏鐵石4個","item3":"妖魔狙殺箭袋1個","item4":"烏鐵剪2個","item5":""},'+//箭袋
        '{"name":"狂獸之盾","item1":"叢林原木18個","item2":"狂獸皮革7個","item3":"烏鐵剪1個","item4":"木雕刻刀1個","item5":""},'+//副手
        '{"name":"狂獸皮盔","item1":"狂獸皮革5個","item2":"烏鐵剪1個","item3":"","item4":"","item5":""},'+//頭盔
        '{"name":"狂獸皮甲","item1":"狂獸皮革8個","item2":"烏鐵剪1個","item3":"","item4":"","item5":""},'+//衣服
        '{"name":"狂獸皮褲","item1":"狂獸皮革7個","item2":"烏鐵剪1個","item3":"","item4":"","item5":""},'+//褲子
        '{"name":"狂獸皮靴","item1":"狂獸皮革6個","item2":"烏鐵剪1個","item3":"","item4":"","item5":""}]}';//鞋子
    var level40_type3_2 = '{"type3":[' +//純敏
        '{"name":"光耀箭袋","item1":"粗鐵礦6個","item2":"煤礦6個","item3":"烏鐵石碎片40個","item4":"受損的蛛絲囊36個","item5":"堅韌的蛛絲囊12個","item6":"完整的獸皮6個","item7":"狂狼皮12個","item8":"妖魔狙殺箭袋1個","item9":"","item10":""},'+//箭袋
        '{"name":"狂獸之盾","item1":"粗鐵礦8個","item2":"煤礦2個","item3":"烏鐵石碎片10個","item4":"受損的蛛絲囊42個","item5":"堅韌的蛛絲囊14個","item6":"完整的獸皮7個","item7":"狂狼皮14個","item8":"橡木木材64個","item9":"叢林原木18個","item10":"附魔石2個"},'+//副手
        '{"name":"狂獸皮盔","item1":"受損的蛛絲囊30個","item2":"堅韌的蛛絲囊10個","item3":"完整的獸皮5個","item4":"狂狼皮10個","item5":"","item6":"","item7":"","item8":"","item9":"","item10":""},'+//頭盔
        '{"name":"狂獸皮甲","item1":"受損的蛛絲囊48個","item2":"堅韌的蛛絲囊16個","item3":"完整的獸皮8個","item4":"狂狼皮16個","item5":"","item6":"","item7":"","item8":"","item9":"","item10":""},'+//衣服
        '{"name":"狂獸皮褲","item1":"受損的蛛絲囊42個","item2":"堅韌的蛛絲囊14個","item3":"完整的獸皮7個","item4":"狂狼皮14個","item5":"","item6":"","item7":"","item8":"","item9":"","item10":""},'+//褲子
        '{"name":"狂獸皮靴","item1":"受損的蛛絲囊36個","item2":"堅韌的蛛絲囊12個","item3":"完整的獸皮6個","item4":"狂狼皮12個","item5":"","item6":"","item7":"","item8":"","item9":"","item10":""}]}';//鞋子
    var level40_type4_1 = '{"type4":[' +//力智
        '{"name":"光芒聖盔","item1":"光輝鐵板3個","item2":"銀綢2個","item3":"煤礦1個","item4":"","item5":""},'+//副手
        '{"name":"光芒鏈甲","item1":"光輝鐵板6個","item2":"銀綢3個","item3":"煤礦1個","item4":"","item5":""},'+//頭盔
        '{"name":"光芒護腿","item1":"光輝鐵板5個","item2":"銀綢3個","item3":"煤礦1個","item4":"","item5":""},'+//衣服
        '{"name":"光芒鎖鏈靴","item1":"光輝鐵板3個","item2":"銀綢2個","item3":"煤礦1個","item4":"","item5":""},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":""}]}';//鞋子
    var level40_type4_2 = '{"type4":[' +//力智
        '{"name":"光芒聖盔","item1":"暗鐵礦30個","item2":"煤礦31個","item3":"荒蕪碎片5個","item4":"受損的蛛絲囊18個","item5":"堅韌的蛛絲囊6個","item6":"銀化魔絲6個","item7":"附魔石2個"},'+//副手
        '{"name":"光芒鏈甲","item1":"暗鐵礦30個","item2":"煤礦31個","item3":"荒蕪碎片5個","item4":"受損的蛛絲囊24個","item5":"堅韌的蛛絲囊8個","item6":"銀化魔絲9個","item7":"附魔石3個"},'+//頭盔
        '{"name":"光芒護腿","item1":"暗鐵礦30個","item2":"煤礦31個","item3":"荒蕪碎片5個","item4":"受損的蛛絲囊24個","item5":"堅韌的蛛絲囊8個","item6":"銀化魔絲9個","item7":"附魔石3個"},'+//衣服
        '{"name":"光芒鎖鏈靴","item1":"暗鐵礦30個","item2":"煤礦31個","item3":"荒蕪碎片5個","item4":"受損的蛛絲囊18個","item5":"堅韌的蛛絲囊6個","item6":"銀化魔絲6個","item7":"附魔石2個"},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":"","item6":"","item7":""}]}';//鞋子
    var level40_type5_1 = '{"type5":[' +//智敏
        '{"name":"光耀面具","item1":"狂獸皮革3個","item2":"銀綢2個","item3":"烏鐵剪1個","item4":"","item5":""},'+//副手
        '{"name":"光耀披肩","item1":"狂獸皮革6個","item2":"銀綢3個","item3":"烏鐵剪1個","item4":"","item5":""},'+//頭盔
        '{"name":"光耀襯褲","item1":"狂獸皮革5個","item2":"銀綢3個","item3":"烏鐵剪1個","item4":"","item5":""},'+//衣服
        '{"name":"光耀長靴","item1":"狂獸皮革3個","item2":"銀綢2個","item3":"烏鐵剪1個","item4":"","item5":""},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":""}]}';//鞋子
    var level40_type5_2 = '{"type5":[' +//智敏
        '{"name":"光耀面具","item1":"暗鐵礦18個","item2":"煤礦19個","item3":"荒蕪碎片3個","item4":"受損的蛛絲囊18個","item5":"堅韌的蛛絲囊6個","item6":"銀化魔絲6個","item7":"附魔石2個"},'+//副手
        '{"name":"光耀披肩","item1":"暗鐵礦36個","item2":"煤礦37個","item3":"荒蕪碎片6個","item4":"受損的蛛絲囊24個","item5":"堅韌的蛛絲囊8個","item6":"銀化魔絲9個","item7":"附魔石3個"},'+//頭盔
        '{"name":"光耀襯褲","item1":"暗鐵礦30個","item2":"煤礦31個","item3":"荒蕪碎片5個","item4":"受損的蛛絲囊24個","item5":"堅韌的蛛絲囊8個","item6":"銀化魔絲9個","item7":"附魔石3個"},'+//衣服
        '{"name":"光耀長靴","item1":"暗鐵礦18個","item2":"煤礦19個","item3":"荒蕪碎片3個","item4":"受損的蛛絲囊18個","item5":"堅韌的蛛絲囊6個","item6":"銀化魔絲6個","item7":"附魔石2個"},'+//褲子
        '{"name":"","item1":"","item2":"","item3":"","item4":"","item5":"","item6":"","item7":""}]}';//鞋子
    var level40_type6_1 = '{"type6":[' +//力敏
        '{"name":"光耀輕盾","item1":"叢林原木18個","item2":"狂獸皮革4個","item3":"光輝鐵板4個","item4":"煤礦2個","item5":"烏鐵剪1個","item6":"木雕刻刀"},'+//副手
        '{"name":"光耀護盔","item1":"光輝鐵板3個","item2":"狂獸皮革2個","item3":"煤礦1個","item4":"","item5":"","item6":""},'+//頭盔
        '{"name":"光輝輕甲","item1":"光輝鐵板6個","item2":"狂獸皮革3個","item3":"煤礦1個","item4":"","item5":"","item6":""},'+//衣服
        '{"name":"光輝護腿","item1":"光輝鐵板5個","item2":"狂獸皮革3個","item3":"煤礦1個","item4":"","item5":"","item6":""},'+//褲子
        '{"name":"光輝輕靴","item1":"光輝鐵板3個","item2":"狂獸皮革2個","item3":"煤礦1個","item4":"","item5":"","item6":""}]}';//鞋子
    var level40_type6_2 = '{"type6":[' +//力敏
        '{"name":"光耀輕盾","item1":"粗鐵礦8個","item2":"暗鐵礦24個","item3":"煤礦28個","item4":"烏鐵石碎片10個","item5":"橡木木材64個","item6":"叢林原木18個","item7":"附魔石2個","item8":"受損的蛛絲囊24個","item9":"堅韌的蛛絲囊8個","item10":"完整的獸皮4個","item11":"狂狼皮8個"},'+//副手
        '{"name":"光耀護盔","item1":"暗鐵礦18個","item2":"煤礦19個","item3":"荒蕪碎片3個","item4":"受損的蛛絲囊12個","item5":"堅韌的蛛絲囊4個","item6":"完整的獸皮2個","item7":"狂狼皮4個","item8":"","item9":"","item10":"","item11":""},'+//頭盔
        '{"name":"光輝輕甲","item1":"暗鐵礦36個","item2":"煤礦37個","item3":"荒蕪碎片6個","item4":"受損的蛛絲囊18個","item5":"堅韌的蛛絲囊6個","item6":"完整的獸皮3個","item7":"狂狼皮6個","item8":"","item9":"","item10":"","item11":""},'+//衣服
        '{"name":"光輝護腿","item1":"暗鐵礦30個","item2":"煤礦31個","item3":"荒蕪碎片5個","item4":"受損的蛛絲囊18個","item5":"堅韌的蛛絲囊6個","item6":"完整的獸皮3個","item7":"狂狼皮6個","item8":"","item9":"","item10":"","item11":""},'+//褲子
        '{"name":"光輝輕靴","item1":"暗鐵礦18個","item2":"煤礦19個","item3":"荒蕪碎片3個","item4":"受損的蛛絲囊12個","item5":"堅韌的蛛絲囊4個","item6":"完整的獸皮2個","item7":"狂狼皮4個","item8":"","item9":"","item10":"","item11":""}]}';//鞋子
                
    var obj20_1 = JSON.parse(level20_type1_1);
    var obj20_10 = JSON.parse(level20_type1_2);
    var obj20_2 = JSON.parse(level20_type2_1);
    var obj20_20 = JSON.parse(level20_type2_2);
    var obj20_3 = JSON.parse(level20_type3_1);
    var obj20_30 = JSON.parse(level20_type3_2);
    var obj20_4 = JSON.parse(level20_type4_1);
    var obj20_40 = JSON.parse(level20_type4_2);
    var obj20_5 = JSON.parse(level20_type5_1);
    var obj20_50 = JSON.parse(level20_type5_2);
    var obj20_6 = JSON.parse(level20_type6_1);
    var obj20_60 = JSON.parse(level20_type6_2);
            
    var obj30_1 = JSON.parse(level30_type1_1);
    var obj30_10 = JSON.parse(level30_type1_2);
    var obj30_2 = JSON.parse(level30_type2_1);
    var obj30_20 = JSON.parse(level30_type2_2);
    var obj30_3 = JSON.parse(level30_type3_1);
    var obj30_30 = JSON.parse(level30_type3_2);
    var obj30_4 = JSON.parse(level30_type4_1);
    var obj30_40 = JSON.parse(level30_type4_2);
    var obj30_5 = JSON.parse(level30_type5_1);
    var obj30_50 = JSON.parse(level30_type5_2);
    var obj30_6 = JSON.parse(level30_type6_1);
    var obj30_60 = JSON.parse(level30_type6_2);
            
    var obj40_1 = JSON.parse(level40_type1_1);
    var obj40_10 = JSON.parse(level40_type1_2);
    var obj40_2 = JSON.parse(level40_type2_1);
    var obj40_20 = JSON.parse(level40_type2_2);
    var obj40_3 = JSON.parse(level40_type3_1);
    var obj40_30 = JSON.parse(level40_type3_2);
    var obj40_4 = JSON.parse(level40_type4_1);
    var obj40_40 = JSON.parse(level40_type4_2);
    var obj40_5 = JSON.parse(level40_type5_1);
    var obj40_50 = JSON.parse(level40_type5_2);
    var obj40_6 = JSON.parse(level40_type6_1);
    var obj40_60 = JSON.parse(level40_type6_2);
    //- - - 20
    $("#level_20").click(function(){
        $("#bottom-btmBox").html("");
        $("#bottom-topBox .type").show(200);               
        $(document).ready(function(){
            $("#type_1").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj20_1.type1.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_1.type1[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_1.type1[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_1.type1[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_1.type1[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_1.type1[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_1.type1[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_10.type1[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_10.type1[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_10.type1[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_10.type1[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_10.type1[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_10.type1[i].item5 + "</span>" + 
                        "</p>";
                }
        
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_2").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj20_2.type2.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_2.type2[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_2.type2[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_2.type2[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_2.type2[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_2.type2[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_2.type2[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_20.type2[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_20.type2[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_20.type2[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_20.type2[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_20.type2[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_20.type2[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj20_20.type2[i].item6 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_3").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj20_3.type3.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_3.type3[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_3.type3[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_3.type3[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_3.type3[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_3.type3[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_3.type3[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_30.type3[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_30.type3[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_30.type3[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_30.type3[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_30.type3[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_30.type3[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj20_30.type3[i].item6 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_4").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj20_4.type4.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_4.type4[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_4.type4[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_4.type4[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_4.type4[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_4.type4[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_4.type4[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_40.type4[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_40.type4[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_40.type4[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_40.type4[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_40.type4[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_40.type4[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj20_40.type4[i].item6 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_5").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj20_5.type5.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_5.type5[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_5.type5[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_5.type5[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_5.type5[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_5.type5[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_5.type5[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_50.type5[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_50.type5[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_50.type5[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_50.type5[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_50.type5[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_50.type5[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj20_50.type5[i].item6 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_6").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj20_6.type6.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_6.type6[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_6.type6[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_6.type6[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_6.type6[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_6.type6[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_6.type6[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj20_60.type6[i].name + "</span>" + 
                        "<span class = 'style'>" + obj20_60.type6[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj20_60.type6[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj20_60.type6[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj20_60.type6[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj20_60.type6[i].item5 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
        });
    }); 
    //- - - 30
    $("#level_30").click(function(){
        $("#bottom-btmBox").html("");
        $("#bottom-topBox .type").show(200);                
                
        $(document).ready(function(){
            $("#type_1").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj30_1.type1.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_1.type1[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_1.type1[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_1.type1[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_1.type1[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_1.type1[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_1.type1[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_10.type1[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_10.type1[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_10.type1[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_10.type1[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_10.type1[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_10.type1[i].item5 + "</span>" + 
                        "</p>";
                }
                            
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_2").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj30_2.type2.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_2.type2[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_2.type2[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_2.type2[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_2.type2[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_2.type2[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_2.type2[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_20.type2[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_20.type2[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_20.type2[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_20.type2[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_20.type2[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_20.type2[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj30_20.type2[i].item6 + "</span>" + 
                        "<span class = 'style'>" + obj30_20.type2[i].item7 + "</span>" + 
                        "<span class = 'style'>" + obj30_20.type2[i].item8 + "</span>" + 
                        "<span class = 'style'>" + obj30_20.type2[i].item9 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_3").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj30_3.type3.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_3.type3[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_3.type3[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_3.type3[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_3.type3[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_3.type3[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_3.type3[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_30.type3[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_30.type3[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_30.type3[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_30.type3[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_30.type3[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_30.type3[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj30_30.type3[i].item6 + "</span>" + 
                        "<span class = 'style'>" + obj30_30.type3[i].item7 + "</span>" + 
                        "<span class = 'style'>" + obj30_30.type3[i].item8 + "</span>" + 
                        "<span class = 'style'>" + obj30_30.type3[i].item9 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_4").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj30_4.type4.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_4.type4[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_4.type4[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_4.type4[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_4.type4[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_4.type4[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_4.type4[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_40.type4[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_40.type4[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_40.type4[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_40.type4[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_40.type4[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_40.type4[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj30_40.type4[i].item6 + "</span>" + 
                        "<span class = 'style'>" + obj30_40.type4[i].item7 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_5").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj30_5.type5.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_5.type5[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_5.type5[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_5.type5[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_5.type5[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_5.type5[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_5.type5[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_50.type5[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_50.type5[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_50.type5[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_50.type5[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_50.type5[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_50.type5[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj30_50.type5[i].item6 + "</span>" + 
                        "<span class = 'style'>" + obj30_50.type5[i].item7 + "</span>" + 
                        "<span class = 'style'>" + obj30_50.type5[i].item8 + "</span>" + 
                        "<span class = 'style'>" + obj30_50.type5[i].item9 + "</span>" + 
                        "<span class = 'style'>" + obj30_50.type5[i].item10 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_6").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj30_6.type6.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_6.type6[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_6.type6[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_6.type6[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_6.type6[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_6.type6[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_6.type6[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj30_60.type6[i].name + "</span>" + 
                        "<span class = 'style'>" + obj30_60.type6[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj30_60.type6[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj30_60.type6[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj30_60.type6[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj30_60.type6[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj30_60.type6[i].item6 + "</span>" + 
                        "<span class = 'style'>" + obj30_60.type6[i].item7 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
        });
    }); 
    //- - - 40
    $("#level_40").click(function(){
        $("#bottom-btmBox").html("");
        $("#bottom-topBox .type").show(200);
                
        $(document).ready(function(){
            $("#type_1").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj40_1.type1.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_1.type1[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_1.type1[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_1.type1[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_1.type1[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_1.type1[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_1.type1[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_10.type1[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_10.type1[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_10.type1[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_10.type1[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_10.type1[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_10.type1[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj40_10.type1[i].item6 + "</span>" + 
                        "</p>";
                }
                            
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_2").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj40_2.type2.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_2.type2[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_2.type2[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_2.type2[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_2.type2[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_2.type2[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_2.type2[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj40_2.type2[i].item6 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_20.type2[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_20.type2[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_20.type2[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_20.type2[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_20.type2[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_20.type2[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj40_20.type2[i].item6 + "</span>" + 
                        "<span class = 'style'>" + obj40_20.type2[i].item7 + "</span>" + 
                        "<span class = 'style'>" + obj40_20.type2[i].item8 + "</span>" + 
                        "<span class = 'style'>" + obj40_20.type2[i].item9 + "</span>" + 
                        "<span class = 'style'>" + obj40_20.type2[i].item10 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_3").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj40_3.type3.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_3.type3[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_3.type3[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_3.type3[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_3.type3[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_3.type3[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_3.type3[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_30.type3[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_30.type3[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_30.type3[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_30.type3[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_30.type3[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_30.type3[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj40_30.type3[i].item6 + "</span>" + 
                        "<span class = 'style'>" + obj40_30.type3[i].item7 + "</span>" + 
                        "<span class = 'style'>" + obj40_30.type3[i].item8 + "</span>" + 
                        "<span class = 'style'>" + obj40_30.type3[i].item9 + "</span>" + 
                        "<span class = 'style'>" + obj40_30.type3[i].item10 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_4").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj40_4.type4.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_4.type4[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_4.type4[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_4.type4[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_4.type4[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_4.type4[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_4.type4[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_40.type4[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_40.type4[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_40.type4[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_40.type4[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_40.type4[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_40.type4[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj40_40.type4[i].item6 + "</span>" + 
                        "<span class = 'style'>" + obj40_40.type4[i].item7 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_5").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj40_5.type5.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_5.type5[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_5.type5[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_5.type5[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_5.type5[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_5.type5[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_5.type5[i].item5 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_50.type5[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_50.type5[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_50.type5[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_50.type5[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_50.type5[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_50.type5[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj40_50.type5[i].item6 + "</span>" + 
                        "<span class = 'style'>" + obj40_50.type5[i].item7 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
            //--------
            $("#type_6").click(function(){
                var getItem1 = "";
                var getItem2 = "";
                            
                for(i = 0; i < obj40_6.type6.length; i++){
                    getItem1 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_6.type6[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_6.type6[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_6.type6[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_6.type6[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_6.type6[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_6.type6[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj40_6.type6[i].item6 + "</span>" + 
                        "</p>";
                    getItem2 +=
                        "<p class = 'style'>" + 
                        "<span class = 'style name'>" + obj40_60.type6[i].name + "</span>" + 
                        "<span class = 'style'>" + obj40_60.type6[i].item1 + "</span>" + 
                        "<span class = 'style'>" + obj40_60.type6[i].item2 + "</span>" + 
                        "<span class = 'style'>" + obj40_60.type6[i].item3 + "</span>" + 
                        "<span class = 'style'>" + obj40_60.type6[i].item4 + "</span>" + 
                        "<span class = 'style'>" + obj40_60.type6[i].item5 + "</span>" + 
                        "<span class = 'style'>" + obj40_60.type6[i].item6 + "</span>" + 
                        "</p>";
                }
                $("#bottom-btmBox").html(getItem1 + "<hr>" + getItem2);
            });
        });
    }); 
};