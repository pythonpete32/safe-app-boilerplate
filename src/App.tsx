import type React from "react";
import { useCallback } from "react";
import { useSafeAppsSDK } from "@safe-global/safe-apps-react-sdk";
import { Button } from "./components/ui/button";

const SafeApp = (): React.ReactElement => {
	const { sdk, safe } = useSafeAppsSDK();

	const submitTx = useCallback(async () => {
		try {
			const { safeTxHash } = await sdk.txs.send({
				txs: [
					{
						to: safe.safeAddress,
						value: "0",
						data: "0x",
					},
				],
			});
			console.log({ safeTxHash });
			const safeTx = await sdk.txs.getBySafeTxHash(safeTxHash);
			console.log({ safeTx });
		} catch (e) {
			console.error(e);
		}
	}, [safe, sdk]);

	return (
		<div>
			<div className="grid grid-cols-2 gap-2 items-center">
				<p className="text-2xl">Safe: {safe.safeAddress}</p>

				<Button variant="ghost" color="primary" onClick={submitTx}>
					Click to send a test transaction
				</Button>

				<Button>
					<a
						href="https://github.com/safe-global/safe-apps-sdk"
						target="_blank"
						rel="noreferrer"
					>
						Documentation
					</a>
				</Button>
			</div>
		</div>
	);
};

export default SafeApp;
