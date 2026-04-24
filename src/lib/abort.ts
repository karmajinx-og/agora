/**
 * AbortSignal that fires after `ms`, or when `outer` aborts (timer cleared on outer abort).
 */
export function withTimeout(outer: AbortSignal | undefined, ms: number): AbortSignal {
  const ctrl = new AbortController()
  const t = setTimeout(() => {
    ctrl.abort(new DOMException(`Request timed out after ${ms}ms`, 'AbortError'))
  }, ms)
  const clear = () => clearTimeout(t)

  if (outer) {
    if (outer.aborted) {
      clear()
      ctrl.abort(outer.reason)
      return ctrl.signal
    }
    outer.addEventListener('abort', () => {
      clear()
      ctrl.abort(outer.reason)
    }, { once: true })
  }

  ctrl.signal.addEventListener('abort', clear, { once: true })
  return ctrl.signal
}
