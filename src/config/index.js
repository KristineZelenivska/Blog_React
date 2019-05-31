import Axios from 'axios';
import Moment from 'moment';
import packageJson from '~/../package.json';

/**
 * Application constants
 */

const DATE_FORMAT = 'DD.MM.YYYY';
const DATE_TIME_FORMAT = 'DD.MM.YYYY HH:mm';
const API_ENV = process.env.API_ENV || 'ci2';
const NODE_ENV = process.env.NODE_ENV;

const LOCALE = 'en';
export const LOCALE_COLLATE = 'en-GB';

/**
 * Currency
 */
export const CURRENCY = '€';

/**
 * App version
 */
const VERSION = packageJson.version;

/**
 * Moment global configuration
 * - finish locale
 * - date format
 */
Moment.locale(LOCALE);
Moment.defaultFormat = DATE_FORMAT;

export { DATE_FORMAT, DATE_TIME_FORMAT, VERSION, LOCALE };
