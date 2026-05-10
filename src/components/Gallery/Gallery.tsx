import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import mother from "../../assets/images/mother.jpg";
import photo1 from "../../assets/images/photo-1.jpg";
import photo2 from "../../assets/images/photo-2.jpg";
import photo3 from "../../assets/images/photo-3.jpg";
import photo4 from "../../assets/images/photo-4.jpg";

import "./Gallery.scss";

interface GalleryProps {
    onNext: () => void;
}

const photos = [
    {
        src: photo1,
        title: "Bir evladın en güvenli yeri",
        text: "Bazı kareler yalnızca bir anı değil, sevginin sessizce saklandığı özel bir yerdir.",
    },
    {
        src: photo2,
        title: "Sevginin en sade hali",
        text: "Bir annenin varlığı, çoğu zaman kelimelerden daha güçlü bir güven duygusu bırakır.",
    },
    {
        src: mother,
        title: "Güçlü, zarif ve ilham veren",
        text: "Hayatın her alanında duruşuyla iz bırakan, sevgisiyle kalplere dokunan özel bir kadın.",
    },
    {
        src: photo3,
        title: "Kalpte saklanan anılar",
        text: "Güzel anılar, zaman geçse de insanın içini aynı sıcaklıkla aydınlatır.",
    },
    {
        src: photo4,
        title: "Anne sevgisinin izi",
        text: "Bir evladın hayatında anne sevgisi, ömür boyu taşınan en kıymetli izlerden biridir.",
    },
];

export function Gallery({ onNext }: GalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activePhoto = photos[activeIndex];

    const goNext = () => {
        setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    const goPrev = () => {
        setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    return (
        <motion.section
            className="gallery-page"
            key="gallery"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -28 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="gallery-page__layout">
                <div className="gallery-page__copy">
                    <p className="gallery-page__eyebrow">
                        Anı {activeIndex + 1} / {photos.length}
                    </p>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePhoto.title}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -18 }}
                            transition={{ duration: 0.35 }}
                        >
                            <h2>{activePhoto.title}</h2>
                            <p>{activePhoto.text}</p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="gallery-page__controls">
                        <button onClick={goPrev} aria-label="Önceki fotoğraf">
                            <ChevronLeft size={24} />
                        </button>

                        <button onClick={goNext} aria-label="Sonraki fotoğraf">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <button onClick={onNext} className="gallery-page__next">
                        Final Mesajına Geç
                    </button>
                </div>

                <div className="gallery-page__stage">
                    <div className="gallery-page__floral">✿</div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePhoto.src}
                            className="gallery-page__photo-card"
                            initial={{ opacity: 0, x: 120, rotate: 2, scale: 0.96 }}
                            animate={{ opacity: 1, x: 0, rotate: -1, scale: 1 }}
                            exit={{ opacity: 0, x: -120, rotate: -3, scale: 0.96 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                            <img src={activePhoto.src} alt={activePhoto.title} />
                        </motion.div>
                    </AnimatePresence>

                    <div className="gallery-page__thumbnails">
                        {photos.map((photo, index) => (
                            <button
                                key={photo.src}
                                onClick={() => setActiveIndex(index)}
                                className={index === activeIndex ? "active" : ""}
                                aria-label={`${index + 1}. fotoğrafı aç`}
                            >
                                <img src={photo.src} alt="" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}