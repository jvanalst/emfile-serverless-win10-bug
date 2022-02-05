
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'educweb',
  applicationName: 'edrego',
  appUid: '1h1PJvL7qGjzg7KdFK',
  orgUid: '293ad187-bb65-4001-835f-7cce92f9c762',
  deploymentUid: 'f51ebc44-bce0-4bb7-aee6-2f80ee184faa',
  serviceName: 'test',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '5.5.4',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'test-dev-api', timeout: 6 };

try {
  const userHandler = require('./api/index.js');
  module.exports.handler = serverlessSDK.handler(userHandler.apiHandler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}