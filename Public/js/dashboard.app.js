var dashboardApp = new Vue ({
  el: '#dashboard',
  data: {
  "name" : "Tapestry",
  "project.short_description": "",
  "start_date" : "",
  "target_date" : "",
  "project.budget" : "",
  "project.spent" : "",
  "project.projected_spend": "",
  "project.weekly_effort_target": "",
  tasks: [
    {
      "id": 0,
      "title": "",
      "type" : "",
      "size" : "",
      "team" : "",
      "status": "",
      "start_date": "",
      "close_date": null,
      "hours_worked":"",
      "perc_complete":"",
      "current_sprint" : ""
    }
  ]
},
computed: {
  days_left:function() {
    return moment(this.target_date).diff(moment(), 'days')
  },
  pretty_target_date: function () {
    return this.pretty_date(this.target_date)
  }

},
methods: {
  pretty_date: function(d) {
    return moment(d).format('l')
  },
  pretty_currency: function(val) {
    if(val < ie3) {
      return '$' + val
    }
    if(val < ie6) {
      return '$' + (val/ie3).toFixed(1) + 'k'
    }
    return '$' + (val/ie6).toFixed(1) + 'M'
  },

  completeClass: function(task) {
    if(task.perc_complete == 100) {
      return 'alert-success';
    }
    if(task.current_sprint && task.hours_worked == 0) {
      return 'alert-warning';
    }
  },

  fetchTasks() {
    fetch ('https://raw.githubusercontent.com/tag/iu-msis/dev/public/p1-tasks.json')
    .then( response => response.json{} )
    .then( json => dashboardApp.tasks = json} )
    .catch ( function(err) {
      console.log('TASK FETCH ERROR:');
      console.log(err);
      })
    }
  },
  created() {
    this.fetchTasks();
    }
  })
