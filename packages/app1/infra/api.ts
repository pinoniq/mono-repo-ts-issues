export const myApi = new sst.aws.Function("MyAppApi", {
  url: true,
  handler: "packages/functions/src/api.handler"
});
