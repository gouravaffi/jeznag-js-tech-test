This exercise will test your JS and unit testing skills. The goal is to make all the unit tests pass. 
The implementation code (utils/signatureParser.js) aims to isolate the latest reply from an email thread, stripping out email signatures and nested replies. The latest reply might be anywhere from one sentence long to ten paragraphs long.

There are 5 test cases. Three of them pass currently. You'll need to modify the implementation code so that the fourth and fifth tests pass as well.

Many people try to solve this test by simply getting the contents of the first DOM element. This might work in one case but it clearly won't work in other cases with a longer message. You should add additional test cases to make sure your solution fulfills the objective.

To get started, run `npm install`
and then `npm run test` to run the tests.
