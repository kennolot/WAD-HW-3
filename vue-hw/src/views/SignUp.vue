<template>
    <div class="signup-container">
      <div class="signup-form-wrapper">
        <h2>Create an Account</h2>
        <form @submit.prevent="handleSubmit"> <!-- function that handles submit-->
          <div class="form-group">                
            <p>Email</p>
            <input v-model="formData.email" type="email" required placeholder="Email">                    
            <p>Password</p>
            <input v-model="formData.password" type="password" required placeholder="Password">
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignUp',
    data() {
      return {
        formData: {          
          email: '',
          password: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$store.dispatch('signupUser', this.formData);
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .signup-container {    
    margin: 0 auto;
    padding: 2rem;
  }
  
  .signup-form-wrapper {
    max-width: 500px;
    margin: 0 auto;
    background: white;
    padding: 2rem;
    border-radius: 8px;    
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  p {
    display: block;
    margin-bottom: 0.5rem;
    color:darkslategray;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;    
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  
  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  button:hover {
    background-color: #357abd;
  }
  </style>