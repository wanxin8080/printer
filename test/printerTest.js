/**
 * Created by Administrator on 2016/9/10.
 */
var should = require('should');
var printer = require('../js/printer');
//var getbar = require('../js/printer');
describe('printer',function(){
    /*it('should',function(){
        should(getbar(['ITEM000004-2'])).have.property('ITEM000004').be.eql(2);
    })*/
    it('should_return_95Discount_when_give_item_both_95Discount_and_two_for_one',function(){
        should(printer(['ITEM000004-2'])[0].subtotal).be.eql(12.00);
        should(printer(['ITEM000004-2'])[0].discount.DISTWO).be.eql(1);
    })
});
