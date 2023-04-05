const fetcher = async <T>(url: string, init: RequestInit) => {
  console.log(JSON.stringify({ REQUEST: { url, ...init } }, null, 2))
  console.time(url)
  const response = await fetch(url, init)
  console.timeEnd(url)
  const body = (await response.json()) as T
  console.log(JSON.stringify({ RESPONSE: body }, null, 2))
  return body
}

export default fetcher
