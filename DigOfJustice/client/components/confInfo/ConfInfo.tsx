import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

import headerState from "../../state/headerState";
import styles from "./styles.module.scss";

import Svg1 from "../../public/img/confinfosvg/svg1.svg";
import Svg2 from "../../public/img/confinfosvg/svg2.svg";
import Svg3 from "../../public/img/confinfosvg/svg3.svg";
import Svg4 from "../../public/img/confinfosvg/svg4.svg";
import Svg5 from "../../public/img/confinfosvg/svg5.svg";

const ConfInfo = () => {
  const confRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (confRef.current?.offsetTop) {
      headerState.setConfOffsetTop(confRef.current?.offsetTop);
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-30%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ type: "spring", duration: 2 }}
      className={styles.confInfo}
      ref={confRef}
    >
      <h1 className="titleH1 mx-auto">О КОНФЕРЕНЦИИ</h1>
      <p>
        I Национальная научно-практическая конференция «Цифровизация правосудия:
        проблемы и перспективы» - уникальная площадка для диалога ученых и
        практиков об актуальных вопросах цифровой трансформации правосудия и
        информационной безопасности органов судебной системы, разработки
        пилотных проектов использования цифровых технологий и платформенных
        решений в судебной деятельности.
      </p>
      <br />
      <p>
        Соединяя информационные технологии и правосудие мы неизбежно
        сталкиваемся с проблемой определения предела допустимости использования
        искусственного интеллекта, семантики машиночитаемого права, этики
        искусственного интеллекта в судебной деятельности, ответственности за
        решения, принятые автономным интеллектуальным агентом, митигирования
        сопряженных с цифровой трансформацией форм судебной деятельности рисков
        на фоне сложной многогранной природы правосудия, его дискреционной,
        правоинтерпретационной и нормотворческой составляющей.
      </p>
      <br />
      <p>
        Доктрина цифровизации судебной системы требует точных определений
        трансграничных понятий и категорий, диалога ученых и практиков в сфере
        IT, информационной безопасности, права. Мы презентуем результаты
        научно-исследовательских работ и проектов учебно-научного центра «Этика
        искусственного интеллекта в судебной деятельности», созданные
        междисциплинарными научными группами.
      </p>
      <div>
        <h2 className="titleH1 mx-auto">ЗАДАЧИ КОНФЕРЕНЦИИ</h2>
        <div className="mx-auto">
          <div>
            <Image alt="SVG" src={Svg1.src} width={62} height={100} />
            <h3>
              Обсуждение проблем и перспектив информационной безопасности
              правосудия, цифровизации судебной деятельности, концепции и
              технологий машиночитаемого права, определение векторных
              направлений междисциплинарных исследований.
            </h3>
          </div>
          <div>
            <Image alt="SVG" src={Svg2.src} width={68} height={100} />
            <h3>
              Презентация результатов научных исследований в области цифровой
              трансформации права и цифровизации правосудия.
            </h3>
          </div>
          <div>
            <Image alt="SVG" src={Svg3.src} width={100} height={100} />
            <h3>
              Обмен опытом в вопросах разработки проектов платформенных решений
              в судебной деятельности.
            </h3>
          </div>
          <div>
            <Image alt="SVG" src={Svg4.src} width={66} height={100} />
            <h3>
              Стимулирование междисциплинарных исследований как одного из
              стратегических направлений программы стратегического
              академического лидерства «Приоритет -2030».
            </h3>
          </div>
          <div>
            <Image alt="SVG" src={Svg5.src} width={100} height={100} />
            <h3>
              Реализации творческого и личностного потенциала обучающихся всех
              уровней в научно-исследовательской и проектной деятельности.
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfInfo;
