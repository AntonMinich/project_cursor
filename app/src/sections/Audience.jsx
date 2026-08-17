import { motion } from 'framer-motion';
import CountUp from '../components/CountUp.jsx';
import Slide from '../components/Slide.jsx';

const fade = (delay) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.36, delay, ease: [0.22, 1, 0.36, 1] },
});

const SECTORS = [
  { name: 'IT и телеком', value: 22 },
  { name: 'Производство и промышленность', value: 21 },
  { name: 'Государственное управление', value: 10 },
  { name: 'Медицина и здравоохранение', value: 7 },
  { name: 'Торговля', value: 7 },
  { name: 'Другие сферы', value: 33 },
];

const ROLES = [
  { name: 'Специалисты и руководители', value: 49, tone: 'mint' },
  { name: 'Рабочие', value: 33, tone: 'mid' },
  { name: 'Собственники и топ-менеджеры', value: 13, tone: 'soft' },
  { name: 'Другие категории', value: 5, tone: 'dim' },
];

const DONUT = 'conic-gradient(#01f69b 0 49%, rgba(1,246,155,0.5) 49% 82%, rgba(255,255,255,0.38) 82% 95%, rgba(255,255,255,0.14) 95% 100%)';

export default function Audience() {
  return (
    <Slide id="audience" deep className="slide-audience">
      <div className="aud-top">
        <motion.div className="aud-intro" {...fade(0)}>
          <p className="aud-kicker">Аудитория</p>
          <h2 className="aud-title">Кто увидит FINCODE</h2>
          <p className="aud-lead">
            Активные, взрослые и платежеспособные люди, для которых здоровье, саморазвитие
            и качество жизни — важные ценности.
          </p>
          <p className="aud-lead-2">Они открыты к новому — а значит, могут стать и нашей аудиторией.</p>
        </motion.div>
        <motion.div className="aud-hero" {...fade(0.08)}>
          <p className="aud-hero-num">
            <CountUp value={77} />
            <span>%</span>
          </p>
          <p className="aud-hero-label">25–44 года</p>
          <p className="aud-hero-note">«В самом расцвете сил»</p>
        </motion.div>
      </div>

      <div className="aud-grid">
        <motion.section className="aud-col" {...fade(0.16)}>
          <p className="aud-num">01</p>
          <h3>Возраст и мобильность</h3>
          <div className="aud-pair">
            <div>
              <p className="aud-stat">
                <CountUp value={77} />
                <span>%</span>
              </p>
              <p className="aud-stat-label">в возрасте 25–44 лет</p>
              <p className="aud-stat-note">«В самом расцвете сил»</p>
            </div>
            <div>
              <p className="aud-stat">
                <CountUp value={77} />
                <span>%</span>
              </p>
              <p className="aud-stat-label">приезжают на старты на собственных автомобилях</p>
              <p className="aud-stat-note">Потенциально релевантная аудитория для автомобильного направления FINCODE</p>
            </div>
          </div>
        </motion.section>

        <motion.section className="aud-col" {...fade(0.24)}>
          <p className="aud-num">02</p>
          <h3>Кем работают участники</h3>
          <ul className="aud-bars">
            {SECTORS.map((item) => (
              <li key={item.name}>
                <div className="aud-bar-row">
                  <span>{item.name}</span>
                  <strong>{item.value}%</strong>
                </div>
                <div className="aud-track">
                  <span style={{ width: `${(item.value / 33) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <p className="aud-callout">
            <strong>67%</strong> топ-5 сфер
          </p>
        </motion.section>

        <motion.section className="aud-col" {...fade(0.32)}>
          <p className="aud-num">03</p>
          <h3>Кто участвует</h3>
          <div className="aud-roles">
            <div className="aud-donut" style={{ background: DONUT }} aria-hidden="true" />
            <ul>
              {ROLES.map((item) => (
                <li key={item.name} className={`tone-${item.tone}`}>
                  <strong>{item.value}%</strong>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
      </div>

      <motion.p className="aud-foot" {...fade(0.4)}>
        Это аудитория, с которой FINCODE хочет быть рядом — в жизни, в движении и в повседневных финансовых решениях.
      </motion.p>
    </Slide>
  );
}
