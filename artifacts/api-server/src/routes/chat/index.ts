import { Router } from "express";
import { anthropic } from "@workspace/integrations-anthropic-ai";
import { z } from "zod";

const router = Router();

const SYSTEM_PROMPT = `You are the Options21 Trading Assistant, a professional financial market analyst supporting Options21 — an AFSL-licensed options trading education platform run by Paul Wise (AFSL 247412, Ivanhoe International Pty Ltd).

Your areas of expertise:
- Options strategies and volatility analysis
- Geopolitical market impacts
- Fed policy and macro economics
- Commodities and currency markets
- ASX and US market analysis
- Crypto and digital assets

Important rules:
- Provide general financial information only — never personal financial advice
- Always remind users to consider their own circumstances and consult a licensed adviser
- Keep responses concise, professional, and market-focused
- Stick to financial topics only`;

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});

const chatRequestSchema = z.object({
  messages: z.array(messageSchema).min(1).max(50),
});

router.post("/chat", async (req, res) => {
  const parsed = chatRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 8192,
      system: SYSTEM_PROMPT,
      messages: parsed.data.messages,
    });

    const block = message.content[0];
    const text = block.type === "text" ? block.text : "";
    res.json({ content: text });
  } catch (err) {
    req.log.error({ err }, "Anthropic API error");
    res.status(502).json({ error: "Failed to get response from AI" });
  }
});

export default router;
