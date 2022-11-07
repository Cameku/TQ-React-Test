/**
 * Request types used throughout the Redux async flow.
 */
enum RequestStatus {
  Initial,
  Requested,
  Success,
  Failed,
}

export default RequestStatus;
