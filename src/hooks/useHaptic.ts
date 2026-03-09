// Haptic feedback via Web Vibration API (Android Chrome)
// iOS does not support navigator.vibrate – graceful fallback
export function useHaptic() {
  const vibe = (pattern: number | number[]) => {
    try { navigator.vibrate?.(pattern); } catch { /* unsupported */ }
  };
  return {
    light:   () => vibe(10),
    medium:  () => vibe(25),
    heavy:   () => vibe([30, 20, 30]),
    success: () => vibe([10, 30, 10]),
    tick:    () => vibe(8),
  };
}
