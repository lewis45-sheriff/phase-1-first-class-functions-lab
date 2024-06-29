// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
};
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers));
console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));
console.log(createFareMultiplier(4)(5));
console.log(fareDoubler(10));
console.log(fareTripler(5));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
