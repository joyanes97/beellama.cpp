import { describe, expect, it } from 'vitest';

import { isActiveConversationStreaming } from '$lib/utils/streaming-state';

describe('isActiveConversationStreaming', () => {
	it('keeps the active conversation streaming when another stream finishes', () => {
		expect(isActiveConversationStreaming('active-chat', ['active-chat', 'other-chat'])).toBe(true);
		expect(isActiveConversationStreaming('active-chat', ['active-chat'])).toBe(true);
	});

	it('does not report streaming for a different active conversation', () => {
		expect(isActiveConversationStreaming('active-chat', ['other-chat'])).toBe(false);
	});

	it('does not report streaming without an active conversation', () => {
		expect(isActiveConversationStreaming(null, ['background-chat'])).toBe(false);
	});
});
