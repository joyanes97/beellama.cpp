export function isActiveConversationStreaming(
	activeConversationId: string | null | undefined,
	streamingConversationIds: Iterable<string>
): boolean {
	if (!activeConversationId) return false;

	for (const conversationId of streamingConversationIds) {
		if (conversationId === activeConversationId) return true;
	}

	return false;
}
