/**
 * @author zhangyp
 * @desc ol.layer.Vector 矢量图层
 * @date 2017/5/15
 */
import {ol} from './../constants';
import Style from './../style/Style';
/**
 * @class Vector
 * @author zhangyp
 */
class Vector {
  /**
   *
   * @param options
   * @returns {ol.layer.Vector}
   * @private
   */
  _addVector(options) {
    const option = options || {};
    const basics = this._addBasicsVector(option);
    const extend = this._addExtendVector(option);
    const tempVector = new ol.layer.Vector(Object.assign(basics, extend));
    const type = options['type'] ? options['type'] : 'Vector';
    if (type === 'Vector') {
      tempVector.setSource(this._sourceVector(option));
      tempVector.setStyle(new Style()._addStyle(option['style']));
    }
    return tempVector;
  }

  /**
   * ol.layer.Vector 基础参数
   * @param options
   * @returns {{extent: undefined, opacity: number, style: undefined, visible: boolean, updateWhileAnimating: boolean, updateWhileInteracting: boolean}}
   * @private
   */
  _addBasicsVector(options) {
    const option = options || {};
    return {
      extent: (option['extent'] && Array.isArray(option['extent']) && option['extent'].length === 4) ? option['extent'] : undefined, // 范围,
      opacity: (option['opacity'] && option['opacity'] >= 0 && option['opacity'] <= 1) ? option['opacity'] : 1, // 透明度,
      visible: (option['visible'] && (typeof option['visible'] === 'boolean')) ? option['visible'] : true, // 是否可见,
      updateWhileAnimating: (option['updateWhileAnimating'] && (typeof option['updateWhileAnimating'] === 'boolean')) ? option['updateWhileAnimating'] : false, // 动画时 重新创建
      updateWhileInteracting: (option['updateWhileInteracting'] && (typeof option['updateWhileInteracting'] === 'boolean')) ? option['updateWhileInteracting'] : false // 交互时 重新创建
    };
  }

  /**
   *
   * @param options
   * @returns {{renderOrder: undefined, minResolution: undefined, maxResolution: undefined, renderBuffer: undefined}}
   * @private
   */
  _addExtendVector(options) {
    const option = options || {};
    return {
      renderOrder: (option['renderOrder']) ? option['renderOrder'] : undefined, // 渲染顺序
      minResolution: (option['minResolution'] && (typeof option['minResolution'] === 'number')) ? option['minResolution'] : undefined, // 最小分辨率,
      maxResolution: (option['maxResolution'] && (typeof option['maxResolution'] === 'number')) ? option['maxResolution'] : undefined, // 最大分辨率,
      renderBuffer: (option['renderBuffer'] && (typeof option['renderBuffer'] === 'number')) ? option['renderBuffer'] : undefined // 渲染时 像素值
    };
  }

  /**
   *
   * @param options
   * @returns {ol.source.Vector}
   * @private
   */
  _sourceVector(options) {
    const option = options || {};
    return new ol.source.Vector({
      features: option['features'] ? option['features'] : undefined // 矢量数据
    });
  }

  /**
   *
   * @returns {ol.style.Style}
   * @private
   */
  _styleVector(options) {
    const option = options || {};
    if (option['style'] && option['style'] instanceof ol.style.Style) {
      return option['style'];
    } else {
      return new ol.style.Style({
        image: new ol.style.Circle({
          fill: new ol.style.Fill({
            color: 'rgba(255,255,255,0.4)'
          }),
          stroke: new ol.style.Stroke({
            color: '#3399CC',
            width: 1.25
          }),
          radius: 5
        })
      });
    }
  }
}
export default Vector;
