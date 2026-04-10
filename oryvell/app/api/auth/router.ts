// import { NextResponse } from "next/server";

// // Fake DB (temporary)
// let users: any[] = [];

// export async function POST(req: Request) {
//   const body = await req.json();
//   const { type, email, password, name } = body;

//   // 👉 SIGNUP
//   if (type === "signup") {
//     const userExists = users.find((u) => u.email === email);

//     if (userExists) {
//       return NextResponse.json({ message: "User already exists" }, { status: 400 });
//     }

//     users.push({ email, password, name });

//     return NextResponse.json({ message: "User created successfully" });
//   }

//   // 👉 LOGIN
//   if (type === "login") {
//     const user = users.find(
//       (u) => u.email === email && u.password === password
//     );

//     if (!user) {
//       return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
//     }

//     return NextResponse.json({ message: "Login successful" });
//   }

//   return NextResponse.json({ message: "Invalid request" }, { status: 400 });
// }