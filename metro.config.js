/* eslint @typescript-eslint/no-var-requires: "off" */
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolveRequest(context, moduleName, platform) {
      if (moduleName === 'crypto') {
        // when importing crypto, resolve to react-native-quick-crypto
        return context.resolveRequest(
          context,
          'react-native-quick-crypto',
          platform,
        );
      }
      // otherwise chain to the standard Metro resolver.
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
