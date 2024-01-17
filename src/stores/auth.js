import api from "@/services/api";
import { defineStore } from "pinia"

// Lưu người dùng vào localStorage
function saveUserToLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  // Kiểm tra xem người dùng có tồn tại trong localStorage không
  function getUserFromLocalStorage() {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }
  
  // Xoá người dùng khỏi localStorage
  function removeUserFromLocalStorage() {
    localStorage.removeItem('user');
  }

export const useAuthStore = defineStore('auth', {
  state: () => (
    { 
      user: getUserFromLocalStorage(),
    }
  ),
  getters: {
    isAuthenticated: state => !!state.user,
    isPromoter: state => !!state.user && (state.user.role == 2),
    currentUser: state => state.user
  },
  actions: {
    signOut() {
        this.user = null;
        removeUserFromLocalStorage();
    },
    async signIn(user) {
        try {
          const response = await api.post('/users/signin', user);
          this.user = response.data.user;
          saveUserToLocalStorage(this.user)
          return { success: true, user: this.user };
        } catch (error) {
          console.error('Error during sign in:', error.response ? error.response.data.message : error.message);
          return { success: false, error: error.response ? error.response.data.message : error.message };
        }
    },
    async signUp(user) {
        try {
          const response = await api.post('/users/signup', user);
          this.user = response.data.user;
          saveUserToLocalStorage(this.user);
          return { success: true, user: this.user };
        } catch (error) {
          console.error('Error during sign up:', error.response ? error.response.data.message : error.message);
          return { success: false, error: error.response ? error.response.data.message : error.message };
        }
    }

  },
})