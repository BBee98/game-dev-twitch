import i18next from 'i18next';
import resourcesToBackend from "i18next-resources-to-backend";

i18next
    .use(resourcesToBackend(
        (language: string, namespace: string) => import(`./${language}/${namespace}.json`)))
    .init({
    fallbackLng: 'en-GB',
    ns: ['common'],
    defaultNS: 'common',
    lng: 'es-ES',

});
