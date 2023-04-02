import type { PageServerLoad } from './$types';
import { JSDOM } from 'jsdom'


interface Article {
    title: string;
    pageLink: string;
    cardLink: string;
}

const getZennArticles = (async () => {
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
    return articles;
});

export const load = (async() => {
    try {
        const zennArticles = await getZennArticles();
        return {zennArticles}
    } catch (error) {
        // TODO: @sveltejs/kitのerrorを使う
        throw new Error(`Failed to get Articles: ${error}`);
    }
}) satisfies PageServerLoad;


if (import.meta.vitest) {
    const { describe, it, expect } = import.meta.vitest;
    
    describe('getZennArticles', () => {
        it('match title', async () => {
            const articles = await getZennArticles();
            console.log(articles);
            console.log(articles[0].pageLink);
            expect(articles[0].title).toBe('超高速DataFrameライブラリー「Polars」について');
        });
    });
};
