import type {KeyboardAvoidingViewProps} from 'react-native';
import {Dimensions, Platform} from 'react-native';

/**
 * Platform constants
 */

export const PLATFORM_IS_ANDROID: boolean = Platform.OS === 'android';

export const PLATFORM_IS_IOS: boolean = Platform.OS === 'ios';

export const DEBOUNCE_TIME: number = 150;

export const PLATFORM: string = PLATFORM_IS_ANDROID ? 'Android' : 'iOS';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

export {SCREEN_WIDTH, SCREEN_HEIGHT};

/**
 * Ratio width / height of banner images
 *
 * @type {number}
 */
export const RATIO: number = 296 / 343;

// ------------------------------------------------------------------------

/**
 * Date time constants
 */

export const KEYBOARD_AVOIDING_VIEW_BEHAVIOR: KeyboardAvoidingViewProps['behavior'] =
  PLATFORM_IS_IOS ? 'padding' : 'height';

export const DEVICE_TIME_FORMAT: string = 'HH:mm:ss';

export const DEVICE_DATE_TIME_FORMAT: string = 'DD-MM-YYYY HH:mm';

export const DATE_FORMAT: string = 'DD/MM/YYYY';

export const DEFAULT_DATE: Date = new Date(0);

/**
 * Environment
 */

export const END_REACHED_THRESHOLD: number = 0.5;

//const
export const HEIGHT_HEADER: number = 88;

//10MB
export const MAX_FILE_SIZE: number = 10485760;

export const PLATFORM_OS_NAME = Platform.select({
  android: 'Android',
  ios: 'iOS',
})!;
