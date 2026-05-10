import { motion } from "framer-motion";
import "./MessageSection.scss";

interface MessageSectionProps {
    onNext: () => void;
}

export function MessageSection({ onNext }: MessageSectionProps) {
    return (
        <motion.section
            className="message-page"
            key="message"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -28 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <motion.div
                className="message-page__card"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.15 }}
            >
                <p className="message-page__eyebrow">Kalpten Bir Mesaj</p>

                <h2>Anneler Gününüz Kutlu Olsun</h2>

                <p>
                    Bir evlat için anne; bazen en güvenli yer, bazen en güçlü destek,
                    bazen de hayata cesaretle bakmayı öğreten ilk insandır.
                </p>

                <p>
                    Bu küçük sürpriz, anne olmanın taşıdığı o tarifsiz değeri ve
                    sevginizin bıraktığı güzel izi hatırlatmak için hazırlandı.
                </p>

                <strong>Sevginiz, emeğiniz ve varlığınız iyi ki var.</strong>

                <button onClick={onNext} className="message-page__button">
                    Anılara Geç
                </button>
            </motion.div>
        </motion.section>
    );
}