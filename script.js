        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        const overlay = document.getElementById('overlay');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        overlay.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Particle Background
        const particlesContainer = document.getElementById('particles');
        const particleCount = window.innerWidth < 768 ? 20 : 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Navbar Scroll Effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = 'none';
            }

            lastScroll = currentScroll;
        });

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon. 🚀');
            e.target.reset();
        });

        // Download CV Function
        function downloadResume() {
            const resumeContent = `
VALGIN R V
Full Stack Developer
Chennai, Tamil Nadu, India

CONTACT
Phone: 9003261783
Email: valginajay0@gmail.com
LinkedIn: linkedin.com/in/valginrv2001

PROFESSIONAL SUMMARY
Passionate and detail-oriented Full Stack Developer with 2+ years of hands-on experience in building scalable web applications using Angular, Express.js, JavaScript, SQL, and MongoDB. Currently working at JINSoftz Pvt Limited, with solid experience in API integration, UI/UX design, and modern web development practices.

TECHNICAL SKILLS
Frontend: Angular, TypeScript, JavaScript (ES6+), HTML5, CSS3, NGXS, RxJS
Backend: Node.js, Express.js, REST APIs
Databases: MongoDB, SQL (MySQL, PostgreSQL)
Tools: Git, Jira, AWS
Soft Skills: Problem Solving, Team Collaboration, Agile/Scrum

PROFESSIONAL EXPERIENCE

Software Engineer L2
JINSoftz Technology Private Limited | January 2025 - Present
Chennai, Tamil Nadu, India
• Leading development of complex web applications using Angular and Node.js
• Mentoring junior developers and implementing code quality best practices
• Optimizing application performance and scalability
• Collaborating with stakeholders to deliver business-critical solutions

Software Engineer L1
JINSoftz Technology Private Limited | May 2024 - December 2024
Chennai, Tamil Nadu, India
• Developed scalable web applications with Angular, TypeScript, and NGXS
• Integrated RESTful APIs and enhanced UI/UX designs
• Collaborated with cross-functional teams on high-quality solutions
• Implemented responsive designs and modern web development practices

Software Trainee
JINSoftz Technology Private Limited | February 2024 - May 2024
Chennai, Tamil Nadu, India
• Intensive training in full-stack development technologies
• Built foundational skills in Angular, Node.js, and database management
• Contributed to team projects and learned industry best practices

EDUCATION

Bachelor of Technology in Information Technology
Anna University | August 2019 - June 2023

Higher Secondary Certificate (HSC) - Computer Mathematics
SGS Memorial Public Matric Hr Sec School | June 2018 - May 2019

Secondary School Leaving Certificate (SSLC)
AMSI High School | June 2016 - May 2017

CERTIFICATIONS
• AWS Certified
• IBM Guided Project Completion
• HTML5 and CSS3 Certification
• Team2Solve & Code2Build
• Guinness World Record Event Participant

LANGUAGES
• English: Professional Working Proficiency
• Tamil: Native or Bilingual Proficiency
• Malayalam: Limited Working Proficiency

PROJECTS

E-Commerce Platform
• Full-featured e-commerce solution with inventory management
• Technologies: Angular, Node.js, MongoDB, Payment Integration

Project Management Tool
• Collaborative task tracking and team collaboration application
• Technologies: Angular, Express.js, SQL

Analytics Dashboard
• Real-time analytics with interactive visualizations
• Technologies: TypeScript, Node.js, MongoDB
            `;

            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Valgin_RV_Resume.txt';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            alert('Resume downloaded successfully! 📄✨');
        }

        document.getElementById('downloadCV').addEventListener('click', (e) => {
            e.preventDefault();
            downloadResume();
        });

        document.getElementById('downloadCVMobile').addEventListener('click', (e) => {
            e.preventDefault();
            downloadResume();
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });

        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards
        document.querySelectorAll('.skill-card, .timeline-item, .project-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
