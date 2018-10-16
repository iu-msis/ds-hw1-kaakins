var commentApp = new Vue({
  el: '#commentsData',
  data: {
    comments : [
      {
        id:'',
        comment:''
      }
    ]
  },

  methods: {
    fetchComments () {
      fetch('http://ec2-18-236-123-251.us-west-2.compute.amazonaws.com/api/comment.php')
      .then( response => response.json() )
      .then( json => {this.comments = json} )
      .then(function(resp) {
        console.log(resp)
      })
      .catch( err => {
        console.log('TASK FETCH ERROR:');
        console.log(err);
      })
    },
    postComments(){
      fetch('http://ec2-18-236-123-251.us-west-2.compute.amazonaws.com/api/comment.php', {
        method:"POST",
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify({
          comment:document.getElementById('comment').value
        })
      })
      .then( response => response.json())
      .then(function(resp) {
        console.log(resp)
      })
      .catch( err => {
        console.log('TASK FETCH ERROR:');
        console.log(err);
      })
    }
},
created (){
  this.fetchComments()
}

})
