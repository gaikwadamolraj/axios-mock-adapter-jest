export const encodeToBuffer = ({ ...data }) =>
  Buffer.from(JSON.stringify(data)).toString('base64');

export const decodeFromBuffer = (encodedData) =>
  JSON.parse(Buffer.from(encodedData, 'base64').toString('ascii'));