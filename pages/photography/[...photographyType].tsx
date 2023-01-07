import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PhotographyType() {
  const { asPath, route } = useRouter()
  const [path, setPath] = useState<string | null>(null)

  // `asPath` is always `/about` in Node.js (server render), because the page is statically generated
  // so we wait for the browser to load, and use the updated `asPath`, which may be a path
  // other than `/about` when using a rewrite. This way we can avoid a content mismatch
  useEffect(() => setPath(asPath), [asPath])

  return (
    <div>
      <div>
        <h1>Photography Type. Path: {path}</h1>
        <hr />
        <Link href="/">&larr; Back home</Link>
      </div>
    </div>
  )
}
