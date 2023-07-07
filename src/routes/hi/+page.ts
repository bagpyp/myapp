import type { PageLoad } from './$types';

export const load = (async () => {
    // const { title, text } = await fetch('someAPI').then((res) => res.json())
    const title = 'My data'
    const text = 'Hi Mom!'

    return {
        title,
        text
    }
}) satisfies PageLoad;