async function fetchGithubProfile() {
    try {
        const response = await fetch('https://api.github.com/users/tiagocaixerta');
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const data = await response.json();
        
        // Preenche os dados no HTML
        document.getElementById('profile-avatar').src = data.avatar_url;
        document.getElementById('profile-name').textContent = data.name;
        document.getElementById('profile-username').textContent = `@${data.login}`;
        document.getElementById('repo-count').textContent = data.public_repos;
        document.getElementById('followers-count').textContent = data.followers;
        document.getElementById('following-count').textContent = data.following;
        
        // Adiciona o link para o repositório no GitHub
        document.getElementById('profile-link').textContent = "Ver meu repositório";
        document.getElementById('profile-link').href = "https://github.com/tiagocaixerta/modulo_git";
        
    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
    }
}

// Chama a função para buscar os dados
fetchGithubProfile();
