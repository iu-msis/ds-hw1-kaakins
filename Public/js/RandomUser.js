var fetchRandomUser = new Vue({
  el: '#randomUser',
  data: {
    person:{
      name: {
        first: "",
        last: ""},
      location:{
        city:"",
        state:""},
      email: ""},
      dob:{
        date:""
      },
      picture:""
  },

  computed: {
//from moment
    dateDiff: function (){
      return moment().diff(moment(this.person.dob.date),"years")
    }
},

  methods: {
    //from Gregory
    pretty_date: function (d) {
      return moment(d).format('l')
    },
    fetchRandomUser () {
      fetch('https://randomuser.me/api')
      .then( response => response.json() )
      .then( json => {fetchRandomUser.person = json.results[0]} )
      .catch( err => {
        console.log('TASK FETCH ERROR:');
        console.log(err);
      })
    },
},
created (){
  this.fetchRandomUser()
}

})
