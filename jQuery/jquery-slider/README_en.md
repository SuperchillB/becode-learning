# Slider

Some will undoubtedly wonder: _ "what is a carousel?" _. A carousel is simply a scrolling image, most often present on the index of a website.

## Objectives

You must make a carousel yourself. Simple at first, you can always improve it later if you are motivated! This carousel, which we will also call _slider_ quite fluently, will simply have some basic functions:

* it will have two buttons, one to display the previous image, the other to display the next one;
* It will scroll alone, that is to say that the images will scroll by themselves without having to intervene;
* It can be very flexible to the extent that it will be possible to put as many images as you want.

## `setTimeout ()`, or repeat a function regularly

A native ** JavaScript ** method will be useful for automatically scrolling images. This is `setTimeout ()`, which takes two arguments: the name of the function to execute, and the time interval (in milliseconds) to wait before doing it. The trick is to restart the function inside itself to achieve an infinite loop:

`` `Javascript
var myBlock = function () {
    setTimeout (function () {
        alert ('Hello!'); // will show "Hello!" every second
        myloop (); // restart the function
    }, 1000);
};

myloop (); // we do not forget to launch the function a first time
`` `

The images used here come from [lorempixel.com] (http://lorempixel.com/) and are not all royalty free.

You now have all the keys to make this carousel!

Do not forget to check the ** jQuery ** documentation if you need it, and use a debugger to locate a problem in your code.

## Improvements

We have just presented a very basic carousel. Most of those you meet on the web are much more sophisticated, but remember that they work almost all the same way! How about improving yours? Here are some tracks:

* Scrolling images is not very aesthetic: instead of the display system, try to set up sympatic animation effects!
for the moment, the controls are very basic: it is not possible to go to a specific image by clicking once. How about making a list of buttons each representing a slide?
* Similarly, it is possible to thumbnails images and display them below the carousel to make a much better navigation!

The possibilities are endless, we can always find new ideas, whether they are good or not.
