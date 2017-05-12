import Tile from './../layer/Tile';
/**
 * @author zhangyp
 * @desc ol.Layer layer层
 * @date 2017/5/12
 */
class Layer {
  /**
   * 构造函数
   */
  constructor() {
    this.layers = [];
  }

  /**
   * 添加 ol.layer
   * @param layers 图层数组
   * @returns {[*]}
   * @private
   */
  _addLayer(layers) {
    if (!Array.isArray(layers) || layers.length === 0) {
      console.warn('layers 参数传输格式有误 默认返回OSM数据源');
      return [new Tile()._addTile({type: 'OSM'})];
    }
    layers.forEach(layer => {
      const type = layer['type'] ? layer['type'] : 'OSM';
      if (type === 'OSM' || type === 'WMTS' || type === 'XYZ')
        this.layers.push(new Tile()._addTile(layer));
    });
    return this.layers;
  }
}
export default Layer;
