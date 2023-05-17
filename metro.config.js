const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)
config.resolver = {
  sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
  assetExts: ['glb', 'gltf', 'png', 'jpg'],
}

module.exports = config
