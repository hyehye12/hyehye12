exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4.0! Your function executed successfully!",
    }),
  };
};

exports.hello2 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4.0! Your function executed successfully!",
    }),
  };
};
