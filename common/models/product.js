'use strict';

module.exports = function (Product) {
  Product.disableRemoteMethodByName('patchOrCreate');
  Product.disableRemoteMethodByName('replaceById');
  Product.disableRemoteMethodByName('exists');
  Product.disableRemoteMethodByName('createChangeStream');
  Product.disableRemoteMethodByName('createChangeStream');
  Product.disableRemoteMethodByName('prototype.__count__productCustomAttributes');
  Product.disableRemoteMethodByName('prototype.__delete__productCustomAttributes');
  Product.disableRemoteMethodByName('prototype.__create__productCustomAttributes');
  Product.disableRemoteMethodByName('prototype.__get__productDescription');
  Product.disableRemoteMethodByName('prototype.__create__productDescription');
  Product.disableRemoteMethodByName('prototype.__delete__productDescription');
  Product.disableRemoteMethodByName('prototype.__findById__productDescription');
  Product.disableRemoteMethodByName('prototype.__updateById__productDescription');
  Product.disableRemoteMethodByName('prototype.__destroyById__productDescription');
  Product.disableRemoteMethodByName('prototype.__count__productDescription');
  Product.disableRemoteMethodByName('prototype.__get__productName');
  Product.disableRemoteMethodByName('prototype.__create__productName');
  Product.disableRemoteMethodByName('prototype.__delete__productName');
  Product.disableRemoteMethodByName('prototype.__findById__productName');
  Product.disableRemoteMethodByName('prototype.__updateById__productName');
  Product.disableRemoteMethodByName('prototype.__destroyById__productName');
  Product.disableRemoteMethodByName('prototype.__count__productName');
  Product.disableRemoteMethodByName('prototype.__get__productStockQuantity');
  Product.disableRemoteMethodByName('prototype.__create__productStockQuantity');
  Product.disableRemoteMethodByName('prototype.__delete__productStockQuantity');
  Product.disableRemoteMethodByName('prototype.__findById__productStockQuantity');
  Product.disableRemoteMethodByName('prototype.__destroyById__productStockQuantity');
  Product.disableRemoteMethodByName('prototype.__count__productStockQuantity');

};
