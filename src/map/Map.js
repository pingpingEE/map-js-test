/**
 * @author zhangyp
 * @desc ol.Map 层
 * @date 2017/5/12
 */
import {ol} from './../constants';
import View from './../view/View';
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
    this.map = new ol.Map({
      view: new View()._addView(options),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: id
    });
  }

}
export default Map;