import { DATA } from '../data'
import { Mail, Phone, GitFork, Briefcase } from 'lucide-react'

function ContactLink({ icon, label, href }) {
  return (
    <a
      href={href}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel="noopener"
      className="text-paper inline-flex items-center gap-2 pb-0.5 text-[15px] hover:text-gold-soft transition-colors"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.3)' }}
    >
      <span className="opacity-70 flex items-center" style={{ width: 16, height: 16 }}>{icon}</span>
      &nbsp;{label}
    </a>
  )
}

export default function Contact() {
  const c = DATA.contact

  return (
    <section id="contact" className="contact-rings reveal mt-20 py-12 px-9 rounded-md bg-peacock-deep text-[#EFE3C9] relative">
      <div className="text-[11px] tracking-[0.28em] uppercase font-semibold text-gold-soft">
        07 — Contact
      </div>

      <h2 className="font-serif font-medium text-[clamp(34px,4.4vw,56px)] leading-[1.1] text-paper max-w-[18ch] mt-3.5 mb-4">
        Let's build something <em className="text-gold-soft italic">worth keeping.</em>
      </h2>

      <p className="text-[#E6D7B5] max-w-[56ch] text-[17px]">
        Open to roles in AI engineering, applied ML and full-stack AI products.
        Reach out — I'd love to hear what you're working on.
      </p>

      <div className="flex flex-wrap gap-[22px] mt-[22px]">
        <ContactLink icon={<Mail size={16} />}      label={c.email}    href={`mailto:${c.email}`} />
        <ContactLink icon={<Phone size={16} />}     label={c.phone}    href={`tel:${c.phoneHref}`} />
        <ContactLink icon={<GitFork size={16} />}   label={c.github}   href={c.githubHref} />
        <ContactLink icon={<Briefcase size={16} />} label={c.linkedin} href={c.linkedinHref} />
      </div>
    </section>
  )
}
