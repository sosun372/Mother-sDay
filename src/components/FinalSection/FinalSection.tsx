import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "./FinalSection.scss";

interface FinalSectionProps {
    onNext: () => void;
}

export function FinalSection({ onNext }: FinalSectionProps) {
    return (
        <motion.section
            className="final-page"
            key="final"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -28 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <motion.div
                className="final-page__heart"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Heart size={34} />
            </motion.div>

            <p className="final-page__eyebrow">Son Bir Mesaj</p>

            <h2>
                Anne olmak,
                <br />
                bir kalpte ömür boyu ev olmaktır.
            </h2>

            <p className="final-page__text">
                Hayata kattığınız değer, gösterdiğiniz emek ve sevginiz için...
                <br />
                Anneler Gününüz kutlu olsun.
            </p>

            <button onClick={onNext} className="final-page__button">
                Son sürpriz için lütfen butona basın
            </button>
        </motion.section>
    );
}