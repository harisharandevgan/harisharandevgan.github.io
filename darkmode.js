       (function() {
            const toggleBtn = document.getElementById('themeToggle');
            const icon = document.getElementById('themeIcon');
            const label = document.getElementById('themeLabel');

            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'dark') {
                document.body.classList.add('dark-mode');
                icon.className = 'fas fa-sun';
                label.textContent = 'Light';
            } else {
                icon.className = 'fas fa-moon';
                label.textContent = 'Dark';
            }

            toggleBtn.addEventListener('click', function() {
                const isDark = document.body.classList.toggle('dark-mode');
                if (isDark) {
                    icon.className = 'fas fa-sun';
                    label.textContent = 'Light';
                    localStorage.setItem('theme', 'dark');
                } else {
                    icon.className = 'fas fa-moon';
                    label.textContent = 'Dark';
                    localStorage.setItem('theme', 'light');
                }
            });
        })();