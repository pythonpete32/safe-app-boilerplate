import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { safe } from "wagmi/connectors";

export const config = createConfig({
	connectors: [safe()],
	chains: [sepolia],
	transports: { [sepolia.id]: http() },
});

declare module "wagmi" {
	interface Register {
		config: typeof config;
	}
}
