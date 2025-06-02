import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <Link
        href={
          ('mailto:' +
            process.env.POSTMARK_SERVER_INBOUND_EMAIL_ADDRESS) as string
        }
        target='_blank'
        rel='noopener noreferrer'
      >
        Send an email to create a todo
      </Link>
    </div>
  )
}
