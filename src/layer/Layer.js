/**
 * @author zhangyp
 * @desc 图层
 */
import {ol} from './../constants';

/**
 * @class 图层类
 * @author zhangyp
 */
class Layer {
  /**
   * 构造函数
   */
  constructor() {
    this.map = null;
  }

  /**
   * 初始化图层方法
   * @param id #id
   * @param options 图层各项配置
   */
  initLayer(id, options) {
    if (!id) {
      console.error('未找到源，无法进行图层渲染');
      return;
    }
    const center = (options && options['center']) ? options['center'] : [0, 0];
    this.map = new ol.Map({
      view: new ol.View({
        center: center,
        zoom: 1
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: id
    });
  }
}
export default Layer;