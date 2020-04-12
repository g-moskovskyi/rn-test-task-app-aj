# rn-test-task-app-aj
## Description:
 A one-page application for finding your girlfriend / boyfriend.
The application is a list of all users of the system with filters.
When the application starts, once a list of users by API is obtained.
API.
[https://gorest.co.in/public-api/users](https://gorest.co.in/public-api/users)
## Screen - 1.
### Search field.
Search - text field, searches by first_name / last_name, filtering is applied after entering more than 2 characters.
### List.
The list of all users obtained from the API is divided into sections by the first letter of the first_name field.
List structure example.

+ A
+  #23 - Annie Hettie - 20 year old - female
+  #12 - Albert Johnson - 28 year old - male
+  #6 - Alfred Bulma - 28 year old - male
+ B
+  #78 - Bob Koa - 54 year old - male
+ C
+  #13 - Chris Feather - 19 year old - male
+  #8 - Connie Ember - 30 year old - female

For users with the status "active" the text color is black, for "inactive" - ​​gray.
After a tap on a list item, a modal window pops up with the text "Do you really want to invite a user with id = {id}?" with the Yes and No buttons.
If “Yes” is clicked, this window closes and the “Invitation Sent” modal window opens with the “OK” button.
The person who was invited to the date is no longer displayed in the list.

## Screen - 2:
### Filters.
Filters are a set of fields that perform interactive filtering. Filtering occurs without a reboot (on the front-end side), with a delay of filtering call of 400 milliseconds (emulation of using an external API). If all filters are inactive, the entire list is displayed.
#### Fields:
- age - two input fields for numbers, "from" and "to", look for in the specified range, if the start / end is not specified, we consider that there is a minimum / maximum value.
- gender - a list with the values "Female", "Male", "Both".
- Buttons "Cancel" and "OK"- closes and applies the filter, respectively.
- Button "Reset" - resets all field values.

How to use:
```
git clone https://github.com/g-moskovskyi/rn-test-task-app-aj.git
npm install
expo start
```
