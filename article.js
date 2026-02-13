function getPageParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page') || 'home';
}

async function loadArticle() {
    const page = getPageParam();
    const articleContent = document.getElementById('article-content');

    try {
        const response = await fetch(`articles/${page}.md`);

        if (!response.ok) {
            throw new Error('Статья не найдена');
        }

        const markdown = await response.text();
        const html = marked.parse(markdown);

        articleContent.innerHTML = html;

        const firstHeading = articleContent.querySelector('h1');
        if (firstHeading) {
            document.title = firstHeading.textContent + ' - Portugal Tax Guide';
        }

    } catch (error) {
        articleContent.innerHTML = `
            <h1>Ошибка</h1>
            <p>${error.message}</p>
            <p><a href="?">Вернуться на главную</a></p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', loadArticle);

