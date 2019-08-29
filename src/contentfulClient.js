import { createClient } from 'contentful'

function initClient() {
  const client = createClient({
    space: 'gyq6os0ifper',
    accessToken: 'q7AApNXO2Mpl4CZUblyxB4qvBQfxVVRZq9p7SrEtxy4',
    host: 'cdn.contentful.com'
  })

  return client
}

export { initClient }
