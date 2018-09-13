var fetchRandomUser = new Vue({
  el: '#randomUser',
  data: {
    person:{
      name: {
        title:"",
        first: "",
        last: ""},
      location:{
        timezone:{
          description:""}},
      email: ""},
      dob:{
        date:""
      },
      picture:""
  },

  methods: {
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
