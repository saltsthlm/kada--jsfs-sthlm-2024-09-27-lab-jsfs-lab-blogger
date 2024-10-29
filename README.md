# Salt Blogger

## A. What you will be working on today

Today you will be building a blogging engine with [Express](https://expressjs.com/). Express is a widely used web framework for Node.js and is therefore very important to know for any full-stack JavaScript developer.

## B. Testing and linting setup

### Linting

Use the linting rules that we have supplied in [this demo](https://github.com/appliedtechnology/jsfs-lab-lintingDemo) , it should be pretty familiar by now.

### Testing

Set up the project to use the _Jest_ as test runner. [Here's](https://github.com/appliedtechnology/jsfs-lab-testingDemo) instructions on how to use this testing framework.

We also want you to use [Supertest](https://github.com/visionmedia/supertest) to test your API and [jsdom](https://github.com/jsdom/jsdom) to test your frontend code.

Make sure you install all of these testing tools as devDependencies.

## C. Lab instructions

### Salt blogger

You'll create a blogging engine. The blogging engine consists of a HTML welcome page and a directory with static blog posts written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

#### Main Page

The main page (index.HTML) is currently just showing a 'Hello World' message, but it should show links to all blog post entries (markdown files) that are available in the entries folder. We've put a few example files in there, from the [protips blog](https://appliedtechnology.github.io/protips/).

Clicking a link should present the user with a HTML view of the markdown blog entry.
It could be presented on the same page dynamically (would probably involve some client side JavaScript), or the link could direct the browser to a new address.
Exactly how you design that is up to you.

`npm start` starts the server on port 8080.

`npm run dev` uses Nodemon to watch the files so you don't have to re-start the server whenever you make changes to the code.

#### Serving static pages

The main page is best presented to the user as a static resource. To do that, you will use the built-in _middleware_ [Express Static](https://expressjs.com/en/starter/static-files.html) that will make it really easy to send all files in the public folder as static content.

#### Blog Entries

##### List all blog entries

A blog entry is just a Markdown file in the `entries` folder.In order to list all blog entries on the main page, you'll have to create a REST endpoint that lists all files currently in that folder. Then you will have to create some client side JavaScript that calls the endpoint to create the links dynamically.

##### Show a blog entry

A blog entry should be presented to the client in HTML format. To do that, you will have to convert the Markdown content to HTML.
There is a nice library called [Showdown](http://showdownjs.com/) that does exactly that and it's also included as a dependency in this project.

#### Testing

Testing is important. **Don't take shortcuts!**. Make sure you integrate all of the three below testing frameworks in your code.

#### Jest

You will use the [Jest framework](https://jestjs.io/) for running all your tests. Writing a test for jest is pretty similar to Mocha, but there are other ways to do asserts (called [matchers](https://jestjs.io/docs/en/using-matchers)) though, which for most people are better than the Node standard assert.

Integrate a watch mode! It is very powerful with Jest.

##### Supertest

Supertest is a tool that makes it easy to run assertions against a live REST services. If you are being a bit clever, you can even use it to test your entire API while mocking out the underlying service implementations. Very n!

##### jsdom

jsdom will create a DOM representation of HTML content that is usable on Node and makes it an excellent utility for testing JavaScript targeted for the browser.

#### Styling

A little bit of CSS to make the blog look good is always nice.
But remember that it's not our primary goal here, so don't spend much time on styling.
Concentrate on understanding the Express framework and the idea of using middleware instead.

---

Good luck and have fun!
