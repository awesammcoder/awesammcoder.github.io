(function(){
  const fbjs = firebase;
  delete firebase;

  class Table {
    constructor(table){
      this.table = table;
      this.database = fbjs.database;
      this.bindEvents();
    }

    bindEvents(){
      this.database().ref(this.table).on('value', snapshot => {
        this.records = snapshot.val();
      }, err => {
        console.error("An error has occured. ", this.table);
      });
    }

    ref(key){
      if(!key){
        return fbjs.database().ref(this.table);
      }else{
        return fbjs.database().ref(`${this.table}/${key}`);
      }
    }

    insert(key, value){
      this.ref(key).set(value);
      return this.records;
    }

    select(key){
      return this.records[key];
    }

    getRecords(){
      return this.records;
    }
  }

  var app = {
    initializeDatabase: function(callback){
      fbjs.initializeApp(JSON.parse(atob(`eyJhcGlLZXkiOiJBSXphU3lEYS1LNkpJdERMY05qeVFSaGdQYWtpWk53UDFJS21YSWciLCJhdXRoRG9tYWluIjoiYXdlc2FtbWNvZGVyLWdpdGh1Yi1pby5maXJlYmFzZWFwcC5jb20iLCJkYXRhYmFzZVVSTCI6Imh0dHBzOi8vYXdlc2FtbWNvZGVyLWdpdGh1Yi1pby5maXJlYmFzZWlvLmNvbSIsInByb2plY3RJZCI6ImF3ZXNhbW1jb2Rlci1naXRodWItaW8iLCJzdG9yYWdlQnVja2V0IjoiYXdlc2FtbWNvZGVyLWdpdGh1Yi1pby5hcHBzcG90LmNvbSIsIm1lc3NhZ2luZ1NlbmRlcklkIjoiMzk5Njg4ODM3MDcifQ==`)));

      db = {};
      db.keys = new Table('keys');

      callback(db);
    }
  };

  app.initializeDatabase(function(db){
    console.log(db);
  });

})();