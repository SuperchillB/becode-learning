# Interactive form

The goal is to create an interactive form that will be animated thanks to ** jQuery **. This will be a very basic form, with some fields that will see their ** CSS ** style change depending on the action of the user. The objective is to check the entered information: number of characters, check that the confirmation of the password is identical to this one, check if all the fields are filled, etc.

## Objectives

This form contains four fields:

* a field `text` for the pseudonym;
* a `password` field for the password;
* a second field `password` for the confirmation of the password;
* and a last field `text` for the e-mail address.

Two buttons will respectively send the data, and empty fields. No server language for this exercise: everything will take place on the client side.

You will need to make sure the user enters the correct info, in the right way:

* all fields must contain at least 5 characters;
* the password and confirmation must be identical;
* if the fields are empty when sending, an error message is displayed.

To indicate the error to the visitor, you will only need to use ** CSS **: a red border of field would do the case for example. In the same way, if the field is good, you could change the color of the appropriate field to green.

Remember that you have to deal with all the cases because you must never trust the user.

We give you a skeleton to start! It contains the code ** HTML **, the code ** CSS **, and integrates ** Bootstrap ** and ** jQuery **!

## Improvements

This form can be further improved, in the sense that you could further restrict the possibilities of the user, by prohibiting to exceed a certain number of characters in the pseudo, for example. In the same way, the style is for the moment ultra basic, nothing prevents you to make it sophisticated, so that the user experience is pushed to its maximum.

Some security improvements could be made:

* you could check the format of the e-mail address, thanks to a regular expression, made with the `Regex` object of ** JavaScript **;
* you could also verify that the password was safe, by making for example a mini-security indicator that would be based on the number of characters, their diversity, ...
* It is possible to display a help message for each field, when the user types text into them;
