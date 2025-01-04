<template>
    <div class="about-us">
      <section class="hero-section">
        <h1 class="hero-title">Welcome to Our Church</h1>
        <p class="hero-description">
          We are a community of faith, hope, and love, dedicated to serving God and our neighbors.
        </p>
      </section>
  
      <section class="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to glorify God by leading people into a growing relationship with Jesus Christ, equipping them to serve and share His love with the world.
        </p>
      </section>
  
      <section class="history-section">
        <h2>Our History</h2>
        <p>
          Established in 2000, our church has been a beacon of hope and faith for generations. From humble beginnings, we have grown into a vibrant community dedicated to making a difference.
        </p>
      </section>
  
      <section class="leadership-section">
        <h2>Meet Our Leadership</h2>
        <div class="leaders">
          <div class="leader" v-for="leader in leaders" :key="leader.id">
            <img :src="leader.photo" :alt="leader.name" class="leader-photo" />
            <h3>{{ leader.name }}</h3>
            <p>{{ leader.role }}</p>
          </div>
        </div>
      </section>
  
      <section class="services-section">
        <h2>Service Times</h2>
        <ul>
          <li><strong>Sunday Worship:</strong> 10:00 AM</li>
          <li><strong>Bible Study:</strong> Wednesday, 7:00 PM</li>
          <li><strong>Youth Fellowship:</strong> Friday, 6:00 PM</li>
        </ul>
      </section>
  
      <section class="contact-section">
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong> Uganda road, Eldoret City<br />
          <strong>Phone:</strong> (123) 456-7890<br />
          <strong>Email:</strong> info@ourchurch.com
        </p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
    data() {
      return {
        leaders: [
          {
            id: 1,
            name: "Pastor John Smith",
            role: "Senior Pastor",
            photo: "/images/pastor-john.jpg",
          },
          {
            id: 2,
            name: "Jane Doe",
            role: "Youth Ministry Leader",
            photo: "/images/jane-doe.jpg",
          },
          {
            id: 3,
            name: "Michael Brown",
            role: "Worship Leader",
            photo: "/images/michael-brown.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .about-us {
    font-family: Arial, sans-serif;
    padding: 20px;
    color: #333;
  }
  
  .hero-section {
    text-align: center;
    padding: 40px 20px;
    background-color: #f9f9f9;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .hero-description {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .mission-section,
  .history-section,
  .leadership-section,
  .services-section,
  .contact-section {
    margin-bottom: 30px;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #0056b3;
  }
  
  p {
    line-height: 1.6;
  }
  
  .leaders {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .leader {
    text-align: center;
    width: 200px;
  }
  
  .leader-photo {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  
  .contact-section p {
    line-height: 1.8;
  }
  </style>
  