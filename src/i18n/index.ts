import { vi } from './vi';
import { en } from './en';
import { ja } from './ja';
import type { Locale, Translations } from './types';

export { vi, en, ja };
export type { Locale, Translations, TranslationsExperience, TranslationsProject } from './types';

export const translations: Record<Locale, Translations> = { vi, en, ja };
