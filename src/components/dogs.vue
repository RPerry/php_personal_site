<template>
        <div>
          <h3>Foster Dogs</h3>
          <h4>I love to foster dogs and I've fostered many in the past few years.</h4>
          <br><p id="bold">Here are some of my favorite pups:</p>
          <transition-group name="images" tag="div">
            <div v-for="i in [index]" :key="i">
              <img :src="currentImg" />
            </div>
          </transition-group>
          <a class="previous" @click="previous" href="#">&#10094; Previous</a>
          <a class="next" @click="next" href="#"> Next &#10095;</a>
        </div>    
</template>

<script>
export default {
  name: "gallery",
  data() {
    return {
      images: [
        "https://github.com/RPerry/php_personal_site/blob/master/src/images/IMG_0012.JPG?raw=true",
        "https://github.com/RPerry/php_personal_site/blob/master/src/images/foster3.JPG?raw=true",
        "https://github.com/RPerry/php_personal_site/blob/master/src/images/IMG_9620.JPG?raw=true",
        "https://github.com/RPerry/php_personal_site/blob/master/src/images/IMG_9463.JPG?raw=true"
      ],
      index: 0
    };
  },

  

  methods: {
   
    next: function() {
      // checking if there is another image and if there isn't, starting from the beginning
       if (this.index >= this.images.length - 1) {
            this.index= 0;
        } else {
            this.index += 1
        }
    },
    previous: function() {
      if (this.index <= 0) {
            this.index= this.images.length - 1;
        } else {
            this.index -= 1
        }
    }
  },

  computed: {
    currentImg: function() {
      return this.images[this.index];
    }
  }
};
</script>


<style scoped>

img {
  max-height:500px;
  max-width:500px;
  min-height:300px;
  min-width:300px;
  width:40%;
  height:30%;
}

.previous, .next {
  cursor: pointer;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
}

.next {
  right: 0;
}

.previous {
  left: 0;
}

#bold {
  font-weight: bold;
}

h3 {
  margin-top: 5%
}

</style>

 
