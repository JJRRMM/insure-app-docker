

  import axios from "axios";
const DBAPI_URL = 'http://localhost:4001';
export default {
  // Get Resume
  getResume: function() {
    return axios.get("/api/resume");
  },
  // Gets the skills 
  getSkills: function() {

    return axios.get("/api/skillSet");
  },
  getProfile: function() {
    return axios.get("/api/profile");
  },
  deleteProfile: function(id) {
    return axios.delete("/api/profile/" + id);
  },
  saveProfile: function(profileData) {
    return axios.post("/api/profile", profileData);
  }
};
