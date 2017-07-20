/**
 * @author zhangyp
 * @desc ol.style
 * @date 2017/5/16
 */

import {ol} from './../constants';
/**
 * @class 样式类
 * @author zhangyp
 */
class Style {
  /**
   *
   * @param options
   * @returns {ol.style.Style}
   * @private
   */
  _addStyle(options) {
    const option = options || {};
    return new ol.style.Style({
      image: this._addImage(option),
      fill: this._addFill(option['fill']),
      stroke: this._addStroke(option['stroke']),
      text: undefined,
      zIndex: undefined
    });
  }

  /**
   *
   * @param options
   * @private
   */
  _addImage(options) {
    const option = options || {};
    const type = option['type'] ? option['type'] : 'CirCle';
    if (type === 'CirCle') {
      return this._addCirCle(option);
    }
    if (type === 'Stroke') {
      return this._addStroke(option);
    }
  }

  /**
   *
   * @param options
   * @returns {ol.style.Circle}
   * @private
   */
  _addCirCle(options) {
    const option = options || {};
    return new ol.style.Circle({
      fill: this._addFill(option['fill']),
      radius: option['radius'] ? option['radius'] : 5,
      stroke: this._addStroke(option['stroke']),
      snapToPixel: (option['snapToPixel'] && (typeof option['snapToPixel'] === 'boolean')) ? option['snapToPixel'] : true,
      atlasManager: option['atlasManager'] ? option['atlasManager'] : undefined
    });
  }

  /**
   *
   * @param options
   * @returns {ol.style.Fill}
   * @private
   */
  _addFill(options) {
    const option = options || {};
    return new ol.style.Fill({
      color: (option['color'] && (typeof option['color'] === 'string')) ? option['color'] : 'white'
    });
  }

  /**
   *
   * @param options
   * @returns {ol.style.Stroke}
   * @private
   */
  _addStroke(options) {
    const option = options || {};
    return new ol.style.Stroke({
      color: option['color'] ? option['color'] : 'black',
      width: (option['width'] && (typeof option['width'] === 'number')) ? option['width'] : 1,
      lineCap: (option['lineCap'] && (typeof option['lineCap'] === 'string')) ? option['lineCap'] : 'round', // 线冒风格 值：butt、round、square
      lineJoin: (option['lineJoin'] && (typeof option['lineJoin'] === 'string')) ? option['lineJoin'] : 'round', // 线条连接样式  值：bevel、round、miter
      lineDash: (option['lineDash'] && Array.isArray(option['lineDash'])) ? option['lineDash'] : undefined, // 线破折号
      lineDashOffset: (option['lineDashOffset'] && (typeof option['lineDashOffset'] === 'number')) ? option['lineDashOffset'] : 0, //线破折号
      miterLimit: (option['miterLimit'] && (typeof option['miterLimit'] === 'number')) ? option['miterLimit'] : 10 //斜度限制
    });
  }
}
export default Style;
