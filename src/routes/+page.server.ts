import type { PageServerLoad } from './$types';

interface Article {
    title: string | null;
    pageLink: string | null;
    cardLink: string | null;
}

export const load = (async() => {
    try {
        const response = await fetch('https://zenn.dev/api/articles?username=hiro_torii&order=latest', { mode: 'cors' });
        const jsonData = await response.json();
        const articles: Article[] = [];
        for (let i = 0; i < jsonData.articles.length; i++) {
            const article = jsonData.articles[i];
            const pageLink = `https://zenn.dev${article.path}`
            articles.push({ title: article.title, pageLink: pageLink, cardLink: '' })
        }
        return {articles}
    } catch (error) {
        throw new Error(`Failed to get Articles: ${error}`);
    }
}) satisfies PageServerLoad;
