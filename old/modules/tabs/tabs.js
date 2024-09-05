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