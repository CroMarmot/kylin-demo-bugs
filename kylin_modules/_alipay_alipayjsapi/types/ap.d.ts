  /** alipayjsapi版本 */
export const version: string;

  /** userAgent */
export const ua: string;

  /** 当前环境是否在支付宝中 */
export const isAlipay: boolean;

  /** 支付宝钱包客户端版本号，未匹配到则为'' */
export const alipayVersion: string;

  /**
   * 版本比较方法: 
   *  1: 代表当前环境客户端版本号(ap.alipayVersion)比传入目标版本号(targetVersion)大;
   *  2: 相反; 
   *  0: 相等
   * @param targetVersion 目标版本
   */
export function compareVersion(targetVersion: string): 1|-1|0;

  /**
   * 把 url 中的 queryString 解析成一个对象。支持传入指定 queryString，默认解析 window.location.search
   * 会将字符串'true'|'false'处理成boolean
   * @param queryString 需要处理的queryString字符串，未传入默认使用(window.location.search)
   */
export function parseQueryString(queryString?: string): Record<string,string|boolean>;

  /**
   * 监听全局事件，多个事件用空格分隔
   * @param evts 事件类型，多个事件用空格分隔
   * @param fn 事件回调
   */
export function on(evts: string, fn: (...arg) => void);

  /**
   * 移除事件监听
   * @param evt 时间类型，不支持多个
   * @param fn 事件回调
   */
export function off(evt: string, fn: (...arg) => void);

  /**
   * 在document上发起evtName名称的事件，事件对象携带data字段
   * @param evtName 
   * @param data 
   */
export function trigger(evtName: string, data: Object): Event;

  /**
   * eady事件独立方法，支持回调和promise两种方式
   * @param fn 回调
   */
export function ready(fn?: () => void): Promise<void>;

  /**
   * 将日志写入客户端日志
   * @param arg 日志参数
   */
export function localLog(...arg);

  /**
   * 通用接口，调用方式等同AlipayJSBridge.call
   * 无需考虑ready事件，会自动加入到待执行队列
   * @param apiName JSAPI名称
   * @param opt 参数
   * @param cb 回调
   */
export function call<T = Record<string,any>>(apiName: string, opt: Record<string, any>, cb?: (result: T) => void): Promise<T>;

  /**
   * 通用接口，调用方式等同AlipayJSBridge.call
   * 无需考虑ready事件，会自动加入到待执行队列
   * @param apiName JSAPI名称
   * @param cb 回调
   */
export function call<T = Record<string,any>>(apiName: string, cb?: (result: T) => void): Promise<T>;
