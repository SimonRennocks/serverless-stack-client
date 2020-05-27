export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_4vYMPvNUQlcpKet8IOM6dzr700d7sDXqjr",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-edcu"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://7k85p8ioea.execute-api.us-east-1.amazonaws.com/prod/"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_FjqrVA0sh",
      APP_CLIENT_ID: "4ppajcabut8vsqs0n2pjp2sra7",
      IDENTITY_POOL_ID: "us-east-1:e8ce611c-a573-4eb0-af54-67c44d5d71e7"
    }
  };