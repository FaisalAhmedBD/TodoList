const BASE_URL = 'http://localhost:8000';
const VERSION = 'v1';
const GET_TASK_LIST = `${BASE_URL}/${VERSION}`;
const ADD_TASK = `${BASE_URL}/${VERSION}/add-task`;
const CHANGE_TASK_STATUS = `${BASE_URL}/${VERSION}/change-status`
export { BASE_URL, VERSION, GET_TASK_LIST, ADD_TASK, CHANGE_TASK_STATUS };