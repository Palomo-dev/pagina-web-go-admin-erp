"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, RotateCcw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  content: string;
  timestamp?: string;
}

export interface ChatMessagesProps {
  messages?: ChatMessage[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
  typingDuration?: number;
  showReplay?: boolean;
  interactive?: boolean;
  className?: string;
}

const DEFAULT_MESSAGES: ChatMessage[] = [
  {
    id: "default-1",
    sender: "assistant",
    content:
      "¡Hola! Soy tu asistente IA de GO Admin. ¿En qué puedo ayudarte hoy?",
  },
  {
    id: "default-2",
    sender: "user",
    content:
      "Necesito un reporte de ventas del último trimestre comparado con el anterior.",
  },
  {
    id: "default-3",
    sender: "assistant",
    content:
      "Listo. He generado tu reporte comparativo. Las ventas crecieron 23% vs. trimestre anterior. ¿Quieres que lo desglose por sucursal?",
  },
  {
    id: "default-4",
    sender: "user",
    content: "Sí, y también dime cuál producto tuvo mejor desempeño.",
  },
  {
    id: "default-5",
    sender: "assistant",
    content:
      "El producto con mejor desempeño fue 'Combo Familiar' con +47% en ventas. Te muestro el desglose por sucursal en el dashboard.",
  },
  {
    id: "default-6",
    sender: "user",
    content: "¿Puedes crear una imagen promocional para ese combo?",
  },
  {
    id: "default-7",
    sender: "assistant",
    content:
      "¡Claro! He generado 3 variantes de imagen promocional con IA. Puedes usarlas en tus campañas de WhatsApp y redes sociales.",
  },
];

const INTERACTIVE_FALLBACK_RESPONSE =
  "¡Excelente pregunta! Déjame ayudarte a explorar las mejores opciones para tu negocio.";

export function ChatMessages({
  messages = DEFAULT_MESSAGES,
  autoPlay = true,
  autoPlayDelay = 1200,
  typingDuration = 1400,
  showReplay = true,
  interactive = false,
  className,
}: ChatMessagesProps) {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  const playSequence = useCallback(() => {
    clearAllTimeouts();
    setVisibleMessages([]);
    setHasFinished(false);
    setIsTyping(false);

    let cumulativeDelay = 0;

    messages.forEach((message, index) => {
      if (message.sender === "assistant" && index > 0) {
        cumulativeDelay += typingDuration;
        const typingTimeout = setTimeout(() => {
          setIsTyping(true);
        }, cumulativeDelay - typingDuration);
        timeoutsRef.current.push(typingTimeout);
      }

      cumulativeDelay += autoPlayDelay;
      const messageTimeout = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, message]);
        scrollToBottom();
        if (index === messages.length - 1) {
          setHasFinished(true);
        }
      }, cumulativeDelay);
      timeoutsRef.current.push(messageTimeout);
    });
  }, [messages, autoPlayDelay, typingDuration, clearAllTimeouts, scrollToBottom]);

  useEffect(() => {
    if (autoPlay && !interactive) {
      playSequence();
    } else {
      setVisibleMessages(messages);
      setHasFinished(true);
    }
    return clearAllTimeouts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages, isTyping, scrollToBottom]);

  const handleReplay = useCallback(() => {
    playSequence();
  }, [playSequence]);

  const handleSend = useCallback(() => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      content: trimmed,
    };
    setVisibleMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const responseTimeout = setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        content: INTERACTIVE_FALLBACK_RESPONSE,
      };
      setIsTyping(false);
      setVisibleMessages((prev) => [...prev, assistantMessage]);
      scrollToBottom();
    }, typingDuration);
    timeoutsRef.current.push(responseTimeout);
  }, [inputValue, typingDuration, scrollToBottom]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  return (
    <div
      className={cn(
        "relative flex h-[520px] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-4">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">GO Admin IA</span>
          <span className="text-xs text-blue-100">
            Siempre listo para ayudarte
          </span>
        </div>
        {showReplay && hasFinished && !interactive && (
          <button
            onClick={handleReplay}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
            aria-label="Replay"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5"
      >
        <AnimatePresence initial={false}>
          {visibleMessages.map((message) => (
            <motion.div
              key={message.id}
              layout
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={cn(
                "flex items-end gap-2",
                message.sender === "user" ? "justify-end" : "justify-start",
              )}
            >
              {message.sender === "assistant" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
                  message.sender === "user"
                    ? "rounded-br-md bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_8px_24px_-4px_rgba(37,99,235,0.4)]"
                    : "rounded-bl-md border border-slate-100 bg-slate-50 text-slate-700",
                )}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="flex items-end gap-2"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-slate-100 bg-slate-50 px-4 py-3">
                <motion.span
                  className="h-2 w-2 rounded-full bg-blue-400"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                />
                <motion.span
                  className="h-2 w-2 rounded-full bg-blue-400"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                />
                <motion.span
                  className="h-2 w-2 rounded-full bg-blue-400"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      {interactive ? (
        <div className="border-t border-slate-100 p-3">
          <div className="flex items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pregunta a GO Admin IA..."
              rows={1}
              className="max-h-24 flex-1 resize-none bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                inputValue.trim()
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "cursor-not-allowed bg-slate-200 text-slate-400",
              )}
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        showReplay &&
        hasFinished && (
          <div className="border-t border-slate-100 px-4 py-3">
            <p className="text-center text-xs text-slate-400">
              Modo demo - replay para ver de nuevo
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatMessages;
