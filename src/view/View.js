/**
 * @author zhangyp
 * @desc ol.View view层
 * @date 2017/5/12
 */
import {ol} from './../constants';
/**
 * @class 视图类 ol.View
 */
class View {

  /**
   * ol.View 参数配置 参数合并
   * @param options
   * @returns {*}
   * @private
   */
  _addView(options) {
    const basics = this._addBasicsView(options);
    const extend = this._addExtendView(options);
    return new ol.View(Object.assign(basics, extend));
  }

  /**
   * ol.View 中基本参数
   * @param options
   * @returns {{center: [number,number], zoom: number, enableRotation: boolean, extent: undefined, projection: string, rotation: undefined, resolution: undefined}}
   * @private
   */
  _addBasicsView(options) {
    const option = options || {};
    return {
      center: (option['center'] && Array.isArray(option['center'])) ? option['center'] : [0, 0], // 中心点
      zoom: (option['zoom'] && (typeof option['zoom'] === 'number')) ? option['zoom'] : 2, // 缩放级别
      enableRotation: (option['enableRotation'] && (typeof option['enableRotation'] === 'boolean')) ? option['enableRotation'] : false, // 是否允许旋转
      extent: (option['extent'] && Array.isArray(option['extent']) && option['extent'].length === 4) ? option['extent'] : undefined, // 范围
      projection: (option['projection'] && (typeof option['projection'] === 'string')) ? option['projection'] : 'EPSG:3857', // 投影坐标系
      rotation: (option['rotation'] && (typeof option['rotation'] === 'number')) ? option['rotation'] : undefined, // 旋转角度
      resolution: (option['resolution'] && (typeof option['minZoom'] === 'number')) ? option['resolution'] : undefined // 分辨率 number
    };
  }

  /**
   * ol.View 扩展参数
   * @param options
   * @returns {{maxResolution: undefined, minResolution: undefined, maxZoom: undefined, minZoom: undefined, resolutions: undefined, zoomFactor: number, constrainRotation: boolean}}
   * @private
   */
  _addExtendView(options) {
    const option = options || {};
    return {
      maxResolution: (option['maxResolution'] && (typeof option['maxResolution'] === 'number')) ? option['maxResolution'] : undefined, // 最大分辨率
      minResolution: (option['minResolution'] && (typeof option['minResolution'] === 'number')) ? option['minResolution'] : undefined, // 最小分辨率
      maxZoom: (option['maxZoom'] && (typeof option['maxZoom'] === 'number')) ? option['maxZoom'] : undefined, // 最大缩放级别
      minZoom: (option['minZoom'] && (typeof option['minZoom'] === 'number')) ? option['minZoom'] : undefined, // 最小缩放级别
      resolutions: (option['resolutions'] && Array.isArray(option['resolutions']) && option['resolutions'].length > 0) ? option['resolutions'] : undefined, // 分辨率 Array.<number>
      zoomFactor: (option['zoomFactor'] && (typeof option['zoomFactor'] === 'number')) ? option['zoomFactor'] : 2, // 用于确定分辨率约束的缩放因子
      constrainRotation: (option['constrainRotation'] && (typeof option['constrainRotation'] === 'boolean')) ? option['constrainRotation'] : false // 旋转约束
    };
  }
}
export default View;
