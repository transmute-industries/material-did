const multihash = require('multihashes');
const base64url = require('base64url');
const crypto = require('crypto');

export const suffixDataToLongFormDID = (
  didMethodPrefix: string,
  suffix_data: string
) => {
  const digest = crypto
    .createHash('sha256')
    .update(base64url.toBuffer(suffix_data))
    .digest();
  const didUniqueSuffix = base64url.encode(
    multihash.encode(digest, 'sha2-256')
  );
  const decoded_suffix_data = JSON.parse(base64url.decode(suffix_data));
  const did = `did:${didMethodPrefix}:${didUniqueSuffix}?-elem-initial-state=${decoded_suffix_data.delta_hash}.${decoded_suffix_data.recovery_commitment}`;
  return did;
};

export const fullyDecodedCreateOperation = (operation: any) => {
  return {
    ...operation,
    suffix_data: JSON.parse(base64url.decode(operation.suffix_data)),
    delta: JSON.parse(base64url.decode(operation.delta)),
  };
};

export const fullyDecodedUpdateOperation = (operation: any) => {
  const parts = operation.signed_data.split('.');
  const decoded_complete = {
    protected: JSON.parse(base64url.decode(parts[0])),
    payload: JSON.parse(base64url.decode(parts[1])),
    signature: parts[2],
  };
  return {
    ...operation,
    delta: JSON.parse(base64url.decode(operation.delta)),
    signed_data: decoded_complete,
  };
};

export const fullyDecodedRecoverOperation = (operation: any) => {
  const parts = operation.signed_data.split('.');
  const decoded_complete = {
    protected: JSON.parse(base64url.decode(parts[0])),
    payload: JSON.parse(base64url.decode(parts[1])),
    signature: parts[2],
  };
  return {
    ...operation,
    delta: JSON.parse(base64url.decode(operation.delta)),
    signed_data: decoded_complete,
  };
};

export const fullyDecodedDeactivateOperation = (operation: any) => {
  const parts = operation.signed_data.split('.');
  const decoded_complete = {
    protected: JSON.parse(base64url.decode(parts[0])),
    payload: JSON.parse(base64url.decode(parts[1])),
    signature: parts[2],
  };
  return {
    ...operation,
    signed_data: decoded_complete,
  };
};

export const getAnchoredOperation = (operation: any) => {
  return {
    ...operation,
    operation: JSON.parse(base64url.decode(operation.operationBuffer)),
  };
};
