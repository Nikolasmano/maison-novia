"use client";

import "./globals.css";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  function handleWaitlist(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Inscription liste d'attente Maison Novia");
    const body = encodeURIComponent(
      `Bonjour Maison Novia,\n\nJe souhaite rejoindre la liste d'attente.\n\nMon adresse e-mail : ${email}\n`
    );
    window.location.href = `mailto:contact@maisonnovia.fr?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <div className="launchbar">
        <span>✦</span> LANCEMENT PROCHAIN — Soyez parmi les premiers informés.
      </div>

      <header className="header">
        <div className="container nav">
          <a className="brand-wrap" href="#accueil" aria-label="Maison Novia - Accueil">
            <span className="brand-monogram">M</span>
            <span>
              <strong>MAISON NOVIA</strong>
              <small>RANGEMENT PREMIUM, QUOTIDIEN FACILITÉ</small>
            </span>
          </a>
          <nav className="navlinks" aria-label="Navigation principale">
            <a href="#accueil">Accueil</a>
            <a href="#produit">Notre produit</a>
            <a href="#maison">Notre histoire</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <a className="btn btn-outline-gold" href="#attente">Rejoindre la liste d’attente</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Maison Novia</div>
              <h1>L’élégance commence par un intérieur <em>bien organisé.</em></h1>
              <p className="lead">
                Maison Novia imagine des solutions de rangement pensées pour simplifier
                votre quotidien sans compromettre l’esthétique de votre intérieur.
              </p>
              <div className="gold-rule" />
              <div className="actions">
                <a className="btn btn-dark" href="#produit">Découvrir notre produit</a>
                <a className="btn btn-light" href="#attente">Rejoindre la liste d’attente</a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Univers Maison Novia">
              <div className="hero-shelf">
                <div className="linen-stack top">
                  <span></span><span></span><span></span>
                </div>
                <div className="shelf-product">
                  <div className="mini-monogram">M</div>
                </div>
                <div className="linen-stack bottom">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="hero-bed">
                <div className="lamp"></div>
                <div className="pillows">
                  <span></span><span></span>
                </div>
                <div className="duvet"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section product-section" id="produit">
          <div className="container">
            <div className="centered-heading">
              <div className="eyebrow">Notre première création</div>
              <h2>La solution premium pour <em>ranger votre linge de lit.</em></h2>
              <p>
                Une boîte de rangement structurée, pensée pour accueillir une parure complète
                jusqu’au format king size et la garder parfaitement organisée.
              </p>
            </div>

            <div className="product-layout">
              <div className="benefits">
                <Feature icon="◇" title="Qualité premium">
                  Des matériaux sélectionnés pour une finition élégante et une bonne tenue.
                </Feature>
                <Feature icon="□" title="Structure rigide">
                  Des côtés renforcés qui maintiennent la forme de la boîte et protègent les textiles.
                </Feature>
                <Feature icon="∞" title="Maintien intérieur">
                  Une sangle élastique inspirée des valises maintient la parure en place.
                </Feature>
                <Feature icon="↗" title="Grande capacité">
                  Conçue pour contenir une parure complète, jusqu’au format king size.
                </Feature>
                <Feature icon="▥" title="Horizontale ou verticale">
                  Se range à plat ou debout selon l’espace disponible.
                </Feature>
              </div>

              <div className="product-main">
                <img
                  src="/produit-maison-novia.png"
                  alt="Prototype de la boîte de rangement Maison Novia"
                  className="product-image"
                />
                <p className="prototype-note">
                  Visuel de présentation du produit Maison Novia.
                </p>
              </div>

              <aside className="spec-card">
                <div>
                  <span className="spec-label">Dimensions</span>
                  <strong>42 × 34 × 16 cm</strong>
                </div>
                <div className="spec-divider" />
                <div>
                  <span className="spec-label">Capacité</span>
                  <ul>
                    <li>1 drap-housse</li>
                    <li>1 housse de couette</li>
                    <li>Jusqu’à 4 taies d’oreiller</li>
                  </ul>
                  <p>Convient jusqu’au format king size.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section steps-section" id="maison">
          <div className="container">
            <div className="centered-heading compact">
              <div className="eyebrow">Maison Novia</div>
              <h2>Comment ça fonctionne ?</h2>
            </div>
            <div className="steps">
              <Step number="01" title="Rangez">
                Placez votre parure de lit complète dans la boîte et maintenez-la grâce à la sangle intégrée.
              </Step>
              <Step number="02" title="Identifiez">
                Repérez plus facilement vos ensembles grâce à une organisation claire et structurée.
              </Step>
              <Step number="03" title="Profitez">
                Un placard mieux organisé, des textiles protégés et un quotidien plus simple.
              </Step>
            </div>
          </div>
        </section>

        <section className="waitlist-section" id="attente">
          <div className="container waitlist-grid">
            <div>
              <div className="eyebrow light">Lancement prochain</div>
              <h2>Soyez parmi les premiers à découvrir <em>Maison Novia.</em></h2>
              <p>
                Notre première collection arrive prochainement. Rejoignez la liste d’attente
                pour être informé en priorité de l’ouverture des commandes.
              </p>
              <form className="waitlist-form" onSubmit={handleWaitlist}>
                <label className="sr-only" htmlFor="waitlist-email">Votre adresse e-mail</label>
                <input
                  id="waitlist-email"
                  className="waitlist-input"
                  type="email"
                  placeholder="Votre adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn-gold" type="submit">
                  Rejoindre la liste d’attente
                </button>
              </form>
              <p className="privacy-note">
                En cliquant, votre logiciel de messagerie s’ouvrira pour envoyer votre demande à Maison Novia.
              </p>
            </div>

            <div className="price-panel">
              <div className="round-monogram">M</div>
              <span>Tarif inférieur à 50 €</span>
              <strong>Lancement prochain</strong>
            </div>
          </div>
        </section>

        <section className="section promise-section">
          <div className="container promise-grid">
            <Promise title="Pensé pour durer">Une conception structurée pour protéger et organiser vos textiles.</Promise>
            <Promise title="Design élégant">Un univers sobre et raffiné qui s’intègre dans la maison.</Promise>
            <Promise title="Pratique au quotidien">Une solution pensée pour gagner du temps chaque jour.</Promise>
            <Promise title="Marque attentive">Une première collection développée autour d’un besoin concret.</Promise>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container narrow">
            <div className="centered-heading">
              <div className="eyebrow">Questions fréquentes</div>
              <h2>Avant le lancement</h2>
            </div>

            <details className="faq-item">
              <summary>Quand le produit sera-t-il disponible ?</summary>
              <p>
                La date n’est pas encore arrêtée. Les personnes inscrites seront informées
                en priorité lorsque le calendrier de lancement sera confirmé.
              </p>
            </details>
            <details className="faq-item">
              <summary>Quel sera le prix ?</summary>
              <p>
                Le prix exact sera annoncé avant l’ouverture des commandes. Notre objectif
                est de proposer le produit à un tarif inférieur à 50 €.
              </p>
            </details>
            <details className="faq-item">
              <summary>Quelle taille de parure peut être rangée ?</summary>
              <p>
                Le produit est conçu pour une parure complète jusqu’aux grands formats de lit,
                avec drap-housse, housse de couette et jusqu’à quatre taies.
              </p>
            </details>
            <details className="faq-item">
              <summary>Peut-on ranger la boîte verticalement ?</summary>
              <p>
                Oui. La conception est pensée pour permettre un rangement horizontal ou vertical.
              </p>
            </details>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow">Contact</div>
              <h2>Une question sur Maison Novia ?</h2>
            </div>
            <div className="contact-lines">
              <a href="mailto:contact@maisonnovia.fr">contact@maisonnovia.fr</a>
              <a href="tel:+33698257596">06 98 25 75 96</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="round-monogram small-round">M</div>
            <strong>MAISON NOVIA</strong>
            <span>Rangement premium, quotidien facilité</span>
          </div>
          <div>
            <strong>Navigation</strong>
            <a href="#accueil">Accueil</a>
            <a href="#produit">Notre produit</a>
            <a href="#maison">Notre histoire</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <strong>Informations</strong>
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/politique-confidentialite">Politique de confidentialité</a>
          </div>
          <div>
            <strong>Contact</strong>
            <a href="mailto:contact@maisonnovia.fr">contact@maisonnovia.fr</a>
            <a href="tel:+33698257596">06 98 25 75 96</a>
          </div>
        </div>
        <div className="container copyright">
          © 2026 KAILIB SASU — Tous droits réservés.
        </div>
      </footer>
    </>
  );
}

function Feature({ icon, title, children }) {
  return (
    <div className="feature">
      <div className="feature-icon">{icon}</div>
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </div>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </div>
  );
}

function Promise({ title, children }) {
  return (
    <div className="promise">
      <div className="promise-icon">✦</div>
      <strong>{title}</strong>
      <p>{children}</p>
    </div>
  );
}
