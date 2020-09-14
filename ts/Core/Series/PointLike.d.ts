/* *
 *
 *  (c) 2010-2020 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import type SeriesLike from './SeriesLike';

/* *
 *
 *  Declarations
 *
 * */

/**
 * Helper interface for point types to add optional members to all point
 * instances.
 *
 * Use the `declare module './PointLike'` pattern to overload the interface in
 * this definition file.
 */
export interface PointLike /* @todo no extends */ extends Highcharts.PointLike {
    options: PointLikeOptions;
    series: SeriesLike;
}

/**
 * Helper interface for point types to add options to all point options.
 *
 * Use the `declare module './PointLike'` pattern to overload the interface in
 * this definition file.
 */
export interface PointLikeOptions /* @todo no extends */ extends Highcharts.PointOptionsObject {
    // nothing here yet
}

/* *
 *
 *  Exports
 *
 * */

export default PointLike;
