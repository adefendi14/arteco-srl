import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { company, copy, quoteProductOptions, quoteRoles } from '../data'

const emptyForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  role: '',
  product: '',
  message: '',
  privacy: false,
}

const maxFileBytes = 2 * 1024 * 1024

export default function QuoteForm() {
  const content = copy.contact
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(emptyForm)
  const [file, setFile] = useState(null)
  const [fileKey, setFileKey] = useState(0)
  const [sent, setSent] = useState(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  useEffect(() => {
    const requested = searchParams.get('prodotto')
    if (requested && quoteProductOptions.includes(requested)) {
      setForm((current) => ({ ...current, product: requested }))
    }
  }, [searchParams])

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!form.privacy) {
      setError(content.privacyRequired)
      return
    }

    if (!accessKey) {
      setError(content.missingKey)
      return
    }

    if (file && file.size > maxFileBytes) {
      setError(content.fileTooBig)
      return
    }

    setStatus('sending')

    try {
      const payload = new FormData()
      payload.append('access_key', accessKey)
      payload.append('subject', `[Richiesta Arteco] ${form.product}, ${form.company}`)
      payload.append('from_name', form.name)
      payload.append('name', form.name)
      payload.append('email', form.email)
      payload.append('phone', form.phone || 'Non indicato')
      payload.append('company', form.company)
      payload.append('role', form.role)
      payload.append('product', form.product)
      payload.append(
        'message',
        [
          `Azienda: ${form.company}`,
          `Ruolo: ${form.role}`,
          `Telefono: ${form.phone || 'Non indicato'}`,
          `Prodotto/servizio: ${form.product}`,
          `Allegato: ${file ? file.name : 'Nessuno'}`,
          'Consenso privacy: sì',
          '',
          form.message,
        ].join('\n'),
      )
      payload.append('privacy_accepted', 'Sì')
      payload.append('botcheck', '')
      if (file) payload.append('attachment', file)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || content.errorBody)
      }

      setSent({ ...form })
      setForm(emptyForm)
      setFile(null)
      setFileKey((value) => value + 1)
      setStatus('idle')
    } catch {
      setStatus('idle')
      setError(content.errorBody)
    }
  }

  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-ink/12 bg-cream px-3.5 py-2.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-ink/35 focus:border-terracotta focus:ring-2 focus:ring-terracotta/15'

  if (sent) {
    return (
      <div
          className="rounded-2xl border border-accent/30 bg-cream px-6 py-8"
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
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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
          disabled={status === 'sending'}
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
          disabled={status === 'sending'}
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
          disabled={status === 'sending'}
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
          disabled={status === 'sending'}
        />
      </label>
      <label>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
          {content.role}
        </span>
        <select
          name="role"
          required
          value={form.role}
          onChange={onChange}
          className={fieldClass}
          disabled={status === 'sending'}
        >
          <option value="">{content.rolePlaceholder}</option>
          {quoteRoles.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
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
          disabled={status === 'sending'}
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
          disabled={status === 'sending'}
        />
      </label>
      <label className="sm:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">
          {content.file}
        </span>
        <input
          key={fileKey}
          name="attachment"
          type="file"
          accept=".pdf,.xls,.xlsx,.csv,.doc,.docx,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          disabled={status === 'sending'}
          className={`${fieldClass} file:mr-3 file:rounded-full file:border-0 file:bg-sand file:px-3 file:py-1 file:text-xs file:font-semibold file:text-ink`}
        />
        <span className="mt-1.5 block text-xs text-ink/45">{content.fileHint}</span>
      </label>
      <div className="sm:col-span-2 flex items-start gap-3">
        <input
          id="privacy-consent"
          name="privacy"
          type="checkbox"
          required
          checked={form.privacy}
          onChange={(event) => setForm((current) => ({ ...current, privacy: event.target.checked }))}
          disabled={status === 'sending'}
          aria-label={`${content.privacyConsentBefore}${content.privacyConsentLink}${content.privacyConsentAfter}`}
          className="mt-1 h-4 w-4 shrink-0 rounded border-ink/25 text-terracotta accent-terracotta"
        />
        <p className="text-xs leading-relaxed text-ink/60">
          <label htmlFor="privacy-consent">{content.privacyConsentBefore}</label>
          <Link
            to="/privacy"
            className="font-medium text-terracotta underline decoration-terracotta/30 underline-offset-2 transition-colors duration-300 hover:text-ink"
          >
            {content.privacyConsentLink}
          </Link>
          <label htmlFor="privacy-consent">{content.privacyConsentAfter}</label>
        </p>
      </div>

      <div className="sm:col-span-2">
        {error && (
          <p className="mb-4 rounded-xl border border-terracotta/25 bg-terracotta/5 px-4 py-3 text-sm text-ink/75" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex w-full items-center justify-center rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
        >
          {status === 'sending' ? content.sending : content.submit}
        </button>
        <p className="mt-4 text-xs text-ink/50">
          {company.referent}: {company.email}
        </p>
      </div>
    </form>
  )
}
