"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./ui";

const faqs = [
  {
    question: "What is Ajo?",
    answer:
      "Ajo is a decentralized platform for creating and managing group savings circles (Ajo/Esusu). Members contribute regularly and take turns receiving payouts, all secured by smart contracts and verified through Self Protocol.",
  },
  {
    question: "How does Self Protocol verification work?",
    answer:
      "Circle creators can vouch for members using Self Protocol attestations. This creates a verifiable trust layer without requiring KYC, making it perfect for communities.",
  },
  {
    question: "What fees do I pay?",
    answer:
      "Ajo charges minimal fees since it runs on Celo, which has near-zero transaction costs. There are no hidden fees—just transparent on-chain transactions.",
  },
  {
    question: "Can I join multiple circles?",
    answer:
      "Yes! You can be a member of multiple circles simultaneously. Your reputation score carries across all circles you participate in.",
  },
  {
    question: "What happens if someone doesn't pay?",
    answer:
      "The smart contract enforces contribution deadlines. Members can be flagged for non-payment, and the circle creator can remove them. All transactions are transparent and auditable.",
  },
  {
    question: "How do I withdraw my payout?",
    answer:
      "When it's your turn, the smart contract automatically transfers your payout in cUSD to your wallet. You can then swap it for any currency you prefer.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      id="faq"
      className="space-y-8 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading
        eyebrow="Questions"
        title="Frequently asked questions"
        description="Everything you need to know about Ajo and group savings circles."
      />

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            className="rounded-xl border border-white/10 bg-white/5 transition hover:border-cyan-400/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <h3 className="font-semibold text-white">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 text-slate-400 transition ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>

            {openIndex === index && (
              <motion.div
                className="border-t border-white/10 px-6 py-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <p className="text-sm text-slate-300">{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
