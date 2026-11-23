import { buildOfflineAnswer } from '../../shared/yogaKnowledge.js';

/** Used when the Express server itself cannot be reached (for example, static-only hosting). */
export function offlineReply(question, styleId, profile) {
  return buildOfflineAnswer({ query: question, styleId, profile });
}
