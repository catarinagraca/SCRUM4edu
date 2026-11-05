import { motion } from "framer-motion";

const hoverColors = {
  blue: "#eff6ff",   // azul muito clarinho
  indigo: "#eef2ff", // indigo/roxo muito clarinho
  green: "#f0fdf4",  // verde muito clarinho
  amber: "#fffbeb",  // amarelo/âmbar muito clarinho
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function BenefitItem({ icon: Icon, tone, title, text }) {
  return ( 
    <motion.li 
      className="benefit"
      variants={itemVariants}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        // 2. Aplicamos a cor correspondente ao tom (com um cinza clarinho como fallback de segurança)
        backgroundColor: hoverColors[tone] || "#f8fafc", 
        transition: { duration: 0.2 } // Transição rápida e suave para a cor
      }}
      // Opcional: Garante que o cartão volta à cor original (transparente ou branco) ao tirar o rato
      style={{ backgroundColor: "transparent" }}
    >
      <span className={`icon tone-${tone}`}>
        <Icon size={30} aria-hidden="true" />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.li>
  );
}
