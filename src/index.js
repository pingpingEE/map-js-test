/**
 * @author zhangyp
 * @desc 测试eslint
 * @module 入口文件
 */
const MyMapJs = {};
MyMapJs.version = require('../package.json').version;
import {ol} from './constants';
import Map from './map/Map';

MyMapJs.ol = ol;
MyMapJs.Map = Map;
export default MyMapJs;
