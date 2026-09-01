import { useState } from 'react'
import { company, copy, quoteProductOptions } from '../data'

const emptyForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  message: '',
}

export default function QuoteForm() {
  const content = copy.contact
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(null)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setSent({ ...form })
    setForm(emptyForm)
  }

  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-ink/12 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-ink/35 focus:border-terracotta focus:ring-2 focus:ring-terracotta/15'

  if (sent) {
    return (
      <div
        className="rounded-2xl border border-gold/30 bg-cream px-6 py-8"
        role="status"
      >
        <p className="text-2xl font-semibold text-ink">{content.sentTitle}</p>
        <p className="mt-3 leading-relaxed text-ink/70">{content.sentBody(sent.name)}</p>
        <button
          type="button"
          onClick={() => setSent(null)}
          className="mt-6 text-sm font-semibold text-terracotta transition-colors duration-300 hover:text-ink"
        >
          {content.sendAnother}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
          {content.name}
        </span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={content.namePlaceholder}
          value={form.name}
          onChange={onChange}
          className={fieldClass}
        />
      </label>
      <label className="sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
          {content.company}
        </span>
        <input
          name="company"
          type="text"
          required
          autoComplete="organization"
          placeholder={content.companyPlaceholder}
          value={form.company}
          onChange={onChange}
          className={fieldClass}
        />
      </label>
      <label>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
          {content.email}
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={content.emailPlaceholder}
          value={form.email}
          onChange={onChange}
          className={fieldClass}
        />
      </label>
      <label>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
          {content.phone}
        </span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder={content.phonePlaceholder}
          value={form.phone}
          onChange={onChange}
          className={fieldClass}
        />
      </label>
      <label className="sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
          {content.product}
        </span>
        <select
          name="product"
          required
          value={form.product}
          onChange={onChange}
          className={fieldClass}
        >
          <option value="">{content.productPlaceholder}</option>
          {quoteProductOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
          {content.message}
        </span>
        <textarea
          name="message"
          rows="4"
          required
          placeholder={content.messagePlaceholder}
          value={form.message}
          onChange={onChange}
          className={`${fieldClass} resize-y`}
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8d3e23] sm:w-auto"
        >
          {content.submit}
        </button>
        <p className="mt-4 text-xs text-ink/50">
          Referente commerciale: {company.referent} · {company.email}
        </p>
      </div>
    </form>
  )
}
