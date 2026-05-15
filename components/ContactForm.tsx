"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-xl mx-auto mt-12 bg-editor-bg/50 p-8 rounded-3xl border border-white/5 shadow-xl backdrop-blur-md relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-50"></div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 space-y-2">
                            <label htmlFor="name" className="text-sm text-foreground/80 font-medium">Name</label>
                            <input 
                                id="name"
                                name="name" 
                                required 
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-sm" 
                                placeholder="John Doe" 
                            />
                        </div>
                        <div className="flex-1 space-y-2">
                            <label htmlFor="email" className="text-sm text-foreground/80 font-medium">Email</label>
                            <input 
                                id="email"
                                name="email" 
                                type="email" 
                                required 
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-sm" 
                                placeholder="john@example.com" 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm text-foreground/80 font-medium">Message</label>
                        <textarea 
                            id="message"
                            name="message" 
                            required 
                            rows={4} 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-sm resize-none" 
                            placeholder="Let's build something amazing together..." 
                        ></textarea>
                    </div>
                </div>

                <button 
                    disabled={status === "loading" || status === "success"}
                    type="submit" 
                    className="w-full py-4 bg-accent text-background font-bold rounded-xl hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === "idle" && <><Send className="w-4 h-4" /> Send Message</>}
                    {status === "loading" && <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>}
                    {status === "success" && <><CheckCircle className="w-4 h-4" /> Message Sent</>}
                    {status === "error" && <><Send className="w-4 h-4" /> Try Again</>}
                </button>
                {status === "error" && (
                    <p className="text-red-400 text-sm text-center">Failed to send message. Please ensure the DATABASE_URL is configured.</p>
                )}
            </form>
        </motion.div>
    );
};
