# Chatbot using RiveScript.js

> [Chatbot UI]() Chatbot nowadays plays a bigger role in our day to day living especially to those who were exposed on using internet, visiting web pages and browsing social media sites. Chatbot were mainly used for pre-defined customer support inquiries.

> Today, we will create a simple chatbot web application using HTML, CSS, Javascript, and RiveScript.js. Wait! What is **[RiveScript.js](//github.com/aichaos/rivescript-js)**? It is a RiveScript interpreter library for javascript. **[RiveScript](//www.rivescript.com/)** is a scripting language for chatterbots, making it easy to write **trigger/response** pairs for building up a bot’s intelligence. You can read the complete documentation [here](//www.rivescript.com/docs/tutorial).

Let’s build first our **index.html** file, this will be the user-interface for our chat application.

```html
<!-- index.html -->
<html>
  <head>
    <title>Simple ChatAI using RiveScript.js</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <div class=”chat”>
      <div class=”messages”></div>
      <div id=”edge”></div>
      <form class=”actions”>
        <input type=”text” placeholder=”press ‘Enter’ to send…”>
      </form>
    </div>

    <script src="https://unpkg.com/rivescript@latest/dist/rivescript.min.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```

And here will be our CSS file named style.css

```css
/* style.css */
* {
 font-family: Arial;
 font-size: 12pt;
}
.chat {
 width: 400px;
 height: 90%;
 position: fixed;
 overflow: scroll;
}
.actions {
 position: fixed;
 bottom: 0;
 display: block;
 width: 100%;
}
.actions input{
 height: 30px;
 display: block;
 width: 100%;
 outline: 0;
 border-top: 0;
 border-left: 0;
 border-right: 0;
}
.messages div {
 max-width: 60%;
 display: block;
 margin: 5px;
 padding: 10px;
 border-radius: 7px;
}
.messages .bot {
 text-align: left;
 margin-right: auto;
 background: #001f3f;
 color: white;
}
.messages .self {
 text-align: right;
 margin-left: auto;
 background: #DDD
}
```

> Now that we have our user-interface, we need to create next our bot’s logic by creating a new instance of RiveScript interpreter using the code below.

```js
// script.js
let bot = new RiveScript();
```

> And create a second file named **brain.rive**, this file will handle the **trigger/response** data which needed for our bot to know what answer for the questions thrown by the user. We will create just a simple brain library for our A.I, able to greet, ask the user name, and, etc..

**brain.rive**

```rive
! version = 2.0

+ hello
- hello, what is your name?

+ hi
- hi, what is your name?

+ my name is *
- nice to meet you <star>
- nice meeting you <star>

+ thank you
- you are welcome
- welcome
- no problem
- no worries

+ *
- Sorry did not get what you said
- I am afraid that i can not understand you
- I did not get it
- Sorry can you please elaborate that for me
```

> ( **+** ) plus sign is what we called **trigger** <br>
( **—** ) minus sign is the **response** <br>
having a multiple response data under the trigger will let the bot choose randomly on listed responses on what to answer. <br>
( ***** ) asterisk act as the wildcard, any messages didn’t matched on the triggers above will fall on this category. <br>
**&lt;star&gt;** acts as a variable, anything entered in placed of ‘*****’ will be the value for the <star>, you can have multiple variables. It’s your call, i’m telling you!

**e.g.**
```rive
+ My name is * and i am * years old
—  Your name is <star> and you are <star1> years old, right?
```

> After building the required intelligence for our bot application, we need to add some javascript code that will link the **brain.rive** library in our RiveScript instance, handling events for submitting messages, fetching bot replies, and emulating messages in our user-interface DOM.

> To link brain.rive library in our RiveScript instance do the following. You could have **.rive** files as many as you want.

**script.js (continuation)**
```js
// script.js

const brains = [
   './brain.rive'
// './another-category-sample.rive
];
bot.loadFile(brains).then(botReady).catch(botNotReady);
```

> After loading successfully our brain library, we need to prepare the events use for submitting messages and fetching bot replies.

**script.js (continuation)**
```js
// script.js

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');
form.addEventListener(‘submit’, (e) => {
 e.preventDefault();
 selfReply(input_box.value);
 input_box.value = ‘’;
});
function botReply(message){
 message_container.innerHTML += `<div class=”bot”>${message}</div>`;
 location.href = ‘#edge’;
}
function selfReply(message){
 message_container.innerHTML += `<div class=”self”>${message}</div>`;
 location.href = ‘#edge’;

 bot.reply(“local-user”, message).then(function(reply) {
 botReply(reply);
 });
}
function botReady(){
 bot.sortReplies();
 botReply(‘Hello’);
}
function botNotReady(err){
 console.log(“An error has occurred.”, err);
}
```

> I’m glad that you made it here alive! After doing the steps above you will have now a simple chat bot, you can set as many pair of **trigger/response** as many as you want for a better conversation performance.

> You could view it live here: **[Simple ChatAI using RiveScript.js](//codepen.io/awesammcoder/pen/yqwOPe)** <br>
You could also read the [documentation](//www.rivescript.com/docs/tutorial) for complete reference.

**Thank You!**
