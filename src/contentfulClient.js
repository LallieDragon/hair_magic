import { createClient } from 'contentful'

function initClient() {
  const client = createClient({
    space: 'ivzkokviytlo',
    accessToken: 'xPwNoqMKWEESXXvwVRZoXVHqvXj1uF4NDoo-Ene6yxE',
    host: 'cdn.contentful.com'
  })

  return client
}

export { initClient }
