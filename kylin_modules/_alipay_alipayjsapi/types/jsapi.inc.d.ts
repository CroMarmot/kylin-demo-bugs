
// declare namespace ap {

    /**
     * 读取会话级数据。可用于页面间传递数据。
     * 可直接传入一个数组作为 OPTION.keys，或直接传入一个字符串，作为 OPTION.keys 数组中的某一个 key。
     * @param option
     */ 
    export function getSessionData(option: {
      /** 要读取的数据的 key */
      keys: string[],
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** keys 相应字段对应的数据 */
        data: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** keys 相应字段对应的数据 */
        data?: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** keys 相应字段对应的数据 */
        data?: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** keys 相应字段对应的数据 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** keys 相应字段对应的数据 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 读取会话级数据。可用于页面间传递数据。
     * 可直接传入一个数组作为 OPTION.keys，或直接传入一个字符串，作为 OPTION.keys 数组中的某一个 key。
     */ 
    export function getSessionData(keys: string[], callback?: (result: { 
      /** keys 相应字段对应的数据 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** keys 相应字段对应的数据 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 读取会话级数据。可用于页面间传递数据。
     * 可直接传入一个数组作为 OPTION.keys，或直接传入一个字符串，作为 OPTION.keys 数组中的某一个 key。
     */ 
    export function getSessionData(key: string, callback?: (result: { 
      /** keys 相应字段对应的数据 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** keys 相应字段对应的数据 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 写入会话级数据。可直接传入一个对象作为 OPTION.data 参数。
     * @param option
     */ 
    export function setSessionData(option: {
      /** 要写入的数据，每个 key/value 的组合为一个数据项 */
      data: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 清除缓存数据。可直接传一个字符串，作为 OPTION.key。
     * @param option
     */ 
    export function clearStorage(option: {
      /** 清除级别，支持user、common，默认为 user */
      type?: 'user'|'common',
      /** 自定义的业务标识。默认值为当前域名(host)。  */
      bizType?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 清除缓存数据。可直接传一个字符串，作为 OPTION.key。
     * @param option
     */ 
    export function clearStorage(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取缓存数据。可直接传一个字符串，作为 OPTION.key。
     * @param option
     */ 
    export function getStorage(option: {
      /** 缓存数据的 key */
      key: string,
      /** 清除级别，支持user、common，默认为 user */
      type?: 'user'|'common',
      /** 自定义的业务标识。默认值为当前域名(host)。  */
      bizType?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 相应 key 的数据。若未找到数据会返回 null */
        data: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 相应 key 的数据。若未找到数据会返回 null */
        data?: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 相应 key 的数据。若未找到数据会返回 null */
        data?: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 相应 key 的数据。若未找到数据会返回 null */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 相应 key 的数据。若未找到数据会返回 null */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取缓存数据。可直接传一个字符串，作为 OPTION.key。
     */ 
    export function getStorage(key: string, callback?: (result: { 
      /** 相应 key 的数据。若未找到数据会返回 null */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 相应 key 的数据。若未找到数据会返回 null */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 删除缓存数据。可直接传一个字符串，作为 OPTION.key。
     * @param option
     */ 
    export function removeStorage(option: {
      /** 缓存数据的 key */
      key: string,
      /** 清除级别，支持user、common，默认为 user */
      type?: 'user'|'common',
      /** 自定义的业务标识。默认值为当前域名(host)。  */
      bizType?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 删除缓存数据。可直接传一个字符串，作为 OPTION.key。
     */ 
    export function removeStorage(key: string, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的数据。
     * @param option
     */ 
    export function setStorage(option: {
      /** 缓存数据的 key */
      key: string,
      /** 要缓存的数据 */
      data: Object|string,
      /** 清除级别，支持user、common，默认为 user */
      type?: 'user'|'common',
      /** 自定义的业务标识。默认值为当前域名(host)。  */
      bizType?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除重力感应变化事件的监听
     * @param option
     */ 
    export function offAccelerometerChange(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除重力感应变化事件的监听
     * @param option
     */ 
    export function offAccelerometerChange(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听重力感应变化
     * @param option
     */ 
    export function onAccelerometerChange(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** X 轴 */
        x: number,
        /** Y 轴 */
        y: number,
        /** Z 轴 */
        z: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** X 轴 */
        x?: number,
        /** Y 轴 */
        y?: number,
        /** Z 轴 */
        z?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** X 轴 */
        x?: number,
        /** Y 轴 */
        y?: number,
        /** Z 轴 */
        z?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** X 轴 */
      x: number,
      /** Y 轴 */
      y: number,
      /** Z 轴 */
      z: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** X 轴 */
      x: number,
      /** Y 轴 */
      y: number,
      /** Z 轴 */
      z: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听重力感应变化
     * @param option
     */ 
    export function onAccelerometerChange(callback?: (result: { 
      /** X 轴 */
      x: number,
      /** Y 轴 */
      y: number,
      /** Z 轴 */
      z: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** X 轴 */
      x: number,
      /** Y 轴 */
      y: number,
      /** Z 轴 */
      z: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 关闭本机蓝牙模块
     * @param option
     */ 
    export function closeBluetoothAdapter(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 关闭本机蓝牙模块
     * @param option
     */ 
    export function closeBluetoothAdapter(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 连接低功耗蓝牙设备。可直接传入一个字符串作为 OPTION.deviceId。
     * @param option
     */ 
    export function connectBLEDevice(option: {
      /** 蓝牙设备 id */
      deviceId: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 连接低功耗蓝牙设备。可直接传入一个字符串作为 OPTION.deviceId。
     */ 
    export function connectBLEDevice(deviceId: string, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 断开与低功耗蓝牙设备的连接。可直接传入一个字符串作为 OPTION.deviceId。
     * @param option
     */ 
    export function disconnectBLEDevice(option: {
      /** 蓝牙设备 id */
      deviceId: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 断开与低功耗蓝牙设备的连接。可直接传入一个字符串作为 OPTION.deviceId。
     */ 
    export function disconnectBLEDevice(deviceId: string, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取蓝牙设备所有 characteristic（特征值）。
     * @param option
     */ 
    export function getBLEDeviceCharacteristics(option: {
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 蓝牙服务 uuid */
      serviceId: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 设备特征值列表 */
        characteristics: Array<{
          /** 蓝牙设备特征值的 uuid */
          characteristicId: string,
          /** 蓝牙设备特征值对应服务的 uuid */
          serviceId: string,
          /** 蓝牙设备特征值对应的16进制值  */
          value: string,
          /** 该特征值支持的操作类型 */
          properties: {
            /** 该特征值是否支持 read 操作 */
            read: boolean,
            /** 该特征值是否支持 write 操作 */
            write: boolean,
            /** 该特征值是否支持 notify 操作 */
            notify: boolean,
            /** 该特征值是否支持 indicate 操作 */
            indicate: boolean,
          },
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 设备特征值列表 */
        characteristics?: Array<{
          /** 蓝牙设备特征值的 uuid */
          characteristicId?: string,
          /** 蓝牙设备特征值对应服务的 uuid */
          serviceId?: string,
          /** 蓝牙设备特征值对应的16进制值  */
          value?: string,
          /** 该特征值支持的操作类型 */
          properties?: {
            /** 该特征值是否支持 read 操作 */
            read?: boolean,
            /** 该特征值是否支持 write 操作 */
            write?: boolean,
            /** 该特征值是否支持 notify 操作 */
            notify?: boolean,
            /** 该特征值是否支持 indicate 操作 */
            indicate?: boolean,
          },
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 设备特征值列表 */
        characteristics?: Array<{
          /** 蓝牙设备特征值的 uuid */
          characteristicId?: string,
          /** 蓝牙设备特征值对应服务的 uuid */
          serviceId?: string,
          /** 蓝牙设备特征值对应的16进制值  */
          value?: string,
          /** 该特征值支持的操作类型 */
          properties?: {
            /** 该特征值是否支持 read 操作 */
            read?: boolean,
            /** 该特征值是否支持 write 操作 */
            write?: boolean,
            /** 该特征值是否支持 notify 操作 */
            notify?: boolean,
            /** 该特征值是否支持 indicate 操作 */
            indicate?: boolean,
          },
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 设备特征值列表 */
      characteristics: Array<{
        /** 蓝牙设备特征值的 uuid */
        characteristicId: string,
        /** 蓝牙设备特征值对应服务的 uuid */
        serviceId: string,
        /** 蓝牙设备特征值对应的16进制值  */
        value: string,
        /** 该特征值支持的操作类型 */
        properties: {
          /** 该特征值是否支持 read 操作 */
          read: boolean,
          /** 该特征值是否支持 write 操作 */
          write: boolean,
          /** 该特征值是否支持 notify 操作 */
          notify: boolean,
          /** 该特征值是否支持 indicate 操作 */
          indicate: boolean,
        },
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 设备特征值列表 */
      characteristics: Array<{
        /** 蓝牙设备特征值的 uuid */
        characteristicId: string,
        /** 蓝牙设备特征值对应服务的 uuid */
        serviceId: string,
        /** 蓝牙设备特征值对应的16进制值  */
        value: string,
        /** 该特征值支持的操作类型 */
        properties: {
          /** 该特征值是否支持 read 操作 */
          read: boolean,
          /** 该特征值是否支持 write 操作 */
          write: boolean,
          /** 该特征值是否支持 notify 操作 */
          notify: boolean,
          /** 该特征值是否支持 indicate 操作 */
          indicate: boolean,
        },
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取蓝牙设备所有 characteristic（特征值）。
     */ 
    export function getBLEDeviceCharacteristics(deviceId: string, callback?: (result: { 
      /** 设备特征值列表 */
      characteristics: Array<{
        /** 蓝牙设备特征值的 uuid */
        characteristicId: string,
        /** 蓝牙设备特征值对应服务的 uuid */
        serviceId: string,
        /** 蓝牙设备特征值对应的16进制值  */
        value: string,
        /** 该特征值支持的操作类型 */
        properties: {
          /** 该特征值是否支持 read 操作 */
          read: boolean,
          /** 该特征值是否支持 write 操作 */
          write: boolean,
          /** 该特征值是否支持 notify 操作 */
          notify: boolean,
          /** 该特征值是否支持 indicate 操作 */
          indicate: boolean,
        },
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 设备特征值列表 */
      characteristics: Array<{
        /** 蓝牙设备特征值的 uuid */
        characteristicId: string,
        /** 蓝牙设备特征值对应服务的 uuid */
        serviceId: string,
        /** 蓝牙设备特征值对应的16进制值  */
        value: string,
        /** 该特征值支持的操作类型 */
        properties: {
          /** 该特征值是否支持 read 操作 */
          read: boolean,
          /** 该特征值是否支持 write 操作 */
          write: boolean,
          /** 该特征值是否支持 notify 操作 */
          notify: boolean,
          /** 该特征值是否支持 indicate 操作 */
          indicate: boolean,
        },
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取蓝牙设备所有 service（服务）。
     * @param option
     */ 
    export function getBLEDeviceServices(option: {
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** service 对象，详见下表 */
        services: Array<{
          /** 蓝牙设备服务的 uuid */
          serviceId: string,
          /** 该服务是否为主服务 */
          isPrimary: boolean,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** service 对象，详见下表 */
        services?: Array<{
          /** 蓝牙设备服务的 uuid */
          serviceId?: string,
          /** 该服务是否为主服务 */
          isPrimary?: boolean,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** service 对象，详见下表 */
        services?: Array<{
          /** 蓝牙设备服务的 uuid */
          serviceId?: string,
          /** 该服务是否为主服务 */
          isPrimary?: boolean,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** service 对象，详见下表 */
      services: Array<{
        /** 蓝牙设备服务的 uuid */
        serviceId: string,
        /** 该服务是否为主服务 */
        isPrimary: boolean,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** service 对象，详见下表 */
      services: Array<{
        /** 蓝牙设备服务的 uuid */
        serviceId: string,
        /** 该服务是否为主服务 */
        isPrimary: boolean,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取蓝牙设备所有 service（服务）。
     */ 
    export function getBLEDeviceServices(deviceId: string, callback?: (result: { 
      /** service 对象，详见下表 */
      services: Array<{
        /** 蓝牙设备服务的 uuid */
        serviceId: string,
        /** 该服务是否为主服务 */
        isPrimary: boolean,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** service 对象，详见下表 */
      services: Array<{
        /** 蓝牙设备服务的 uuid */
        serviceId: string,
        /** 该服务是否为主服务 */
        isPrimary: boolean,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取本机蓝牙模块状。
     * @param option
     */ 
    export function getBluetoothAdapterState(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 是否正在搜索设备 */
        discovering: boolean,
        /** 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态) */
        available: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 是否正在搜索设备 */
        discovering?: boolean,
        /** 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态) */
        available?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 是否正在搜索设备 */
        discovering?: boolean,
        /** 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态) */
        available?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 是否正在搜索设备 */
      discovering: boolean,
      /** 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态) */
      available: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否正在搜索设备 */
      discovering: boolean,
      /** 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态) */
      available: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取本机蓝牙模块状。
     * @param option
     */ 
    export function getBluetoothAdapterState(callback?: (result: { 
      /** 是否正在搜索设备 */
      discovering: boolean,
      /** 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态) */
      available: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否正在搜索设备 */
      discovering: boolean,
      /** 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态) */
      available: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     * @param option
     */ 
    export function getBluetoothDevices(option: {
      /** 蓝牙设备主 service 的 uuid 列表 */
      services?: string[],
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** service 的 uuid 对应的(如果有传入 services)设备列表 */
        devices: Array<{
          /** 蓝牙设备名称，某些设备可能没有 */
          deviceName: string,
          /** 广播设备名称 */
          localName: string,
          /** 设备 Id */
          deviceId: string,
          /** 设备信号强度 */
          RSSI: number,
          /** 设备的广播内容 */
          advertisData: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** service 的 uuid 对应的(如果有传入 services)设备列表 */
        devices?: Array<{
          /** 蓝牙设备名称，某些设备可能没有 */
          deviceName?: string,
          /** 广播设备名称 */
          localName?: string,
          /** 设备 Id */
          deviceId?: string,
          /** 设备信号强度 */
          RSSI?: number,
          /** 设备的广播内容 */
          advertisData?: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** service 的 uuid 对应的(如果有传入 services)设备列表 */
        devices?: Array<{
          /** 蓝牙设备名称，某些设备可能没有 */
          deviceName?: string,
          /** 广播设备名称 */
          localName?: string,
          /** 设备 Id */
          deviceId?: string,
          /** 设备信号强度 */
          RSSI?: number,
          /** 设备的广播内容 */
          advertisData?: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     */ 
    export function getBluetoothDevices(services: string[], callback?: (result: { 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     */ 
    export function getBluetoothDevices(service: string, callback?: (result: { 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     * @param option
     */ 
    export function getBluetoothDevices(callback?: (result: { 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 根据 service 的 uuid 获取处于已连接状态的设备。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     * @param option
     */ 
    export function getConnectedBluetoothDevices(option: {
      /** 蓝牙设备主 service 的 uuid 列表 */
      services?: string[],
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** service 的 uuid 对应的(如果有传入 services)设备列表 */
        devices: Array<{
          /** 蓝牙设备名称，某些设备可能没有 */
          deviceName: string,
          /** 广播设备名称 */
          localName: string,
          /** 设备 Id */
          deviceId: string,
          /** 设备信号强度 */
          RSSI: number,
          /** 设备的广播内容 */
          advertisData: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** service 的 uuid 对应的(如果有传入 services)设备列表 */
        devices?: Array<{
          /** 蓝牙设备名称，某些设备可能没有 */
          deviceName?: string,
          /** 广播设备名称 */
          localName?: string,
          /** 设备 Id */
          deviceId?: string,
          /** 设备信号强度 */
          RSSI?: number,
          /** 设备的广播内容 */
          advertisData?: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** service 的 uuid 对应的(如果有传入 services)设备列表 */
        devices?: Array<{
          /** 蓝牙设备名称，某些设备可能没有 */
          deviceName?: string,
          /** 广播设备名称 */
          localName?: string,
          /** 设备 Id */
          deviceId?: string,
          /** 设备信号强度 */
          RSSI?: number,
          /** 设备的广播内容 */
          advertisData?: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 根据 service 的 uuid 获取处于已连接状态的设备。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     */ 
    export function getConnectedBluetoothDevices(services: string[], callback?: (result: { 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 根据 service 的 uuid 获取处于已连接状态的设备。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     */ 
    export function getConnectedBluetoothDevices(service: string, callback?: (result: { 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 根据 service 的 uuid 获取处于已连接状态的设备。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     * @param option
     */ 
    export function getConnectedBluetoothDevices(callback?: (result: { 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** service 的 uuid 对应的(如果有传入 services)设备列表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：必须设备的特征值支持notify才可以成功调用，具体参照 characteristic 的 properties 属性
     * 另外，必须先启用notify才能监听到设备 characteristicValueChange 事件。
     * @param option
     */ 
    export function notifyBLECharacteristicValueChange(option: {
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 蓝牙特征值对应 service 的 uuid */
      serviceId: string,
      /** 蓝牙特征值的 uuid */
      characteristicId: string,
      /** notify 的 descriptor 的 uuid {{{ （只有android 会用到，非必填，默认值00002902-0000-1000-8000-00805f9b34fb）  */
      descriptorId?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除低功耗蓝牙设备的特征值变化事件的监听。
     * @param option
     */ 
    export function offBLECharacteristicValueChange(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除低功耗蓝牙设备的特征值变化事件的监听。
     * @param option
     */ 
    export function offBLECharacteristicValueChange(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除低功耗蓝牙连接的错误事件的监听。
     * @param option
     */ 
    export function offBLEConnectionStateChanged(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除低功耗蓝牙连接的错误事件的监听。
     * @param option
     */ 
    export function offBLEConnectionStateChanged(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除本机蓝牙状态变化的事件的监听。
     * @param option
     */ 
    export function offBluetoothAdapterStateChange(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除本机蓝牙状态变化的事件的监听。
     * @param option
     */ 
    export function offBluetoothAdapterStateChange(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除寻找到新的蓝牙设备事件的监听。
     * @param option
     */ 
    export function offBluetoothDeviceFound(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除寻找到新的蓝牙设备事件的监听。
     * @param option
     */ 
    export function offBluetoothDeviceFound(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听低功耗蓝牙设备的特征值变化的事件。
     * @param option
     */ 
    export function onBLECharacteristicValueChange(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 蓝牙设备 id，参考 device 对象 */
        deviceId: string,
        /** 特征值所属服务 uuid */
        serviceId: string,
        /** 特征值 uuid */
        characteristicId: string,
        /** 特征值最新的16进制值 */
        value: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 蓝牙设备 id，参考 device 对象 */
        deviceId?: string,
        /** 特征值所属服务 uuid */
        serviceId?: string,
        /** 特征值 uuid */
        characteristicId?: string,
        /** 特征值最新的16进制值 */
        value?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 蓝牙设备 id，参考 device 对象 */
        deviceId?: string,
        /** 特征值所属服务 uuid */
        serviceId?: string,
        /** 特征值 uuid */
        characteristicId?: string,
        /** 特征值最新的16进制值 */
        value?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 特征值所属服务 uuid */
      serviceId: string,
      /** 特征值 uuid */
      characteristicId: string,
      /** 特征值最新的16进制值 */
      value: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 特征值所属服务 uuid */
      serviceId: string,
      /** 特征值 uuid */
      characteristicId: string,
      /** 特征值最新的16进制值 */
      value: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听低功耗蓝牙设备的特征值变化的事件。
     * @param option
     */ 
    export function onBLECharacteristicValueChange(callback?: (result: { 
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 特征值所属服务 uuid */
      serviceId: string,
      /** 特征值 uuid */
      characteristicId: string,
      /** 特征值最新的16进制值 */
      value: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 特征值所属服务 uuid */
      serviceId: string,
      /** 特征值 uuid */
      characteristicId: string,
      /** 特征值最新的16进制值 */
      value: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。
     * @param option
     */ 
    export function onBLEConnectionStateChanged(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 蓝牙设备 id，参考 device 对象 */
        deviceId: string,
        /** 连接目前的状态 */
        connected: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 蓝牙设备 id，参考 device 对象 */
        deviceId?: string,
        /** 连接目前的状态 */
        connected?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 蓝牙设备 id，参考 device 对象 */
        deviceId?: string,
        /** 连接目前的状态 */
        connected?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 连接目前的状态 */
      connected: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 连接目前的状态 */
      connected: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。
     * @param option
     */ 
    export function onBLEConnectionStateChanged(callback?: (result: { 
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 连接目前的状态 */
      connected: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 连接目前的状态 */
      connected: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听本机蓝牙状态变化的事件。
     * @param option
     */ 
    export function onBluetoothAdapterStateChange(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 蓝牙模块是否可用 */
        available: boolean,
        /** 蓝牙模块是否处于搜索状态 */
        discovering: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 蓝牙模块是否可用 */
        available?: boolean,
        /** 蓝牙模块是否处于搜索状态 */
        discovering?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 蓝牙模块是否可用 */
        available?: boolean,
        /** 蓝牙模块是否处于搜索状态 */
        discovering?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 蓝牙模块是否可用 */
      available: boolean,
      /** 蓝牙模块是否处于搜索状态 */
      discovering: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 蓝牙模块是否可用 */
      available: boolean,
      /** 蓝牙模块是否处于搜索状态 */
      discovering: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听本机蓝牙状态变化的事件。
     * @param option
     */ 
    export function onBluetoothAdapterStateChange(callback?: (result: { 
      /** 蓝牙模块是否可用 */
      available: boolean,
      /** 蓝牙模块是否处于搜索状态 */
      discovering: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 蓝牙模块是否可用 */
      available: boolean,
      /** 蓝牙模块是否处于搜索状态 */
      discovering: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听新的蓝牙设备被找到事件。
     * @param option
     */ 
    export function onBluetoothDeviceFound(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 新搜索到的设备列表。device 对象说明见下表 */
        devices: Array<{
          /** 蓝牙设备名称，某些设备可能没有 */
          deviceName: string,
          /** 广播设备名称 */
          localName: string,
          /** 设备 Id */
          deviceId: string,
          /** 设备信号强度 */
          RSSI: number,
          /** 设备的广播内容 */
          advertisData: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 新搜索到的设备列表。device 对象说明见下表 */
        devices?: Array<{
          /** 蓝牙设备名称，某些设备可能没有 */
          deviceName?: string,
          /** 广播设备名称 */
          localName?: string,
          /** 设备 Id */
          deviceId?: string,
          /** 设备信号强度 */
          RSSI?: number,
          /** 设备的广播内容 */
          advertisData?: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 新搜索到的设备列表。device 对象说明见下表 */
        devices?: Array<{
          /** 蓝牙设备名称，某些设备可能没有 */
          deviceName?: string,
          /** 广播设备名称 */
          localName?: string,
          /** 设备 Id */
          deviceId?: string,
          /** 设备信号强度 */
          RSSI?: number,
          /** 设备的广播内容 */
          advertisData?: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 新搜索到的设备列表。device 对象说明见下表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 新搜索到的设备列表。device 对象说明见下表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听新的蓝牙设备被找到事件。
     * @param option
     */ 
    export function onBluetoothDeviceFound(callback?: (result: { 
      /** 新搜索到的设备列表。device 对象说明见下表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 新搜索到的设备列表。device 对象说明见下表 */
      devices: Array<{
        /** 蓝牙设备名称，某些设备可能没有 */
        deviceName: string,
        /** 广播设备名称 */
        localName: string,
        /** 设备 Id */
        deviceId: string,
        /** 设备信号强度 */
        RSSI: number,
        /** 设备的广播内容 */
        advertisData: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 初始化本机蓝牙模块。
     * @param option
     */ 
    export function openBluetoothAdapter(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 是否支持 BLE */
        isSupportBLE: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 是否支持 BLE */
        isSupportBLE?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 是否支持 BLE */
        isSupportBLE?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 是否支持 BLE */
      isSupportBLE: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否支持 BLE */
      isSupportBLE: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 初始化本机蓝牙模块。
     * @param option
     */ 
    export function openBluetoothAdapter(callback?: (result: { 
      /** 是否支持 BLE */
      isSupportBLE: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否支持 BLE */
      isSupportBLE: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 读取低功耗蓝牙设备特征值中的数据。调用后在 ap.onBLECharacteristicValueChange() 事件中接收数据返回。
     * @param option
     */ 
    export function readBLECharacteristicValue(option: {
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 蓝牙特征值对应 service 的 uuid */
      serviceId: string,
      /** 蓝牙特征值的 uuid */
      characteristicId: string,
      /** notify 的 descriptor 的 uuid {{{ （只有android 会用到，非必填，默认值00002902-0000-1000-8000-00805f9b34fb）  */
      descriptorId?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 设备特征值信息 */
        characteristic: {
          /** 蓝牙设备特征值的 uuid */
          characteristicId: string,
          /** 蓝牙设备特征值对应服务的 uuid */
          serviceId: string,
        },
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 设备特征值信息 */
        characteristic?: {
          /** 蓝牙设备特征值的 uuid */
          characteristicId?: string,
          /** 蓝牙设备特征值对应服务的 uuid */
          serviceId?: string,
        },
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 设备特征值信息 */
        characteristic?: {
          /** 蓝牙设备特征值的 uuid */
          characteristicId?: string,
          /** 蓝牙设备特征值对应服务的 uuid */
          serviceId?: string,
        },
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 设备特征值信息 */
      characteristic: {
        /** 蓝牙设备特征值的 uuid */
        characteristicId: string,
        /** 蓝牙设备特征值对应服务的 uuid */
        serviceId: string,
      },
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 设备特征值信息 */
      characteristic: {
        /** 蓝牙设备特征值的 uuid */
        characteristicId: string,
        /** 蓝牙设备特征值对应服务的 uuid */
        serviceId: string,
      },
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 开始搜寻附近的蓝牙外围设备。搜索结果将在 bluetoothDeviceFound 事件中返回。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     * @param option
     */ 
    export function startBluetoothDevicesDiscovery(option: {
      /** 蓝牙设备主 service 的 uuid 列表 */
      services?: string[],
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 扫码所得数据 */
        services: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 扫码所得数据 */
        services?: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 扫码所得数据 */
        services?: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 扫码所得数据 */
      services: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 扫码所得数据 */
      services: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 开始搜寻附近的蓝牙外围设备。搜索结果将在 bluetoothDeviceFound 事件中返回。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     */ 
    export function startBluetoothDevicesDiscovery(services: string[], callback?: (result: { 
      /** 扫码所得数据 */
      services: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 扫码所得数据 */
      services: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 开始搜寻附近的蓝牙外围设备。搜索结果将在 bluetoothDeviceFound 事件中返回。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     */ 
    export function startBluetoothDevicesDiscovery(service: string, callback?: (result: { 
      /** 扫码所得数据 */
      services: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 扫码所得数据 */
      services: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 开始搜寻附近的蓝牙外围设备。搜索结果将在 bluetoothDeviceFound 事件中返回。可直接传入一个数组作为 OPTION.services 参数。也可直接传入一个字符串作为 OPTION.services 的第一项。
     * @param option
     */ 
    export function startBluetoothDevicesDiscovery(callback?: (result: { 
      /** 扫码所得数据 */
      services: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 扫码所得数据 */
      services: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 停止搜寻附近的蓝牙外围设备。
     * @param option
     */ 
    export function stopBluetoothDevicesDiscovery(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 停止搜寻附近的蓝牙外围设备。
     * @param option
     */ 
    export function stopBluetoothDevicesDiscovery(): Promise<any>;

    /**
     * 向低功耗蓝牙设备特征值中写入数据。
     * @param option
     */ 
    export function writeBLECharacteristicValue(option: {
      /** 蓝牙设备 id，参考 device 对象 */
      deviceId: string,
      /** 蓝牙特征值对应 service 的 uuid */
      serviceId: string,
      /** 蓝牙特征值的 uuid */
      characteristicId: string,
      /** notify 的 descriptor 的 uuid {{{ （只有android 会用到，非必填，默认值00002902-0000-1000-8000-00805f9b34fb）  */
      descriptorId?: string,
      /** 蓝牙设备特征值对应的值，16进制字符串 */
      value: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 拨打电话。可直接传入一个字符串作为 OPTION.number 参数。
     * @param option
     */ 
    export function makePhoneCall(option: {
      /** 电话号码 */
      number: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 拨打电话。可直接传入一个字符串作为 OPTION.number 参数。
     */ 
    export function makePhoneCall(number: string): Promise<any>;

    /**
     * 获取剪切板的内容。
     * @param option
     */ 
    export function getClipboard(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 剪切板中的内容 */
        content: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 剪切板中的内容 */
        content?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 剪切板中的内容 */
        content?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 剪切板中的内容 */
      content: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 剪切板中的内容 */
      content: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取剪切板的内容。
     * @param option
     */ 
    export function getClipboard(callback?: (result: { 
      /** 剪切板中的内容 */
      content: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 剪切板中的内容 */
      content: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 向系统剪切板写入内容，可直接传入一个字符串作为 OPTION.content 参数。
     * @param option
     */ 
    export function setClipboard(option: {
      /** 写入剪切板的内容 */
      content: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 向系统剪切板写入内容，可直接传入一个字符串作为 OPTION.content 参数。
     */ 
    export function setClipboard(content: string, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除罗盘数据变化事件的监听。
     * @param option
     */ 
    export function offCompassChange(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除罗盘数据变化事件的监听。
     * @param option
     */ 
    export function offCompassChange(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听罗盘数据变化的事件。
     * @param option
     */ 
    export function onCompassChange(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 方向度数 */
        direction: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 方向度数 */
        direction?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 方向度数 */
        direction?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 方向度数 */
      direction: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 方向度数 */
      direction: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听罗盘数据变化的事件。
     * @param option
     */ 
    export function onCompassChange(callback?: (result: { 
      /** 方向度数 */
      direction: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 方向度数 */
      direction: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取当前网络状态。
     * @param option
     */ 
    export function getNetworkType(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 网络是否可用 */
        networkAvailable: boolean,
        /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
        networkType: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 网络是否可用 */
        networkAvailable?: boolean,
        /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
        networkType?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 网络是否可用 */
        networkAvailable?: boolean,
        /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
        networkType?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 网络是否可用 */
      networkAvailable: boolean,
      /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
      networkType: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 网络是否可用 */
      networkAvailable: boolean,
      /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
      networkType: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取当前网络状态。
     * @param option
     */ 
    export function getNetworkType(callback?: (result: { 
      /** 网络是否可用 */
      networkAvailable: boolean,
      /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
      networkType: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 网络是否可用 */
      networkAvailable: boolean,
      /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
      networkType: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除网络环境发生变化事件的监听。
     * @param option
     */ 
    export function offNetworkChange(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除网络环境发生变化事件的监听。
     * @param option
     */ 
    export function offNetworkChange(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听网络环境发生变化的事件。
     * @param option
     */ 
    export function onNetworkChange(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 网络是否可用 */
        networkAvailable: boolean,
        /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
        networkType: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 网络是否可用 */
        networkAvailable?: boolean,
        /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
        networkType?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 网络是否可用 */
        networkAvailable?: boolean,
        /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
        networkType?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 网络是否可用 */
      networkAvailable: boolean,
      /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
      networkType: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 网络是否可用 */
      networkAvailable: boolean,
      /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
      networkType: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听网络环境发生变化的事件。
     * @param option
     */ 
    export function onNetworkChange(callback?: (result: { 
      /** 网络是否可用 */
      networkAvailable: boolean,
      /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
      networkType: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 网络是否可用 */
      networkAvailable: boolean,
      /** 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN */
      networkType: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 调用扫一扫功能。
     * @param option
     */ 
    export function scan(option: {
      /** 扫描目标类型，支持 qr / bar，相应扫码选框会不同，默认 qr */
      type?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 扫码所得数据 */
        code: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 扫码所得数据 */
        code?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 扫码所得数据 */
        code?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 扫码所得数据 */
      code: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 扫码所得数据 */
      code: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 调用扫一扫功能。
     */ 
    export function scan(type: string, callback?: (result: { 
      /** 扫码所得数据 */
      code: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 扫码所得数据 */
      code: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 调用扫一扫功能。
     * @param option
     */ 
    export function scan(callback?: (result: { 
      /** 扫码所得数据 */
      code: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 扫码所得数据 */
      code: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取当前屏幕亮度。
     * @param option
     */ 
    export function getScreenBrightness(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 当前屏幕亮度，范围0 ~ 1 */
        brightness: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 当前屏幕亮度，范围0 ~ 1 */
        brightness?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 当前屏幕亮度，范围0 ~ 1 */
        brightness?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 当前屏幕亮度，范围0 ~ 1 */
      brightness: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 当前屏幕亮度，范围0 ~ 1 */
      brightness: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取当前屏幕亮度。
     * @param option
     */ 
    export function getScreenBrightness(callback?: (result: { 
      /** 当前屏幕亮度，范围0 ~ 1 */
      brightness: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 当前屏幕亮度，范围0 ~ 1 */
      brightness: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 设置当前屏幕亮度，可直接传入一个 0 ~ 1 之间的数字作为 OPTION.brightness 参数。
     * @param option
     */ 
    export function setScreenBrightness(option: {
      /** 屏幕的亮度，范围0 ~ 1 */
      brightness: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 是否调用成功 */
        result: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 是否调用成功 */
        result?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 是否调用成功 */
        result?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 是否调用成功 */
      result: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否调用成功 */
      result: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 设置当前屏幕亮度，可直接传入一个 0 ~ 1 之间的数字作为 OPTION.brightness 参数。
     */ 
    export function setScreenBrightness(brightness: number, callback?: (result: { 
      /** 是否调用成功 */
      result: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否调用成功 */
      result: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 摇一摇功能。每次调用API，在摇一摇手机后触发回调，如需再次监听需要再次调用这个API。
     * @param option
     */ 
    export function watchShake(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 摇一摇功能。每次调用API，在摇一摇手机后触发回调，如需再次监听需要再次调用这个API。
     * @param option
     */ 
    export function watchShake(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 判断是否支持创建快捷方式，仅 Android 客户端可用
     * @param option
     */ 
    export function isSupportShortCut(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 是否支持设置快捷方式。true / false */
        isSupport: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 是否支持设置快捷方式。true / false */
        isSupport?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 是否支持设置快捷方式。true / false */
        isSupport?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 是否支持设置快捷方式。true / false */
      isSupport: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否支持设置快捷方式。true / false */
      isSupport: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 判断是否支持创建快捷方式，仅 Android 客户端可用
     * @param option
     */ 
    export function isSupportShortCut(callback?: (result: { 
      /** 是否支持设置快捷方式。true / false */
      isSupport: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否支持设置快捷方式。true / false */
      isSupport: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除桌面上的快捷方式，仅 Android 客户端可用
     * @param option
     */ 
    export function removeShortCut(option: {
      /** 应用 Id */
      appId: string,
      /** 快捷入口标题 */
      title: string,
      /** 图标 url，支持 base64 */
      icon: string,
      /** 应用启动参数 */
      params?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 添加快捷方式到桌面，仅 Android 客户端可用
     * @param option
     */ 
    export function setShortCut(option: {
      /** 应用 Id */
      appId: string,
      /** 快捷入口标题 */
      title: string,
      /** 图标 url，支持 base64 */
      icon: string,
      /** 应用启动参数 */
      params?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 调出手机短信发送界面。
     * @param option
     */ 
    export function sendSMS(option: {
      /** 预填入的目标手机号 */
      mobile?: string,
      /** 预填入的短信内容 */
      content?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 调出手机短信发送界面。
     * @param option
     */ 
    export function sendSMS(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 调用截屏功能。
     * @param option
     */ 
    export function snapshot(option: {
      /** 截屏范围，默认 screen。支持screen: 当前客户端整个屏幕viewport: 网页可见区域document: 整个网页 注意: document 会截取全部网页，在安卓手机上，网页很大的时候会浏览器内存溢出，请使用screen */
      range?: string,
      /** 是否保存到相册，默认 true。 */
      saveToGallery?: boolean,
      /** 返回的数据格式，默认 none。支持dataURL: base64编码的图片数据fileURL: 图片在文件系统中的url（图片存放于临时目录中，钱包退出时被清除)none: 不返回数据，可用于仅保存到相册的情况 */
      dataType?: string,
      /** 图片格式，默认 jpg。支持 jpg 和 png */
      imageFormat?: string,
      /** jpg的图片质量，取值 1 到 100，默认 75。 */
      quality?: number,
      /** 图片的最大宽度，过大将被等比缩小 */
      maxWidth?: number,
      /** 图片的最大高度，过大将被等比缩小 */
      maxHeight?: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** base64 编码的图片数据 */
        dataURL: string,
        /** 图片在文件系统中的 url */
        fileURL: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** base64 编码的图片数据 */
        dataURL?: string,
        /** 图片在文件系统中的 url */
        fileURL?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** base64 编码的图片数据 */
        dataURL?: string,
        /** 图片在文件系统中的 url */
        fileURL?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** base64 编码的图片数据 */
      dataURL: string,
      /** 图片在文件系统中的 url */
      fileURL: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** base64 编码的图片数据 */
      dataURL: string,
      /** 图片在文件系统中的 url */
      fileURL: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 调用截屏功能。
     * @param option
     */ 
    export function snapshot(callback?: (result: { 
      /** base64 编码的图片数据 */
      dataURL: string,
      /** 图片在文件系统中的 url */
      fileURL: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** base64 编码的图片数据 */
      dataURL: string,
      /** 图片在文件系统中的 url */
      fileURL: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取系统信息。
     * @param option
     */ 
    export function getSystemInfo(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 手机型号 */
        model: string,
        /** 设备像素比 */
        pixelRatio: number,
        /** 窗口宽度 */
        windowWidth: number,
        /** 窗口高度 */
        windowHeight: number,
        /** 支付宝设置的语言 */
        language: string,
        /** 支付宝版本号 */
        version: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 手机型号 */
        model?: string,
        /** 设备像素比 */
        pixelRatio?: number,
        /** 窗口宽度 */
        windowWidth?: number,
        /** 窗口高度 */
        windowHeight?: number,
        /** 支付宝设置的语言 */
        language?: string,
        /** 支付宝版本号 */
        version?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 手机型号 */
        model?: string,
        /** 设备像素比 */
        pixelRatio?: number,
        /** 窗口宽度 */
        windowWidth?: number,
        /** 窗口高度 */
        windowHeight?: number,
        /** 支付宝设置的语言 */
        language?: string,
        /** 支付宝版本号 */
        version?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 手机型号 */
      model: string,
      /** 设备像素比 */
      pixelRatio: number,
      /** 窗口宽度 */
      windowWidth: number,
      /** 窗口高度 */
      windowHeight: number,
      /** 支付宝设置的语言 */
      language: string,
      /** 支付宝版本号 */
      version: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 手机型号 */
      model: string,
      /** 设备像素比 */
      pixelRatio: number,
      /** 窗口宽度 */
      windowWidth: number,
      /** 窗口高度 */
      windowHeight: number,
      /** 支付宝设置的语言 */
      language: string,
      /** 支付宝版本号 */
      version: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取系统信息。
     * @param option
     */ 
    export function getSystemInfo(callback?: (result: { 
      /** 手机型号 */
      model: string,
      /** 设备像素比 */
      pixelRatio: number,
      /** 窗口宽度 */
      windowWidth: number,
      /** 窗口高度 */
      windowHeight: number,
      /** 支付宝设置的语言 */
      language: string,
      /** 支付宝版本号 */
      version: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 手机型号 */
      model: string,
      /** 设备像素比 */
      pixelRatio: number,
      /** 窗口宽度 */
      windowWidth: number,
      /** 窗口高度 */
      windowHeight: number,
      /** 支付宝设置的语言 */
      language: string,
      /** 支付宝版本号 */
      version: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 调用震动功能。
     * @param option
     */ 
    export function vibrate(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 调用震动功能。
     * @param option
     */ 
    export function vibrate(): Promise<any>;

    /**
     * 获取当前的地理位置信息。
     * @param option
     */ 
    export function getLocation(option: {
      /** 钱包经纬度定位缓存过期时间，单位秒。默认 30s。使用缓存会加快定位速度，缓存过期会重新定位 */
      cacheTimeout?: number,
      /** 支持 0：详细逆地理编码，带周边信；1：逆地理编码到城市；2：仅获取经纬度、速度和精度。默认为 2 */
      type?: number,
      /** 定位超时失败回调时间，单位秒。默认10s */
      timeout?: number,
      /** 自定义业务类型 */
      bizType?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 经度 */
        longitude: string,
        /** 纬度 */
        latitude: string,
        /** 精度，单位米 */
        accuracy: number,
        /** 速度，单位毫秒 */
        speed: number,
        /** 国家名 */
        country: string,
        /** 国家编号 */
        countryCode: string,
        /** 省份名 */
        province: string,
        /** 城市名 */
        city: string,
        /** 城市编码 */
        cityCode: string,
        /** 区域编码 */
        adCode: string,
        /** 街道门牌信息，结构是：{street, number} */
        streetNumber: Object,
        /** 定位点附近的 POI 信息，结构是：{name, address} */
        pois: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 经度 */
        longitude?: string,
        /** 纬度 */
        latitude?: string,
        /** 精度，单位米 */
        accuracy?: number,
        /** 速度，单位毫秒 */
        speed?: number,
        /** 国家名 */
        country?: string,
        /** 国家编号 */
        countryCode?: string,
        /** 省份名 */
        province?: string,
        /** 城市名 */
        city?: string,
        /** 城市编码 */
        cityCode?: string,
        /** 区域编码 */
        adCode?: string,
        /** 街道门牌信息，结构是：{street, number} */
        streetNumber?: Object,
        /** 定位点附近的 POI 信息，结构是：{name, address} */
        pois?: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 经度 */
        longitude?: string,
        /** 纬度 */
        latitude?: string,
        /** 精度，单位米 */
        accuracy?: number,
        /** 速度，单位毫秒 */
        speed?: number,
        /** 国家名 */
        country?: string,
        /** 国家编号 */
        countryCode?: string,
        /** 省份名 */
        province?: string,
        /** 城市名 */
        city?: string,
        /** 城市编码 */
        cityCode?: string,
        /** 区域编码 */
        adCode?: string,
        /** 街道门牌信息，结构是：{street, number} */
        streetNumber?: Object,
        /** 定位点附近的 POI 信息，结构是：{name, address} */
        pois?: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 经度 */
      longitude: string,
      /** 纬度 */
      latitude: string,
      /** 精度，单位米 */
      accuracy: number,
      /** 速度，单位毫秒 */
      speed: number,
      /** 国家名 */
      country: string,
      /** 国家编号 */
      countryCode: string,
      /** 省份名 */
      province: string,
      /** 城市名 */
      city: string,
      /** 城市编码 */
      cityCode: string,
      /** 区域编码 */
      adCode: string,
      /** 街道门牌信息，结构是：{street, number} */
      streetNumber: Object,
      /** 定位点附近的 POI 信息，结构是：{name, address} */
      pois: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 经度 */
      longitude: string,
      /** 纬度 */
      latitude: string,
      /** 精度，单位米 */
      accuracy: number,
      /** 速度，单位毫秒 */
      speed: number,
      /** 国家名 */
      country: string,
      /** 国家编号 */
      countryCode: string,
      /** 省份名 */
      province: string,
      /** 城市名 */
      city: string,
      /** 城市编码 */
      cityCode: string,
      /** 区域编码 */
      adCode: string,
      /** 街道门牌信息，结构是：{street, number} */
      streetNumber: Object,
      /** 定位点附近的 POI 信息，结构是：{name, address} */
      pois: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取当前的地理位置信息。
     * @param option
     */ 
    export function getLocation(callback?: (result: { 
      /** 经度 */
      longitude: string,
      /** 纬度 */
      latitude: string,
      /** 精度，单位米 */
      accuracy: number,
      /** 速度，单位毫秒 */
      speed: number,
      /** 国家名 */
      country: string,
      /** 国家编号 */
      countryCode: string,
      /** 省份名 */
      province: string,
      /** 城市名 */
      city: string,
      /** 城市编码 */
      cityCode: string,
      /** 区域编码 */
      adCode: string,
      /** 街道门牌信息，结构是：{street, number} */
      streetNumber: Object,
      /** 定位点附近的 POI 信息，结构是：{name, address} */
      pois: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 经度 */
      longitude: string,
      /** 纬度 */
      latitude: string,
      /** 精度，单位米 */
      accuracy: number,
      /** 速度，单位毫秒 */
      speed: number,
      /** 国家名 */
      country: string,
      /** 国家编号 */
      countryCode: string,
      /** 省份名 */
      province: string,
      /** 城市名 */
      city: string,
      /** 城市编码 */
      cityCode: string,
      /** 区域编码 */
      adCode: string,
      /** 街道门牌信息，结构是：{street, number} */
      streetNumber: Object,
      /** 定位点附近的 POI 信息，结构是：{name, address} */
      pois: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 使用支付宝内置地图查看位置。
     * @param option
     */ 
    export function openLocation(option: {
      /** 经度 */
      longitude: string,
      /** 纬度 */
      latitude: string,
      /** 位置名称 */
      name?: string,
      /** 地址的详细说明 */
      address?: string,
      /** 缩放比例，范围3~19，默认为15 */
      scale?: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取音乐播放的状态。
     * @param option
     */ 
    export function getBackgroundAudioPlayerState(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 音乐播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
        status: number,
        /** 音乐总时长，单位秒 */
        duration: number,
        /** 当前播放位置，单位秒 */
        currentPosition: number,
        /** 缓冲百分比 */
        downloadPercent: number,
        /** 音乐链接地址 */
        url: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 音乐播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
        status?: number,
        /** 音乐总时长，单位秒 */
        duration?: number,
        /** 当前播放位置，单位秒 */
        currentPosition?: number,
        /** 缓冲百分比 */
        downloadPercent?: number,
        /** 音乐链接地址 */
        url?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 音乐播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
        status?: number,
        /** 音乐总时长，单位秒 */
        duration?: number,
        /** 当前播放位置，单位秒 */
        currentPosition?: number,
        /** 缓冲百分比 */
        downloadPercent?: number,
        /** 音乐链接地址 */
        url?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 音乐播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
      status: number,
      /** 音乐总时长，单位秒 */
      duration: number,
      /** 当前播放位置，单位秒 */
      currentPosition: number,
      /** 缓冲百分比 */
      downloadPercent: number,
      /** 音乐链接地址 */
      url: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 音乐播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
      status: number,
      /** 音乐总时长，单位秒 */
      duration: number,
      /** 当前播放位置，单位秒 */
      currentPosition: number,
      /** 缓冲百分比 */
      downloadPercent: number,
      /** 音乐链接地址 */
      url: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取音乐播放的状态。
     * @param option
     */ 
    export function getBackgroundAudioPlayerState(callback?: (result: { 
      /** 音乐播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
      status: number,
      /** 音乐总时长，单位秒 */
      duration: number,
      /** 当前播放位置，单位秒 */
      currentPosition: number,
      /** 缓冲百分比 */
      downloadPercent: number,
      /** 音乐链接地址 */
      url: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 音乐播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
      status: number,
      /** 音乐总时长，单位秒 */
      duration: number,
      /** 当前播放位置，单位秒 */
      currentPosition: number,
      /** 缓冲百分比 */
      downloadPercent: number,
      /** 音乐链接地址 */
      url: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除音乐暂停事件的监听。
     * @param option
     */ 
    export function offBackgroundAudioPause(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除音乐暂停事件的监听。
     * @param option
     */ 
    export function offBackgroundAudioPause(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除音乐播放事件的监听。
     * @param option
     */ 
    export function offBackgroundAudioPlay(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除音乐播放事件的监听。
     * @param option
     */ 
    export function offBackgroundAudioPlay(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除音乐停止事件的监听。
     * @param option
     */ 
    export function offBackgroundAudioStop(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除音乐停止事件的监听。
     * @param option
     */ 
    export function offBackgroundAudioStop(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听音乐暂停事件。
     * @param option
     */ 
    export function onBackgroundAudioPause(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听音乐暂停事件。
     * @param option
     */ 
    export function onBackgroundAudioPause(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听音乐播放事件。
     * @param option
     */ 
    export function onBackgroundAudioPlay(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听音乐播放事件。
     * @param option
     */ 
    export function onBackgroundAudioPlay(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听音乐停止事件。
     * @param option
     */ 
    export function onBackgroundAudioStop(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听音乐停止事件。
     * @param option
     */ 
    export function onBackgroundAudioStop(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 暂停播放音乐。
     * @param option
     */ 
    export function pauseBackgroundAudio(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 暂停播放音乐。
     * @param option
     */ 
    export function pauseBackgroundAudio(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 开始播放音乐。
     * @param option
     */ 
    export function playBackgroundAudio(option: {
      /** 音乐链接地址 */
      url: string,
      /** 音乐标题 */
      title?: string,
      /** 演唱者 */
      singer?: string,
      /** 音乐描述 */
      describe?: string,
      /** logo URL */
      logo?: string,
      /** 封面 URL */
      cover?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 控制音乐播放进度。
     * @param option
     */ 
    export function seekBackgroundAudio(option: {
      /** 音乐位置，单位秒 */
      position: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 控制音乐播放进度。
     */ 
    export function seekBackgroundAudio(position: number, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 停止播放音乐。
     * @param option
     */ 
    export function stopBackgroundAudio(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 停止播放音乐。
     * @param option
     */ 
    export function stopBackgroundAudio(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 从第三方服务器下载文件到本地，本地件为临时文件，应用退出后文件地址即失效。
     * @param option
     */ 
    export function downloadFile(option: {
      /** 下载文件地址 */
      url: string,
      /** HTTP 请求 Header */
      headers?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 文件临时存放的位置 */
        apFilePath: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 文件临时存放的位置 */
        apFilePath?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 文件临时存放的位置 */
        apFilePath?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 文件临时存放的位置 */
      apFilePath: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 文件临时存放的位置 */
      apFilePath: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 上传本地资源到开发者服务器。
     * @param option
     */ 
    export function uploadFile(option: {
      /** 开发者服务器地址 */
      url: string,
      /** 要上传文件资源的本地定位符 */
      filePath: string,
      /** 文件名，即对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容 */
      fileName: string,
      /** 文件类型，image/video */
      fileType: string,
      /** HTTP 请求 Header */
      headers?: Object,
      /** HTTP 请求中其他额外的 form 数据 */
      formData?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 服务器返回的数据 */
        data: string,
        /** HTTP 状态码 */
        statusCode: string,
        /** 服务器返回的 header */
        headers: Object,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 服务器返回的数据 */
        data?: string,
        /** HTTP 状态码 */
        statusCode?: string,
        /** 服务器返回的 header */
        headers?: Object,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 服务器返回的数据 */
        data?: string,
        /** HTTP 状态码 */
        statusCode?: string,
        /** 服务器返回的 header */
        headers?: Object,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 服务器返回的数据 */
      data: string,
      /** HTTP 状态码 */
      statusCode: string,
      /** 服务器返回的 header */
      headers: Object,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 服务器返回的数据 */
      data: string,
      /** HTTP 状态码 */
      statusCode: string,
      /** 服务器返回的 header */
      headers: Object,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 拍照或从手机相册中选择图片。可直接传入一个数字作为 OPTION.count 参数。
     * @param option
     */ 
    export function chooseImage(option: {
      /** 最大可选照片数，默认1张，上限9张 */
      count?: number,
      /** 相册选取或者拍照，默认 [&#39;camera&#39;,&#39;album&#39;] */
      sourceType?: Array<'camera'|'album'|string>,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 图片文件路径 */
        apFilePaths: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 图片文件路径 */
        apFilePaths?: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 图片文件路径 */
        apFilePaths?: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 图片文件路径 */
      apFilePaths: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 图片文件路径 */
      apFilePaths: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 拍照或从手机相册中选择图片。可直接传入一个数字作为 OPTION.count 参数。
     */ 
    export function chooseImage(count: number, callback?: (result: { 
      /** 图片文件路径 */
      apFilePaths: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 图片文件路径 */
      apFilePaths: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 拍照或从手机相册中选择图片。可直接传入一个数字作为 OPTION.count 参数。
     * @param option
     */ 
    export function chooseImage(callback?: (result: { 
      /** 图片文件路径 */
      apFilePaths: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 图片文件路径 */
      apFilePaths: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 压缩图片。可直接传入一个数组作为 OPTION. apFilePaths 参数。
     * @param option
     */ 
    export function compressImage(option: {
      /** 要压缩的图片文件路径数组 */
      apFilePaths: string[],
      /** 压缩级别，支持 0 ~ 4 的整数，默认 4。详见「level 说明表」 */
      level?: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 压缩后的图片文件路径 */
        apFilePaths: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 压缩后的图片文件路径 */
        apFilePaths?: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 压缩后的图片文件路径 */
        apFilePaths?: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 压缩后的图片文件路径 */
      apFilePaths: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 压缩后的图片文件路径 */
      apFilePaths: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 压缩图片。可直接传入一个数组作为 OPTION. apFilePaths 参数。
     */ 
    export function compressImage(apFilePaths: string[], callback?: (result: { 
      /** 压缩后的图片文件路径 */
      apFilePaths: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 压缩后的图片文件路径 */
      apFilePaths: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 预览图片。可直接传入一个图片链接数组作为 OPTION.urls 参数。
     * @param option
     */ 
    export function previewImage(option: {
      /** 要预览的图片链接列表 */
      urls: string[],
      /** 当前显示图片索引，默认 0 */
      current?: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 预览图片。可直接传入一个图片链接数组作为 OPTION.urls 参数。
     */ 
    export function previewImage(urls: string[], callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 保存在线图片到手机相册。可直接传入一个图片链接地址作为 OPTION.url 参数。
     * @param option
     */ 
    export function saveImage(option: {
      /** 要保存的图片链接 */
      url: string,
      /** 是否显示图片操作菜单，默认 true */
      showActionSheet?: boolean,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 保存在线图片到手机相册。可直接传入一个图片链接地址作为 OPTION.url 参数。
     */ 
    export function saveImage(url: string, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 取消录音。
     * @param option
     */ 
    export function cancelRecord(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 取消录音。
     * @param option
     */ 
    export function cancelRecord(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 开始录音。当主动调用<code>ap.stopRecord()</code>，或者录音超过最长录音时间时自动结束录音，返回临时录音文件路径。
     * @param option
     */ 
    export function startRecord(option: {
      /** 最大录制时长，单位秒，默认60s */
      maxDuration?: number,
      /** 最小录制时长，单位秒，默认1s */
      minDuration?: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 录音文件路径 */
        apFilePath: string,
        /** 录音时间长度，单位秒 */
        duration: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 录音文件路径 */
        apFilePath?: string,
        /** 录音时间长度，单位秒 */
        duration?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 录音文件路径 */
        apFilePath?: string,
        /** 录音时间长度，单位秒 */
        duration?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 录音文件路径 */
      apFilePath: string,
      /** 录音时间长度，单位秒 */
      duration: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 录音文件路径 */
      apFilePath: string,
      /** 录音时间长度，单位秒 */
      duration: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 开始录音。当主动调用<code>ap.stopRecord()</code>，或者录音超过最长录音时间时自动结束录音，返回临时录音文件路径。
     * @param option
     */ 
    export function startRecord(callback?: (result: { 
      /** 录音文件路径 */
      apFilePath: string,
      /** 录音时间长度，单位秒 */
      duration: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 录音文件路径 */
      apFilePath: string,
      /** 录音时间长度，单位秒 */
      duration: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 结束录音。录音过程中调用此方法会触发 <code>ap.startRecord()</code> 接口的回调。
     * @param option
     */ 
    export function stopRecord(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 结束录音。录音过程中调用此方法会触发 <code>ap.startRecord()</code> 接口的回调。
     * @param option
     */ 
    export function stopRecord(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 录制或从手机相册中选择视频。可直接传入一个数字作为 OPTION.maxDuration 参数。
     * @param option
     */ 
    export function chooseVideo(option: {
      /** 最大录制时长，单位秒，默认60s */
      maxDuration?: number,
      /** 相册选取或者拍照，默认 [&#39;camera&#39;,&#39;album&#39;] */
      sourceType?: string[],
      /** 前置或者后置摄像头，默认前后都有，即：[&#39;front&#39;, &#39;back&#39;] */
      camera?: string[],
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 视频文件路径 */
        apFilePath: string,
        /** 选定视频的时间长度，单位秒 */
        duration: number,
        /** 选定视频的数据量大小 */
        size: number,
        /** 选定视频的宽 */
        width: number,
        /** 选定视频的高 */
        height: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 视频文件路径 */
        apFilePath?: string,
        /** 选定视频的时间长度，单位秒 */
        duration?: number,
        /** 选定视频的数据量大小 */
        size?: number,
        /** 选定视频的宽 */
        width?: number,
        /** 选定视频的高 */
        height?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 视频文件路径 */
        apFilePath?: string,
        /** 选定视频的时间长度，单位秒 */
        duration?: number,
        /** 选定视频的数据量大小 */
        size?: number,
        /** 选定视频的宽 */
        width?: number,
        /** 选定视频的高 */
        height?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 视频文件路径 */
      apFilePath: string,
      /** 选定视频的时间长度，单位秒 */
      duration: number,
      /** 选定视频的数据量大小 */
      size: number,
      /** 选定视频的宽 */
      width: number,
      /** 选定视频的高 */
      height: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 视频文件路径 */
      apFilePath: string,
      /** 选定视频的时间长度，单位秒 */
      duration: number,
      /** 选定视频的数据量大小 */
      size: number,
      /** 选定视频的宽 */
      width: number,
      /** 选定视频的高 */
      height: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 录制或从手机相册中选择视频。可直接传入一个数字作为 OPTION.maxDuration 参数。
     */ 
    export function chooseVideo(maxDuration: number, callback?: (result: { 
      /** 视频文件路径 */
      apFilePath: string,
      /** 选定视频的时间长度，单位秒 */
      duration: number,
      /** 选定视频的数据量大小 */
      size: number,
      /** 选定视频的宽 */
      width: number,
      /** 选定视频的高 */
      height: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 视频文件路径 */
      apFilePath: string,
      /** 选定视频的时间长度，单位秒 */
      duration: number,
      /** 选定视频的数据量大小 */
      size: number,
      /** 选定视频的宽 */
      width: number,
      /** 选定视频的高 */
      height: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 录制或从手机相册中选择视频。可直接传入一个数字作为 OPTION.maxDuration 参数。
     * @param option
     */ 
    export function chooseVideo(callback?: (result: { 
      /** 视频文件路径 */
      apFilePath: string,
      /** 选定视频的时间长度，单位秒 */
      duration: number,
      /** 选定视频的数据量大小 */
      size: number,
      /** 选定视频的宽 */
      width: number,
      /** 选定视频的高 */
      height: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 视频文件路径 */
      apFilePath: string,
      /** 选定视频的时间长度，单位秒 */
      duration: number,
      /** 选定视频的数据量大小 */
      size: number,
      /** 选定视频的宽 */
      width: number,
      /** 选定视频的高 */
      height: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 暂停播放语音。
     * @param option
     */ 
    export function pauseVoice(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 暂停播放语音。
     * @param option
     */ 
    export function pauseVoice(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 开始播放语音。可直接传入一个字符串作为 OPTION.filePath 参数。
     * @param option
     */ 
    export function playVoice(option: {
      /** 音频文件路径 */
      filePath: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 开始播放语音。可直接传入一个字符串作为 OPTION.filePath 参数。
     */ 
    export function playVoice(filePath: string, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 停止播放语音。
     * @param option
     */ 
    export function stopVoice(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 停止播放语音。
     * @param option
     */ 
    export function stopVoice(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除应用压后台事件的监听。
     * @param option
     */ 
    export function offAppPause(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除应用压后台事件的监听。
     * @param option
     */ 
    export function offAppPause(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除应用从后台唤起事件的监听。
     * @param option
     */ 
    export function offAppResume(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除应用从后台唤起事件的监听。
     * @param option
     */ 
    export function offAppResume(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听应用压后台事件。
     * @param option
     */ 
    export function onAppPause(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听应用压后台事件。
     * @param option
     */ 
    export function onAppPause(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听应用从后台唤起事件。
     * @param option
     */ 
    export function onAppResume(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听应用从后台唤起事件。
     * @param option
     */ 
    export function onAppResume(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除返回按钮点击事件的监听。
     * @param option
     */ 
    export function offBack(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除返回按钮点击事件的监听。
     * @param option
     */ 
    export function offBack(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除 pagePause 事件的监听。
     * @param option
     */ 
    export function offPagePause(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除 pagePause 事件的监听。
     * @param option
     */ 
    export function offPagePause(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除 pageResume 事件的监听。
     * @param option
     */ 
    export function offPageResume(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除 pageResume 事件的监听。
     * @param option
     */ 
    export function offPageResume(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除 pause 事件的监听。
     * @param option
     */ 
    export function offPause(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除 pause 事件的监听。
     * @param option
     */ 
    export function offPause(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除 resume 事件的监听。
     * @param option
     */ 
    export function offResume(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除 resume 事件的监听。
     * @param option
     */ 
    export function offResume(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听导航栏左侧返回按钮点击事件。
     * @param option
     */ 
    export function onBack(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 是否可返回。可通过ap.allowBack()设置此返回值 */
        backAvailable: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 是否可返回。可通过ap.allowBack()设置此返回值 */
        backAvailable?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 是否可返回。可通过ap.allowBack()设置此返回值 */
        backAvailable?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 是否可返回。可通过ap.allowBack()设置此返回值 */
      backAvailable: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否可返回。可通过ap.allowBack()设置此返回值 */
      backAvailable: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听导航栏左侧返回按钮点击事件。
     * @param option
     */ 
    export function onBack(callback?: (result: { 
      /** 是否可返回。可通过ap.allowBack()设置此返回值 */
      backAvailable: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否可返回。可通过ap.allowBack()设置此返回值 */
      backAvailable: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 当一个页面不可见时(仅指 pushWindow 到下个页面)，会触发此事件。
     * @param option
     */ 
    export function onPagePause(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 当一个页面不可见时(仅指 pushWindow 到下个页面)，会触发此事件。
     * @param option
     */ 
    export function onPagePause(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 当一个页面重新可见时(仅指从下个页面回退)，会触发此事件。
     * 如果这个页面通过 popWindow/popTo 到达时传递了 data 参数，此页可以获取到 data。  
     * @param option
     */ 
    export function onPageResume(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 通过 popWindow/popTo 传递的 data 参数 */
        data: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 通过 popWindow/popTo 传递的 data 参数 */
        data?: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 通过 popWindow/popTo 传递的 data 参数 */
        data?: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 通过 popWindow/popTo 传递的 data 参数 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 通过 popWindow/popTo 传递的 data 参数 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 当一个页面重新可见时(仅指从下个页面回退)，会触发此事件。
     * 如果这个页面通过 popWindow/popTo 到达时传递了 data 参数，此页可以获取到 data。  
     * @param option
     */ 
    export function onPageResume(callback?: (result: { 
      /** 通过 popWindow/popTo 传递的 data 参数 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 通过 popWindow/popTo 传递的 data 参数 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 当一个页面不可见时，会触发此事件。包括下面两种情况：  
     * @param option
     */ 
    export function onPause(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 当一个页面不可见时，会触发此事件。包括下面两种情况：  
     * @param option
     */ 
    export function onPause(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 当一个页面重新可见时，会触发此事件，包括下列两种情况：  
     * @param option
     */ 
    export function onResume(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 通过 popWindow/popTo 传递的 data 参数 */
        data: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 通过 popWindow/popTo 传递的 data 参数 */
        data?: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 通过 popWindow/popTo 传递的 data 参数 */
        data?: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 通过 popWindow/popTo 传递的 data 参数 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 通过 popWindow/popTo 传递的 data 参数 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 当一个页面重新可见时，会触发此事件，包括下列两种情况：  
     * @param option
     */ 
    export function onResume(callback?: (result: { 
      /** 通过 popWindow/popTo 传递的 data 参数 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 通过 popWindow/popTo 传递的 data 参数 */
      data: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 退出当前应用，会关闭所有的页面。
     * @param option
     */ 
    export function exitApp(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 退出当前应用，会关闭所有的页面。
     * @param option
     */ 
    export function exitApp(): Promise<any>;

    /**
     * 清除预渲染队列中的一个或多个页面
     * @param option
     */ 
    export function clearRender(option: {
      /** 要清除的页面在预渲染队列中的开始位置，最小为 0 */
      start: number,
      /** 从 start 参数位置的页面开始，要清除预渲染队列中的几个页面，最小为 1 */
      length: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 通知容器当前页面已经完成加载。
     * @param option
     */ 
    export function finishRender(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 通知容器当前页面已经完成加载。
     * @param option
     */ 
    export function finishRender(): Promise<any>;

    /**
     * 在后台开一个隐藏的 webview 对某个在线或离线页面进行预渲染，从而加快这个页面的打开速度。可直接传入一个 String 作为 OPTION.url 参数。
     * @param option
     */ 
    export function preRender(option: {
      /** 要预先渲染的页面路径，可以是当前 app 内的相对路径，或是在线页面的 url */
      url: string,
      /** 启动应用的参数，由具体应用自己定义 */
      params?: Object,
      /** url的参数，会以 query string 跟在 url 后面。在打开的新页面里可以用 ap.parseQueryString() 来获取 */
      data?: Object,
      /** 销毁策略。预渲染队列长度达到上限或者 url 及 params 都为 null 时，销毁队列中的一个：&#39;first&#39;, &#39;last&#39;, &#39;none&#39;。默认为 first */
      kickOut?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 预渲染队列的url数组 */
        urls: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 预渲染队列的url数组 */
        urls?: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 预渲染队列的url数组 */
        urls?: string[],
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 预渲染队列的url数组 */
      urls: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 预渲染队列的url数组 */
      urls: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 在后台开一个隐藏的 webview 对某个在线或离线页面进行预渲染，从而加快这个页面的打开速度。可直接传入一个 String 作为 OPTION.url 参数。
     */ 
    export function preRender(url: string, callback?: (result: { 
      /** 预渲染队列的url数组 */
      urls: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 预渲染队列的url数组 */
      urls: string[],
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * startApp 可以打开支付宝内置的一个应用。可直接传入一个字符串作为 OPTION.appId 参数。
     * @param option
     */ 
    export function startApp(option: {
      /** 启动应用的 ID */
      appId: string,
      /** 启动应用的参数，由具体应用自己定义 */
      params?: Object,
      /** 是否先退出当前 app 再启动新的 app，适用于页面用作中转页的情况，默认 false */
      closeCurrentApp?: boolean,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * startApp 可以打开支付宝内置的一个应用。可直接传入一个字符串作为 OPTION.appId 参数。
     */ 
    export function startApp(appId: string, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 在浏览器里打开一个页面。可直接传入一个字符串作为 OPTION.url 参数。
     * @param option
     */ 
    export function openInBrowser(option: {
      /** 要打开的页面url */
      url: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 在浏览器里打开一个页面。可直接传入一个字符串作为 OPTION.url 参数。
     */ 
    export function openInBrowser(url: string): Promise<any>;

    /**
     * popTo 可以一次回退多级页面。可直接传入一个字符串作为 OPTION.urlPattern 参数，或直接传入一个整数作为 OPTION.index 参数。
     * @param option
     */ 
    export function popTo(option: {
      /** 目标页面的完整 URL */
      url?: string,
      /** 目标页面的 URL 匹配表达式（ URL 如果包含 urlPattern，匹配成功） */
      urlPattern?: string,
      /** 目标页面在会话页面栈中的索引；如果小于零，则将与当前页面的 index 相加 */
      index?: number,
      /** 传递的 data 对象将会被即将露出的页面通过 onResume 事件接收 */
      data?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * popTo 可以一次回退多级页面。可直接传入一个字符串作为 OPTION.urlPattern 参数，或直接传入一个整数作为 OPTION.index 参数。
     */ 
    export function popTo(urlPattern: string, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * popTo 可以一次回退多级页面。可直接传入一个字符串作为 OPTION.urlPattern 参数，或直接传入一个整数作为 OPTION.index 参数。
     */ 
    export function popTo(index: number, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * popTo 可以一次回退多级页面。可直接传入一个字符串作为 OPTION.urlPattern 参数，或直接传入一个整数作为 OPTION.index 参数。
     * @param option
     */ 
    export function popTo(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 关闭当前页面。可直接传入一个对象作为 OPTION.data 参数。
     * @param option
     */ 
    export function popWindow(option: {
      /** 传递的 data 对象将会被即将露出的页面通过 onResume 事件接收 */
      data?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 关闭当前页面。可直接传入一个对象作为 OPTION.data 参数。
     */ 
    export function popWindow(data: Object): Promise<any>;

    /**
     * 关闭当前页面。可直接传入一个对象作为 OPTION.data 参数。
     * @param option
     */ 
    export function popWindow(): Promise<any>;

    /**
     * pushBizWindow 用来打开支付宝业务页面，目前只支持芝麻授权。
     * @param option
     */ 
    export function pushBizWindow(option: {
      /** 业务页面类型，只支持&#39;zm&#39; */
      type: string,
      /** 给业务页面透传的参数 如{key: value} */
      data?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * pushWindow 用来打开一个新的页面，自带转场动画。可直接传入一个字符串作为 OPTION.url 参数。
     * @param option
     */ 
    export function pushWindow(option: {
      /** 要打开的页面url */
      url: string,
      /** url的参数，会以 query string 跟在 url 后面。在打开的新页面里可以用 ap.parseQueryString() 来获取 */
      data?: Object,
      /** 设置容器行为的启动参数  */
      params?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * pushWindow 用来打开一个新的页面，自带转场动画。可直接传入一个字符串作为 OPTION.url 参数。
     */ 
    export function pushWindow(url: string): Promise<any>;

    /**
     * 替换当前页面，并且不会产生历史记录。可直接传入一个字符串作为 OPTION.url 参数。
     * @param option
     */ 
    export function redirectTo(option: {
      /** 要打开的页面url */
      url: string,
      /** url的参数，会以 query string 跟在 url 后面。在打开的新页面里可以用 ap.parseQueryString() 来获取 */
      data?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 替换当前页面，并且不会产生历史记录。可直接传入一个字符串作为 OPTION.url 参数。
     */ 
    export function redirectTo(url: string): Promise<any>;

    /**
     * 向指定服务器发起一个跨域 http 请求。可直接传入一个字符串作为 OPTION.url 参数。
     * @param option
     */ 
    export function httpRequest(option: {
      /** 目标服务器 url */
      url: string,
      /** 设置请求的HTTP头，默认 {&#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded&#39;}。其中不能设置UserAgent */
      headers?: Object,
      /** 默认GET，目前支持GET, POST */
      method?: string,
      /** 请求的参数。会自动拼装成 queryString，另外 POST 请求如需其他格式自行序列化成字符串传入。 */
      data?: Object,
      /** 超时时间，单位为 ms，默认 30000 */
      timeout?: number,
      /** 期望返回的数据格式，默认 json，支持 json, text, base64。 */
      dataType?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 响应数据，格式取决于请求时的dataType参数 */
        data: string,
        /** 响应码 */
        status: number,
        /** 响应头 */
        headers: Object,
        /** 返回任意业务字段 */
        [field: string]: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 响应数据，格式取决于请求时的dataType参数 */
        data?: string,
        /** 响应码 */
        status?: number,
        /** 响应头 */
        headers?: Object,
        /** 返回任意业务字段 */
        [field: string]: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 响应数据，格式取决于请求时的dataType参数 */
        data?: string,
        /** 响应码 */
        status?: number,
        /** 响应头 */
        headers?: Object,
        /** 返回任意业务字段 */
        [field: string]: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 响应数据，格式取决于请求时的dataType参数 */
      data: string,
      /** 响应码 */
      status: number,
      /** 响应头 */
      headers: Object,
      /** 返回任意业务字段 */
      [field: string]: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 响应数据，格式取决于请求时的dataType参数 */
      data: string,
      /** 响应码 */
      status: number,
      /** 响应头 */
      headers: Object,
      /** 返回任意业务字段 */
      [field: string]: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 向指定服务器发起一个跨域 http 请求。可直接传入一个字符串作为 OPTION.url 参数。
     */ 
    export function httpRequest(url: string, callback?: (result: { 
      /** 响应数据，格式取决于请求时的dataType参数 */
      data: string,
      /** 响应码 */
      status: number,
      /** 响应头 */
      headers: Object,
      /** 返回任意业务字段 */
      [field: string]: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 响应数据，格式取决于请求时的dataType参数 */
      data: string,
      /** 响应码 */
      status: number,
      /** 响应头 */
      headers: Object,
      /** 返回任意业务字段 */
      [field: string]: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 向后端发起 RPC 请求。可直接传入一个字符串作为 OPTION.operationType 参数。
     * @param option
     */ 
    export function rpc(option: {
      /** RPC  服务名称 */
      operationType: string,
      /** RPC  请求的参数。 */
      requestData?: Object,
      /** 设置 RPC  请求的头 */
      headers?: Object,
      /** 网关地址，可以在支付宝中请求网商银行或者其他 app 的网关。 */
      gateway?: string,
      /** 是否使用 request gzip 压缩。 */
      compress?: boolean,
      /** RPC 网关被限流时是否禁止自动弹出统一限流弹窗。默认为 false。 */
      disableLimitView?: boolean,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 返回任意业务字段 */
        [field: string]: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 返回任意业务字段 */
        [field: string]: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 返回任意业务字段 */
        [field: string]: any,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 返回任意业务字段 */
      [field: string]: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 返回任意业务字段 */
      [field: string]: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 向后端发起 RPC 请求。可直接传入一个字符串作为 OPTION.operationType 参数。
     */ 
    export function rpc(operationType: string, callback?: (result: { 
      /** 返回任意业务字段 */
      [field: string]: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 返回任意业务字段 */
      [field: string]: any,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 关闭 WebSocket 连接。
     * @param option
     */ 
    export function closeSocket(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 关闭 WebSocket 连接。
     * @param option
     */ 
    export function closeSocket(): Promise<any>;

    /**
     * 向指定服务器发起 WebSocket 连接请求。可直接传入一个字符串作为 OPTION.url 参数。
     * @param option
     */ 
    export function connectSocket(option: {
      /** 目标服务器 url */
      url: string,
      /** 请求的参数 */
      data?: Object,
      /** 设置请求的头部信息 */
      headers?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 向指定服务器发起 WebSocket 连接请求。可直接传入一个字符串作为 OPTION.url 参数。
     */ 
    export function connectSocket(url: string, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除 WebSocket 关闭事件监听。
     * @param option
     */ 
    export function offSocketClose(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 移除 WebSocket 关闭事件监听。
     * @param option
     */ 
    export function offSocketClose(): Promise<any>;

    /**
     * 移除 WebSocket 报错事件监听。
     * @param option
     */ 
    export function offSocketError(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 移除 WebSocket 报错事件监听。
     * @param option
     */ 
    export function offSocketError(): Promise<any>;

    /**
     * 移除 WebSocket 消息事件监听。
     * @param option
     */ 
    export function offSocketMessage(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 移除 WebSocket 消息事件监听。
     * @param option
     */ 
    export function offSocketMessage(): Promise<any>;

    /**
     * 移除 WebSocket 打开事件监听。
     * @param option
     */ 
    export function offSocketOpen(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 移除 WebSocket 打开事件监听。
     * @param option
     */ 
    export function offSocketOpen(): Promise<any>;

    /**
     * 监听 WebSocket 关闭事件。
     * @param option
     */ 
    export function onSocketClose(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听 WebSocket 关闭事件。
     * @param option
     */ 
    export function onSocketClose(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听 WebSocket 报错事件。
     * @param option
     */ 
    export function onSocketError(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听 WebSocket 报错事件。
     * @param option
     */ 
    export function onSocketError(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听 WebSocket 接受到服务器的消息事件。
     * @param option
     */ 
    export function onSocketMessage(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 服务器返回的消息 */
        data: string|ArrayBuffer,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 服务器返回的消息 */
        data?: string|ArrayBuffer,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 服务器返回的消息 */
        data?: string|ArrayBuffer,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 服务器返回的消息 */
      data: string|ArrayBuffer,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 服务器返回的消息 */
      data: string|ArrayBuffer,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听 WebSocket 接受到服务器的消息事件。
     * @param option
     */ 
    export function onSocketMessage(callback?: (result: { 
      /** 服务器返回的消息 */
      data: string|ArrayBuffer,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 服务器返回的消息 */
      data: string|ArrayBuffer,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听 WebSocket 连接打开事件。
     * @param option
     */ 
    export function onSocketOpen(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听 WebSocket 连接打开事件。
     * @param option
     */ 
    export function onSocketOpen(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 通过 WebSocket 连接发送数据，需要先 ap.connectSocket，并在 ap.onSocketOpen 回调之后才能发送。
     * @param option
     */ 
    export function sendSocketMessage(option: {
      /** 请求的参数 */
      data?: string|ArrayBuffer,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 通过 WebSocket 连接发送数据，需要先 ap.connectSocket，并在 ap.onSocketOpen 回调之后才能发送。
     * @param option
     */ 
    export function sendSocketMessage(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 打开城市选择列表。
     * @param option
     */ 
    export function chooseCity(option: {
      /** 是否显示当前定位城市，默认 false */
      showLocatedCity?: boolean,
      /** 是否显示热门城市，默认 true */
      showHotCities?: boolean,
      /** 自定义城市列表，列表内对象字段见下表 */
      cities?: Array<{
        /** 城市名 */
        city: string,
        /** 行政区划代码 */
        adCode: string,
        /** 城市名对应拼音拼写，方便用户搜索 */
        spell?: string,
      }>,
      /** 自定义热门城市列表，列表内对象字段见下表 */
      hotCities?: Array<{
        /** 城市名 */
        city: string,
        /** 行政区划代码 */
        adCode: string,
        /** 城市名对应拼音拼写，方便用户搜索 */
        spell?: string,
      }>,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 城市名 */
        city: string,
        /** 行政区划代码 */
        adCode: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 城市名 */
        city?: string,
        /** 行政区划代码 */
        adCode?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 城市名 */
        city?: string,
        /** 行政区划代码 */
        adCode?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 城市名 */
      city: string,
      /** 行政区划代码 */
      adCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 城市名 */
      city: string,
      /** 行政区划代码 */
      adCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 打开城市选择列表。
     * @param option
     */ 
    export function chooseCity(callback?: (result: { 
      /** 城市名 */
      city: string,
      /** 行政区划代码 */
      adCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 城市名 */
      city: string,
      /** 行政区划代码 */
      adCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 打开支付宝通讯录，选择一个或者多个支付宝联系人。
     * @param option
     */ 
    export function chooseAlipayContact(option: {
      /** 单次最多选择联系人个数，默认 1，最大 10 */
      count?: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 选中的支付宝联系人数组，数组内部对象字段见下表 */
        contacts: Array<{
          /** 账号的真实姓名 */
          realName: string,
          /** 账号对应的手机号码 */
          mobile: string,
          /** 账号的邮箱 */
          email: string,
          /** 账号的头像链接 */
          avatar: string,
          /** 支付宝账号 userId */
          userId: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 选中的支付宝联系人数组，数组内部对象字段见下表 */
        contacts?: Array<{
          /** 账号的真实姓名 */
          realName?: string,
          /** 账号对应的手机号码 */
          mobile?: string,
          /** 账号的邮箱 */
          email?: string,
          /** 账号的头像链接 */
          avatar?: string,
          /** 支付宝账号 userId */
          userId?: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 选中的支付宝联系人数组，数组内部对象字段见下表 */
        contacts?: Array<{
          /** 账号的真实姓名 */
          realName?: string,
          /** 账号对应的手机号码 */
          mobile?: string,
          /** 账号的邮箱 */
          email?: string,
          /** 账号的头像链接 */
          avatar?: string,
          /** 支付宝账号 userId */
          userId?: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 选中的支付宝联系人数组，数组内部对象字段见下表 */
      contacts: Array<{
        /** 账号的真实姓名 */
        realName: string,
        /** 账号对应的手机号码 */
        mobile: string,
        /** 账号的邮箱 */
        email: string,
        /** 账号的头像链接 */
        avatar: string,
        /** 支付宝账号 userId */
        userId: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 选中的支付宝联系人数组，数组内部对象字段见下表 */
      contacts: Array<{
        /** 账号的真实姓名 */
        realName: string,
        /** 账号对应的手机号码 */
        mobile: string,
        /** 账号的邮箱 */
        email: string,
        /** 账号的头像链接 */
        avatar: string,
        /** 支付宝账号 userId */
        userId: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 打开支付宝通讯录，选择一个或者多个支付宝联系人。
     */ 
    export function chooseAlipayContact(count: number, callback?: (result: { 
      /** 选中的支付宝联系人数组，数组内部对象字段见下表 */
      contacts: Array<{
        /** 账号的真实姓名 */
        realName: string,
        /** 账号对应的手机号码 */
        mobile: string,
        /** 账号的邮箱 */
        email: string,
        /** 账号的头像链接 */
        avatar: string,
        /** 支付宝账号 userId */
        userId: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 选中的支付宝联系人数组，数组内部对象字段见下表 */
      contacts: Array<{
        /** 账号的真实姓名 */
        realName: string,
        /** 账号对应的手机号码 */
        mobile: string,
        /** 账号的邮箱 */
        email: string,
        /** 账号的头像链接 */
        avatar: string,
        /** 支付宝账号 userId */
        userId: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 打开支付宝通讯录，选择一个或者多个支付宝联系人。
     * @param option
     */ 
    export function chooseAlipayContact(callback?: (result: { 
      /** 选中的支付宝联系人数组，数组内部对象字段见下表 */
      contacts: Array<{
        /** 账号的真实姓名 */
        realName: string,
        /** 账号对应的手机号码 */
        mobile: string,
        /** 账号的邮箱 */
        email: string,
        /** 账号的头像链接 */
        avatar: string,
        /** 支付宝账号 userId */
        userId: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 选中的支付宝联系人数组，数组内部对象字段见下表 */
      contacts: Array<{
        /** 账号的真实姓名 */
        realName: string,
        /** 账号对应的手机号码 */
        mobile: string,
        /** 账号的邮箱 */
        email: string,
        /** 账号的头像链接 */
        avatar: string,
        /** 支付宝账号 userId */
        userId: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 选择系统通信录中某个联系人的电话。
     * @param option
     */ 
    export function choosePhoneContact(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 选中的联系人姓名 */
        name: string,
        /** 选中的联系人手机号 */
        mobile: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 选中的联系人姓名 */
        name?: string,
        /** 选中的联系人手机号 */
        mobile?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 选中的联系人姓名 */
        name?: string,
        /** 选中的联系人手机号 */
        mobile?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 选中的联系人姓名 */
      name: string,
      /** 选中的联系人手机号 */
      mobile: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 选中的联系人姓名 */
      name: string,
      /** 选中的联系人手机号 */
      mobile: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 选择系统通信录中某个联系人的电话。
     * @param option
     */ 
    export function choosePhoneContact(callback?: (result: { 
      /** 选中的联系人姓名 */
      name: string,
      /** 选中的联系人手机号 */
      mobile: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 选中的联系人姓名 */
      name: string,
      /** 选中的联系人手机号 */
      mobile: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 选择日期。可直接传入一个字符串作为 OPTION.formate 参数。
     * @param option
     */ 
    export function datePicker(option: {
      /** 返回的日期格式，默认 yyyy-MM-dd。支持 HH:mm:ss, yyyy-MM-dd, yyyy-MM-dd HH:mm:ss 三种格式 */
      formate?: string,
      /** 初始选择的日期时间，默认当前时间 */
      currentDate?: string,
      /** 最小日期时间 */
      startDate?: string,
      /** 最大日期时间 */
      endDate?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 选择的日期时间 */
        date: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 选择的日期时间 */
        date?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 选择的日期时间 */
        date?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 选择的日期时间 */
      date: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 选择的日期时间 */
      date: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 选择日期。可直接传入一个字符串作为 OPTION.formate 参数。
     */ 
    export function datePicker(formate: string, callback?: (result: { 
      /** 选择的日期时间 */
      date: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 选择的日期时间 */
      date: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 选择日期。可直接传入一个字符串作为 OPTION.formate 参数。
     * @param option
     */ 
    export function datePicker(callback?: (result: { 
      /** 选择的日期时间 */
      date: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 选择的日期时间 */
      date: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 返回操作设置。可直接传入一个布尔值作为 OPTION.allowButton 参数。
     * @param option
     */ 
    export function allowBack(option: {
      /** 是否允许通过点击 backButton 返回，默认 true */
      allowButton?: boolean,
      /** 是否允许通过右滑手势返回（only iOS），默认 true */
      allowGesture?: boolean,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 返回操作设置。可直接传入一个布尔值作为 OPTION.allowButton 参数。
     */ 
    export function allowBack(allowButton: boolean): Promise<any>;

    /**
     * 返回操作设置。可直接传入一个布尔值作为 OPTION.allowButton 参数。
     * @param option
     */ 
    export function allowBack(): Promise<any>;

    /**
     * 隐藏导航栏左侧返回按钮。
     * @param option
     */ 
    export function hideBackButton(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 隐藏导航栏左侧返回按钮。
     * @param option
     */ 
    export function hideBackButton(): Promise<any>;

    /**
     * 隐藏导航栏加载图标。
     * @param option
     */ 
    export function hideNavigationBarLoading(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 隐藏导航栏加载图标。
     * @param option
     */ 
    export function hideNavigationBarLoading(): Promise<any>;

    /**
     * 隐藏导航栏右侧按钮。
     * @param option
     */ 
    export function hideOptionButton(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 隐藏导航栏右侧按钮。
     * @param option
     */ 
    export function hideOptionButton(): Promise<any>;

    /**
     * 移除导航栏标题点击事件的监听。
     * @param option
     */ 
    export function offTitleClick(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除导航栏标题点击事件的监听。
     * @param option
     */ 
    export function offTitleClick(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听导航栏标题点击事件。
     * @param option
     */ 
    export function onTitleClick(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听导航栏标题点击事件。
     * @param option
     */ 
    export function onTitleClick(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 设置导航栏标题及样式。可直接传入一个字符串作为 OPTION.title 参数。
     * @param option
     */ 
    export function setNavigationBar(option: {
      /** 导航栏标题 */
      title?: string,
      /** 图片链接地址，必须 https，请使用一张3x高清图。若设置了 image，则 title 参数失效 */
      image?: string,
      /** 导航栏背景色，支持16进制颜色值 */
      backgroundColor?: string,
      /** 导航栏底部边框颜色，支持16进制颜色值。若设置了 backgroundColor，borderBottomColor 会不生效，默认会和 backgroundColor 颜色一样。 */
      borderBottomColor?: string,
      /** 是否重置导航栏为支付宝默认配色，默认 false。 */
      reset?: boolean,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 设置导航栏标题及样式。可直接传入一个字符串作为 OPTION.title 参数。
     */ 
    export function setNavigationBar(title: string, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 设置导航栏标题及样式。可直接传入一个字符串作为 OPTION.title 参数。
     * @param option
     */ 
    export function setNavigationBar(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 设置导航栏右侧按钮。
     * @param option
     */ 
    export function setOptionButton(option: {
      /** 监听 optionButton 点击事件 */
      onClick?: (data: {index: number}) => void,
      /** 重置到系统默认按钮，默认为 false。当为 true 时，忽略其他参数 */
      reset?: boolean,
      /** 是否阻止默认的分享功能，指定 iconType 的情况下点击时，会弹分享面板，preventDefault: true 会阻止默认分享面板弹出 */
      preventDefault?: boolean,
      /** 按钮数组，数组中每个项是一个对象。item 的具体配置字段见下表 */
      items?: Array<{
        /** 按钮标题，与 type、icon 三选一。 */
        title: string,
        /** 按钮标题文字颜色，与 title、type 三选一。 */
        color?: string,
        /** 按钮红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
        badge?: string|number,
      } | {
        /** 按钮标题文字颜色，与 title、type 三选一。 */
        color?: string,
        /** 按钮图标，支持 base64 */
        icon: string,
        /** 按钮红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
        badge?: string|number,
      } | {
        /** 按钮标题文字颜色，与 title、type 三选一。 */
        color?: string,
        /** 按钮图标类型，与 title、icon 三选一。支持 user / filter / search / add / settings / scan / info / help / locate / more */
        type: string,
        /** 按钮红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
        badge?: string|number,
      }>,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 设置导航栏右侧按钮。
     */ 
    export function setOptionButton(items: Array<{
      /** 按钮标题，与 type、icon 三选一。 */
      title: string,
      /** 按钮标题文字颜色，与 title、type 三选一。 */
      color?: string,
      /** 按钮红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
      badge?: string|number,
    } | {
      /** 按钮标题文字颜色，与 title、type 三选一。 */
      color?: string,
      /** 按钮图标，支持 base64 */
      icon: string,
      /** 按钮红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
      badge?: string|number,
    } | {
      /** 按钮标题文字颜色，与 title、type 三选一。 */
      color?: string,
      /** 按钮图标类型，与 title、icon 三选一。支持 user / filter / search / add / settings / scan / info / help / locate / more */
      type: string,
      /** 按钮红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
      badge?: string|number,
    }>, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 设置导航栏右侧按钮。
     * @param option
     */ 
    export function setOptionButton(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 显示导航栏左侧返回按钮。
     * @param option
     */ 
    export function showBackButton(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 显示导航栏左侧返回按钮。
     * @param option
     */ 
    export function showBackButton(): Promise<any>;

    /**
     * 显示导航栏加载图标。
     * @param option
     */ 
    export function showNavigationBarLoading(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 显示导航栏加载图标。
     * @param option
     */ 
    export function showNavigationBarLoading(): Promise<any>;

    /**
     * 显示导航栏右侧按钮。
     * @param option
     */ 
    export function showOptionButton(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 显示导航栏右侧按钮。
     * @param option
     */ 
    export function showOptionButton(): Promise<any>;

    /**
     * 显示导航栏右上角弹出的下拉菜单。可直接传入一个数组作为 OPTION.items 参数。
     * @param option
     */ 
    export function showPopMenu(option: {
      /** 菜单数组，数组中每个项是一个对象(也可以是一个字符串，如果是字符串，会当作 item.title 参数)。item 的具体配置字段见下表 */
      items: Array<{
        /** 菜单标题，可直接作为 items 数组元素。 */
        title: string,
        /** 菜单图标，支持 base64 */
        icon: string,
        /** 菜单红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
        badge?: string,
      }>,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 被点击的菜单项的索引，从0开始 */
        index: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 被点击的菜单项的索引，从0开始 */
        index?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 被点击的菜单项的索引，从0开始 */
        index?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 被点击的菜单项的索引，从0开始 */
      index: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 被点击的菜单项的索引，从0开始 */
      index: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 显示导航栏右上角弹出的下拉菜单。可直接传入一个数组作为 OPTION.items 参数。
     */ 
    export function showPopMenu(items: Array<{
      /** 菜单标题，可直接作为 items 数组元素。 */
      title: string,
      /** 菜单图标，支持 base64 */
      icon: string,
      /** 菜单红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
      badge?: string,
    }>, callback?: (result: { 
      /** 被点击的菜单项的索引，从0开始 */
      index: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 被点击的菜单项的索引，从0开始 */
      index: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 显示 alert 警告框。可直接传入一个字符串作为 OPTION.content 参数。
     * @param option
     */ 
    export function alert(option: {
      /** alert框的标题 */
      title?: string,
      /** alert框的内容 */
      content: any,
      /** 按钮文字，默认&#39;确定&#39; */
      buttonText?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 显示 alert 警告框。可直接传入一个字符串作为 OPTION.content 参数。
     */ 
    export function alert(content: any, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 显示 confirm 确认框。可直接传入一个字符串作为 OPTION.content 参数。
     * @param option
     */ 
    export function confirm(option: {
      /** confirm 框的标题 */
      title?: string,
      /** confirm 框的内容 */
      content?: any,
      /** 确定按钮文字，默认&#39;确定&#39; */
      confirmButtonText?: string,
      /** 取消按钮文字，默认&#39;取消&#39; */
      cancelButtonText?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false */
        confirm: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false */
        confirm?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false */
        confirm?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false */
      confirm: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false */
      confirm: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 显示 confirm 确认框。可直接传入一个字符串作为 OPTION.content 参数。
     */ 
    export function confirm(content: any, callback?: (result: { 
      /** 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false */
      confirm: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false */
      confirm: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 显示 confirm 确认框。可直接传入一个字符串作为 OPTION.content 参数。
     * @param option
     */ 
    export function confirm(callback?: (result: { 
      /** 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false */
      confirm: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 用户选择结果。点击 confirmButton 为 true，点击cancelButton 为 false */
      confirm: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 隐藏加载提示。
     * @param option
     */ 
    export function hideLoading(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 隐藏加载提示。
     * @param option
     */ 
    export function hideLoading(): Promise<any>;

    /**
     * 隐藏弱提示。
     * @param option
     */ 
    export function hideToast(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 隐藏弱提示。
     * @param option
     */ 
    export function hideToast(): Promise<any>;

    /**
     * 显示操作菜单。
     * @param option
     */ 
    export function showActionSheet(option: {
      /** 菜单标题 */
      title?: string,
      /** 菜单按钮的文字数组 */
      items: string[],
      /** 取消按钮文案，默认为「取消」 */
      cancelButtonText?: string,
      /** （IOS特殊处理）指定按钮的索引号，从0开始，使用场景：需要删除或清除数据等类似场景，默认红色 */
      destructiveBtnIndex?: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 被点击的按钮的索引，从0开始。点击取消或蒙层时返回 -1 */
        index: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 被点击的按钮的索引，从0开始。点击取消或蒙层时返回 -1 */
        index?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 被点击的按钮的索引，从0开始。点击取消或蒙层时返回 -1 */
        index?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 被点击的按钮的索引，从0开始。点击取消或蒙层时返回 -1 */
      index: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 被点击的按钮的索引，从0开始。点击取消或蒙层时返回 -1 */
      index: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 显示加载提示。可直接传入一个字符串作为 OPTION.content 参数。
     * @param option
     */ 
    export function showLoading(option: {
      /** loading 的文字提示 */
      content?: any,
      /** 延迟显示，单位 ms，默认 0。如果在此时间之前调用了 ap.hideLoading 则不会显示 */
      delay?: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 显示加载提示。可直接传入一个字符串作为 OPTION.content 参数。
     */ 
    export function showLoading(content: any): Promise<any>;

    /**
     * 显示加载提示。可直接传入一个字符串作为 OPTION.content 参数。
     * @param option
     */ 
    export function showLoading(): Promise<any>;

    /**
     * 显示弱提示。可选择多少秒之后消失。可直接传入一个字符串作为 OPTION.content 参数。
     * @param option
     */ 
    export function showToast(option: {
      /** 文字内容 */
      content: any,
      /** toast 类型，展示相应图标，默认 none，支持 success / fail / exception / none&#39;。其中 exception 类型必须传文字信息 */
      type?: 'none'|'success'|'fail'|'exception',
      /** 显示时长，单位为 ms，默认 2000 */
      duration?: number,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 显示弱提示。可选择多少秒之后消失。可直接传入一个字符串作为 OPTION.content 参数。
     */ 
    export function showToast(content: any, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 下拉刷新开关。可直接传入一个布尔值作为 OPTION.allow 参数。
     * @param option
     */ 
    export function allowPullDownRefresh(option: {
      /** 是否允许下拉刷新，默认 true */
      allow?: boolean,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 下拉刷新开关。可直接传入一个布尔值作为 OPTION.allow 参数。
     */ 
    export function allowPullDownRefresh(allow: boolean): Promise<any>;

    /**
     * 下拉刷新开关。可直接传入一个布尔值作为 OPTION.allow 参数。
     * @param option
     */ 
    export function allowPullDownRefresh(): Promise<any>;

    /**
     * 移除页面下拉刷新事件的监听。
     * @param option
     */ 
    export function offPullDownRefresh(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 移除页面下拉刷新事件的监听。
     * @param option
     */ 
    export function offPullDownRefresh(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听页面下拉事件。
     * @param option
     */ 
    export function onPullDownRefresh(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 是否可刷新。可通过ap.allowPullDownRefresh()设置此返回值 */
        refreshAvailable: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 是否可刷新。可通过ap.allowPullDownRefresh()设置此返回值 */
        refreshAvailable?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 是否可刷新。可通过ap.allowPullDownRefresh()设置此返回值 */
        refreshAvailable?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 是否可刷新。可通过ap.allowPullDownRefresh()设置此返回值 */
      refreshAvailable: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否可刷新。可通过ap.allowPullDownRefresh()设置此返回值 */
      refreshAvailable: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 监听页面下拉事件。
     * @param option
     */ 
    export function onPullDownRefresh(callback?: (result: { 
      /** 是否可刷新。可通过ap.allowPullDownRefresh()设置此返回值 */
      refreshAvailable: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 是否可刷新。可通过ap.allowPullDownRefresh()设置此返回值 */
      refreshAvailable: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 分享内容。{{{更多定制化分享需求，推荐使用 <a href="http://web.npm.alibaba-inc.com/package/@alipay/mshare">MShare</a> 组件}}}
     * @param option
     */ 
    export function share(option: {
      /** 分享标题 */
      title: string,
      /** 分享内容 */
      content: string,
      /** 分享链接 */
      url: string,
      /** 分享图片链接 */
      image?: string,
      /** 是否截屏，默认 false */
      captureScreen?: boolean,
      /** 是否显示分享面板第二行的工具按钮，默认 true */
      showToolBar?: boolean,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 分享的结果 */
        shareResult: boolean,
        /** 分享渠道 */
        channelName: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 分享的结果 */
        shareResult?: boolean,
        /** 分享渠道 */
        channelName?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 分享的结果 */
        shareResult?: boolean,
        /** 分享渠道 */
        channelName?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 分享的结果 */
      shareResult: boolean,
      /** 分享渠道 */
      channelName: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 分享的结果 */
      shareResult: boolean,
      /** 分享渠道 */
      channelName: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 设置 tabBar 组件，固定在界面底部
     * @param option
     */ 
    export function setTabBarBadge(option: {
      /** 需要设置的 tab 索引，从0开始 */
      index: number,
      /** tab 红色气泡，默认 &#39;-1&#39;。其中 &#39;0&#39; 表示红点，&#39;-1&#39; 表示不显示，其他值展示出来 */
      badge?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 显示 tabBar 组件，固定在界面底部
     * @param option
     */ 
    export function showTabBar(option: {
      /** tab文字颜色，默认 #00000 */
      color?: string,
      /** tab激活文字颜色，默认 #00000 */
      activeColor?: string,
      /** 默认激活的 tab 索引，默认 0 */
      activeIndex?: number,
      /** tab 配置数组，数组中每个项是一个对象。tab 的具体配置字段见下表 */
      items: Array<{
        /** tab 标题 */
        title: string,
        /** tab 图标，支持 base64 */
        icon: string,
        /** tab 激活图标，支持 base64 */
        activeIcon: string,
        /** tab 红色气泡，默认 -1。其中 0 表示小红点，-1 表示不显示，其他值展示出来 */
        badge?: string,
      }>,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 被点击的 tab 的索引，从0开始 */
        index: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 被点击的 tab 的索引，从0开始 */
        index?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 被点击的 tab 的索引，从0开始 */
        index?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 被点击的 tab 的索引，从0开始 */
      index: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 被点击的 tab 的索引，从0开始 */
      index: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 检测某个外部应用在当前设备上是否安装
     * @param option
     */ 
    export function isInstalledApp(option: {
      /** 目标应用的url scheme。ios平台使用 */
      scheme: string,
      /** 目标应用的包名。android平台使用 */
      packageName: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 目标应用是否已在用户设备上安装 */
        isInstalled: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 目标应用是否已在用户设备上安装 */
        isInstalled?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 目标应用是否已在用户设备上安装 */
        isInstalled?: boolean,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 目标应用是否已在用户设备上安装 */
      isInstalled: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 目标应用是否已在用户设备上安装 */
      isInstalled: boolean,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取授权码，具体请参考<a href="fe/auth.html">用户授权接入</a>。可直接传入一个字符串作为 OPTION.scopes 参数的第一个元素。
     * @param option
     */ 
    export function getAuthCode(option: {
      /** 授权类型，默认 auth_base。支持 auth_base(静默授权)/auth_user(主动授权) */
      scopes?: 'auth_base'|'auth_user'|Array<'auth_base'|'auth_user'>,
      /** 开放平台应用id，需要在开放平台配置域名白名单，才能使用，域名白名单不支持通配符 */
      appId: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 授权码 */
        authCode: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 授权码 */
        authCode?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 授权码 */
        authCode?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 授权码 */
      authCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 授权码 */
      authCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取授权码，具体请参考<a href="fe/auth.html">用户授权接入</a>。可直接传入一个字符串作为 OPTION.scopes 参数的第一个元素。
     */ 
    export function getAuthCode(scopes: 'auth_base'|'auth_user'|Array<'auth_base'|'auth_user'>, callback?: (result: { 
      /** 授权码 */
      authCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 授权码 */
      authCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取授权用户信息，具体请参考<a href="fe/auth.html">用户授权接入</a>。  
     * @param option
     */ 
    export function getAuthUserInfo(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 用户昵称 */
        nickName: string,
        /** 用户头像链接 */
        avatar: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 用户昵称 */
        nickName?: string,
        /** 用户头像链接 */
        avatar?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 用户昵称 */
        nickName?: string,
        /** 用户头像链接 */
        avatar?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 用户昵称 */
      nickName: string,
      /** 用户头像链接 */
      avatar: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 用户昵称 */
      nickName: string,
      /** 用户头像链接 */
      avatar: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取授权用户信息，具体请参考<a href="fe/auth.html">用户授权接入</a>。  
     * @param option
     */ 
    export function getAuthUserInfo(callback?: (result: { 
      /** 用户昵称 */
      nickName: string,
      /** 用户头像链接 */
      avatar: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 用户昵称 */
      nickName: string,
      /** 用户头像链接 */
      avatar: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * coming soon ...
     * @param option
     */ 
    export function feedbackCDP(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * coming soon ...
     * @param option
     */ 
    export function feedbackCDP(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * coming soon ...
     * @param option
     */ 
    export function fetchCDP(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * coming soon ...
     * @param option
     */ 
    export function fetchCDP(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取 mgw (网关的地址)，did (设备号)，uuid(userId 的 md5 码)的配置数据，可直接传入一个数组作为 OPTION.keys 参数, 或传入单个 key。
     * @param option
     */ 
    export function getConfig(option: {
      /** 配置数据对应的 key，可选: &#39;mgw&#39;,&#39;did&#39;,&#39;uuid&#39; */
      keys?: Array<'mgw'|'did'|'uuid'|string>,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
        mgw: string,
        /** 网关生成的一个设备号 */
        did: string,
        /** 支付宝计算当前用户的 userId 得到的md5值 */
        uuid: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
        mgw?: string,
        /** 网关生成的一个设备号 */
        did?: string,
        /** 支付宝计算当前用户的 userId 得到的md5值 */
        uuid?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
        mgw?: string,
        /** 网关生成的一个设备号 */
        did?: string,
        /** 支付宝计算当前用户的 userId 得到的md5值 */
        uuid?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
      mgw: string,
      /** 网关生成的一个设备号 */
      did: string,
      /** 支付宝计算当前用户的 userId 得到的md5值 */
      uuid: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
      mgw: string,
      /** 网关生成的一个设备号 */
      did: string,
      /** 支付宝计算当前用户的 userId 得到的md5值 */
      uuid: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取 mgw (网关的地址)，did (设备号)，uuid(userId 的 md5 码)的配置数据，可直接传入一个数组作为 OPTION.keys 参数, 或传入单个 key。
     */ 
    export function getConfig(keys: Array<'mgw'|'did'|'uuid'|string>, callback?: (result: { 
      /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
      mgw: string,
      /** 网关生成的一个设备号 */
      did: string,
      /** 支付宝计算当前用户的 userId 得到的md5值 */
      uuid: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
      mgw: string,
      /** 网关生成的一个设备号 */
      did: string,
      /** 支付宝计算当前用户的 userId 得到的md5值 */
      uuid: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取 mgw (网关的地址)，did (设备号)，uuid(userId 的 md5 码)的配置数据，可直接传入一个数组作为 OPTION.keys 参数, 或传入单个 key。
     */ 
    export function getConfig(key: string, callback?: (result: { 
      /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
      mgw: string,
      /** 网关生成的一个设备号 */
      did: string,
      /** 支付宝计算当前用户的 userId 得到的md5值 */
      uuid: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
      mgw: string,
      /** 网关生成的一个设备号 */
      did: string,
      /** 支付宝计算当前用户的 userId 得到的md5值 */
      uuid: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取 mgw (网关的地址)，did (设备号)，uuid(userId 的 md5 码)的配置数据，可直接传入一个数组作为 OPTION.keys 参数, 或传入单个 key。
     * @param option
     */ 
    export function getConfig(callback?: (result: { 
      /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
      mgw: string,
      /** 网关生成的一个设备号 */
      did: string,
      /** 支付宝计算当前用户的 userId 得到的md5值 */
      uuid: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 网关的地址，常用来判断服务的环境（stable, sit, pre, online） */
      mgw: string,
      /** 网关生成的一个设备号 */
      did: string,
      /** 支付宝计算当前用户的 userId 得到的md5值 */
      uuid: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取手机通讯录所有联系人数据。
     * @param option
     */ 
    export function getAllContacts(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 联系人信息列表，列表内对象字段见下表 */
        contacts: Array<{
          /** 联系人手机号码 */
          mobile: string,
          /** 联系人姓名 */
          name: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 联系人信息列表，列表内对象字段见下表 */
        contacts?: Array<{
          /** 联系人手机号码 */
          mobile?: string,
          /** 联系人姓名 */
          name?: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 联系人信息列表，列表内对象字段见下表 */
        contacts?: Array<{
          /** 联系人手机号码 */
          mobile?: string,
          /** 联系人姓名 */
          name?: string,
        }>,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 联系人信息列表，列表内对象字段见下表 */
      contacts: Array<{
        /** 联系人手机号码 */
        mobile: string,
        /** 联系人姓名 */
        name: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 联系人信息列表，列表内对象字段见下表 */
      contacts: Array<{
        /** 联系人手机号码 */
        mobile: string,
        /** 联系人姓名 */
        name: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取手机通讯录所有联系人数据。
     * @param option
     */ 
    export function getAllContacts(callback?: (result: { 
      /** 联系人信息列表，列表内对象字段见下表 */
      contacts: Array<{
        /** 联系人手机号码 */
        mobile: string,
        /** 联系人姓名 */
        name: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 联系人信息列表，列表内对象字段见下表 */
      contacts: Array<{
        /** 联系人手机号码 */
        mobile: string,
        /** 联系人姓名 */
        name: string,
      }>,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取当前用户的 userId 和头像 url
     * @param option
     */ 
    export function getUserInfo(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 用户头像 url */
        avatar: string,
        /** 用户id */
        userId: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 用户头像 url */
        avatar?: string,
        /** 用户id */
        userId?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 用户头像 url */
        avatar?: string,
        /** 用户id */
        userId?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 用户头像 url */
      avatar: string,
      /** 用户id */
      userId: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 用户头像 url */
      avatar: string,
      /** 用户id */
      userId: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取当前用户的 userId 和头像 url
     * @param option
     */ 
    export function getUserInfo(callback?: (result: { 
      /** 用户头像 url */
      avatar: string,
      /** 用户id */
      userId: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 用户头像 url */
      avatar: string,
      /** 用户id */
      userId: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 埋点上报。
     * @param option
     */ 
    export function remoteLog(option: {
      /** 埋点类型，支持 monitor(监控类型)、monitorWithLocation(监控类型，自动在param4里带上经纬度)、behavior(行为类型)、behaviorAuto(自动行为类型)、performance(性能类型)、error(异常类型，9.6.8版本开始支持)、135(135业务相关，9.9版本开始支持)，默认 monitor */
      type?: string,
      /** 埋点 id */
      seedId: string,
      /** 用例 id  */
      ucId?: string,
      /** 业务类型标识，该参数传值时，会形成单独的日志文件。需申请 @习祯 */
      bizType?: string,
      /** 1 - high, 2 - medium, 3 - low, 低级别可能会被限流 */
      logLevel?: number,
      /** 行为名称，如&#39;clicked&#39;, &#39;exposure&#39;等，支持的行为集请咨询埋点组件 @乐适 */
      actionId?: string,
      /** spm 编码。需申请 @习祯。当编有 spmId 时，忽略 seedId */
      spmId: string,
      /** 埋点参数1 */
      param1?: string,
      /** 埋点参数2 */
      param2?: string,
      /** 埋点参数3 */
      param3?: string,
      /** 埋点参数4 */
      param4?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }): Promise<any>;

    /**
     * 唤起支付宝登录功能。如果当前处于免登状态，则界面无变化。
     * @param option
     */ 
    export function login(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 唤起支付宝登录功能。如果当前处于免登状态，则界面无变化。
     * @param option
     */ 
    export function login(callback?: (result: { 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 发起支付，具体请参考<a href="fe/tradepay.html">应用接入支付</a>。
     * 可直接传入一个字符串作为 OPTION.orderStr 参数。
     * @param option
     */ 
    export function tradePay(option: {
      /** 交易号，多个用英文分号;分隔 */
      tradeNO?: string,
      /** 商户id */
      partnerID?: string,
      /** 交易类型，默认为 &#39;trade&#39; */
      bizType?: string,
      /** 交易子类型 */
      bizSubType?: string,
      /** 支付额外的参数，格式为JSON字符串  */
      bizContext?: string,
      /** 完整的支付参数拼接成的字符串，从服务端获取，具体请参考应用接入支付 */
      orderStr?: string,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 支付结果状态码，详见下表 */
        resultCode: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 支付结果状态码，详见下表 */
        resultCode?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 支付结果状态码，详见下表 */
        resultCode?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 支付结果状态码，详见下表 */
      resultCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 支付结果状态码，详见下表 */
      resultCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 发起支付，具体请参考<a href="fe/tradepay.html">应用接入支付</a>。
     * 可直接传入一个字符串作为 OPTION.orderStr 参数。
     */ 
    export function tradePay(orderStr: string, callback?: (result: { 
      /** 支付结果状态码，详见下表 */
      resultCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 支付结果状态码，详见下表 */
      resultCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 发起支付，具体请参考<a href="fe/tradepay.html">应用接入支付</a>。
     * 可直接传入一个字符串作为 OPTION.orderStr 参数。
     * @param option
     */ 
    export function tradePay(callback?: (result: { 
      /** 支付结果状态码，详见下表 */
      resultCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 支付结果状态码，详见下表 */
      resultCode: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取当前服务器时间的毫秒数
     * @param option
     */ 
    export function getServerTime(option: {
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 服务器时间的毫秒数 */
        time: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 服务器时间的毫秒数 */
        time?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 服务器时间的毫秒数 */
        time?: number,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 服务器时间的毫秒数 */
      time: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 服务器时间的毫秒数 */
      time: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 获取当前服务器时间的毫秒数
     * @param option
     */ 
    export function getServerTime(callback?: (result: { 
      /** 服务器时间的毫秒数 */
      time: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 服务器时间的毫秒数 */
      time: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 保存支付宝业务服务数据，作为<code>ap.startBizService()</code>回调的返回值。
     * @param option
     */ 
    export function saveBizServiceResult(option: {
      /** 结果状态码 */
      resultStatus?: string,
      /** 业务服务结果，由服务实现方自己定义 */
      result?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 已保存的业务服务结果数据，保存的数据会通过ap.startBizService()的回调返回给用户。 */
        savedData: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 已保存的业务服务结果数据，保存的数据会通过ap.startBizService()的回调返回给用户。 */
        savedData?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 已保存的业务服务结果数据，保存的数据会通过ap.startBizService()的回调返回给用户。 */
        savedData?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 已保存的业务服务结果数据，保存的数据会通过ap.startBizService()的回调返回给用户。 */
      savedData: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 已保存的业务服务结果数据，保存的数据会通过ap.startBizService()的回调返回给用户。 */
      savedData: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 保存支付宝业务服务数据，作为<code>ap.startBizService()</code>回调的返回值。
     * @param option
     */ 
    export function saveBizServiceResult(callback?: (result: { 
      /** 已保存的业务服务结果数据，保存的数据会通过ap.startBizService()的回调返回给用户。 */
      savedData: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 已保存的业务服务结果数据，保存的数据会通过ap.startBizService()的回调返回给用户。 */
      savedData: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 启动某项支付宝业务服务。可直接传入一个字符串作为 OPTION.name 参数。
     * @param option
     */ 
    export function startBizService(option: {
      /** 业务服务名称 */
      name: string,
      /** 业务服务参数 */
      params?: Object,
      /** 接口调用成功的回调函数 */
      success?: (result?:   { 
        /** 结果状态码，详见下表 */
        resultStatus: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用失败的回调函数 */
      fail?: (result?:   { 
        /** 结果状态码，详见下表 */
        resultStatus?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result?:   { 
        /** 结果状态码，详见下表 */
        resultStatus?: string,
        /** 错误码 */
        error?: number,
        /** 错误信息 */
        errorMessage?: string,
      }) => void,      
    }, callback?: (result: { 
      /** 结果状态码，详见下表 */
      resultStatus: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 结果状态码，详见下表 */
      resultStatus: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;

    /**
     * 启动某项支付宝业务服务。可直接传入一个字符串作为 OPTION.name 参数。
     */ 
    export function startBizService(name: string, callback?: (result: { 
      /** 结果状态码，详见下表 */
      resultStatus: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 结果状态码，详见下表 */
      resultStatus: string,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;


    /**
     * 显示导航栏右上角弹出的下拉菜单。可直接传入一个数组作为 OPTION.items 参数。
     * @param {string[]} 菜单title数组
     */ 
    export function showPopMenu(items: Array<string>, callback?: (result: { 
      /** 被点击的菜单项的索引，从0开始 */
      index: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }) => void): Promise<{ 
      /** 被点击的菜单项的索引，从0开始 */
      index: number,
      /** 错误码 */
      error?: number,
      /** 错误信息 */
      errorMessage?: string,
    }>;
