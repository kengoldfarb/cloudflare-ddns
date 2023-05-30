import { updateDns } from "./updateDns";

updateDns().then(() => {
	console.log("DNS updated.");
	process.exit(0);
}).catch((err) => {
	console.error(err);
	process.exit(1);
});