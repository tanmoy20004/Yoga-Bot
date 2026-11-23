import {
  Activity,
  Baby,
  Crosshair,
  Dumbbell,
  Flame,
  Heart,
  Moon,
  Sparkles,
  Sprout,
  Sun,
  Wind,
  Zap,
} from 'lucide-react';

export const styleIcons = {
  Sun,
  Wind,
  Flame,
  Moon,
  Crosshair,
  Sparkles,
  Zap,
  Dumbbell,
  Heart,
  Baby,
  Sprout,
  Activity,
};

export function getStyleIcon(name) {
  return styleIcons[name] || Sun;
}
