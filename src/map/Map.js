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
    const layers = (options['layers'] && options['layers'] instanceof Array) ? options['layers'] : [];
    this.map = new ol.Map({
      view: new View()._addView(options),
      layers: new Layer()._addLayer(layers),
      target: id
    });
  }

}
export default Map;