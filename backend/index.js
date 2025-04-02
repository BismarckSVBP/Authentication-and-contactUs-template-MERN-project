
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import { connectDB } from "./db/connectDB.js";
// import authRoutes from "./routes/auth.route.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Ensure CLIENT_URL exists
// if (!process.env.CLIENT_URL) {
// 	console.error("⚠️ CLIENT_URL is not set in the environment variables.");
// 	process.exit(1);
// }

// app.use(
// 	cors({
// 		origin: process.env.CLIENT_URL,
// 		credentials: true,
// 		optionsSuccessStatus: 200,
// 	})
// );

// app.use(express.json());
// app.use(cookieParser());

// // Routes
// app.use("/", authRoutes);

// // Database connection before starting the server
// const startServer = async () => {
// 	try {
// 		await connectDB();
// 		console.log("✅ Database connected successfully!");

// 		app.listen(PORT, () => {
// 			console.log(`🚀 Server is running on port: ${PORT}`);
// 		});
// 	} catch (error) {
// 		console.error("❌ Database connection failed:", error);
// 		process.exit(1);
// 	}
// };

// startServer();

// // Graceful shutdown handling
// process.on("SIGINT", async () => {
// 	console.log("🔄 Closing server...");
// 	process.exit(0);
// });
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

// Ensure CLIENT_URL exists
if (!process.env.CLIENT_URL) {
	console.error("⚠️ CLIENT_URL is not set in the environment variables.");
	process.exit(1);
}

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
		optionsSuccessStatus: 200,
	})
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", authRoutes);

// Database connection before starting the server
const startServer = async () => {
	try {
		await connectDB();
		console.log("✅ Database connected successfully!");
	} catch (error) {
		console.error("❌ Database connection failed:", error);
		process.exit(1);
	}
};

startServer();

// Export for Vercel
export default app;
