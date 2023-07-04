# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alexbroughton/lotide`

**Require it:**

`const _ = require('@alexbroughton/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * `head()`: returns the first element of an array.
  * `tail()`: returns the tail of an array.
  * `middle()`: returns the middle of an array.
  * `assertArraysEqual()`: an assertion to test if two arrays are equal.
  * `assertEqual()`: an assertion to test if two values are equal in value and type.
  * `assertObjectsEqual()`: an assertion to test if two objects are equal.
  * `countLetters()`: returns the number of letters in a string. 
  * `countOnly()`: returns an object of all items in a given array.
  * `eqArrays()`: a test to see if two arrays are equal.
  * `eqObjects()`: a test to see if two objects are equal.
  * `findKey()`: finds a key in an object given a string.
  * `findKeyByValue()`: finds the first key in an object given a value. 
  * `letterPositions()`: returns the positions of all letters in a given string.
  * `map()`: applies a call back function to a given array and returns the result.
  * `takeUntil()`: returns an array of elements until a specified value for a given array.
  * `without()`: returns an array of elements that have been removed from a given array using a secondary array.
