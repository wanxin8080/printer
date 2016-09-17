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
    {type:'THREE_FOT_TWO',present:['ITEM000004']}
];