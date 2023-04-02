import { describe, it, expect } from 'vitest';
import { load } from './+page.server'

describe('get articles', () => {
	it('match title', async () => {
                const data = await load()
                console.log(data)
                console.log(data.articles[0].path)
                expect(data.articles[0].title).toBe('超高速DataFrameライブラリー「Polars」について')
	});
});
