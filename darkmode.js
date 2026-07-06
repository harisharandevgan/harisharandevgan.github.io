(function() {
            const toggleBtn = document.getElementById('theme-toggle');
            const icon = toggleBtn.querySelector('i');
            const html = document.documentElement;

            // Get stored preference or system preference
            const getPreferredTheme = () => {
                const stored = localStorage.getItem('theme');
                if (stored) return stored;
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    return 'dark';
                }
                return 'light';
            };

            // Apply theme and update icon
            const setTheme = (theme) => {
                html.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
                if (theme === 'dark') {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            };

            // Toggle function
            const toggleTheme = () => {
                const current = html.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : 'dark';
                setTheme(next);
            };

            // Initialize
            const initialTheme = getPreferredTheme();
            setTheme(initialTheme);

            // Event listener
            toggleBtn.addEventListener('click', toggleTheme);

            // Listen for system changes (optional but nice)
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleSystemChange = (e) => {
                // Only change if user hasn't manually set a preference
                if (!localStorage.getItem('theme')) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    setTheme(newTheme);
                }
            };
            try {
                mediaQuery.addEventListener('change', handleSystemChange);
            } catch (e) {
                // fallback for older browsers
                mediaQuery.addListener(handleSystemChange);
            }
        })();