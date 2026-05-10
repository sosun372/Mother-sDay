import { Heart, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import "./RoleCards.scss";

const roles = [
    {
        icon: Heart,
        title: "Anne",
        text: "Sevgisiyle güven veren, varlığıyla hayatlara dokunan özel bir insan.",
    },
    {
        icon: Trophy,
        title: "Lider",
        text: "Başarısı, vizyonu ve duruşuyla çevresine ilham veren güçlü bir kadın.",
    },
    {
        icon: Sparkles,
        title: "İlham",
        text: "Hem ailesiyle hem de hayattaki duruşuyla iz bırakan zarif bir rol model.",
    },
];

export function RoleCards() {
    return (
        <section className="role-section">
            <div className="role-section__header">
                <p>Üç Kelimeyle</p>
                <h2>Sevgi, güç ve ilham.</h2>
            </div>

            <div className="role-grid">
                {roles.map((role, index) => {
                    const Icon = role.icon;

                    return (
                        <motion.article
                            className="role-card"
                            key={role.title}
                            initial={{ opacity: 0, y: 55 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.7, delay: index * 0.12 }}
                        >
                            <div className="role-card__icon">
                                <Icon size={26} />
                            </div>

                            <span>0{index + 1}</span>
                            <h3>{role.title}</h3>
                            <p>{role.text}</p>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}