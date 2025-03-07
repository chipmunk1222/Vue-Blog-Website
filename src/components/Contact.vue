<template>
  <ul class="contact-container">
    <li class="contact-list" v-for="contact in contacts" :key="contact.id">
      <ContactItem :icon="contact.icon" :image="contact.img" :content="contact.content" />
    </li>
  </ul>
</template>

<script>
import ContactItem from '@/components/ContactItem.vue'
export default {
  data(){
    return{
      contacts:[
        {
          id:1,
          icon: "wx",
          img: require("@/assets/image/QQ.jpg"),
          content: "q2571403027",
        },
        {
          id:2,
          icon: "github",
          img: require("@/assets/image/QQ.jpg"),
          content: "chipmunk1222",
        },
        {
          id:3,
          icon: "QQ",
          img: require("@/assets/image/QQ.jpg"),
          content: "2571403027",
        },
        {
          id:4,
          icon: "email",
          img: require("@/assets/image/QQ.jpg"),
          content: "2571403027@qq.com",
        } 
      ]
    }
  },
  components: {
    ContactItem
  }
}
</script>

<style scoped lang="scss">
 .contact-container {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    .contact-list {
      padding: 5px 0;
      position: relative;
      left: 0;
      list-style-type: none;
      height: 30px;
      line-height: 30px;
    }
  }   
</style>