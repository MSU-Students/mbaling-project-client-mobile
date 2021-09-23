<template>
 
      <div class="col col-shrink">
           <q-btn  
           @click="addNewQweet"
           class="q-mb-lg"
          :disable="!newQweetContent"
          no-caps
          unelevated 
          rounded 
          color="primary" 
          label="Qweet" />
      </div>


 <q-item 
        v-for="qweet in qweets"
        :key="qweet.id"
        class="q-py-md">
          <q-item-section avatar top>





data() {
    return {
      newQweetContent: "",
      qweets: [
        // {
        //   id: 'ID1',
        //   content: 'Number 1 .Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia vero quis esse, dicta saepe animi dolorum omnis assumenda et beatae totam, iste ipsa iusto nobis? Excepturi reiciendis dignissimos eligendi consectetur.',
        //   date: 1631847018423,
        //   liked: false
        // },
        // {
        //   id: 'ID2',
        //   content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia vero quis esse, dicta saepe animi dolorum omnis assumenda et beatae totam, iste ipsa iusto nobis? Excepturi reiciendis dignissimos eligendi consectetur.',
        //   date: 1631791297561,
        //   liked: true
        // },
        
      ]
    }
    
    
  },
  filters:{
   relativeDate(value){
     return formatDistance(value, new Date())
   }
 },
  methods:{
      addNewQweet(){
        console.log('this is the add method')
        let newQweet = {
          content: this.newQweetContent,
          date: Date.now(),
          liked: false
        }
  
  </q-page>
</template>
