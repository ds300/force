import { underscored } from "underscore.string"
import { pick } from "lodash"
import { analyticsHooks } from "./analyticsHooks"
require("./events")

const proxy = [
  "user",
  "artwork",
  "inquiry",
  "modal",
  "collectorProfile",
  "userInterests",
  "state",
]

export function attachInquiryAnalyticsHooks(context) {
  const trigger = kind => name => {
    analyticsHooks.trigger(`inquiry_questionnaire:${kind}:${name}`, context)
  }

  const hooks = []
  const pendingHooks = pick(context, proxy)
  for (let event in pendingHooks) {
    hooks.push(context[event].on("all", trigger(underscored(event))))
  }
  return hooks
}

export function teardownInquiryAnalyticsHooks(context) {
  const hooks = []
  const pendingHooks = pick(context, proxy)

  for (let hook in pendingHooks) {
    const event = pendingHooks[hook]
    hooks.push(event.off(null, null, this))
  }
  return hooks
}
