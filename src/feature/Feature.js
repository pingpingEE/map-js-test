import {ol} from './../constants';
/**
 * @author zhangyp
 * @desc ol.Feature 矢量
 * @date 2017/06/01
 */
class Feature {
  /**
   *
   * @returns {Feature|ol.Feature|ol.format.Feature|ol.render.Feature|*}
   */
  _addFeature(type, options) {
    const option = options || {};
    let geom = undefined;
    if (type === 'Circle')
      geom = this._addGeomCircle(option);
    if (type === 'Point')
      geom = this._addGeomPoint(option);
    return new ol.Feature(geom);
  }

  /**
   *
   * @returns {ol.geom.Circle}
   * @private
   */
  _addGeomCircle(options) {
    const option = options || {};
    return new ol.geom.Circle({
      center: option['center'] && (Array.isArray(option['center'])) ? option['center'] : [0, 0],
      radius: option['radius'] && (typeof option['radius'] === 'number') ? option['radius'] : 5
    });
  }

  /**
   *
   * @returns {ol.geom.Point}
   * @private
   */
  _addGeomPoint(options) {
    const option = options || {};
    return new ol.geom.Point(option['coordinates'] && (Array.isArray(option['coordinates'])) ? option['coordinates'] : [0, 0]);
  }
}
export default Feature;