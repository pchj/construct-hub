import * as AWS from 'aws-sdk';

let _s3: AWS.S3 | undefined;
let _sqs: AWS.SQS | undefined;

export function s3(): AWS.S3 {
  if (_s3 == null) {
    _s3 = new AWS.S3();
  }
  return _s3;
}

export function sqs(): AWS.SQS {
  if (_sqs == null) {
    _sqs = new AWS.SQS();
  }
  return _sqs;
}

/**
 * Resets all clients vended by this module. This is useful in unit tests when
 * `aws-sdk-mocks` is used, so that new mocks are injected as intended.
 */
export function reset(): void {
  _s3 = _sqs = undefined;
}