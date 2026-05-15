// V5 — Cosmopolitan B&W (Kasia Siwosz / strategic-coach inspired).
// Pure black/white/greys (#191917 / #f3f3f3 / #ffffff). Massive sans-serif name,
// corner-anchored micro-labels, grayscale photos, alternating dark/light sections.
// Only TWO photos total: hero (serious portrait) + about-me (smile, humanizes).

(function injectV5Styles() {
  if (document.getElementById('v5-styles')) return;
  const s = document.createElement('style');
  s.id = 'v5-styles';
  s.textContent = `
    .v5 { --ink:#191917; --paper:#ffffff; --soft:#f3f3f3; --mute:#8a8a86; --mute-dark:#6b6b67;
      --rule:rgba(25,25,23,.12); --rule-dark:rgba(255,255,255,.14);
      font-family: "Manrope", "Outfit", system-ui, sans-serif; color: var(--ink); background: var(--paper);
      line-height: 1.55; -webkit-font-smoothing: antialiased; font-weight: 400; }
    .v5 *, .v5 *::before, .v5 *::after { box-sizing: border-box; }
    .v5 a { color: inherit; text-decoration: none; }
    .v5 img { display: block; }
    .v5 .container { max-width: 1320px; margin: 0 auto; padding: 0 48px; }
    .v5 .micro { font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--mute); font-weight: 500; }
    .v5 .dot { display: inline-block; width: 6px; height: 6px; background: currentColor; border-radius: 50%;
      vertical-align: middle; margin-right: 8px; }
    .v5 .grain { position: relative; }
    .v5 .grain::after { content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .04;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
      mix-blend-mode: overlay; }

    /* nav */
    .v5 .nav { position: sticky; top: 0; z-index: 30; background: rgba(25,25,23,.92);
      backdrop-filter: blur(10px); border-bottom: 1px solid var(--rule-dark); color: var(--paper); }
    .v5 .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 18px 48px; max-width: 1500px; margin: 0 auto; }
    .v5 .brand { font-weight: 800; font-size: 17px; letter-spacing: -.01em; }
    .v5 .nav-links { display: flex; gap: 32px; }
    .v5 .nav-links a { font-size: 13px; color: rgba(255,255,255,.65); transition: color .15s; }
    .v5 .nav-links a:hover { color: var(--paper); }
    .v5 .nav-cta { display: inline-flex; align-items: center; gap: 10px; font-size: 13px; }
    .v5 .nav-cta .pill { padding: 8px 14px; border: 1px solid rgba(255,255,255,.3); border-radius: 999px; transition: all .15s; }
    .v5 .nav-cta:hover .pill { background: var(--paper); color: var(--ink); border-color: var(--paper); }

    /* HERO */
    .v5 .hero { position: relative; background: var(--ink); color: var(--paper); overflow: hidden;
      min-height: 720px; padding: 40px 0 0; isolation: isolate; }
    .v5 .hero-bg { position: absolute; inset: 0; opacity: .35; pointer-events: none;
      background:
        linear-gradient(180deg, rgba(25,25,23,.45) 0%, rgba(25,25,23,.8) 70%, var(--ink) 100%),
        repeating-linear-gradient(90deg, rgba(255,255,255,.04) 0 1px, transparent 1px 80px),
        repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0 1px, transparent 1px 60px); }
    .v5 .hero-stage { position: relative; height: 660px; padding: 0 24px;
      max-width: 100%; margin: 0; z-index: 2; }
    /* Wordmark uses mix-blend-mode: difference — over dark bg it stays bright white,
       over the photo it inverts against photo pixels (dark photo → bright letter,
       light photo → dark letter). Same dramatic ghost-through effect as Kasia ref. */
    .v5 .hero-wordmark { position: absolute; left: 24px; right: 24px; bottom: 90px;
      font-weight: 800; font-size: clamp(96px, 14vw, 175px); line-height: .9;
      letter-spacing: -.05em; white-space: nowrap; text-align: center;
      color: var(--paper); pointer-events: none; z-index: 3;
      mix-blend-mode: difference; }
    /* "Coaching" sits below "Truong", aligned with the T of Truong on the left,
       and aligned with the photo's right edge on the right (centered inside that range).
       Smaller and grayer than the wordmark. */
    .v5 .hero-coaching { position: absolute; left: 53%; right: auto; bottom: 36px;
      font-weight: 500; font-size: clamp(32px, 4.5vw, 60px); line-height: 1;
      letter-spacing: -.015em; text-align: left; color: rgba(255,255,255,.42);
      z-index: 3; pointer-events: none; }
    .v5 .hero-photo { position: absolute; top: 20px; left: 53%; right: auto;
      width: 440px; aspect-ratio: 3/4; max-height: 580px; z-index: 2;
      background: var(--soft); overflow: hidden; }
    .v5 .hero-photo img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 25%;
      filter: grayscale(1) contrast(1.05) brightness(1); }
    .v5 .hero-photo-tag { position: absolute; left: 50%; transform: translateX(-50%); bottom: 56px;
      font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.5);
      z-index: 4; }

    /* INTRO STRIP */
    .v5 .intro { background: var(--soft); padding: 64px 0; }
    .v5 .intro .container { display: grid; grid-template-columns: 160px 1fr 160px; gap: 48px; align-items: center; }
    .v5 .intro .num { font-size: 80px; font-weight: 300; letter-spacing: -.03em; line-height: 1; color: var(--mute-dark); }
    .v5 .intro h2 { font-weight: 400; font-size: 28px; line-height: 1.3; margin: 0; max-width: 720px; letter-spacing: -.01em; }
    .v5 .intro h2 strong { font-weight: 800; }
    .v5 .intro .micro { display: block; margin-bottom: 12px; }

    /* ABOUT / WHAT SHE DOES */
    .v5 section { padding: 140px 0; }
    .v5 .about-block { display: grid; grid-template-columns: 100px 1fr 1fr; gap: 64px; align-items: start; }
    .v5 .about-block .ix { font-size: 64px; font-weight: 300; line-height: 1; letter-spacing: -.025em; color: var(--mute); }
    .v5 .about-block .label-col { padding-top: 12px; }
    .v5 .about-block .label-col .label { font-weight: 700; font-size: 14px; letter-spacing: .02em; margin-bottom: 16px; }
    .v5 .about-block .label-col p { font-size: 14px; color: var(--mute-dark); margin: 0; line-height: 1.55; }
    .v5 .about-block .text-col h2 { font-weight: 400; font-size: 38px; line-height: 1.2; letter-spacing: -.015em; margin: 0 0 24px; }
    .v5 .about-block .text-col h2 strong { font-weight: 800; }
    .v5 .about-block .text-col p { font-size: 15.5px; line-height: 1.65; color: var(--mute-dark); margin: 0; max-width: 560px; }
    .v5 .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 88px;
      padding-top: 40px; border-top: 1px solid var(--rule); }
    .v5 .stat .num { font-size: 40px; font-weight: 400; letter-spacing: -.02em; line-height: 1; margin-bottom: 10px; }
    .v5 .stat .lbl { font-size: 13px; color: var(--mute-dark); }

    /* PULL QUOTE on dark */
    .v5 .pull { background: var(--ink); color: var(--paper); padding: 140px 0; }
    .v5 .pull .pull-single { max-width: 1000px; text-align: center; }
    .v5 .pull .qm { font-family: "Manrope", sans-serif; font-size: 80px; font-weight: 600; line-height: 0; color: var(--paper); margin-bottom: 56px; }
    .v5 .pull blockquote { font-weight: 400; font-size: 56px; letter-spacing: -.02em; line-height: 1.12; margin: 0 0 40px; }
    .v5 .pull blockquote strong { font-weight: 800; }
    .v5 .pull .attr { font-size: 13px; color: rgba(255,255,255,.55); letter-spacing: .04em; }

    /* WHAT-I-DO + QUESTIONS merged section */
    .v5 .what-questions { padding: 140px 0; background: var(--paper); }
    .v5 .what-block { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
    .v5 .what-block .left .label { font-weight: 800; font-size: clamp(56px, 6vw, 88px); line-height: .96;
      letter-spacing: -.035em; text-transform: uppercase; margin: 0 0 28px; }
    .v5 .what-block .left p { font-size: 16px; color: var(--mute-dark); margin: 0; line-height: 1.6; max-width: 460px; }
    .v5 .what-block .left p strong { color: var(--ink); font-weight: 700; }
    .v5 .what-block .right h2 { font-weight: 400; font-size: 38px; line-height: 1.2; letter-spacing: -.015em; margin: 0 0 24px; }
    .v5 .what-block .right h2 strong { font-weight: 800; }
    .v5 .what-block .right p { font-size: 15.5px; line-height: 1.65; color: var(--mute-dark); margin: 0; max-width: 560px; }
    .v5 .questions-merged { margin-top: 120px; padding-top: 80px; border-top: 1px solid var(--rule); }
    .v5 .questions-merged .q-head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 64px; gap: 40px; }
    .v5 .questions-merged .q-head h3 { font-weight: 300; font-size: 36px; letter-spacing: -.015em; margin: 0; line-height: 1.15; max-width: 580px; }
    .v5 .questions-merged .pager { display: flex; gap: 14px; align-items: center; }
    .v5 .questions-merged .pager .count { font-size: 14px; color: var(--mute-dark); letter-spacing: .04em; }
    .v5 .questions-merged .pager .progress { width: 100px; height: 1px; background: var(--rule); overflow: hidden; }
    .v5 .questions-merged .pager .progress span { display: block; height: 100%; background: var(--ink);
      transition: transform .6s cubic-bezier(.4,0,.2,1); transform-origin: left; }

    /* QUESTIONS — direct lift of the reference */
    .v5 .questions { background: var(--paper); padding: 160px 0 180px; }
    .v5 .questions .head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 80px; gap: 40px; }
    .v5 .questions h2 { font-weight: 300; font-size: 38px; letter-spacing: -.015em; margin: 0; line-height: 1.15; max-width: 580px; }
    .v5 .questions .pager { display: flex; gap: 14px; align-items: center; }
    .v5 .questions .pager .count { font-size: 14px; color: var(--mute-dark); letter-spacing: .04em; }
    .v5 .questions .pager .progress { width: 100px; height: 1px; background: var(--rule); overflow: hidden; }
    .v5 .questions .pager .progress span { display: block; height: 100%; background: var(--ink);
      transition: transform .6s cubic-bezier(.4,0,.2,1); transform-origin: left; }
    .v5 .q-stage { position: relative; min-height: 360px; padding-left: 56px; max-width: 1100px; }
    .v5 .q-bullet { position: absolute; left: 0; top: 32px; width: 14px; height: 14px; border-radius: 50%; background: var(--ink); }
    .v5 .q-text { font-weight: 800; font-size: clamp(56px, 7.5vw, 108px); line-height: .98; letter-spacing: -.035em;
      text-transform: uppercase; margin: 0 0 32px; transition: opacity .45s, transform .45s; }
    .v5 .q-sub { font-size: 17px; color: var(--mute-dark); max-width: 540px; line-height: 1.55; margin: 0;
      transition: opacity .45s .1s, transform .45s .1s; }
    .v5 .q-fade-out .q-text, .v5 .q-fade-out .q-sub { opacity: 0; transform: translateY(16px); }
    .v5 .q-fade-in .q-text, .v5 .q-fade-in .q-sub { opacity: 1; transform: translateY(0); }
    .v5 .q-cta { margin-top: 64px; padding-left: 56px; display: flex; align-items: center; gap: 20px; }
    .v5 .q-cta .btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 24px;
      background: var(--ink); color: var(--paper); font-size: 14px; letter-spacing: .02em; border: 0;
      cursor: pointer; transition: background .15s; }
    .v5 .q-cta .btn:hover { background: #2a2a26; }
    .v5 .q-cta .note { color: var(--mute-dark); font-size: 14px; }

    /* SERVICES — dark numbered list */
    .v5 .services { background: var(--ink); color: var(--paper); padding: 140px 0; }
    .v5 .services .head { display: grid; grid-template-columns: 100px 1fr; gap: 48px; margin-bottom: 64px; align-items: end; }
    .v5 .services .ix { font-size: 64px; font-weight: 300; line-height: 1; letter-spacing: -.025em; color: rgba(255,255,255,.4); }
    .v5 .services h2 { font-weight: 400; font-size: 56px; line-height: 1; letter-spacing: -.025em; margin: 0; max-width: 800px; }
    .v5 .services h2 strong { font-weight: 800; }
    .v5 .services .lead { font-size: 16px; color: rgba(255,255,255,.6); max-width: 480px; margin: 24px 0 0; line-height: 1.55; }
    .v5 .service { display: grid; grid-template-columns: 100px 1.2fr 1.8fr 120px; gap: 48px; padding: 40px 0;
      border-top: 1px solid var(--rule-dark); align-items: start; transition: padding-left .25s; cursor: pointer; }
    .v5 .service:hover { padding-left: 16px; background: rgba(255,255,255,.02); }
    .v5 .service:last-child { border-bottom: 1px solid var(--rule-dark); }
    .v5 .service .sno { font-size: 22px; font-weight: 800; letter-spacing: -.01em; }
    .v5 .service .stitle { font-size: 28px; font-weight: 600; line-height: 1.1; letter-spacing: -.015em; }
    .v5 .service .smeta { font-size: 12px; color: rgba(255,255,255,.5); margin-top: 10px; letter-spacing: .06em; text-transform: uppercase; }
    .v5 .service p { font-size: 15.5px; line-height: 1.6; color: rgba(255,255,255,.75); margin: 0 0 16px; }
    .v5 .service ul { list-style: none; padding: 0; margin: 0; columns: 2; column-gap: 24px; }
    .v5 .service ul li { padding: 6px 0; font-size: 13px; color: rgba(255,255,255,.65);
      display: flex; gap: 10px; align-items: center; }
    .v5 .service ul li::before { content: "—"; color: rgba(255,255,255,.4); }
    .v5 .service .arrow { justify-self: end; align-self: center; font-size: 20px;
      width: 52px; height: 52px; border: 1px solid rgba(255,255,255,.3); border-radius: 50%;
      display: flex; align-items: center; justify-content: center; transition: all .2s; }
    .v5 .service:hover .arrow { background: var(--paper); color: var(--ink); border-color: var(--paper); }

    /* TESTIMONIALS — light grid */
    .v5 .testimonials { background: var(--soft); padding: 140px 0; }
    .v5 .testimonials .head { margin-bottom: 64px; max-width: 880px; }
    .v5 .testimonials h2 { font-weight: 400; font-size: 48px; line-height: 1.1; letter-spacing: -.02em; margin: 16px 0 0; }
    .v5 .testimonials h2 strong { font-weight: 800; }
    .v5 .testi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
    .v5 .testi { padding: 40px; border: 1px solid var(--rule); margin: -1px 0 0 -1px; background: var(--paper);
      display: flex; flex-direction: column; gap: 24px; }
    .v5 .testi .qmark { font-size: 36px; font-weight: 800; line-height: 0; color: var(--ink); margin-top: 16px; }
    .v5 .testi blockquote { font-size: 22px; line-height: 1.35; margin: 0; letter-spacing: -.012em; font-weight: 400; }
    .v5 .testi .author { display: flex; align-items: center; gap: 14px; padding-top: 24px; border-top: 1px solid var(--rule); margin-top: auto; }
    .v5 .testi .avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--ink); color: var(--paper);
      display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; letter-spacing: .02em; }
    .v5 .testi .author .name strong { display: block; font-size: 14px; font-weight: 600; }
    .v5 .testi .author .name span { font-size: 13px; color: var(--mute-dark); }

    /* ABOUT ME — Who am I? */
    .v5 .aboutme { background: var(--paper); padding: 140px 0; }
    .v5 .aboutme-grid { display: grid; grid-template-columns: 1.05fr 1fr; gap: 80px; align-items: center; }
    .v5 .aboutme-photo { aspect-ratio: 4/5; overflow: hidden; background: var(--soft); }
    .v5 .aboutme-photo img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 30%;
      filter: grayscale(1) contrast(1.02); }
    .v5 .aboutme h2 { font-weight: 800; font-size: clamp(80px, 9vw, 132px); line-height: .92; letter-spacing: -.04em;
      margin: 24px 0 32px; text-transform: uppercase; }
    .v5 .aboutme p { font-size: 17px; line-height: 1.65; margin: 0 0 18px; max-width: 520px; }
    .v5 .aboutme p strong { font-weight: 700; }
    .v5 .aboutme .mute { color: var(--mute-dark); }
    .v5 .aboutme .lesson { margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--rule);
      display: flex; gap: 14px; align-items: baseline; }
    .v5 .aboutme .lesson .micro { color: var(--mute); flex-shrink: 0; }
    .v5 .aboutme .lesson p { font-size: 18px; max-width: none; font-weight: 500; }
    .v5 .creds-row { display: flex; gap: 28px; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--rule); }
    .v5 .creds-row div .lbl { font-size: 11px; color: var(--mute); letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px; font-weight: 500; }
    .v5 .creds-row div .val { font-size: 15px; font-weight: 700; }

    /* CONTACT — dark with massive wordmark */
    .v5 .contact { background: var(--ink); color: var(--paper); padding: 140px 0 0; }
    .v5 .contact .head h2 { font-weight: 400; font-size: 56px; line-height: 1.05; letter-spacing: -.02em; margin: 16px 0 64px; max-width: 720px; }
    .v5 .contact .head h2 strong { font-weight: 800; }
    .v5 .contact-grid { display: grid; grid-template-columns: 1.1fr 1.4fr; gap: 80px; align-items: start; padding-bottom: 100px; }
    .v5 .contact-left p { font-size: 16px; line-height: 1.6; color: rgba(255,255,255,.75); max-width: 380px; margin: 0 0 32px; }
    .v5 .contact-creds { display: grid; grid-template-columns: 1fr 1fr; gap: 24px 32px; padding-top: 28px; border-top: 1px solid var(--rule-dark); max-width: 400px; }
    .v5 .contact-creds div .lbl { font-size: 11px; color: rgba(255,255,255,.5); letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px; font-weight: 500; }
    .v5 .contact-creds div .val { font-size: 14px; font-weight: 700; }
    .v5 .form { display: flex; flex-direction: column; gap: 22px; }
    .v5 .form .row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .v5 .field { display: flex; flex-direction: column; gap: 8px; }
    .v5 .field label { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: rgba(255,255,255,.5); font-weight: 500; }
    .v5 .field input, .v5 .field select, .v5 .field textarea { background: transparent; border: 0;
      border-bottom: 1px solid rgba(255,255,255,.25); padding: 8px 0 12px; color: var(--paper);
      font-family: inherit; font-size: 17px; outline: none; transition: border-color .2s; }
    .v5 .field input:focus, .v5 .field select:focus, .v5 .field textarea:focus { border-color: var(--paper); }
    .v5 .field textarea { resize: vertical; min-height: 60px; }
    .v5 .field select option { background: var(--ink); color: var(--paper); }
    .v5 .submit { background: var(--paper); color: var(--ink); border: 0; padding: 18px 28px;
      font-weight: 700; font-size: 13px; letter-spacing: .1em; text-transform: uppercase;
      cursor: pointer; transition: all .15s; align-self: flex-start; margin-top: 12px; }
    .v5 .submit:hover { background: var(--soft); }

    .v5 .foot-mark { padding: 64px 48px 24px; }
    .v5 .foot-mark .big { font-weight: 800; font-size: clamp(80px, 14vw, 220px); letter-spacing: -.045em; line-height: .9; }
    .v5 .foot-meta { padding: 0 48px 32px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: rgba(255,255,255,.5); border-top: 1px solid var(--rule-dark); margin: 24px 48px 0; padding-top: 24px; }

    @media (max-width: 1000px) {
      .v5 .container { padding: 0 24px; }
      .v5 .nav-inner { padding: 16px 24px; }
      .v5 .nav-links { display: none; }
      .v5 .hero-photo { width: 260px; left: 50%; }
      .v5 .hero-wordmark { font-size: 60px; }
      .v5 section { padding: 80px 0; }
      .v5 .what-block, .v5 .services .head, .v5 .aboutme-grid, .v5 .contact-grid { grid-template-columns: 1fr; gap: 32px; }
      .v5 .stats-row { grid-template-columns: repeat(2, 1fr); }
      .v5 .questions-merged .q-head { flex-direction: column; align-items: flex-start; gap: 16px; }
      .v5 .q-stage { padding-left: 28px; }
      .v5 .q-cta { padding-left: 28px; flex-direction: column; align-items: flex-start; }
      .v5 .service { grid-template-columns: 60px 1fr; gap: 16px; padding: 28px 0; }
      .v5 .service > p, .v5 .service ul { grid-column: 1 / -1; }
      .v5 .service .arrow { display: none; }
      .v5 .service ul { columns: 1; }
      .v5 .testi-grid { grid-template-columns: 1fr; }
      .v5 .form .row { grid-template-columns: 1fr; }
      .v5 .pull blockquote { font-size: 36px; }
    }
  `;
  document.head.appendChild(s);
})();

function V5Behance({ photoHero, photoAbout }) {
  const [qIdx, setQIdx] = React.useState(0);
  const [transitioning, setTransitioning] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const questions = [
    { q: 'Do you feel you have to wear a mask to lead?', sub: 'High-functioning. Trusted. Quietly exhausted by the version of you that\'s showing up to work.' },
    { q: 'Are you leading from your true self?', sub: 'Or from a role you stepped into a long time ago and never quite stopped performing?' },
    { q: 'What would change if you stopped performing?', sub: 'For your team. Your decisions. The relationships you keep meaning to repair — and you.' },
  ];
  const advance = (dir = 1) => {
    setTransitioning(true);
    setTimeout(() => {
      setQIdx(i => (i + dir + questions.length) % questions.length);
      setTransitioning(false);
    }, 380);
  };
  React.useEffect(() => {
    const t = setInterval(() => advance(1), 4800);
    return () => clearInterval(t);
  }, []);
  const services = [
    { no: '01', title: '1:1 Coaching', meta: '6–12 months · Weekly · By application',
      desc: 'A confidential thinking partnership for senior leaders. We meet weekly for six to twelve months — long enough for the inner work to translate into the way you actually lead.',
      items: ['Weekly 90-min sessions', 'Async support between', 'Stakeholder interviews', 'Tailored frameworks'] },
    { no: '02', title: 'Team Coaching', meta: 'Executive teams · 6–18 months',
      desc: 'For teams whose individual talent hasn\'t yet become collective intelligence. We work in rhythm with your operating cadence, not on top of it.',
      items: ['Team assessment', 'Quarterly offsites', 'Inter-meeting coaching', 'Conflict facilitation'] },
    { no: '03', title: 'Leadership Workshops', meta: 'Half-day to two-day intensives',
      desc: 'Research-grounded sessions for emerging and senior leaders, custom-built around the questions your organization is actually wrestling with.',
      items: ['Custom curriculum', '8–24 leader cohorts', 'Pre-work + follow-through', 'Virtual or in-person'] },
  ];
  const testimonials = [
    { q: 'Jasmine helped me see the leader I had been avoiding becoming. Six months later, my board calls me a different CEO.',
      name: 'Anika Reyes', role: 'CEO, Halverson Industries', initials: 'AR' },
    { q: 'The rare coach who holds the strategic and the personal in the same breath — and knows which one the moment is asking for.',
      name: 'Marcus Yeoh', role: 'COO, Northbright Health', initials: 'MY' },
    { q: 'Our exec team finally has a shared language for the hard conversations. Jasmine made that possible without scripting them for us.',
      name: 'Priya Anand', role: 'CPO, Lattice Bio', initials: 'PA' },
    { q: 'I came in wanting better answers. I left having learned to live with better questions — and that has changed how I lead.',
      name: 'Daniel Brookes', role: 'EVP Strategy, Pellingham Group', initials: 'DB' },
  ];

  return (
    <div className="v5">
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">JASMINE TRUONG</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#questions">Is this for you?</a>
            <a href="#services">Coaching</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#aboutme">Who am I</a>
          </div>
          <a href="#contact" className="nav-cta"><span className="pill">Book a free call →</span></a>
        </div>
      </nav>

      <header className="hero grain">
        <div className="hero-bg"></div>
        <div className="hero-stage">
          <div className="hero-wordmark">Jasmine Truong</div>
          <div className="hero-coaching">Coaching</div>
          <div className="hero-photo"><img src={photoHero} alt="Jasmine Truong" /></div>
        </div>
      </header>

      <section className="pull">
        <div className="container pull-single">
          <div className="qm">“</div>
          <blockquote>Leadership <strong>begins with presence</strong>, and becomes <strong>real in practice</strong>.</blockquote>
          <div className="attr">— A working principle</div>
        </div>
      </section>

      <section id="about" className="what-questions">
        <div className="container">
          <div className="what-block">
            <div className="left">
              <h2 className="label">What I Do</h2>
              <p>I don't teach you how to win. You've mastered that already. <strong>What you need is a trusted partner to help you move beyond the version of success you've already outgrown.</strong></p>
            </div>
            <div className="right">
              <h2>The work is <strong>introspective by necessity</strong>, and <strong>results-oriented by design</strong>. The two aren't in tension — they're the same arc, walked patiently.</h2>
              <p>Before strategy, we get honest about what you actually want — and what you've been telling yourself you should want. From there, clarity inside changes what's possible outside: cleaner decisions, real conversations, a steadier presence at the top of your team.</p>
            </div>
          </div>

          <div className="questions-merged" id="questions">
            <div className="q-head">
              <h3>Is this right for you?</h3>
              <div className="pager">
                <span className="count">{String(qIdx + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}</span>
                <div className="progress"><span style={{ transform: `scaleX(${(qIdx + 1) / questions.length})` }}></span></div>
              </div>
            </div>
            <div className={`q-stage ${transitioning ? 'q-fade-out' : 'q-fade-in'}`}>
              <span className="q-bullet"></span>
              <h3 className="q-text">{questions[qIdx].q}</h3>
              <p className="q-sub">{questions[qIdx].sub}</p>
            </div>
            <div className="q-cta">
              <a href="#contact" className="btn">If yes — let's talk →</a>
              <span className="note">Or scroll on and read the rest.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="head">
            <div className="ix">03</div>
            <div>
              <h2>Three paths in. <strong>One foundation.</strong></h2>
              <p className="lead">Different shapes for different seasons — built around the same starting point: your relationship with the leader you actually are.</p>
            </div>
          </div>
          <div>
            {services.map(s => (
              <div className="service" key={s.no}>
                <div className="sno">/{s.no}</div>
                <div>
                  <div className="stitle">{s.title}</div>
                  <div className="smeta">{s.meta}</div>
                </div>
                <div>
                  <p>{s.desc}</p>
                  <ul>{s.items.map(i => <li key={i}>{i}</li>)}</ul>
                </div>
                <div className="arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="head">
            <h2>What clients say <strong>after</strong> the work has settled in.</h2>
          </div>
          <div className="testi-grid">
            {testimonials.map(t => (
              <div className="testi" key={t.name}>
                <div className="qmark">“</div>
                <blockquote>{t.q}</blockquote>
                <div className="author">
                  <div className="avatar">{t.initials}</div>
                  <div className="name"><strong>{t.name}</strong><span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aboutme" id="aboutme">
        <div className="container">
          <div className="aboutme-grid">
            <div className="aboutme-photo"><img src={photoAbout} alt="Jasmine Truong" /></div>
            <div>
              <h2>Who am I.</h2>
              <p>I'm a PhD-credentialed executive coach who has spent the last twelve years inside organizations — watching brilliant leaders quietly come apart at the top of their careers.</p>
              <p className="mute">Not because they lacked talent. Because no one had ever asked them what <strong style={{color:'var(--ink)'}}>they</strong> actually wanted, separately from what the role demanded.</p>
              <p>I built my practice around that gap. The work is grounded in organizational psychology, attachment theory, and a stubborn faith that the leader you're trying to become is already in the room.</p>
              <div className="lesson">
                <span className="micro">Lesson carried forward</span>
                <p>You don't need someone to teach you how to win. You need a partner who can help you move beyond the version of success you've already outgrown.</p>
              </div>
              <div className="creds-row">
                <div><div className="lbl">Education</div><div className="val">PhD, Org. Psychology</div></div>
                <div><div className="lbl">Credentials</div><div className="val">CPCC · ACC</div></div>
                <div><div className="lbl">Based</div><div className="val">Zürich · Worldwide</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="head">
            <h2>No pressure. <strong>Just clarity.</strong></h2>
          </div>
          <div className="contact-grid">
            <div className="contact-left">
              <p>Every engagement opens with an unhurried call. No agenda, no obligation — just space to find out whether the work we'd do together is the work you actually want done.</p>
            </div>
            <form className="form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              {submitted ? (
                <div style={{display:'flex', flexDirection:'column', gap:14, padding: '40px 0'}}>
                  <span className="micro" style={{color:'rgba(255,255,255,.5)'}}>Received</span>
                  <div style={{fontWeight:800, fontSize:32, letterSpacing:'-.025em', lineHeight:1, textTransform:'uppercase'}}>Thank you. I'll reply within two business days.</div>
                </div>
              ) : (
                <>
                  <div className="row">
                    <div className="field"><label>Name</label><input type="text" required /></div>
                    <div className="field"><label>Email</label><input type="email" required /></div>
                  </div>
                  <div className="row">
                    <div className="field"><label>Role</label><input type="text" placeholder="e.g. CEO" /></div>
                    <div className="field"><label>Organization</label><input type="text" /></div>
                  </div>
                  <div className="field"><label>Interest</label>
                    <select defaultValue="">
                      <option value="" disabled>Choose a path</option>
                      <option>1:1 Coaching</option>
                      <option>Team Coaching</option>
                      <option>Leadership Workshops</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="field"><label>What brings you here?</label><textarea rows="2"></textarea></div>
                  <button type="submit" className="submit">Start the conversation →</button>
                </>
              )}
            </form>
          </div>
        </div>
        <div className="foot-mark"><div className="big">Jasmine Truong</div></div>
        <div className="foot-meta">
          <span>© Jasmine Truong Coaching · 2026 · All rights reserved</span>
          <span>Zürich · Worldwide · By application</span>
        </div>
      </section>
    </div>
  );
}

window.V5Behance = V5Behance;
