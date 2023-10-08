//Navbar componenet containing router-links for navigation
const Navbarcomponent = {
    template: `
    <header>
    <nav class="navbar">
        <router-link to="/" class="nav-link">About</router-link>
         <router-link to="/projects" class="nav-link">Projects</router-link>
         <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
    </header>
    `
    
};

//About section of the Website
const Aboutcomponent = {
    template: `
        <div class="about-section">
            <div class="profile-picture">
                <img src="./Me.jpg" alt="My Picture">
            </div>
            <div class="about-text">
                <p>Portfolio Summary
                Bachelor of Information Technology Student in aspiring a tech profession.
                
                Adaptable, commited and equipped with a sense for teamwork. Thriving in dynamic environments and driving project Success.</p>

                <div class="about-announcement">
                <p v-if="showAnnouncement" class="announcement">{{announcement}}</p>
                </div>
                
            </div>
        </div>
    `,
    data() {
        return {
            announcement: "There was a new update on my CV",
            showAnnouncement: true
            
        };
    },
};



//Table of Projects using v-for to render each row
const Projectscomponent = {
    template: `
        
        <section class="projects">
        <table>
          <thead>
            <tr class="coloumn-headings">
              <th>Period</th>
              <th>Qualifications</th>
              <th>Organizations</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="project in projects" :key="project.id">
              <td>{{ project.one }}</td>
              <td>{{ project.two }}</td>
              <td>{{ project.three }}</td>
            </tr>

          </tbody>
        </table>
      </section>
        
    `,
    data() {
        return {
            projects: [
                { id: 1, one: "November 2022 - June 2024", two:"Web Developer" , three: "Deakin University", },
                { id: 2, one: "June 2019 - June 2023", two:"Project Manager" ,three: "Deakin University",  },
                { id: 3, one: "June 2021 - June 2020", two:"Software Developer" , three: "Deakin University",},
                { id: 4, one: "June 2018 - June 2019", two:"MUFY" , three: "Monash College"},
                
                
            ]
        };
    }

};
//contact form component
const Contactcomponent = {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    template: `
    <div class="container">
        <div style="text-align:center">
            <h2>Contact Me</h2>
            <p>Send me a message:</p>
        </div>
            <div class="column">
                <form @submit.prevent="handleSubmit" class="contact-form">
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="name" placeholder="Your name..">
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model="email" placeholder="Your email..">
                    <label for="subject">Message</label>
                    <textarea id="subject" v-model="message" placeholder="Write something.." style="height:170px"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
    `,
    methods: {
        handleSubmit() {
            // Alert the user
            alert("Thank you for your time and feedback I will reply soon =)");
            
            // Clear the form inputs
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }

};
//Footer component displaying a Linkedin and Github links with different colors
const Footercomponent = {
    template: `
        <div class="footer">
            My Portfolio by Brendan
             <a href="https://github.com/Brendan1520/Task1.3C.git" target="_blank" class="link-github">GitHub</a>

            <a href="https://www.linkedin.com/in/brendan-samarasekera-3aab75194" target="_blank" class="link-linkedin">LinkedIn</a> 
        </div>
    `
};

// Vue Instance setup
const routes = [
    { path: '/', component: Aboutcomponent },
    { path: '/projects', component: Projectscomponent },
    { path: '/contact', component: Contactcomponent }
];

const router = new VueRouter({
    routes
});

//Vue Instance setup
new Vue({
    el: '#app',
    router,  //Attached the Vue Router
    components: {

        //Registering Components for use in app
        'navbar-component': Navbarcomponent,
        'footer-component': Footercomponent,
        'about-component': Aboutcomponent,
        'projects-component': Projectscomponent,
        'contact-component': Contactcomponent
    }
});
