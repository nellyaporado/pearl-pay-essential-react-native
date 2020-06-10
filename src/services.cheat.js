import Config from './config';

const COMMON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export async function login({ username, password }) {
  const response = await fetch(`${Config.BASE_API_URL}/user`, {
    method: 'POST',
    headers: COMMON_HEADERS,
    body: JSON.stringify({
      username,
      password,
      code: 'pearl-pay',
    }),
  });

  return response.json();
}

export async function getWallets({ token }) {
  const response = await fetch(`${Config.BASE_API_URL}/wallets`, {
    method: 'GET',
    headers: {
      ...COMMON_HEADERS,
      Authorization: token,
    },
  });

  return response.json();
}

export async function getTransaction({ transactionId, token }) {
  const response = await fetch(
    `${Config.BASE_API_URL}/transaction/${transactionId}`,
    {
      method: 'GET',
      headers: {
        ...COMMON_HEADERS,
        Authorization: token,
      },
    },
  );

  return response.json();
}

export async function getPayments({ token }) {
  const response = await fetch(`${Config.BASE_API_URL}/planned_payments`, {
    method: 'GET',
    headers: {
      ...COMMON_HEADERS,
      authorization: token,
    },
  });

  return response.json();
}

export async function deletePayment({ token, paymentId }) {
  const response = await fetch(
    `${Config.BASE_API_URL}/planned_payments/${paymentId}`,
    {
      method: 'DELETE',
      headers: {
        ...COMMON_HEADERS,
        authorization: token,
      },
    },
  );

  return response.json();
}

export async function createPayment({ token, value, label, type }) {
  const response = await fetch(`${Config.BASE_API_URL}/planned_payments`, {
    method: 'PUT',
    headers: {
      ...COMMON_HEADERS,
      authorization: token,
    },
    body: JSON.stringify({
      value: Number(value),
      label,
      type,
    }),
  });

  return response.json();
}

export async function getHistory({ token }) {
  const response = await fetch(`${Config.BASE_API_URL}/history`, {
    method: 'GET',
    headers: {
      ...COMMON_HEADERS,
      Authorization: token,
    },
  });

  return response.json();
}
