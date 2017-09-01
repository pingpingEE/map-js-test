/**
 * @author zhangyp
 * @desc ol.Map 层
 * @date 2017/5/
 */
import {ol} from './../constants';
import View from './../view/View';
import Layer from './../layer/Layer';
/**
 * @class 地图类
 */
class Map {
  /**
   * 构造函数
   */
  constructor() {
    this.map = null;
  }

  /**
   * 初始化地图
   * @param id 图层id
   * @param options 参数配置
   */
  initMap(id, options) {
    if (!id) {
      console.warn('未找到源，无法进行图层渲染');
      return;
    }
    this._addMap(id, options);
  }

  /**
   * 添加地图 ol.Map
   * @param id 图层id
   * @param options 参数配置
   */
  _addMap(id, options) {
    options = options || {};
    this.map = new ol.Map({
      view: new View()._addView(options),
      layers: new Layer()._addLayers(options),
      target: id
    });
    this.map.on('click', function (event) {
      console.warn(event.coordinate);
    });
  }

  /**
   * 获取当前地图对象
   * @returns {null|ol.Map|ol.renderer.Map|ol.renderer.webgl.Map|ol.renderer.canvas.Map|ol.test.rendering.Map|*}
   * @private
   */
  _getMap() {
    return this.map;
  }

  /**
   * 暴漏叠加图层方法
   * @param options
   * @private
   */
  _addLayer(options) {
    options = options || {};
    this.map.addLayer(new Layer()._addLayer(options));
  }

}
export default Map;