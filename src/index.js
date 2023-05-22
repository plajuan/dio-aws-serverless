module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Thanks DIO for teaching me to Go Serverless v3.0!",
        input: event,
      },
      null,
      2
    ),
  };
};
