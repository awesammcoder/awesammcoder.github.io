(function(){
  const f = {
    init: function(){
      this.getResumeJSON();
    },

    set: function(id, value){
      document.getElementById(id).innerText = value;
    },

    setH: function(id, value){
      document.getElementById(id).innerHTML = value;
      return '';
    },

    setSrc: function(id, value){
      document.getElementById(id).src = value;
    },

    getResumeJSON: function(){
      $.ajax({
        url: 'http://localhost:3000/api/v1/resume',
        type: 'GET',
        dataType: 'json',
        success: data => {
          if(!data){
            this.getResumeJSON();
          }else{
            this.setValues(data);
          }
        },
        error: err => {
          console.log(err);
        }
      });
    },

    setValues: function(data){
      console.log(data);
      var fragments = '';
      var s = data.sections;
      var h = s.heading;
      var e = s.experience;
      var j = e.jobs;
      var i = e.interns;
      var ed = s.educations;
      var t = s.technical;
      var l = t.languages;
      var f = t.frameworks;
      var soft = t.softwares;

      this.set('name', h.name);
      this.set('objective', s.objective);
      this.set('mobile', h.mobile);
      this.set('email', h.email);
      this.set('repositories', h.repositories);
      this.setSrc('picture', h.picture);
      this.set('foot-name', h.name);
      this.set('foot-mobile', h.mobile);
      this.set('foot-email', h.email);


      j.forEach((job, i) => {
        var title = ''
        if(!i){
          title = '<h1>Experience</h1>'
        }
        fragments += `<div class="row">
          <div class="four columns timeline">
            ${title}
            <h4>${job.start_date} - ${job.end_date}</h4>
          </div>
          <div class="seven columns offset-by-one">
            <h2>${job.company}</h2>
            <h3>${job.position}</h3>
            <p>${job.description}</p>
            <p><b>${job.office_location}</b></p>
          </div>
        </div>`;
      });

      i.forEach((job, i) => {
        fragments += `<div class="row">
          <div class="four columns timeline">
            <h4>${job.start_date} - ${job.end_date}</h4>
          </div>
          <div class="seven columns offset-by-one">
            <h2>${job.company}</h2>
            <h3>${job.position}</h3>
            <p>${job.description}</p>
            <p><b>${job.office_location}</b></p>
          </div>
        </div>`;
      });

      fragments = this.setH('experience', fragments);

      ed.forEach((e, i) => {
        var title = '';
        var border = '';
        if(!i){
          title = '<h1>Education</h1>';
        }else{
          border = 'no-border';
        }

        fragments += `<div class="row education ${border}">
          <div class="four columns">
            ${title}
            <h4>${e.level} Level</h4>
          </div>
          <div class="seven columns offset-by-one">
            <h2>${e.degree}</h2>
            <h3>${e.school}</h3>
            <b>${e.year}</b>
          </div>
        </div>`
      });
      fragments = this.setH('educations', fragments);

      fragments = `<div class="row skills">
      <div class="four columns">
      <h2>Languages</h2>
      </div>
      <div class="seven columns offset-by-one">`;

      l.forEach(lang => {
        fragments += `
            <span>${lang.name}</span>`
      });
      fragments = this.setH('languages', fragments + `</div></div>`);

      fragments = `<div class="row skills">
      <div class="four columns">
      <h2>Frameworks</h2>
      </div>
      <div class="seven columns offset-by-one">`;

      f.forEach(fram => {
        fragments += `
            <span>${fram.name}</span>`
      });
      fragments = this.setH('frameworks', fragments + `</div></div>`);

      fragments = `<div class="row skills">
      <div class="four columns">
      <h2>Softwares</h2>
      </div>
      <div class="seven columns offset-by-one">`;

      soft.forEach(sof => {
        fragments += `
            <span>${sof.name}</span>`
      });
      fragments = this.setH('softwares', fragments + `</div></div>`);

    }
  }

  f.init();
})();