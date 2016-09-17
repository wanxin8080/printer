/**
 * Created by Administrator on 2016/9/10.
 */
var products = [
    { barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 3.00 },
    { barcode: 'ITEM000001', name: '牛奶', unit: '瓶', category: '食品', subCategory: '乳制品', price: 6.00 },
    { barcode: 'ITEM000002', name: '雪碧', unit: '瓶', category: '食品', subCategory: '碳酸饮料', price: 3.00 },
    { barcode: 'ITEM000003', name: '饼干', unit: '盒', category: '食品', subCategory: '速食品', price: 8.00 },
    { barcode: 'ITEM000004', name: '面包', unit: '个', category: '食品', subCategory: '速食品', price: 6.00 },
    { barcode: 'ITEM000005', name: '羽毛球', unit: '个', category: '体育用品', subCategory: '球类', price: 1.00 },
    { barcode: 'ITEM000006', name: '苹果', unit: '斤', category: '食品', subCategory: '水果', price: 8.00 },
    { barcode: 'ITEM000007', name: '香蕉', unit: '斤', category: '食品', subCategory: '水果', price: 7.00 },
];
var dis = [
    {type:'95_DISCOUNT', present:['ITEM000004','ITEM000002']},
    {type:'THREE_FOT_TWO',present:['ITEM000004','ITEM000003']}
];
var _=require('underscore');
//split barcodes to barcode:num and save in object
function getBarcode(barcodes){
    var itemList={};
    _.each(barcodes,function(barcode){
        if(itemList[barcode]){
            itemList[barcode]=itemList[barcode]+1;
        }else {
            var barcodeArr=barcode.split('-');
            itemList[barcodeArr[0]]=parseInt(barcodeArr[1]);
        }
    });
    return itemList;
}
function printer(barcodes){
    var barcodesI = getBarcode(barcodes);
    var output=[];
    _.each(barcodesI,function(num,barcode){
            if(dis[1].present.indexOf(barcode)>=0){
                _.each(products,function(item){
                    if(item.barcode==barcode){
                        output.push({
                            subtotal:item.price*num,
                            discount:{DISTWO:Math.round(num/2)},
                            unit:item.unit,
                            num:num+Math.round(num/2)
                        });
                        return false;
                    }
                })
            }
        })
        return output;
}
module.exports=printer;