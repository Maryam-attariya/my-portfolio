import { useState } from 'react'
import { Award, ExternalLink, ImageOff } from 'lucide-react'
import { Section, Em, Btn } from '../components/ui'
import { CERTIFICATES } from '../data/data'

function CertificateImage({ certificate }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-accent/20 via-surf to-accent2/20">
      {certificate.image && !imageError ? (
        <img
          src={certificate.image}
          alt={`${certificate.n} certificate`}
          loading="lazy"
          onError={() => setImageError(true)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-accent">
          {imageError ? <ImageOff size={32} strokeWidth={1.4} /> : <Award size={36} strokeWidth={1.4} />}
          <span className="px-5 text-center text-sm font-medium text-mute">
            {imageError ? 'Certificate preview unavailable' : certificate.n}
          </span>
        </div>
      )}
    </div>
  )
}

export default function Certificates() {
  return (
    <Section
      id="certificates"
      title={<>My <Em>certificates</Em></>}
      sub="Courses and experiences that have shaped my learning journey."
    >
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {CERTIFICATES.map((certificate) => (
          <article
            key={certificate.n}
            data-card-reveal
            className="group overflow-hidden rounded-3xl border border-line bg-surf transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
          >
            <CertificateImage certificate={certificate} />

            <div className="p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Award size={20} />
                </span>
                <div>
                  <h3 className="font-semibold leading-snug">{certificate.n}</h3>
                  <p className="mt-1 text-sm text-mute">{certificate.issuer}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm text-mute">{certificate.date}</span>
                {certificate.link && (
                  <Btn compact href={certificate.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    View certificate
                  </Btn>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
