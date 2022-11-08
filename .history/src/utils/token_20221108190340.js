const TOKEN_KEY = 'hmtt88'

// 保存，传递一个数据过来参数--有参数
export const saveToken = (obj) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(obj))
}
// 获取, 没参数，要返回值
export const getToken = () => {
  return JSON.parse(localStorage.getItem(TOKEN_KEY))
}

// 删除，既不用参数也不用返回值
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}
