import _ from "lodash"
import api from "./api"

function queryOrder(params = {}) {
  const { page = 0, size = 20, orderStatus = "NEW" } = params;
  const url = `/restaurant-cake-api/v1/orders?orderStatus=${orderStatus}&page=${page}&size=${size}`
  return api.get(url).then(({ data }) => data)
}

function createOrder(orderBody) {
  const url = `/restaurant-cake-api/v1/orders`;
  return api.post(url, orderBody).then(({ data }) => data)
}

function checkOrder(orderId, targetStatus) {
  const url = `/restaurant-cake-api/v1/orders/change-status/${orderId}?targetStatus=${targetStatus}`;
  return api.put(url).then(({ data }) => data)
}

function getOrder(orderId) {
  const url = `/restaurant-cake-api/v1/orders/${orderId}`;
  return api.get(url).then(({ data }) => data)
}

export default {
  queryOrder,
  createOrder,
  checkOrder,
  getOrder
}