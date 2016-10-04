/*
 * PROBLEM `getMonth`:
 * Write a function called `getMonth` that maps a given integer to a month for a calendar.
 * You can use either an object or an array for the mapping.
 *
 * For example:
 * getMonth(6, 'Gregorian') === 'June'
 * getMonth(2, 'Hebrew') === 'Iyar'
 * etc.
 *
 *  gregorianCalendar:
 *    January, February, March, April, May, June, July, August, September, October, November, December
 *
 *  romanCalendar:
 *    Ianuarius, Martius, Aprilis, Maius, Iunius, Quintilis, Sextilis, September, October, November, December, Februarius
 *
 *  hebrewCalendar:
 *     Nisan, Iyar, Sivan, Tammuz, Av, Elul, Tishrei, Marcheshvan, Kislev, Tevet, Shevat, Adar
 *
 *
 * If the input is invalid throw an 'Invalid Calendar Input' exception.
 */


console.assert ( getMonth(1, 'Gregorian') === 'January' )
console.assert ( getMonth(8, 'Gregorian') === 'August' )

console.assert ( getMonth(4, 'Roman') === 'Maius' )
console.assert ( getMonth(12, 'Roman') === 'Februarius' )

console.assert ( getMonth(3, 'Hebrew' ) === 'Sivan' )
console.assert ( getMonth(7, 'Hebrew' ) === 'Tishrei' )

console.assert( getMonth(12, 'insda0as9') === 'Invalid Calendar Input')
console.assert( getMonth(3, 'woaahhhh!') === 'Invalid Calendar Input')

console.assert( getMonth(222, 'Gregorian') === 'Invalid Month Input')
console.assert( getMonth(0, 'XXXXX') === 'Invalid Month Input')
