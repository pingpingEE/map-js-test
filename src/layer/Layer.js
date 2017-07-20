import {ol} from './../constants';
import Tile from './../layer/Tile';
import Vector from './../layer/Vector';
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
   *
   * @param options
   * @returns {*}
   * @private
   */
  _addLayers(options) {
    const option = options || {};
    const layers = option['layers'] || [];
    if (!Array.isArray(layers) || layers.length === 0) {
      console.warn('layers 参数传输格式有误 默认返回OSM数据源');
      return [new Tile()._addTile({type: 'OSM'})];
    }
    layers.forEach(layer => {
      options['layer'] = layer;
      this._addLayer(options);
    });
    return this.layers;
  }

  /**
   *
   * @param options
   * @returns {*}
   * @private
   */
  _addLayer(options) {
    const option = options || {};
    const layer = options['layer'];
    const type = layer['type'] ? layer['type'] : 'OSM';
    if (!type) {
      console.warn('layers 参数传输格式有误 默认返回OSM数据源');
      return [new Tile()._addTile({type: 'OSM'})];
    }
    const projection = ol.proj.get('EPSG:4326');
    const size = ol.extent.getWidth(projection.getExtent()) / 256;
    const resolutions = [];
    const matrixIds = [];
    for (let z = 0; z < 19; ++z) {
      resolutions[z] = size / Math.pow(2, z);
      matrixIds[z] = z;
    }
    if (type === 'XYZ') {
      // extent tileSize resolutions  当前未传输情况下 获取上一级别view下得  即默认 {} 下的
      if (!layer['extent']) {
        layer['extent'] = option['extent'] ? option['extent'] : [-180, -90, 180, 90];
      }
      if (!layer['tileSize']) {
        layer['tileSize'] = option['tileSize'] && (Array.isArray(option['tileSize'])) ? option['tileSize'] : [256, 256];
      }
      if (!layer['resolutions']) {
        layer['resolutions'] = option['resolutions'] && (Array.isArray(option['resolutions'])) ? option['resolutions'] : resolutions;
      }
    }
    if (type === 'OSM' || type === 'WMTS' || type === 'XYZ')
      this.layers.push(new Tile()._addTile(layer));
    if (type === 'Vector') {
      this.layers.push(new Vector()._addVector(layer));
    }
    return this.layers;
  }
}
export default Layer;
