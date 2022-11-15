const path = require('path')

module.exports = {
  webpack: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
}