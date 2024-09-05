# Persistent Storage using HTML5 localStorage

## Persistent Storage  {docsify-ignore}

**Persistent storage** is any data storage device that retains data after power to that device is shutoff. It is also sometimes referred to as non-volatile storage.

!> Note! Any data saved in this storage are not saved in the server database. Just for local saving, good for speed performance optimization.

**localStorage** is a Javascript API in HTML5, it allows users to save data in a storage device locally (user's device). The following are applications where you can use localStorage.

* Todo-list
* Phonebook
* Events Reminder
* Notes
* Diary
* so on and so forth...   

## Methods of localStorage {docsify-ignore}
Using **localStorage** is pretty easy, there are two basic methods for using it, one for setting a record and the second one was for fetching/getting a record.

```js
  // Store some data in localStorage
  localStorage.setItem("someKey", "value");

  // Fetch data in localStorage
  localStorage.getItem("someKey")

  // ---- or ----

  localStorage.someKey = value; // set value
  localStorage.someKey; // get value
```

Here is the core concept in using **localStorage**. We can take advantage on these methods by setting a data in localStorage and get the saved data from it when the page loads.

```js
class MyStorage {
  constructor(key = false){
    this.key = key || 'persisting';
    this.storage = this.get();
  }

  // to insert in storage
  insert(task){
    this.storage.push(task);
    this.persist();
    return this.get();
  }

  // remove data in storage
  remove(task){
    this.storage.splice(this.storage.indexOf(task), 1);
    this.persist();
    return this.get();
  }

  // save in localStorage
  persist(){
    localStorage.setItem(this.key, JSON.stringify(this.storage));
  }

  // get data from localStorage
  get(){
    return JSON.parse(localStorage.getItem(this.key)) || [];
  }
}
```

## Usage of MyStorage class {docsify-ignore}
> Create first an instance of MyStorage class, from there you are now able to use its methods

```js

  var db = new MyStorage(); // create a new instance of MyStorage class

  // insert
  db.insert("Some data");

  // get record
  db.get() // => ['Some data']

  // insert another one
  db.insert("Another data");

  db.get() // => ['Some data', 'Another data']

  // remove
  db.remove('Some data');

```

> Here is the live version in **[Codepen](//codepen.io/awesammcoder/pen/jvmdyE)**

