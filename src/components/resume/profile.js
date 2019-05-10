import React from 'react';
import Divider from '@material-ui/core/Divider';

const styles = {
    experienceHead: {
        // color: '#2cb5e8',       
    },
    experienceTitle:{
        color: '#f94b04' 
    },
    experiencePoints: {
        marginLeft: '30px',
        marginTop: '2px'
        // lineHeight: 0.65
    },
    normalLineHt:{
        // lineHeight: 1.5
        marginTop: '5px',        
    },
    articleSection: {
        marginBottom: '35px'
    }
}


const Profile = () => (
    <div>
        <header>
            <h2 style={styles.experienceHead}>
                Arvind Kannan
            </h2>
            <h3 style={styles.experienceTitle}>
                Full Stack JS Developer
            </h3>
        </header>
        <Divider />
        <section>
            <h3 style={styles.experienceHead}>
                Summary
            </h3>
            <div>
                <p>Full Stack JS developer, applying ideas and solutions that deliver top notch, fluid experience. Seasoned in enterprise product development by skillfully blending tested and proven methodologies and technologies with latest frameworks</p>
                <p>Experienced in developing responsive single page applications using vanilla Javascript and popular frameworks such as AngularJS, ReactJS, BackboneJS, NodeJS</p>
                <p>Strong faith in being a team player and mentoring</p>
            </div>
        </section>
        <Divider />
        <section>
            <h3 style={styles.experienceHead}>
                Experience
            </h3>
            <article style={styles.articleSection}>
                <h4 style={styles.experienceTitle}>
                    Senior Consultant at Aquent Dev6
                </h4>
                <h5 > January 2019 - Present </h5>
                <div style={styles.experiencePoints}>
                    <p>
                        Project lead at Dev6 for a multi billion dollar telecom client
                    </p>
                    <p>
                        Build admin app for managing users and subscriptions for telephony on the cloud
                    </p>
                    <p>
                        Work with UX and Biz Analysts in grooming user stories and develop scopes
                    </p>
                    <p>
                        Mentor team members and client dev teams
                    </p>
                    <Divider />
                    <p style={styles.normalLineHt}>
                        Technologies: Angular 6, RxJS, Karma, D3JS, SASS
                </p>
                </div>
            </article>            
            <article style={styles.articleSection}>
                <h4 style={styles.experienceTitle}>
                    Senior Software Engineer at Juniper Networks
                </h4>
                <h5 > November 2015 - January 2019 </h5>
                <div style={styles.experiencePoints}>
                    <p>
                        Develop reusable framework widget components
                    </p>
                    <p>
                        Develop MV-* based data visualization for complex networks
                    </p>
                    <p>
                        Develop REST APIs
                    </p>
                    <p>
                        Identify and address performance bottlenecks
                    </p>
                    <p>
                        Maintain and update build scripts
                    </p>
                    <p>
                        Member of in-house UI Framework team
                    </p>
                    <p>
                        Migrate application to ES6
                    </p>
                    <p>
                        Migrate jQuery based widgets to React Components
                    </p>
                    <Divider />
                    <p style={styles.normalLineHt}>
                        Technologies: Backbone, MarionetteJS, ReactJS, Webpack, RequireJS, NodeJS, ExpressJS, SocketIO, jQuery, jQueryUI, D3JS, Grunt, Git, Mocha, SASS
                </p>
                </div>
            </article>
            <article style={styles.articleSection}>
                <h4 style={styles.experienceTitle}>
                    Senior Software Engineer at BMC Software
            </h4>
                <h5 > April 2013  -  May 2015 </h5>
                <div style={styles.experiencePoints}>
                    <p>
                        Update application to AngularJS
                    </p>
                    <p>
                        Update legacy fat client  application to web application
                    </p>
                    <p>
                        Work with UX team in converting legacy UI in to user friendly and intuitive UI
                    </p>
                    <p>
                        Research and update application to latest UI frameworks

                    </p>
                    <p>
                        Develop java plugins to hook up third party applications with BMC Remedy
                    </p>
                    <Divider />
                    <p style={styles.normalLineHt}>
                        Technologies: HTML, CSS, Javascript, jQuery, Angular JS, Underscore, Jasmine, Bootstrap, Grunt, Gulp, D3JS, Bower, NodeJS, Perforce
                </p>
                </div>
            </article>
            <article style={styles.articleSection}>
                <h4 style={styles.experienceTitle}>
                    Software Engineer at Prosoft IT Services
                </h4>
                <h5 >October 2010  -  March 2013 </h5>
                <div style={styles.experiencePoints}>
                    <p>
                        Develop modern Web UI layer for BMC ITSM application
                    </p>
                    <p>
                        Develop IT Services ticket reusable widget
                    </p>
                    <p>
                        Implement UI based on RBAC for IT Users and Business Users
                    </p>
                    <p>
                        Work with Java backend team to create and consume Rest APIs for the new UI
                    </p>
                    <Divider />
                    <p style={styles.normalLineHt}>
                        Technologies: HTML, CSS, Bootstrap, Javascript, jQuery, jQueryUI, AJAX, Perforce
                    </p>
                </div>
            </article>
            <article style={styles.articleSection}>
                <h4 style={styles.experienceTitle}>
                    IT Analyst at Tata Consultancy Services
                </h4>
                <h5 >August 2008  -  October 2010</h5>
                <div style={styles.experiencePoints}>
                    <p>
                        Design and developed applications on BMC AR System platform
                    </p>
                    <p>
                        Customize IT Service Management application to customer needs with AR System workflows
                    </p>
                    <p>
                        Build Billing and Reporting application based on BMC AR System Platform and workflows
                    </p>
                    <p>
                        Develop simple UI using HTML, CSS and Javascript
                    </p>
                    <p>
                        Expert consultant on ITSM Application for several major industries including media and entertainment, manufacturing etc.
                    </p>
                    <Divider />
                    <p style={styles.normalLineHt}>
                        Technologies: HTML, CSS, Javascript, Unix, Oracle DB, BMC Remedy AR System
                    </p>
                </div>
            </article>
            <article style={styles.articleSection}>
                <h4 style={styles.experienceTitle}>
                    System Engineer at Tata Consultancy Services
                </h4>
                <h5 >June 2005  -  August 2008</h5>
                <div style={styles.experiencePoints}>
                    <p>
                        Applications Developer - Developed Billing Application with PL/SQL, Custom Helpdesk with AR System and Web Technologies
                    </p>
                    <Divider />
                    <p style={styles.normalLineHt}>
                        Technologies: Oracle DB, Solaris, Shell Script, PL/SQL, HTML, CSS, Javascript, BMC Remedy AR System
                    </p>
                </div>
            </article>
        </section>
        <Divider />
        <section>
            <h3 style={styles.experienceHead}>
                Education
            </h3>
        </section>
        <article style={styles.articleSection}>
                <h4 style={styles.experienceTitle}>
                Visvesvaraya Technological University
                </h4>
                <h5 >2000 - 2004</h5>
                <div style={styles.experiencePoints}>
                    <p>
                    Bachelor of Science (BS) in Electrical and Electronics Engineering
                    </p>
                </div>
            </article>
    </div>
);

export default Profile;
