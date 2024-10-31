export type SendTransactionsResponse = {
	safeTxHash: string;
};

export type TX = {
	to: `0x${string}`;
	value: bigint;
	data: `0x${string}`;
};

export type SendSafeTxArgs = {
	onSuccess?:
		| ((data?: SendTransactionsResponse, variables?: TX[], context?: unknown) => Promise<unknown> | unknown)
		| undefined;
	onError?: ((error: Error, variables?: TX[], context?: unknown) => Promise<unknown> | unknown) | undefined;
	onSettled?:
		| ((
				data?: SendTransactionsResponse | undefined,
				error?: Error | null,
				variables?: TX[],
				context?: unknown,
		  ) => Promise<unknown> | unknown)
		| undefined;
};
