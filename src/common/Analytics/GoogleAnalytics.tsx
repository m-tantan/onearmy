import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { useLocation } from 'react-router-dom'
import { GA_TRACKING_ID } from 'src/config/config'

export const GoogleAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    if (GA_TRACKING_ID) {
      ReactGA.initialize([{ trackingId: GA_TRACKING_ID }])
    }
  }, [])

  useEffect(() => {
    if (GA_TRACKING_ID) {
      sendPageView(location)
    }
  }, [location])

  const sendPageView = (location: any) => {
    ReactGA.set({ page: location.pathname })
    ReactGA.send({ hitType: 'pageview', page: location.pathname })
  }

  return null
}
