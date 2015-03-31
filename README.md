TwitLibs
========
[Visit Site](http://twitlibs.herokuapp.com)
##Twitter and MadLib Mashup

###Description:
TwitLibs was created out of a deep love for MadLibs, a cultivated appreciatiion for absurdist humor, and a sincere belief that hashtags serve no actual purpose. (Unless, of course you're at a certain type of cafe in Amsterdam, in which case, the management recommends hashtagging a minimum of 2-3 times per day). All jokes aside, I wanted to create a word-game that would use a randomly generated source, triggered by user input to power the MadLib template.

###Challenges:
The challenges of working with the Twitter API were interesting. First several filters had to be created to help reduce re-tweets, special characters and data redundancy. The next hurdle was identifying parts of speech for each field in the various 'madlib' templates. I found an NPM module for parts of speech, which helped quite a bit, but still didn't solve all use-case problems. I ended up creating a library file for parts of speech to use in conjunction with the Twitter API when there was insufficient data related to the user query.

###Wishlist:
If time allowed, I would've spent more time testing templates and dialing in the part of speech algorithms for my part of speech module with the Twitter feed. I'd also make the template 'write' the results real-time, instead of just populating the entire field with the final merged result.

###Tools:
Javascript, Node.js, Express, Sequelize, Postgres, Twitter API, NPM Part Of Speech Module.
