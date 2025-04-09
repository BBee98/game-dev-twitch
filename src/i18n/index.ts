import i18next from 'i18next';
import resourcesToBackend from "i18next-resources-to-backend";

i18next
    .use(resourcesToBackend((language: string, namespace: string) => import(`./${language}/${namespace}.json`)))
    .init({
    fallbackLng: 'en',
    ns: ['file1', 'file2'],
    defaultNS: 'file1',
    lng: 'es-ES',

}, () => {

});
