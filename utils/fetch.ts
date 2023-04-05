const fetcher = async <T>(url: string, init: RequestInit) => {
  console.log({ REQUEST: JSON.stringify({ url, ...init }, null, 2) })
  console.time(url)
  const response = await fetch(url, init)
  console.timeEnd(url)
  const body = (await response.json()) as T
  console.log({ RESPONSE: JSON.stringify(body, null, 2) })
  return body
}

export default fetcher
