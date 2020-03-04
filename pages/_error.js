function Error({ statusCode }) {
  return <p>{statusCode && `An error ${statusCode} occurred`}</p>;
}

export default Error;
