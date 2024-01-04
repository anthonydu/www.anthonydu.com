import locales from '$lib/locales';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	if (params.lang === '')
		return { locale: locales.en_US, canonical: '/', fonts: ['Iceland', 'Iceberg'] };
	else if (params.lang === 'zh')
		return { locale: locales.zh_TW, canonical: '/zh', fonts: ['Heiti', 'Heiti'] };
	else error(404, 'Page not found');
};
