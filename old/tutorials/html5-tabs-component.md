# Tabs Component - HTML5 & Javascript

?> In this tutorial, we will create your own HTML5 Tab components that your can use in your own application without using any javascript library.

### HTML Structure
```html
  <!-- These are Tabs  -->
  <ul id="custom-tab" class="tabs">
    <li class="tab" data-tab-content="firsttab">1st Tab</li>
    <li class="tab" data-tab-content="secondtab">2nd Tab</li>
    <li class="tab" data-tab-content="thirdtab">3rd Tab</li>
  </ul>
```
* **custom-tab** ID is our specified ID, it let us identify out tab component. It is helpful when we have several tabs in single page. You can choose any name for this ID.
* **tabs** class, a way to declare that this component is a Tab.
* **tab** class, a way to declare that this item is component of our Tab.
* **data-tab-content** is an attribute responsible on which tab container is connected for this tab item. You can choose any name.

```html
  <!-- These are Tabs container -->
  <div class="tab-content" data-tab-parent="custom-tab" id="firsttab">
    <h1>1st Tab Content</h1>
  </div>

  <div class="tab-content" data-tab-parent="custom-tab" id="secondtab">
    <h1>2nd Tab Content</h1>
  </div>

  <div class="tab-content" data-tab-parent="custom-tab" id="thirdtab">
    <h1>3rd Tab Content</h1>
  </div>
```
* **tab-content** class responsible on telling that this component is a container for our tabs.
* **data-tab-parent** attributes tells us on which tab component its parent.
* **id** we need to specify the ID of this tab container, for our tab to know that this container belongs to them.

### CSS Simple Design
```css
ul.tabs {
list-style-type: none;
margin: 0;
padding: 0;
display: inline-block;
}

li.tab {
display: inline-block;
padding: 10px 50px;
text-align: center;
background: #333;
color: #fff;
cursor: pointer;
opacity: .9;
border: 1px solid #999;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
}

li.tab:hover {
opacity: 1;
}

li.tab.active {
background: white !important;
border-bottom: none;
color: #333;
transition: all .5s;
}

.tab-content {
padding: 5px 0;
}

.tab-content:not(.active) {
display: none;
}
```

### Javascript Tabs component
```js
(() => {
  class Tabs {
    constructor(id){
      this.id = id;
    }

    initialize(){
      this.element = this.getTabsElement();
      this.containers = this.getTabsContainer();
      this.bindEvents();
      this.setDefault();

      return this;
    }

    setDefault(){
      this.toggleActive(this.getTabs()[0]);
      this.toggleActive(this.containers[0]);
    }

    bindEvents(){
      this.bindTabChange();
    }

    bindTabChange(){
      this.getTabs().forEach(tab => {
        tab.addEventListener('click', () => {
          this.onTabClick(tab);
        });
      });
    }

    onTabClick(tab){
      !this.isActive(tab) && this.getActiveTab(activeTab => {
        this.toggleActive(activeTab);
        this.toggleActive(tab);
      });

      !this.isActive(tab) && this.getActiveContainer(activeContainer => {
        this.toggleActive(activeContainer);
        this.toggleActive(this.getTabContainer(tab));
      });
    };

    toggleActive(element){
      new Promise((resolve, reject) => {
        let classNames = this.getClasses(element);
        this.isActive(element) ? resolve(classNames) : reject(classNames);
      }).then(classNames => {
        classNames.splice(classNames.indexOf('active'), 1)
        element.className = classNames.join(' ');
      }).catch(classNames => {
        element.className = classNames.push('active') ? classNames.join(' ') : classNames;
      });
    }

    getClasses(element){
      return element.className.split(' ');
    }

    isActive(element){
      return this.getClasses(element).indexOf('active') != -1;
    }

    getActiveTab(callback){
      this.getTabs().forEach(tab => {
        this.isActive(tab) && callback(tab);
      });
    }

    getActiveContainer(callback){
      this.getTabsContainer().forEach(container => {
        this.isActive(container) && callback(container);
      });
    }

    getTabContainer(tab){
      return document.querySelector(`.tab-content#${tab.dataset.tabContent}`);
    }

    getTabs(){
      return this.element.querySelectorAll('.tab') || [];
    }

    getTabsElement(tabId){
      return document.getElementById(tabId || this.id) || null;
    }

    getTabsContainer(tabId){
      return document.querySelectorAll(`.tab-content[data-tab-parent=${tabId || this.id}]`);
    }

    hide(){
      this.getTabs().forEach(tab => {
        tab.style.display = 'none';
      });

      this.getTabsContainer().forEach(container => {
        container.style.display = 'none';
      });
    }

    show(){
      this.getTabs().forEach(tab => {
        tab.style.display = '';
      });

      this.getTabsContainer().forEach(container => {
        container.style.display = '';
      });
    }
  }

  window.Tabs = Tabs;
})();
```

### Usage of Script
?> You can copy the code above and paste it in your source code or link the script file on your HTML app, and follow usage of Tabs class below.
```html
<body>
  ...
  <script src="https://awesammcoder.github.io/modules/tabs/tabs.js"></script>
</body>
```

### Usage of Tabs Class
```js
let custom_tab = new Tabs('custom-tab'); // creating an instance of Tabs class
custom_tab.initialize(); // initializing DOM elements
```

### Tabs Display Methods
```js
// hides tab components. Tab options & Tab containers.
custom_tab.hide();

// shows tab components.
custom_tab.show();
```

### Live Example
> View at [Codepen | @awesammcoder](//codepen.io/awesammcoder/pen/NLLLWj) for live preview.

