"use strict";

var NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
/**
 * @name PhoneNumber
 * @description Represents a phone number
 * @type {Object}
 */
var PhoneNumber = {
  number: function() {
    return this.cleaned.phoneNumber;
  },
  toString: function() {
    return this.cleaned.string;
  },
  areaCode: function() {
    return this.cleaned.areaCode;
  }
};
/**
 * @method cleanPhoneNumber
 * @description returns a string containing only numbers.
 * @param  {String} number The number to clean.
 * @return {String}
 */
function cleanPhoneNumber(phoneNumber) {
  phoneNumber = phoneNumber.toString().trim().split('');
  var cleanedPhoneNumber = phoneNumber.filter(function(n) {
    return NUMBERS.indexOf(n) > -1;
  }).join('');
  return validPhoneNumber(cleanedPhoneNumber);
}
/**
 * @method validPhoneNumber
 * @description modifys the number to be valid, or defaults it to 0000000000
 * @param  {String} cleanedPhoneNumber The cleaned number to validate.
 * @return {String}
 */
function validPhoneNumber(cleanedPhoneNumber) {
  if (cleanedPhoneNumber.length === 11 && cleanedPhoneNumber[0] === '1') {
    cleanedPhoneNumber = cleanedPhoneNumber.substring(1);
  } else if (cleanedPhoneNumber.length !== 10) {
    cleanedPhoneNumber = '0000000000';
  }
  return cleanedPhoneNumber;
}
/**
 * @method format
 * @description creates a formatted string number ex: (808) 555-5555
 * @param  {String} cleanedPhoneNumber number to format
 * @return {String}
 */
function format(cleanedPhoneNumber) {
  var nums = cleanedPhoneNumber.split('');
  nums.splice(0, 0, '(');
  nums.splice(4, 0, ') ');
  nums.splice(8, 0, '-');
  return nums.join('');
}
/**
 * @method areaCode
 * @description returns the areaCode from a cleaned number
 * @param  {String} cleanedPhoneNumber The cleaned number to parse the areacode from
 * @return {String}
 */
function areaCode(cleanedPhoneNumber) {
  return cleanedPhoneNumber.substring(0, 3);
}
/**
 * @exports Creates a new PhoneNumber object.
 * @param  {String} number The phone number this object should represent.
 * @return {PhoneNumber}
 */
module.exports = function createPhoneNumber(phoneNumber) {
  var cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);
  return Object.create(PhoneNumber, {
    cleaned: {
      enumerable: true,
      value: {
        original: phoneNumber,
        phoneNumber: cleanedPhoneNumber,
        string: format(cleanedPhoneNumber),
        areaCode: areaCode(cleanedPhoneNumber),
      }
    },
  });
};
