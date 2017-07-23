# Project Title

cat-sprites

## Project Description

This is one of my first attempts at using sprite images. The three sprite sheets used are of an archer, a cat, and an explosion.

### Things to know

The bulk of this project is in the script.js file. The position arrays change the location (and sometimes the width and placement) of each background-image.

The initial anonymous function gets the archer walking onto the screen. The guyCounter variable is used to loop through the guyPositions array to determine the image position. The guyLeft variable is used to change his location on the screen. The timing of getting the archer to stop walking is used with a setTimeout function. This is hard-coded to correspond with the end of the catFall().

The catFall function loops throgh the catFallPositions. Upon finishing the loop, the interval is cleared, and the catLeap function is invoked.

The catLeap allows the cat to have an arc to its leap. The y variable determines its rate of change of its top position, but the value of y changes during the function, creating the arc. The leap lasts for .9 seconds, and then the catRun function is invoked.

The catRun function loops through background positions in the same manner as the other functions. A setTimeout function is used to stop the function after 2 seconds.

The startleGuy function is invoked with a setTimeout function inside another setTimeout function. In this function, the archer is slightly rotated counter-clockwise to generate a 'nearly-falling' effect. This function is cleared after 2 seconds.

The arrowFly function is invoked with a setTimeout, and hard-coded to line up with the timing of the rest of the story-line. The image of the arrow does not change throughout the function, only the location. As the arrow's left position exceeds 1010px, the arrow is hidden, the interval is cleared, and the explode function is invoked.

Upon invoking the explode function, the class 'hide' is removed from the explosion image, and the background positions are looped through the explosionPositions array. The direction variable is used to go backwards through the array once it reaches the end. At the turnaround of the array, the cat image is given the class 'hide'. As soon as it gets back to the start of the array, the interval is cleared, and the explosion image is hidden. 
