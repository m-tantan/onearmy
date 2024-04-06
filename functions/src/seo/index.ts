import * as functions from 'firebase-functions'
import { CONFIG } from '../config/config'
import { requestHandler } from './render/request-handler'
import { generateSitemap } from './sitemap/sitemapGenerate'
import { handleSitemapProxy } from './sitemap/sitemapProxy'

/**
 * Serve pre-rendered html with enhanced SEO metadata for requests from bots
 */
export const seoRender = functions
  .runWith({ memory: '512MB' })
  .https.onRequest((req, res) => {
    functions.logger.info({ prerenderApiKey: CONFIG.prerender })
    return requestHandler({
      prerenderApiKey: CONFIG.prerender?.api_key,
      deploymentUrl: CONFIG.deployment?.site_url,
    })(req, res)
  })

/**
 * Generate a weekly sitemap of all content
 *
 * Local emulators test path:
 * http://localhost:4002/demo-community-platform-emulated/us-central1/emulator/pubsub/schedule/seo-sitemapGenerate
 */
export const sitemapGenerate = functions
  .runWith({ memory: '512MB' })
  .pubsub.schedule('0 2 * * MON')
  .onRun(() => generateSitemap())

/**
 * Read saved sitemap.xml from storage and return on request for sitemap
 *
 * Test in emulator:
 * http://localhost:4002/demo-community-platform-emulated/us-central1/seo-sitemapProxy
 */
export const sitemapProxy = functions
  .runWith({ memory: '512MB' })
  .https.onRequest(handleSitemapProxy)
