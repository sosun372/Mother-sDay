import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import "./Hero.scss";

interface HeroProps {
    onNext: () => void;
}

export function Hero({ onNext }: HeroProps) {
    return (
        <motion.section
            className="hero-page"
            key="hero"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -28 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="hero-page__content">
                <motion.div
                    className="hero-page__icon"
                    initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.2 }}
                >
                    <Gift size={34} />
                </motion.div>

                <p className="hero-page__eyebrow">Anneler Günü</p>

                <h1>
                    Bugün bir anne,
                    <br />
                    kalpten kutlanıyor.
                </h1>

                <p className="hero-page__text">
                    Sevginiz, emeğiniz ve bir evladın hayatında bıraktığınız güzel iz için
                    hazırlanmış küçük bir dijital sürpriz.
                </p>

                <button onClick={onNext} className="hero-page__button">
                    Sürprizi Aç
                </button>
            </div>
        </motion.section>
    );
}