import {ol} from './../constants';
/**
 * @author zhangyp
 * @desc ol.layer.Tile  layer层 再度拆分
 * @date 2017/5/12
 */
class Tile {
  /**
   * ol.layer.Tile
   * @param options
   * @returns {ol.layer.Tile}
   * @private
   */
  _addTile(options) {
    const option = options || {};
    const basics = this._addBasicsTile(option);
    const extend = this._addExtendTile(option);
    const tempTile = new ol.layer.Tile(Object.assign(basics, extend));
    const type = options['type'] ? options['type'] : 'OSM';
    const layerType = ['OSM', 'WMTS', 'XYZ', 'ArcGIS'];
    if (!type || type === 'OSM' || layerType.indexOf(type) === -1)
      tempTile.setSource(this._sourceOSM(option));
    return tempTile;
  }

  /**
   * ol.layer.Tile 基本参数
   * @param options
   * @returns {{opacity: number, visible: boolean}}
   * @private
   */
  _addBasicsTile(options) {
    const option = options || {};
    return {
      opacity: (option['opacity'] && option['opacity'] >= 0 && option['opacity'] <= 1) ? option['opacity'] : 1, // 透明度
      visible: (option['visible'] && (typeof option['visible'] === 'boolean')) ? option['visible'] : true, // 是否可见
    };
  }

  /**
   * ol.layer.Tile 扩展参数
   * @param options
   * @returns {{extent: undefined, preload: number, minResolution: undefined, maxResolution: undefined, useInterimTilesOnError: boolean}}
   * @private
   */
  _addExtendTile(options) {
    const option = options || {};
    return {
      extent: (option['extent'] && Array.isArray(option['extent']) && option['extent'].length === 4) ? option['extent'] : undefined, // 范围
      preload: (option['preload'] && (typeof option['preload'] === 'number')) ? option['preload'] : 0, // 预载
      minResolution: (option['minResolution'] && (typeof option['minResolution'] === 'number')) ? option['minResolution'] : undefined, // 最小分辨率,
      maxResolution: (option['maxResolution'] && (typeof option['maxResolution'] === 'number')) ? option['maxResolution'] : undefined, // 最大分辨率,
      useInterimTilesOnError: (option['useInterimTilesOnError'] && (typeof option['useInterimTilesOnError'] === 'boolean')) ? option['useInterimTilesOnError'] : true // 使用临时瓦片错误
    };
  }

  /**
   * OSM 数据源
   * @param options
   * @returns {*}
   * @private
   */
  _sourceOSM(options) {
    const option = options || {};
    return new ol.source.OSM({
      attributions: undefined, // 归因  目前不知道是什么 故先不进行设置
      cacheSize: (option['cacheSize'] && (typeof option['cacheSize'] === 'number')) ? option['cacheSize'] : 2048, // 缓存大小
      crossOrigin: (option['crossOrigin'] && (typeof option['crossOrigin'] === 'string')) ? option['crossOrigin'] : undefined, // 暂不深究
      maxZoom: (option['maxZoom'] && (typeof option['maxZoom'] === 'number')) ? option['maxZoom'] : 19, // 最大缩放
      opaque: (option['opaque'] && (typeof option['opaque'] === 'boolean')) ? option['opaque'] : true, // 图层是否不透明
      reprojectionErrorThreshold: (option['reprojectionErrorThreshold'] && (typeof option['reprojectionErrorThreshold'] === 'number')) ? option['reprojectionErrorThreshold'] : 0.5, // 最大允许投影错误
      tileLoadFunction: undefined,
      url: undefined,
      wrapX: (option['wrapX'] && (typeof option['wrapX'] === 'boolean')) ? option['wrapX'] : true // 是否水平
    });
  }
}
export default Tile;
