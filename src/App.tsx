import type React from "react";
import { type Address, encodeFunctionData, parseAbiItem } from "viem";
import { useSafeAppsSDK } from "@safe-global/safe-apps-react-sdk";
import { Button } from "./components/ui/button";
import { useSendSafeTx } from "./hooks/send-safe-transaction";
import { SITE_URL } from "./constants/site";

// Mock USDC on Sepolia with a `faucet()` function
const USDC = "0x9EfEE50bea4E83447D4c0DC7c4723F1940400B8C";

const SafeApp = (): React.ReactElement => {
	const { safe } = useSafeAppsSDK();

	const { mutate: sendTx, isPending } = useSendSafeTx({
		// optional callbacks
		onSuccess: (data) => console.log("Success: ", data),
		onError: (e) => alert(e.message),
	});

	return (
		<div className="flex min-h-screen">
			<div className="flex flex-col items-center gap-6 mx-auto mt-16">
				<p className="text-2xl">Safe: {safe.safeAddress}</p>
				<p className="text-sm text-gray-500">Current URL: {SITE_URL}</p>
				<Button
					variant="default"
					color="primary"
					onClick={() =>
						sendTx([
							{
								to: USDC,
								value: 0n,
								data: encodeFunctionData({
									abi: [parseAbiItem("function faucet(address to) external")],
									functionName: "faucet",
									args: [safe.safeAddress as Address],
								}),
							},
						])
					}
					disabled={isPending}
				>
					Mint 420 USDC
				</Button>
			</div>
		</div>
	);
};

export default SafeApp;
