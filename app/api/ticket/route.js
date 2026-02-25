import { v4 as uuidv4 } from "uuid";

let ticket = [];

export async function GET() {
  return new Response(JSON.stringify(ticket), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();

    ticket.push({
      id: uuidv4(),
      ...body,
    });

    return new Response(JSON.stringify({ message: "Task Added" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}