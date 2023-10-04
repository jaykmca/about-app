<template>
    <aside class="sidebar">
      <h2 class="menu-title">App Two</h2>
      <!-- <ul>
        <li class="menu-item" @click="navigate('/home')">Home</li>
        <li class="menu-item" @click="navigate('/about')">About</li>
      </ul> -->
      <router-link to="/">
        <div class="menu-item">Home</div>
      </router-link>
      <router-link to="/about">
        <div class="menu-item">About</div>
      </router-link>
      <router-link to="/contact">
        <div class="menu-item">Contact</div>
      </router-link>
          
    </aside>
  </template>
  
  <script>
  export default {
    name: 'SideBarMenu',
    // methods: {
    //   navigate(path) {
    //     console.log("sidebarmenu-----", path)
    //     // Use the Vue Router to navigate to the specified path
    //     this.$router.push(path);
    //   },
    // },
    methods: {
    navigate(path) {
      // Update the URL in the iframe
      this.$emit('iframe-navigation', path);
    },
  },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 120px;
    background-color: #938c8c;
    color: #fff;
    padding: 20px;
    height: 100%; /* Set the height to 100% */
    position: fixed; /* Keep the sidebar fixed on the page */
    top: 0; /* Position it at the top of the page */
    left: 0; /* Position it at the left of the page */
    overflow-y: auto; /* Add scroll if content overflows */
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  .sidebar li:hover {
    text-decoration: underline;
  }

  .menu-title {
    font-weight: bold;
    margin-bottom: 15px; /* Add margin at the bottom of the title */
    margin-top: 15px;
    font-size: 18px; /* Increase font size for the title */
  }
  .menu-item {
   color: #fff;
   text-decoration: none;
   padding: 10px;
   margin-bottom: 5px; /* Add margin between menu items */
   transition: background-color 0.3s; /* Add smooth background color transition */
   border-radius: 5px; /* Add rounded corners to menu items */
}
  </style>