import { motion } from "framer-motion";
import "./FlowerSurprise.scss";

interface FlowerSurpriseProps {
    onRestart: () => void;
}

const petals = ["🌸", "🌷", "🌹", "🌺", "🌼", "🌻"];

export function FlowerSurprise({ onRestart }: FlowerSurpriseProps) {
    return (
        <motion.section
            className="flower-page"
            key="flowers"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
        >
            <div className="flower-page__petals">
                {petals.map((petal, index) => (
                    <motion.span
                        key={`${petal}-${index}`}
                        initial={{ opacity: 0, y: -80, rotate: 0 }}
                        animate={{
                            opacity: [0, 1, 1],
                            y: [0, 120 + index * 18, 240 + index * 10],
                            rotate: [0, index % 2 === 0 ? 18 : -18, index % 2 === 0 ? 36 : -36],
                        }}
                        transition={{
                            duration: 3.8,
                            delay: index * 0.18,
                            repeat: Infinity,
                            repeatDelay: 1.2,
                        }}
                    >
                        {petal}
                    </motion.span>
                ))}
            </div>

            <p className="flower-page__eyebrow">Sizin İçin</p>

            <motion.div
                className="flower-page__bouquet"
                initial={{ opacity: 0, y: 70, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
            >
                <span>🌷</span>
                <span>🌸</span>
                <span>🌹</span>
                <span>🌺</span>
                <span>🌼</span>
                <span>💐</span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
            >
                Her gününüz <br /> Çiçekler kadar güzel olsun
            </motion.h2>

            <motion.p
                className="flower-page__text"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                Sevginiz, zarafetiniz ve kalbinizde taşıdığınız güzellik için...
                <br />
                Anneler Gününüz kutlu olsun.
            </motion.p>

            <motion.button
                onClick={onRestart}
                className="flower-page__button"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
            >
                Baştan İzle
            </motion.button>
        </motion.section>
    );
}