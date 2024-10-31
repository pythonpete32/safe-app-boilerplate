# Safe App Boilerplate

A modern, opinionated boilerplate for building Safe Apps with React, TypeScript, and TailwindCSS. This template provides everything you need to start building high-quality Safe Apps with best practices baked in.

## What's Included?

### Core Features

- ⚡️ Vite with Fast Refresh
- 🔒 Safe Apps SDK with React bindings
- ⛓️ WAGMI + Viem for Ethereum interactions
- 🎨 TailwindCSS + shadcn/ui for beautiful UIs
- 🔄 TanStack Query for data fetching
- 🔍 Biome for linting and formatting
- 💪 TypeScript for type safety

### Project Structure

```

src/
├── components/     # Reusable components
│   └── ui/         # shadcn/ui components
├── hooks/          # Custom hooks including Safe transaction helpers
├── lib/            # Utilities and configurations
└── types/          # TypeScript types
```

### Available Scripts

- `pnpm dev`        - Start development server
- `pnpm build`      - Build for production
- `pnpm check`      - Run Biome checks
- `pnpm lint`       - Run Biome linter
- `pnpm format`     - Format code

## Quick Start

1. Use this template:

```bash
# With degit
npx degit pythonpete32/safe-app-boilerplate my-safe-app

# Or clone directly
git clone https://github.com/pythonpete32/safe-app-boilerplate.git my-safe-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Start developing:

```bash
pnpm dev
```

4. Add to Safe:

- Open [Safe{Wallet}](https://app.safe.global)
- Go to Apps -> Manage Apps -> Add Custom App
- Enter `http://localhost:3000`
- Start building!

## Development Guide

### Safe App Configuration

Safe Apps require a `manifest.json` file in the root directory. This boilerplate includes a pre-configured manifest at `public/manifest.json`:

```json
{
  "name": "Safe App",
  "description": "Describe your Safe App here",
  "iconPath": "logo.svg",
  // ... other configurations
}
```

**Important Manifest Fields:**

- `name`: Your app's name as it will appear in Safe
- `description`: A brief description of your app's functionality
- `iconPath`: Path to your app's icon (relative to public directory)

The boilerplate includes a default set of icons and logos in the `public/` directory. Replace them with your own assets while maintaining the same filenames, or update the paths in `manifest.json`.

### Safe Integration

The boilerplate comes with a pre-configured Safe integration. Check `src/hooks/send-safe-transaction.ts` for an example of how to send transactions through Safe:

```typescript
const { mutate: sendTx } = useSendSafeTx({
  onSuccess: (data) => console.log("Transaction sent:", data),
  onError: (error) => console.error("Error:", error),
});

// Send a transaction
sendTx([{
  to: contractAddress,
  value: 0n,
  data: encodeFunctionData({/*...*/})
}]);
```

### Network Configuration

- Update `src/lib/wagmi.ts` to add or modify supported networks
- Default configuration uses Sepolia testnet

## Customization

### App Metadata

1. Update `manifest.json` with your app's details
2. Replace the icons in `public/` directory with your own
3. Update `package.json` name and version

### Styling

This template uses Tailwind CSS with shadcn/ui components. Add new shadcn/ui components with:

```bash
npx shadcn-ui add button
npx shadcn-ui add card
# etc
```

## Contributing

Found a bug or have a feature suggestion? Please open an issue! PRs are also welcome.

## Learning Resources

- [Safe Apps Documentation](https://docs.safe.global/safe-core-aa-sdk/safe-apps)
- [Build Your First Safe App Tutorial](https://docs.safe.global/safe-core-aa-sdk/safe-apps/tutorial)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TanStack Query Documentation](https://tanstack.com/query)
- [wagmi Documentation](https://wagmi.sh)

## License

MIT

---

Happy building! 🚀
