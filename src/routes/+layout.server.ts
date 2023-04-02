export const prerender = true;

if (import.meta.vitest) {
    const { describe, it, expect } = import.meta.vitest;
    describe('dummy', () => {
        it('dummy', () => {
            expect(1).toBe(1);
        });
    });
};