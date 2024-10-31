import type { SendSafeTxArgs, TX } from "@/types";
import { useSafeAppsSDK } from "@safe-global/safe-apps-react-sdk";
import { useMutation } from "@tanstack/react-query";

export const useSendSafeTx = (callbacks?: SendSafeTxArgs | undefined) => {
	const { sdk, safe } = useSafeAppsSDK();

	return useMutation({
		mutationKey: ["use-send-safe-tx", safe.safeAddress, safe.chainId],
		mutationFn: (txs: Array<TX>) => sdk.txs.send({ txs: toTxString(txs) }),
		onError: callbacks?.onError && callbacks?.onError,
		onSuccess: callbacks?.onSuccess && callbacks?.onSuccess,
		onSettled: callbacks?.onSettled && callbacks?.onSettled,
	});
};

const toTxString = (transactions: Array<TX>) =>
	transactions.map((tx) => {
		return { to: String(tx.to), value: String(tx.value), data: String(tx.data) };
	});
