'use strict';

var GetIntrinsic = require('get-intrinsic');
var gPO = require('reflect.getprototypeof');
var hasSymbols = require('has-symbols');

var arrayIterProto = GetIntrinsic('%ArrayIteratorPrototype%', true);

var iterProto = arrayIterProto && gPO(arrayIterProto);

var result = iterProto || {};

if (hasSymbols() && !(Symbol.iterator in result)) {
	result[Symbol.iterator] = function () {
		return this;
	};
}

module.exports = result;
