
        function switchcolor() {
            document.body.classList.toggle('dark-mode');
            const icon = document.querySelector('#colorbutton i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
        
        // Modal functions
        function openModal(service) {
            const modal = document.getElementById('serviceModal');
            const title = document.getElementById('modalTitle');
            const content = document.getElementById('modalContent');
            
            // Set content based on service
            switch(service) {
                case 'consulting':
                    title.textContent = 'Consulting Services';
                    content.innerHTML = `
                        <h3>Expert Business Consulting</h3>
                        <p>Our consulting services help businesses of all sizes navigate challenges and identify growth opportunities.</p>
                        <ul>
                            <li>Business strategy development</li>
                            <li>Operational efficiency analysis</li>
                            <li>Market expansion planning</li>
                            <li>Financial advisory services</li>
                        </ul>
                        <button onclick="window.location.href='contact.html'" style="margin-top: 1rem;">Contact Us</button>
                    `;
                    break;
                case 'marketing':
                    title.textContent = 'Marketing Solutions';
                    content.innerHTML = `
                        <h3>Comprehensive Marketing Services</h3>
                        <p>Boost your brand visibility and customer engagement with our tailored marketing solutions.</p>
                        <ul>
                            <li>Digital marketing campaigns</li>
                            <li>Social media management</li>
                            <li>Brand strategy development</li>
                            <li>Content creation and marketing</li>
                        </ul>
                        <button onclick="window.location.href='contact.html'" style="margin-top: 1rem;">Contact Us</button>
                    `;
                    break;
                case 'it':
                    title.textContent = 'IT Services';
                    content.innerHTML = `
                        <h3>Technology Solutions</h3>
                        <p>Streamline your operations with our cutting-edge IT services and solutions.</p>
                        <ul>
                            <li>Custom software development</li>
                            <li>IT infrastructure setup</li>
                            <li>Cloud solutions</li>
                            <li>Cybersecurity services</li>
                        </ul>
                        <button onclick="window.location.href='contact.html'" style="margin-top: 1rem;">Contact Us</button>
                    `;
                    break;
            }
            
            modal.style.display = 'flex';
        }
        
        function closeModal() {
            document.getElementById('serviceModal').style.display = 'none';
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('serviceModal');
            if (event.target == modal) {
                closeModal();
            }
        }
        
        // Newsletter subscription
        function subscribeNewsletter(event) {
            event.preventDefault();
            const email = event.target.querySelector('input').value;
            
            // In a real implementation, you would send this to your server
            console.log('Subscribing email:', email);
            
            alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
            event.target.reset();
        }
        
        // Initialize dark mode based on user preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            const icon = document.querySelector('#colorbutton i');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
            function switchColor() {
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            
            // Update button icon
            const icon = document.querySelector('.theme-toggle i');
            if (isDarkMode) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
       
        function switchColor() {
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            
            // Update button icon
            const icon = document.querySelector('.theme-toggle i');
            if (isDarkMode) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
        
        // Check for saved preference on load
        document.addEventListener('DOMContentLoaded', function() {
            if (localStorage.getItem('darkMode') === 'true') {
                document.body.classList.add('dark-mode');
                const icon = document.querySelector('.theme-toggle i');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        });
        // Check for saved preference on load
        document.addEventListener('DOMContentLoaded', function() {
            if (localStorage.getItem('darkMode') === 'true') {
                document.body.classList.add('dark-mode');
                const icon = document.querySelector('.theme-toggle i');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
            
            // Form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                    this.reset();
                });
            }
        });
