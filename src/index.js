/**
 * @author zhangyp
 * @desc 测试eslint
 * @module 入口文件
 */
const MyMapJs = {};
MyMapJs.version = require('../package.json').version;
import {ol} from './constants';
import Layer from './layer/Layer';

MyMapJs.ol = ol;
MyMapJs.Layer = Layer;
export default MyMapJs;
