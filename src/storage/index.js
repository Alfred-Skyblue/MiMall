/**
 * Storage 封装
 */
const STORAGE_KEY = 'mall'
export default {
  // 存储值
  /**
   * 设置储存内容
   * @param {要设置的键名} key
   * @param {设置储存的value} value
   * @param {设置储存的模块} module_name
   */
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },

  /**
   * 获取某一个模块下面的属性user下面的userName
   * @param {外层模块的key} key
   * @param {深层模块} module_name
   */
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  /**
   * 获取 sessionStorage 中存储的数据
   */
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },

  clear(key, module_name) {
    let val = this.getStorage()
    if (module_name) {
      if (val[module_name]) delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}
