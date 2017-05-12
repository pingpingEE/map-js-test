/**
 * @author zhangyp
 * @desc 测试eslint
 * @module 入口文件
 */
const MyMapJs = {};
MyMapJs.version = require('../package.json').version;
import {ol} from './constants';
import Map from './map/Map';
import View from './view/View';

MyMapJs.ol = ol;
MyMapJs.Map = Map;
MyMapJs.View = View;
export default MyMapJs;
