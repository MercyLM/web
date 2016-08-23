function levelFunction(){
    var level = document.getElementById("level").selectedIndex; 
    var lv = document.getElementsByTagName("option")[level].value; //level的value指向 lv
    
    if (level == 0){
        $("#level").addClass("warning"); //錯誤時顏色警示
    }else {
        $("#level").removeClass("warning"); //正確時顏色清除
    }
    
    typeFunction(lv);
}
function typeFunction(lv){
    var type = document.getElementById("type").selectedIndex;
    var tp = document.getElementsByTagName("option")[type + level.length].value; //type的value指向 tp
    
    if (type == 0){
        $("#type").addClass("warning"); //錯誤時顏色警示
    }else {
        $("#type").removeClass("warning"); //正確時顏色清除
        
        myFunction(lv,tp); //開始叫資料
    }
}
function myFunction(lv,tp){
    ////////////////////////////////////////////////////
    //裝備名稱 順序：力、智、敏、力智、力敏、智敏、頭盔、衣服、褲子、鞋子
    ////////////////////////////////////////////////////
    var name20_1 = ["烏鐵戰帽","烏鐵戰甲","烏鐵褲鎧","烏鐵戰靴"];
    var name20_2 = ["巫士法帽","巫士法袍","巫士護褲","巫士尖靴"];
    var name20_3 = ["夜獸影帽","夜獸影甲","夜獸影褲","夜獸影靴"];
    var name20_4 = ["烏銀護帽","烏銀大衫","烏銀鍛褲","烏銀長靴"];
    var name20_5 = ["烏鐵輕盔","烏鐵鱗甲","烏鐵護腿","烏鐵輕靴"];
    var name20_6 = ["魔紋旅帽","魔紋風衣","魔紋旅褲","魔紋旅靴"];
    
    var name30_1 = ["妖魔戰鬥面甲","妖魔戰鬥鎧甲","妖魔戰鬥褲鎧","妖魔戰鬥戰靴"];
    var name30_2 = ["妖魔咒術之帽","妖魔咒術法袍","妖魔咒術護褲","妖魔咒術尖靴"];
    var name30_3 = ["妖魔夜行面具","妖魔夜行影甲","妖魔夜行影褲","妖魔夜行影靴"];
    var name30_4 = ["妖魔鎖鏈頭盔","妖魔鎖鏈護甲","妖魔鎖鏈護褲","妖魔鎖鏈長靴"];
    var name30_5 = ["妖魔游擊輕盔","妖魔游擊輕甲","妖魔游擊護腿","妖魔游擊輕靴"];
    var name30_6 = ["妖魔圖騰扁帽","妖魔圖騰披肩","妖魔圖騰長褲","妖魔圖騰長靴"];
    
    var name40_1 = ["光耀戰盔","光耀戰甲","光耀褲鎧","光耀戰靴"];
    var name40_2 = ["銀光法帽","銀光法袍","銀光褲裙","銀光之履"];
    var name40_3 = ["狂獸皮盔","狂獸皮甲","狂獸皮褲","狂獸皮靴"];
    var name40_4 = ["光芒聖盔","光芒鏈甲","光芒護腿","光芒鎖鏈靴"];
    var name40_5 = ["光耀護盔","光輝輕甲","光輝護腿","光輝輕靴"];
    var name40_6 = ["光耀面具","光耀披肩","光耀襯褲","光耀長靴"];
    ///////////////////////////////////////////////////////
    //總材料名稱 順序：力、智、敏、力智、力敏、智敏、頭盔、衣服、褲子、鞋子
    ///////////////////////////////////////////////////////
    var itemName20_1 = ["鍛鐵板片","鑄鐵系列","烏鐵石","煤礦"];
    var itemName20_2 = ["綢緞","巫徒系列","魔性綢緞","剪刀"];
    var itemName20_3 = ["皮革","野獸系列","野性皮革","剪刀"];
    var itemName20_4 = ["輕鐵板片","網紋系列","魔性綢緞","煤礦"];
    var itemName20_5 = ["輕鐵板片","輕鐵系列","堅硬外殼","烏鐵石碎片","煤礦"];
    var itemName20_6 = ["皮革","青絲系列","魔性","剪刀"];
    
    var itemName30_1 = ["鍛鐵板片","烏鐵系列","烏鐵石","妖魔鎧甲碎片","煤礦"];
    var itemName30_2 = ["巫士系列","綢緞","魔性綢緞","妖魔咒術碎片","烏鐵剪"];
    var itemName30_3 = ["夜獸系列","野性皮革","妖魔夜行碎片","烏鐵剪"];
    var itemName30_4 = ["烏銀系列","輕鐵板片","妖魔鎖鏈碎片","魔性綢緞","煤礦"];
    var itemName30_5 = ["輕鐵板片","烏鐵系列","妖魔輕甲系列","烏鐵石","煤礦"];
    var itemName30_6 = ["魔紋系列","野性皮革","妖魔圖騰碎片","魔性綢緞","烏鐵剪"];
    
    var itemName40_1 = ["光輝鐵板","煤礦"];
    var itemName40_2 = ["銀綢","烏鐵剪"];
    var itemName40_3 = ["狂獸皮革","烏鐵剪"];
    var itemName40_4 = ["光輝鐵板","銀綢","煤礦"];
    var itemName40_5 = ["光輝鐵板","狂獸皮革","煤礦"];
    var itemName40_6 = ["狂獸皮革","銀綢","烏鐵剪"];
    ////////////
    //總材料數量 順序：力、智、敏、力智、力敏、智敏、頭盔、衣服、褲子、鞋子
    ////////////
    var itemAmount20_1_1 = [1,1,1,2],
        itemAmount20_1_2 = [4,1,1,2],
        itemAmount20_1_3 = [2,1,1,2],
        itemAmount20_1_4 = [1,1,1,2];
    var itemAmount20_2_1 = [1,1,1,1],
        itemAmount20_2_2 = [4,1,1,1],
        itemAmount20_2_3 = [3,1,1,1],
        itemAmount20_2_4 = [2,1,1,1];
    var itemAmount20_3_1 = [3,1,1,1],
        itemAmount20_3_2 = [0,1,2,1],
        itemAmount20_3_3 = [4,1,1,1],
        itemAmount20_3_4 = [3,1,1,1];
    var itemAmount20_4_1 = [1,1,1,2],
        itemAmount20_4_2 = [4,1,1,2],
        itemAmount20_4_3 = [2,1,1,2],
        itemAmount20_4_4 = [1,1,1,2];
    var itemAmount20_5_1 = [1,1,2,3,2],
        itemAmount20_5_2 = [3,1,5,5,2],
        itemAmount20_5_3 = [2,1,4,4,2],
        itemAmount20_5_4 = [1,1,2,3,2];
    var itemAmount20_6_1 = [1,1,1,1],
        itemAmount20_6_2 = [4,1,1,1],
        itemAmount20_6_3 = [1,1,1,1],
        itemAmount20_6_4 = [2,1,1,1];
    
    var itemAmount30_1_1 = [3,1,4,3,4],
        itemAmount30_1_2 = [6,1,6,3,4],
        itemAmount30_1_3 = [5,1,5,3,4],
        itemAmount30_1_4 = [3,1,4,3,2];        
    var itemAmount30_2_1 = [1,1,4,3,1],
        itemAmount30_2_2 = [1,2,6,3,1],
        itemAmount30_2_3 = [1,2,5,3,1],
        itemAmount30_2_4 = [1,1,4,3,1];
    var itemAmount30_3_1 = [1,3,3,1],
        itemAmount30_3_2 = [1,5,3,1],
        itemAmount30_3_3 = [1,5,3,1],
        itemAmount30_3_4 = [1,4,3,1];
    var itemAmount30_4_1 = [1,2,3,2,4],
        itemAmount30_4_2 = [1,4,3,4,4],
        itemAmount30_4_3 = [1,3,3,3,4],
        itemAmount30_4_4 = [1,2,3,2,4];
    var itemAmount30_5_1 = [4,1,3,2,4],
        itemAmount30_5_2 = [6,1,4,3,4],
        itemAmount30_5_3 = [5,1,3,3,4],
        itemAmount30_5_4 = [4,1,2,3,4];
    var itemAmount30_6_1 = [1,1,3,1,1],
        itemAmount30_6_2 = [1,3,3,3,1],
        itemAmount30_6_3 = [1,2,3,2,1],
        itemAmount30_6_4 = [1,1,3,1,1];
    
    var itemAmount40_1_1 = [5,1],
        itemAmount40_1_2 = [8,1],
        itemAmount40_1_3 = [7,1],
        itemAmount40_1_4 = [6,1];        
    var itemAmount40_2_1 = [5,1],
        itemAmount40_2_2 = [8,1],
        itemAmount40_2_3 = [7,1],
        itemAmount40_2_4 = [6,1];
    var itemAmount40_3_1 = [5,1],
        itemAmount40_3_2 = [8,1],
        itemAmount40_3_3 = [7,1],
        itemAmount40_3_4 = [6,1];
    var itemAmount40_4_1 = [3,2,1],
        itemAmount40_4_2 = [6,3,1],
        itemAmount40_4_3 = [5,3,1],
        itemAmount40_4_4 = [3,2,1];
    var itemAmount40_5_1 = [3,2,1],
        itemAmount40_5_2 = [6,3,1],
        itemAmount40_5_3 = [5,3,1],
        itemAmount40_5_4 = [3,2,1];
    var itemAmount40_6_1 = [3,2,1],
        itemAmount40_6_2 = [6,3,1],
        itemAmount40_6_3 = [5,3,1],
        itemAmount40_6_4 = [3,2,1];
    ///////////////////////////////////////////////////////
    //基礎材料名稱 順序：力、智、敏、力智、力敏、智敏、頭盔、衣服、褲子、鞋子
    ///////////////////////////////////////////////////////
    var item20_1 = ["粗鐵礦","煤礦","烏鐵石碎片","鑄鐵系列"];
    var item20_2 = ["受損的蛛絲囊","堅韌的蛛絲囊","傑爾特的唾絲","魔法石","巫徒系列"];
    var item20_3 = ["受損的蛛絲囊","堅韌的蛛絲囊","完整的獸皮","凡狼皮","剪刀","野獸系列"];
    var item20_4 = ["粗鐵礦","煤礦","受損的蛛絲囊","堅韌的蛛絲囊","傑爾特的唾絲","網紋系列"];
    var item20_5 = ["粗鐵礦","煤礦","烏鐵石碎片","堅硬外殼","輕鐵系列"];
    var item20_6 = ["受損的蛛絲囊","堅韌的蛛絲囊","完整的獸皮","傑爾特的唾絲","剪刀","青絲系列"];
    
    var item30_1 = ["粗鐵礦","煤礦","烏鐵石碎片","妖魔鎧甲碎片","烏鐵系列"];
    var item30_2 = ["粗鐵礦","煤礦","烏鐵石碎片","受損的蛛絲囊","堅韌的蛛絲囊","傑爾特的唾絲","魔法石","妖魔咒術碎片","巫士系列"];
    var item30_3 = ["粗鐵礦","煤礦","烏鐵石碎片","受損的蛛絲囊","堅韌的蛛絲囊","完整的獸皮","凡狼皮","妖魔夜行碎片","夜獸系列"];
    var item30_4 = ["粗鐵礦","煤礦","受損的蛛絲囊","堅韌的蛛絲囊","傑爾特的唾絲","妖魔鎖鏈碎片","烏銀系列"];
    var item30_5 = ["粗鐵礦","煤礦","烏鐵石碎片","妖魔輕甲碎片","烏鐵系列"];
    var item30_6 = ["粗鐵礦","煤礦","烏鐵石碎片","受損的蛛絲囊","堅韌的蛛絲囊","完整的獸皮","凡狼皮","傑爾特的唾絲","妖魔圖騰碎片","魔紋系列"];
    
    var item40_1 = ["暗鐵礦","煤礦","荒蕪碎片","烏鐵石碎片"];
    var item40_2 = ["粗鐵礦","煤礦","烏鐵石碎片","受損的蛛絲囊","堅韌的蛛絲囊","銀化魔絲","附魔石"];
    var item40_3 = ["粗鐵礦","煤礦","烏鐵石碎片","受損的蛛絲囊","堅韌的蛛絲囊","完整的獸皮","狂狼皮"];
    var item40_4 = ["暗鐵礦","煤礦","荒蕪碎片","受損的蛛絲囊","堅韌的蛛絲囊","銀化魔絲","附魔石","烏鐵石碎片"];
    var item40_5 = ["暗鐵礦","煤礦","荒蕪碎片","受損的蛛絲囊","堅韌的蛛絲囊","完整的獸皮","狂狼皮","烏鐵石碎片"];
    var item40_6 = ["暗鐵礦","煤礦","荒蕪碎片","受損的蛛絲囊","堅韌的蛛絲囊","銀化魔絲","附魔石","烏鐵石碎片"];
    ////////////
    //製作材料數量 順序：力、智、敏、力智、力敏、智敏、頭盔、衣服、褲子、鞋子
    ////////////
    var Amount20_1_1 = [2,5,10,1],
        Amount20_1_2 = [4,7,10,1],
        Amount20_1_3 = [2,5,10,1],
        Amount20_1_4 = [2,5,10,1];
    var Amount20_2_1 = [18,6,1,2,1],
        Amount20_2_2 = [42,14,1,8,1],
        Amount20_2_3 = [36,12,1,6,1],
        Amount20_2_4 = [24,8,1,4,1];
    var Amount20_3_1 = [12,4,4,1,1,1],
        Amount20_3_2 = [12,4,2,2,1,1],
        Amount20_3_3 = [12,4,5,1,1,1],
        Amount20_3_4 = [12,4,4,1,1,1];
    var Amount20_4_1 = [2,4,12,4,1,1],
        Amount20_4_2 = [4,6,12,4,1,1],
        Amount20_4_3 = [2,4,12,4,1,1],
        Amount20_4_4 = [2,4,12,4,1,1];
    var Amount20_5_1 = [2,4,3,2,1],
        Amount20_5_2 = [4,6,5,5,1],
        Amount20_5_3 = [2,4,4,4,1],
        Amount20_5_4 = [2,4,3,2,1];
    var Amount20_6_1 = [12,4,1,1,1,1],
        Amount20_6_2 = [18,6,4,1,1,1],
        Amount20_6_3 = [12,4,1,1,1,1],
        Amount20_6_4 = [12,4,2,1,1,1];
    
    var Amount30_1_1 = [4,10,20,3,1],
        Amount30_1_2 = [6,13,30,3,1],
        Amount30_1_3 = [6,13,30,3,1],
        Amount30_1_4 = [4,8,20,3,1];
    var Amount30_2_1 = [3,2,10,42,14,4,2,3,1],
        Amount30_2_2 = [3,2,10,66,22,6,4,3,1],
        Amount30_2_3 = [3,2,10,60,20,5,4,3,1],
        Amount30_2_4 = [3,2,10,42,14,4,2,3,1];
    var Amount30_3_1 = [3,2,10,12,4,3,3,3,1],
        Amount30_3_2 = [3,2,10,24,8,5,5,3,1],
        Amount30_3_3 = [3,2,10,24,8,5,5,3,1],
        Amount30_3_4 = [3,2,10,18,6,4,4,3,1];
    var Amount30_4_1 = [2,6,18,6,2,3,1],
        Amount30_4_2 = [4,8,36,12,4,3,1],
        Amount30_4_3 = [4,8,24,8,3,3,1],
        Amount30_4_4 = [2,6,18,6,2,3,1];
    var Amount30_5_1 = [4,9,10,3,1],
        Amount30_5_2 = [6,12,20,3,1],
        Amount30_5_3 = [6,12,20,3,1],
        Amount30_5_4 = [4,9,10,3,1];
    var Amount30_6_1 = [3,2,10,12,4,1,1,1,3,1],
        Amount30_6_2 = [3,2,10,36,12,3,3,3,3,1],
        Amount30_6_3 = [3,2,10,24,8,2,2,2,3,1],
        Amount30_6_4 = [3,2,10,12,4,1,1,1,3,1];
    
    var Amount40_1_1 = [30,31,5,50],
        Amount40_1_2 = [48,49,8,80],
        Amount40_1_3 = [42,43,7,70],
        Amount40_1_4 = [36,37,6,60];
    var Amount40_2_1 = [3,2,10,42,14,15,5],
        Amount40_2_2 = [3,2,10,66,22,24,8],
        Amount40_2_3 = [3,2,10,60,20,21,7],
        Amount40_2_4 = [3,2,10,48,16,18,6];
    var Amount40_3_1 = [3,2,10,30,10,5,10],
        Amount40_3_2 = [3,2,10,48,16,8,16],
        Amount40_3_3 = [3,2,10,42,14,7,14],
        Amount40_3_4 = [3,2,10,36,12,6,12];
    var Amount40_4_1 = [30,31,5,18,6,6,2,50],
        Amount40_4_2 = [30,31,5,24,8,9,3,50],
        Amount40_4_3 = [30,31,5,24,8,9,3,50],
        Amount40_4_4 = [30,31,5,18,6,6,2,50];
    var Amount40_5_1 = [18,19,3,12,4,2,4,30],
        Amount40_5_2 = [36,37,6,18,6,3,6,60],
        Amount40_5_3 = [30,31,5,18,6,3,6,50],
        Amount40_5_4 = [18,19,3,12,4,2,4,30];
    var Amount40_6_1 = [18,19,3,18,6,6,2,30],
        Amount40_6_2 = [36,37,6,24,8,9,3,60],
        Amount40_6_3 = [30,31,5,24,8,9,3,50],
        Amount40_6_4 = [18,19,3,18,6,6,2,30];
    ///////////////////////////////////////////////////////
    //資料標籤
    ///////////////////////////////////////////////////////
    //裝備名稱
    var nameLevel20 = [name20_1,name20_2,name20_3,name20_4,name20_5,name20_6];
    var nameLevel30 = [name30_1,name30_2,name30_3,name30_4,name30_5,name30_6];
    var nameLevel40 = [name40_1,name40_2,name40_3,name40_4,name40_5,name40_6];
    var name = [nameLevel20,nameLevel30,nameLevel40];
    
    //總材料名稱
    var totalName20 = [itemName20_1,itemName20_2,itemName20_3,itemName20_4,itemName20_5,itemName20_6];
    var totalName30 = [itemName30_1,itemName30_2,itemName30_3,itemName30_4,itemName30_5,itemName30_6];
    var totalName40 = [itemName40_1,itemName40_2,itemName40_3,itemName40_4,itemName40_5,itemName40_6];
    var totalName = [totalName20,totalName30,totalName40];
    
    //總材料數量
    var gatTotalAmount20_1 = [itemAmount20_1_1,itemAmount20_1_2,itemAmount20_1_3,itemAmount20_1_4];
    var gatTotalAmount20_2 = [itemAmount20_2_1,itemAmount20_2_2,itemAmount20_2_3,itemAmount20_2_4];
    var gatTotalAmount20_3 = [itemAmount20_3_1,itemAmount20_3_2,itemAmount20_3_3,itemAmount20_3_4];
    var gatTotalAmount20_4 = [itemAmount20_4_1,itemAmount20_4_2,itemAmount20_4_3,itemAmount20_4_4];
    var gatTotalAmount20_5 = [itemAmount20_5_1,itemAmount20_5_2,itemAmount20_5_3,itemAmount20_5_4];
    var gatTotalAmount20_6 = [itemAmount20_6_1,itemAmount20_6_2,itemAmount20_6_3,itemAmount20_6_4];
    
    var gatTotalAmount30_1 = [itemAmount30_1_1,itemAmount30_1_2,itemAmount30_1_3,itemAmount30_1_4];
    var gatTotalAmount30_2 = [itemAmount30_2_1,itemAmount30_2_2,itemAmount30_2_3,itemAmount30_2_4];
    var gatTotalAmount30_3 = [itemAmount30_3_1,itemAmount30_3_2,itemAmount30_3_3,itemAmount30_3_4];
    var gatTotalAmount30_4 = [itemAmount30_4_1,itemAmount30_4_2,itemAmount30_4_3,itemAmount30_4_4];
    var gatTotalAmount30_5 = [itemAmount30_5_1,itemAmount30_5_2,itemAmount30_5_3,itemAmount30_5_4];
    var gatTotalAmount30_6 = [itemAmount30_6_1,itemAmount30_6_2,itemAmount30_6_3,itemAmount30_6_4];
    
    var gatTotalAmount40_1 = [itemAmount40_1_1,itemAmount40_1_2,itemAmount40_1_3,itemAmount40_1_4];
    var gatTotalAmount40_2 = [itemAmount40_2_1,itemAmount40_2_2,itemAmount40_2_3,itemAmount40_2_4];
    var gatTotalAmount40_3 = [itemAmount40_3_1,itemAmount40_3_2,itemAmount40_3_3,itemAmount40_3_4];
    var gatTotalAmount40_4 = [itemAmount40_4_1,itemAmount40_4_2,itemAmount40_4_3,itemAmount40_4_4];
    var gatTotalAmount40_5 = [itemAmount40_5_1,itemAmount40_5_2,itemAmount40_5_3,itemAmount40_5_4];
    var gatTotalAmount40_6 = [itemAmount40_6_1,itemAmount40_6_2,itemAmount40_6_3,itemAmount40_6_4];
    
    var totalAmount20 = [gatTotalAmount20_1,gatTotalAmount20_2,gatTotalAmount20_3,gatTotalAmount20_4,gatTotalAmount20_5,gatTotalAmount20_6];
    var totalAmount30 = [gatTotalAmount30_1,gatTotalAmount30_2,gatTotalAmount30_3,gatTotalAmount30_4,gatTotalAmount30_5,gatTotalAmount30_6];
    var totalAmount40 = [gatTotalAmount40_1,gatTotalAmount40_2,gatTotalAmount40_3,gatTotalAmount40_4,gatTotalAmount40_5,gatTotalAmount40_6];    
    var totalAmount = [totalAmount20,totalAmount30,totalAmount40];
    
    //基礎材料名稱
    var basisName20 = [item20_1,item20_2,item20_3,item20_4,item20_5,item20_6];
    var basisName30 = [item30_1,item30_2,item30_3,item30_4,item30_5,item30_6];
    var basisName40 = [item40_1,item40_2,item40_3,item40_4,item40_5,item40_6];
    var basisName = [basisName20,basisName30,basisName40];
    
    //基礎材料數量
    var getBasisAmount20_1 = [Amount20_1_1,Amount20_1_2,Amount20_1_3,Amount20_1_4];
    var getBasisAmount20_2 = [Amount20_2_1,Amount20_2_2,Amount20_2_3,Amount20_2_4];
    var getBasisAmount20_3 = [Amount20_3_1,Amount20_3_2,Amount20_3_3,Amount20_3_4];
    var getBasisAmount20_4 = [Amount20_4_1,Amount20_4_2,Amount20_4_3,Amount20_4_4];
    var getBasisAmount20_5 = [Amount20_5_1,Amount20_5_2,Amount20_5_3,Amount20_5_4];
    var getBasisAmount20_6 = [Amount20_6_1,Amount20_6_2,Amount20_6_3,Amount20_6_4];
    
    var getBasisAmount30_1 = [Amount30_1_1,Amount30_1_2,Amount30_1_3,Amount30_1_4];
    var getBasisAmount30_2 = [Amount30_2_1,Amount30_2_2,Amount30_2_3,Amount30_2_4];
    var getBasisAmount30_3 = [Amount30_3_1,Amount30_3_2,Amount30_3_3,Amount30_3_4];
    var getBasisAmount30_4 = [Amount30_4_1,Amount30_4_2,Amount30_4_3,Amount30_4_4];
    var getBasisAmount30_5 = [Amount30_5_1,Amount30_5_2,Amount30_5_3,Amount30_5_4];
    var getBasisAmount30_6 = [Amount30_6_1,Amount30_6_2,Amount30_6_3,Amount30_6_4];
    
    var getBasisAmount40_1 = [Amount40_1_1,Amount40_1_2,Amount40_1_3,Amount40_1_4];
    var getBasisAmount40_2 = [Amount40_2_1,Amount40_2_2,Amount40_2_3,Amount40_2_4];
    var getBasisAmount40_3 = [Amount40_3_1,Amount40_3_2,Amount40_3_3,Amount40_3_4];
    var getBasisAmount40_4 = [Amount40_4_1,Amount40_4_2,Amount40_4_3,Amount40_4_4];
    var getBasisAmount40_5 = [Amount40_5_1,Amount40_5_2,Amount40_5_3,Amount40_5_4];
    var getBasisAmount40_6 = [Amount40_6_1,Amount40_6_2,Amount40_6_3,Amount40_6_4];
    
    var basisAmount20 = [getBasisAmount20_1,getBasisAmount20_2,getBasisAmount20_3,getBasisAmount20_4,getBasisAmount20_5,getBasisAmount20_6];
    var basisAmount30 = [getBasisAmount30_1,getBasisAmount30_2,getBasisAmount30_3,getBasisAmount30_4,getBasisAmount30_5,getBasisAmount30_6];
    var basisAmount40 = [getBasisAmount40_1,getBasisAmount40_2,getBasisAmount40_3,getBasisAmount40_4,getBasisAmount40_5,getBasisAmount40_6];
    var basisAmount = [basisAmount20,basisAmount30,basisAmount40];
    ///////////////////////////////////////////////////////
    //table輸出
    ///////////////////////////////////////////////////////
    var table = "";
    var titleName = "<tr><th>總材料</th><th>數量</th><th>基礎材料</th><th>數量</th></tr>";
        
    for(i = 0; i < 4 ; i++){
        
        var tableName = "";
        var arrTotal = "";
        tableName = "<caption>" + name[lv][tp][i] + "</caption>";

        for(j = 0; j < basisName[lv][tp].length; j++){
            
            if(!totalName[lv][tp][j]){
                totalName[lv][tp][j] = "";
                totalAmount[lv][tp][i][j] = "";
            }//如果沒有這例子則補空值
            
            arrTotal += 
                "<tr><td>" + totalName[lv][tp][j] + "</td><td>" + totalAmount[lv][tp][i][j] + "</td>" + 
                "<td>" + basisName[lv][tp][j] + "</td><td>" + basisAmount[lv][tp][i][j] + "</td></tr>";
        }
        table += "<table>" + tableName + titleName + arrTotal + "</table>";
    }
    document.getElementById("demo").innerHTML = table;
}