export default function SafeLoader() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="flex-col gap-2 justify-around">
				<h1 className="text-6xl font-mono animate-pulse text-center font-semibold text-black/60">Add to Safe</h1>
				<p className="text-center py-4 text-black/50">
					Goto Apps -{"->"} My custom apps -{"->"} Add custom Safe app
				</p>
				<pre className="font-mono font-semibold text-xl text-center text-black/50">{"http://localhost:3000"}</pre>
			</div>
		</div>
	);
}
