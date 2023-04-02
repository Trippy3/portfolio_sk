import type { PageServerLoad } from './$types';
import { JSDOM } from 'jsdom'


interface Article {
    title: string;
    pageLink: string;
    cardLink: string;
}

export const load = (async() => {
    try {
        const response = await fetch('https://zenn.dev/api/articles?username=hiro_torii&order=latest', { mode: 'cors' });
        const jsonData = await response.json();
        const articles: Article[] = [];
        for (let i = 0; i < jsonData.articles.length; i++) {
            const article = jsonData.articles[i];
            const pageLink = `https://zenn.dev${article.path}`
            const dom = await JSDOM.fromURL(pageLink);
            const ogImage = dom.window.document.querySelector("meta[property='og:image']")
            const cardLink = ogImage.getAttribute('content');
            articles.push({ title: article.title, pageLink: pageLink, cardLink: cardLink })
        }
        return {articles}
    } catch (error) {
        // TODO: @sveltejs/kitのerrorを使う
        throw new Error(`Failed to get Articles: ${error}`);
    }
}) satisfies PageServerLoad;
