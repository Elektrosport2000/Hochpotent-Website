// Haptic feedback via web-haptics (AudioContext + Vibration API)
// Works on Android, iOS Safari, iOS PWA
import { useWebHaptics } from 'web-haptics/react';

export function useHaptic() {
  const { trigger } = useWebHaptics();
  return {
    light:   () => trigger('light'),
    medium:  () => trigger('medium'),
    heavy:   () => trigger('heavy'),
    success: () => trigger('success'),
    tick:    () => trigger('selection'),
  };
}
