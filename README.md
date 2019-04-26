## Grocery List - Coding Challenge

I chose Sass as the CSS preprocessor, as I have some experience with it and am completely unfamiliar with Less.  I used the 7-1 pattern that I am familiar with, using a main.scss to import partial Sass code from 7 categories:
- abstracts/
- base/
- components/
- layout/
- pages/
- themes/
- vendors/

As this is a pretty simple page, I did not need, and therefore did not include, the themes or vendors categories.

Since the grocery list is repetitive it made the most sense to use something to generate the front end so as to minimize the coding required.  I chose handlebars.js for HTML templating, mainly because it is pretty simple and integrates with external styling seamlessly.

The page is hosted on Heroku and can be viewed [here](https://fierce-hamlet-32017.herokuapp.com/).