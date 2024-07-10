// pages/api/login.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

type ResponseData = {
  message: string;
  token?: string;
};

const staticUser = {
  email: "test@glasier.in",
  password: "123456",
};

// export async function GET(req: NextRequest, res: NextResponse<ResponseData>) {
//   console.log("res", req);
//   return NextResponse.json({ message: "Hello from Next.js!" });
// }

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (staticUser.email === email) {
    if (staticUser.password === password) {
      // Create a JWT token
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

      return NextResponse.json(
        { message: 'Login successful', token },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Invalid Password' },
        { status: 401 }
      );
    }
  } else {
    return NextResponse.json(
      { message: 'User not found' },
      { status: 401 }
    );
  }
}